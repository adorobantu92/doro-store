/**
 * Cloudflare Worker for Order Processing with KV Persistence
 * 
 * Required Cloudflare Bindings (configure in Dashboard):
 * - ORDERS: KV Namespace for order persistence
 * 
 * Environment Variables (configure in Dashboard > Settings > Variables):
 * - RESEND_API_KEY: Resend API key
 * - ADMIN_EMAIL: Admin email to receive order notifications
 * - FROM_EMAIL: Sender email address (verified in Resend)
 */

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Generate a unique order ID in format DS-YYYY-XXXX
 * Uses KV to maintain a counter for the current year
 */
async function generateOrderId(kv: KVNamespace): Promise<string> {
  const year = new Date().getFullYear();
  const counterKey = `order_counter_${year}`;
  
  // Get current counter or start at 0
  const currentCounter = await kv.get(counterKey);
  const counter = currentCounter ? parseInt(currentCounter, 10) + 1 : 1;
  
  // Save incremented counter
  await kv.put(counterKey, counter.toString());
  
  // Format: DS-2026-0001
  const paddedCounter = counter.toString().padStart(4, '0');
  return `DS-${year}-${paddedCounter}`;
}

/**
 * Format order items for email display
 */
function formatOrderItemsHtml(items) {
  return items
    .map(
      (item) => `
        <tr>
          <td style="padding: 10px; border-bottom: 1px solid #eee;">${item.name}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: center;">${item.quantity}</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${item.price?.toFixed(2)} RON</td>
          <td style="padding: 10px; border-bottom: 1px solid #eee; text-align: right;">${(item.price * item.quantity).toFixed(2)} RON</td>
        </tr>
      `
    )
    .join('');
}

/**
 * Format order items for plain text email
 */
function formatOrderItemsText(items) {
  return items
    .map(
      (item) =>
        `- ${item.name} x${item.quantity} @ ${item.price?.toFixed(2)} RON = ${(item.price * item.quantity).toFixed(2)} RON`
    )
    .join('\n');
}

/**
 * Send email using Resend API
 */
async function sendEmail(apiKey, to, subject, htmlContent, fromEmail) {
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [to],
      subject: subject,
      html: htmlContent,
    }),
  });

  return response.ok;
}

/**
 * Build admin notification email
 */
