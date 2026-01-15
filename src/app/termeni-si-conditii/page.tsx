import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { siteConfig } from '@/lib/config'

export const metadata: Metadata = {
  title: 'Termeni și Condiții',
  description: 'Termenii și condițiile de utilizare a magazinului online.',
}

export default function TermeniSiConditiiPage() {
  const breadcrumbItems = [
    { label: 'Acasă', href: '/' },
    { label: 'Termeni și Condiții', href: '/termeni-si-conditii' },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumbs items={breadcrumbItems} />

      <div className="max-w-3xl prose prose-secondary">
        <h1>Termeni și Condiții</h1>
        <p className="lead">
          Ultima actualizare: Ianuarie 2026
        </p>

        <h2>1. Informații despre vânzător</h2>
        <p>
          Magazinul online {siteConfig.name} este operat de {siteConfig.name} SRL, 
          cu sediul în {siteConfig.address}, înregistrată la Registrul Comerțului 
          cu numărul {siteConfig.regCom}, CUI {siteConfig.cui}.
        </p>
        <p>
          Contact: {siteConfig.contactEmail} | {siteConfig.contactPhone}
        </p>

        <h2>2. Definiții</h2>
        <p>
          <strong>Vânzător:</strong> {siteConfig.name} SRL<br />
          <strong>Cumpărător:</strong> persoana fizică sau juridică care plasează o comandă<br />
          <strong>Contract:</strong> acordul la distanță încheiat între vânzător și cumpărător<br />
          <strong>Produs:</strong> bunurile comandate de cumpărător prin intermediul site-ului
        </p>

        <h2>3. Produse și prețuri</h2>
        <p>
          Toate prețurile afișate pe site includ TVA și sunt exprimate în lei (RON). 
          Ne rezervăm dreptul de a modifica prețurile fără notificare prealabilă, 
          însă comenzile deja plasate vor fi onorate la prețul din momentul plasării.
        </p>

        <h2>4. Plasarea comenzii</h2>
        <p>
          Prin plasarea unei comenzi, confirmați că aveți minimum 18 ani sau acordul 
          unui părinte/tutore. Comanda reprezintă o ofertă de cumpărare care devine 
          contract în momentul confirmării de către noi prin email.
        </p>

        <h2>5. Livrare</h2>
        <p>
          Livrăm în toată România prin curieri parteneri (Fan Courier, Sameday). 
          Termenul de livrare este de 1-3 zile lucrătoare de la confirmarea comenzii. 
          Costul livrării este de {siteConfig.shippingCost} lei pentru comenzi sub {siteConfig.freeShippingThreshold} lei 
          și gratuit pentru comenzi peste această valoare.
        </p>

        <h2>6. Plată</h2>
        <p>
          Acceptăm plata ramburs (numerar sau card la curier) și plata online cu cardul 
          (Visa, Mastercard, Apple Pay, Google Pay). Plățile online sunt procesate securizat 
          prin Stripe.
        </p>

        <h2>7. Dreptul de retragere</h2>
        <p>
          Conform OUG 34/2014, aveți dreptul de a vă retrage din contract în termen de 
          14 zile de la primirea produsului, fără a invoca vreun motiv. Pentru a exercita 
          acest drept, trebuie să ne informați printr-o declarație explicită 
          (email la {siteConfig.contactEmail}).
        </p>
        <p>
          Produsul trebuie returnat în starea originală, cu toate accesoriile și ambalajul 
          intact. Costul returului este în sarcina cumpărătorului, cu excepția cazurilor 
          în care produsul este defect sau diferit de cel comandat.
        </p>

        <h2>8. Garanție</h2>
        <p>
          Toate produsele beneficiază de garanția legală de conformitate de minimum 24 de luni. 
          În cazul unui defect, contactați-ne și vom soluționa problema prin reparare, 
          înlocuire sau rambursare, conform legii.
        </p>

        <h2>9. Limitarea răspunderii</h2>
        <p>
          Nu răspundem pentru întârzieri în livrare cauzate de curierii parteneri sau de 
          forță majoră. Descrierile produselor sunt cât mai exacte posibil, dar pot exista 
          mici diferențe de culoare datorate setărilor monitorului.
        </p>

        <h2>10. Protecția datelor</h2>
        <p>
          Datele personale sunt prelucrate conform Politicii de Confidențialitate și 
          GDPR. Nu vindem și nu transmitem datele dumneavoastră către terți, cu excepția 
          celor necesari pentru livrare și procesarea plăților.
        </p>

        <h2>11. Soluționarea litigiilor</h2>
        <p>
          În caz de litigiu, încercăm mai întâi o soluționare amiabilă. Puteți depune 
          reclamații la ANPC (anpc.ro) sau utiliza platforma europeană de soluționare 
          online a litigiilor (ec.europa.eu/consumers/odr).
        </p>

        <h2>12. Modificări</h2>
        <p>
          Ne rezervăm dreptul de a modifica acești termeni. Versiunea actualizată va fi 
          publicată pe site cu data ultimei modificări.
        </p>

        <hr />
        <p className="text-sm text-secondary-500">
          Prin utilizarea site-ului și plasarea comenzilor, confirmați că ați citit și 
          acceptat acești Termeni și Condiții.
        </p>
      </div>
    </div>
  )
}
