import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Politica Cookies',
  description: 'Informații despre cookie-urile folosite pe site.',
}

export default function PoliticaCookiesPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Politica Cookies', href: '/politica-cookies' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-3xl prose prose-secondary">
        <h1>Politica Cookies</h1>
        <p className="lead">
          Ultima actualizare: Ianuarie 2026
        </p>

        <h2>Ce sunt cookie-urile?</h2>
        <p>
          Cookie-urile sunt fișiere text mici stocate pe dispozitivul tău când vizitezi un site. 
          Sunt folosite pentru a face site-urile să funcționeze corect și pentru a îmbunătăți 
          experiența utilizatorului.
        </p>

        <h2>Ce cookies folosim</h2>
        
        <h3>Cookies strict necesare</h3>
        <p>
          Acestea sunt esențiale pentru funcționarea site-ului. Fără ele, nu poți naviga 
          sau folosi funcțiile de bază.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>cart</td>
              <td>Păstrează produsele din coș</td>
              <td>7 zile</td>
            </tr>
            <tr>
              <td>session</td>
              <td>Menține sesiunea activă</td>
              <td>Sesiune</td>
            </tr>
          </tbody>
        </table>

        <h3>Cookies de performanță</h3>
        <p>
          Ne ajută să înțelegem cum folosesc vizitatorii site-ul, pentru a-l îmbunătăți.
        </p>
        <table>
          <thead>
            <tr>
              <th>Cookie</th>
              <th>Furnizor</th>
              <th>Scop</th>
              <th>Durată</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>_ga</td>
              <td>Google Analytics</td>
              <td>Statistici anonime</td>
              <td>2 ani</td>
            </tr>
            <tr>
              <td>_gid</td>
              <td>Google Analytics</td>
              <td>Distingere vizitatori</td>
              <td>24 ore</td>
            </tr>
          </tbody>
        </table>

        <h3>Cookies terță parte</h3>
        <p>
          Pot fi setate de servicii externe pe care le folosim:
        </p>
        <ul>
          <li><strong>Stripe:</strong> pentru procesarea plăților securizate</li>
          <li><strong>Facebook:</strong> dacă interacționezi cu widget-uri sociale</li>
        </ul>

        <h2>Cum controlezi cookie-urile</h2>
        <p>
          Poți controla și șterge cookie-urile din setările browserului:
        </p>
        <ul>
          <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener">Chrome</a></li>
          <li><a href="https://support.mozilla.org/ro/kb/sterge-cookie-uri" target="_blank" rel="noopener">Firefox</a></li>
          <li><a href="https://support.apple.com/ro-ro/guide/safari/sfri11471/mac" target="_blank" rel="noopener">Safari</a></li>
          <li><a href="https://support.microsoft.com/ro-ro/microsoft-edge/ștergerea-modulelor-cookie-în-microsoft-edge" target="_blank" rel="noopener">Edge</a></li>
        </ul>
        <p>
          <strong>Atenție:</strong> Dacă dezactivezi cookie-urile strict necesare, unele funcții 
          ale site-ului (coș de cumpărături, checkout) nu vor funcționa corect.
        </p>

        <h2>Consimțământ</h2>
        <p>
          Când vizitezi site-ul pentru prima dată, îți cerem consimțământul pentru cookies 
          care nu sunt strict necesare. Poți modifica preferințele oricând din setările 
          cookie-urilor sau din browserul tău.
        </p>

        <h2>Modificări</h2>
        <p>
          Putem actualiza această politică. Verifică periodic această pagină pentru 
          cea mai recentă versiune.
        </p>

        <hr />
        <p className="text-sm text-secondary-500">
          Întrebări? Scrie-ne la {siteConfig.contactEmail}
        </p>
      </div>
    </div>
  )
}