function buildAdminEmailHtml(order) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #2563eb; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .order-id { font-size: 24px; font-weight: bold; color: #1e40af; margin: 10px 0; }
        .section { margin: 20px 0; }
        .section-title { font-weight: bold; color: #374151; border-bottom: 2px solid #2563eb; padding-bottom: 5px; margin-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; }
        th { background: #e5e7eb; padding: 10px; text-align: left; }
        .total { font-size: 18px; font-weight: bold; color: #059669; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📦 Comandă Nouă!</h1>
          <div class="order-id">${order.orderId}</div>
        </div>
        <div class="content">
          <div class="section">
            <div class="section-title">👤 Date Client</div>
            <p><strong>Nume:</strong> ${order.name}</p>
            <p><strong>Telefon:</strong> ${order.phone}</p>
            <p><strong>Email:</strong> ${order.email}</p>
            <p><strong>Adresă:</strong> ${order.address}</p>
            ${order.notes ? `<p><strong>Observații:</strong> ${order.notes}</p>` : ''}
          </div>
          
          <div class="section">
            <div class="section-title">🛍️ Produse Comandate</div>
            <table>
              <thead>
                <tr>
                  <th>Produs</th>
                  <th style="text-align: center;">Cantitate</th>
                  <th style="text-align: right;">Preț</th>
                  <th style="text-align: right;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${formatOrderItemsHtml(order.items)}
              </tbody>
            </table>
          </div>
          
          <div class="section" style="text-align: right;">
            <span class="total">TOTAL: ${order.total.toFixed(2)} RON</span>
          </div>
          
          <div class="section">
            <div class="section-title">ℹ️ Informații Comandă</div>
            <p><strong>ID Comandă:</strong> ${order.orderId}</p>
            <p><strong>Data:</strong> ${new Date(order.createdAt).toLocaleString('ro-RO')}</p>
            <p><strong>Status:</strong> ${order.status}</p>
          </div>
        </div>
        <div class="footer">
          <p>Acest email a fost generat automat de sistemul de comenzi.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Build client confirmation email
 */
function buildClientEmailHtml(order) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #059669; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9fafb; padding: 20px; border: 1px solid #e5e7eb; }
        .order-id { font-size: 20px; font-weight: bold; color: #047857; margin: 10px 0; padding: 10px; background: #d1fae5; border-radius: 4px; text-align: center; }
        .section { margin: 20px 0; }
        .section-title { font-weight: bold; color: #374151; border-bottom: 2px solid #059669; padding-bottom: 5px; margin-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; }
        th { background: #e5e7eb; padding: 10px; text-align: left; }
        .total { font-size: 18px; font-weight: bold; color: #059669; }
        .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 12px; }
        .highlight { background: #fef3c7; padding: 15px; border-radius: 4px; border-left: 4px solid #f59e0b; margin: 15px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Mulțumim pentru comandă!</h1>
        </div>
        <div class="content">
          <p>Dragă ${order.name},</p>
          <p>Comanda ta a fost înregistrată cu succes. Îți mulțumim pentru încredere!</p>
          
          <div class="order-id">
            Număr comandă: <strong>${order.orderId}</strong>
          </div>
          
          <div class="highlight">
            <strong>📞 Următorii pași:</strong><br>
            Te vom contacta în curând pentru a confirma detaliile comenzii și pentru a stabili modalitatea de livrare.
          </div>
          
          <div class="section">
            <div class="section-title">🛍️ Sumar comandă</div>
            <table>
              <thead>
                <tr>
                  <th>Produs</th>
                  <th style="text-align: center;">Cantitate</th>
                  <th style="text-align: right;">Preț</th>
                  <th style="text-align: right;">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                ${formatOrderItemsHtml(order.items)}
              </tbody>
            </table>
          </div>
          
          <div class="section" style="text-align: right;">
            <span class="total">TOTAL: ${order.total.toFixed(2)} RON</span>
          </div>
          
          <div class="section">
            <div class="section-title">📍 Adresa de livrare</div>
            <p>${order.address}</p>
            ${order.notes ? `<p><strong>Observații:</strong> ${order.notes}</p>` : ''}
          </div>
        </div>
        <div class="footer">
          <p>Dacă ai întrebări, nu ezita să ne contactezi!</p>
          <p>Cu drag,<br>Echipa DoroStore</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

/**
 * Main Worker handler
 */
export default {
  async fetch(request, env) {
    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          ...CORS_HEADERS,
          'Access-Control-Max-Age': '86400',
        },
      });
    }

    // Only allow POST requests
    if (request.method !== 'POST') {
      return new Response(JSON.stringify({ error: 'Method not allowed' }), {
        status: 405,
        headers: { 'Content-Type': 'application/json', ...CORS_HEADERS },
      });
    }

    try {
      // Parse order data
      const orderData = await request.json();

      // Validate required fields
      if (!orderData.name || !orderData.phone || !orderData.email || !orderData.address) {
        return new Response(
          JSON.stringify({ error: 'Missing required fields: name, phone, email, address' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...CORS_HEADERS } }
        );
      }

      if (!orderData.items || orderData.items.length === 0) {
        return new Response(
          JSON.stringify({ error: 'Order must contain at least one item' }),
          { status: 400, headers: { 'Content-Type': 'application/json', ...CORS_HEADERS } }
        );
      }

      // Generate unique order ID (DS-YYYY-XXXX format)
      const orderId = await generateOrderId(env.ORDERS);

      // Create stored order object
      const storedOrder = {
        ...orderData,
        orderId,
        createdAt: new Date().toISOString(),
        status: 'new',
      };

      // PERSIST ORDER TO KV BEFORE SENDING EMAILS
      await env.ORDERS.put(`order:${orderId}`, JSON.stringify(storedOrder));

      // Also maintain an index of orders by year
      const year = new Date().getFullYear();
      const indexKey = `orders:${year}`;
      const existingIndex = await env.ORDERS.get(indexKey);
      const orderIds = existingIndex ? JSON.parse(existingIndex) : [];
      orderIds.push(orderId);
      await env.ORDERS.put(indexKey, JSON.stringify(orderIds));

      // STEP 1: Send admin email FIRST
      const adminSubject = `🛒 Comandă nouă ${orderId} - ${orderData.name}`;
      const adminHtml = buildAdminEmailHtml(storedOrder);
      
      const adminEmailSent = await sendEmail(
        env.RESEND_API_KEY,
        env.ADMIN_EMAIL,
        adminSubject,
        adminHtml,
        env.FROM_EMAIL
      );

      if (!adminEmailSent) {
        // Update order to indicate admin email failure
        await env.ORDERS.put(`order:${orderId}`, JSON.stringify({
          ...storedOrder,
          adminEmailFailed: true,
          adminEmailFailedAt: new Date().toISOString(),
        }));

        return new Response(
          JSON.stringify({ error: 'Failed to send admin notification', orderId }),
          { status: 500, headers: { 'Content-Type': 'application/json', ...CORS_HEADERS } }
        );
      }

      // STEP 2: Send client email ONLY after admin email succeeds
      const clientSubject = `✅ Confirmare comandă ${orderId} - DoroStore`;
      const clientHtml = buildClientEmailHtml(storedOrder);
      
      const clientEmailSent = await sendEmail(
        env.RESEND_API_KEY,
        orderData.email,
        clientSubject,
        clientHtml,
        env.FROM_EMAIL
      );

      // Update order with final email status
      await env.ORDERS.put(`order:${orderId}`, JSON.stringify({
        ...storedOrder,
        adminEmailSent: true,
        adminEmailSentAt: new Date().toISOString(),
        clientEmailSent,
        clientEmailSentAt: clientEmailSent ? new Date().toISOString() : null,
      }));

      // Return success with order ID
      return new Response(
        JSON.stringify({
          success: true,
          orderId,
          message: 'Order placed successfully',
          adminEmailSent: true,
          clientEmailSent,
        }),
        { status: 200, headers: { 'Content-Type': 'application/json', ...CORS_HEADERS } }
      );

    } catch (error) {
      console.error('Order processing error:', error);
      return new Response(
        JSON.stringify({
          error: 'Internal server error',
          message: error instanceof Error ? error.message : 'Unknown error',
        }),
        { status: 500, headers: { 'Content-Type': 'application/json', ...CORS_HEADERS } }
      );
    }
  },
};
