import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Politica de Confidențialitate — GDPR',
  description: 'Cum colectăm, folosim și protejăm datele tale personale.',
}

export default function PoliticaDeConfidentialitatePage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Politica de Confidențialitate', href: '/politica-de-confidentialitate' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-3xl prose prose-secondary">
        <h1>Politica de Confidențialitate</h1>
        <p className="lead">
          Ultima actualizare: Ianuarie 2026
        </p>
        <p>
          Protecția datelor tale personale este importantă pentru noi. Această politică 
          explică ce date colectăm, de ce le colectăm și cum le protejăm.
        </p>

        <h2>1. Cine suntem</h2>
        <p>
          Operatorul datelor personale este {siteConfig.name} SRL, cu sediul în {siteConfig.address}, 
          CUI {siteConfig.cui}. Ne poți contacta la {siteConfig.contactEmail}.
        </p>

        <h2>2. Ce date colectăm</h2>
        <p>Colectăm doar datele necesare pentru procesarea comenzilor:</p>
        <ul>
          <li><strong>Date de identificare:</strong> nume, prenume</li>
          <li><strong>Date de contact:</strong> email, telefon</li>
          <li><strong>Date de livrare:</strong> adresă, județ, localitate</li>
          <li><strong>Date de facturare:</strong> pentru persoane juridice: denumire firmă, CUI, adresă sediu</li>
          <li><strong>Date tehnice:</strong> adresă IP, tip browser (pentru securitate și funcționare)</li>
        </ul>

        <h2>3. De ce colectăm aceste date</h2>
        <ul>
          <li>Procesarea și livrarea comenzilor</li>
          <li>Comunicarea despre statusul comenzii</li>
          <li>Emiterea facturilor fiscale</li>
          <li>Răspunsul la întrebări și solicitări</li>
          <li>Respectarea obligațiilor legale (evidențe contabile)</li>
        </ul>

        <h2>4. Temeiul legal</h2>
        <p>Procesăm datele pe baza:</p>
        <ul>
          <li><strong>Executarea contractului:</strong> pentru procesarea comenzilor</li>
          <li><strong>Obligații legale:</strong> pentru facturare și evidențe contabile</li>
          <li><strong>Consimțământ:</strong> pentru newsletter (dacă te-ai abonat)</li>
        </ul>

        <h2>5. Cui transmitem datele</h2>
        <p>
          <strong>Nu vindem datele tale.</strong> Le transmitem doar către:
        </p>
        <ul>
          <li><strong>Curieri:</strong> Fan Courier, Sameday — pentru livrare</li>
          <li><strong>Procesator plăți:</strong> Stripe — pentru plăți online</li>
          <li><strong>Servicii email:</strong> Resend — pentru trimiterea confirmărilor</li>
        </ul>
        <p>
          Toți partenerii noștri respectă GDPR și au contracte de procesare a datelor cu noi.
        </p>

        <h2>6. Cât timp păstrăm datele</h2>
        <ul>
          <li><strong>Date comenzi:</strong> 10 ani (obligație contabilă)</li>
          <li><strong>Date newsletter:</strong> până la dezabonare</li>
          <li><strong>Date tehnice:</strong> 30 de zile</li>
        </ul>

        <h2>7. Drepturile tale</h2>
        <p>Ai următoarele drepturi conform GDPR:</p>
        <ul>
          <li><strong>Acces:</strong> poți cere să vezi ce date avem despre tine</li>
          <li><strong>Rectificare:</strong> poți cere corectarea datelor incorecte</li>
          <li><strong>Ștergere:</strong> poți cere ștergerea datelor (cu excepția celor necesare legal)</li>
          <li><strong>Restricționare:</strong> poți cere limitarea prelucrării</li>
          <li><strong>Portabilitate:</strong> poți cere datele într-un format structurat</li>
          <li><strong>Opoziție:</strong> te poți opune prelucrării în anumite situații</li>
        </ul>
        <p>
          Pentru a exercita aceste drepturi, scrie-ne la {siteConfig.contactEmail}.
        </p>

        <h2>8. Securitatea datelor</h2>
        <p>
          Folosim măsuri tehnice și organizatorice pentru protecția datelor:
        </p>
        <ul>
          <li>Conexiune securizată HTTPS</li>
          <li>Plăți procesate prin Stripe (certificat PCI DSS)</li>
          <li>Acces restricționat la date</li>
          <li>Backup-uri regulate</li>
        </ul>

        <h2>9. Cookies</h2>
        <p>
          Folosim cookies pentru funcționarea site-ului. Vezi <a href="/politica-cookies">Politica Cookies</a> pentru detalii.
        </p>

        <h2>10. Minori</h2>
        <p>
          Nu colectăm intenționat date de la persoane sub 16 ani. Dacă ești părinte și 
          crezi că copilul tău ne-a furnizat date, contactează-ne pentru ștergere.
        </p>

        <h2>11. Modificări</h2>
        <p>
          Putem actualiza această politică. Versiunea curentă va fi mereu disponibilă pe site.
        </p>

        <h2>12. Plângeri</h2>
        <p>
          Dacă consideri că datele tale au fost prelucrate incorect, ne poți contacta sau poți 
          depune plângere la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu 
          Caracter Personal (ANSPDCP) — <a href="https://www.dataprotection.ro" target="_blank" rel="noopener">dataprotection.ro</a>.
        </p>

        <hr />
        <p className="text-sm text-secondary-500">
          Contact pentru protecția datelor: {siteConfig.contactEmail}
        </p>
      </div>
    </div>
  )
}
