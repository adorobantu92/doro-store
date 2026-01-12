// =============================================================================
// STATIC DATA - Products
// =============================================================================
// MIGRATION NOTE: Replace this file with database queries.
// Keep the same function signatures for zero-refactor migration.
// =============================================================================

import { Product, ProductFilters, PaginatedResponse } from '@/lib/types'

export const products: Product[] = [
  {
    id: 'prod-001',
    slug: 'suport-telefon-auto-magnetic-grila-ventilatie',
    sku: 'AUTO-SUP-001',
    name: 'Suport Telefon Auto Magnetic pentru Grilă Ventilație',
    shortDescription: 'Suport magnetic pentru telefon cu montare pe grila de ventilație. Instalare în 5 secunde, compatibil cu telefoane de 4.7" - 6.7".',
    description: `## Montezi telefonul în 1 secundă, fără să te uiți

Suportul magnetic pentru grila de ventilație îți permite să fixezi telefonul instant cu o singură mână. Nu trebuie să potrivești cleme sau să te chinui cu brațe extensibile. Funcționează cu orice telefon care are plăcuța magnetică inclusă lipită pe spate sau în husă.

Magnetul N52 folosit este de 6 ori mai puternic decât magneții standard din suporturile ieftine. Telefonul stă fix chiar și pe drumuri cu denivelări, fără să vibreze sau să cadă la prima curbă.

### Ce primești în pachet

- Suport magnetic pentru grilă ventilație
- 2 plăcuțe metalice autoadezive (rotundă și dreptunghiulară)
- Instrucțiuni de montare în română

### Potrivit pentru

- Șoferi care folosesc GPS-ul sau Waze zilnic
- Oricine vrea acces rapid la telefon în mașină
- Mașini cu grile de ventilație orizontale sau verticale standard`,
    price: 49,
    currency: 'RON',
    categoryId: 'accesorii-auto',
    subcategoryId: 'suporturi-telefon',
    images: [
      { url: 'https://picsum.photos/seed/product1/600', alt: 'Suport telefon auto magnetic montat pe grilă', isPrimary: true },
    ],
    specs: [
      { label: 'Material', value: 'Aliaj aluminiu + silicon' },
      { label: 'Compatibilitate', value: 'Telefoane 4.7" - 6.7"' },
      { label: 'Rotație', value: '360°' },
      { label: 'Putere magnet', value: 'N52' },
      { label: 'Greutate', value: '45g' },
      { label: 'Culori', value: 'Negru, Argintiu' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Magnet N52 puternic — telefonul stă fix chiar și pe drumuri cu gropi',
      'Montare instant pe grilă, fără adeziv sau ventuze',
      'Rotație 360° pentru orientare portret sau landscape',
      'Include 2 plăcuțe metalice autoadezive (rotundă + dreptunghiulară)',
      'Construcție din aliaj de aluminiu, nu plastic ieftin',
    ],
    stock: 25,
    isActive: true,
    isFeatured: true,
    isNew: false,
    createdAt: '2025-12-01T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-002',
    slug: 'incarcator-wireless-15w-birou',
    sku: 'GAD-INC-001',
    name: 'Încărcător Wireless 15W pentru Birou',
    shortDescription: 'Încărcător wireless de 15W cu indicator LED discret. Funcționează prin huse de până la 4mm grosime.',
    description: `## Încărcare rapidă, fără cabluri încurcate

Încărcătorul wireless de 15W oferă încărcare rapidă pentru telefoanele compatibile, fără să mai cauți cablul potrivit. Așezi telefonul și gata — încărcarea începe automat.

LED-ul indicator arată statusul încărcării, dar nu deranjează noaptea — se stinge automat când bateria e plină.

### Ce primești în pachet

- Încărcător wireless
- Cablu USB-C de 1m
- Manual de utilizare

### Notă importantă

Adaptorul de priză NU este inclus. Folosește un adaptor de minim 18W pentru încărcare rapidă.`,
    price: 79,
    currency: 'RON',
    categoryId: 'gadgeturi',
    subcategoryId: 'incarcatoare-wireless',
    images: [
      { url: 'https://picsum.photos/seed/product2/600', alt: 'Încărcător wireless pe birou', isPrimary: true },
    ],
    specs: [
      { label: 'Putere maximă', value: '15W' },
      { label: 'Input', value: 'USB-C, 5V/2A sau 9V/2A' },
      { label: 'Grosime husă suportată', value: 'Până la 4mm' },
      { label: 'Diametru', value: '10 cm' },
      { label: 'Protecții', value: 'Supraîncălzire, supratensiune, scurtcircuit' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Încărcare rapidă 15W pentru telefoane compatibile (10W/7.5W pentru restul)',
      'LED indicator care se stinge automat după încărcare completă',
      'Bază anti-alunecare — telefonul nu cade de pe el',
      'Protecție la supraîncălzire, supratensiune și scurtcircuit',
      'Cablu USB-C de 1m inclus',
    ],
    stock: 18,
    isActive: true,
    isFeatured: true,
    isNew: false,
    createdAt: '2025-12-05T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-003',
    slug: 'organizator-portbagaj-auto-pliabil',
    sku: 'AUTO-ORG-001',
    name: 'Organizator Portbagaj Auto Pliabil',
    shortDescription: 'Organizator pliabil pentru portbagaj cu 3 compartimente și buzunare laterale. Se pliază complet când nu îl folosești.',
    description: `## Ordine în portbagaj, fără compromisuri

Organizatorul pliabil transformă haosul din portbagaj în spațiu utilizabil. 3 compartimente mari pentru cumpărături sau bagaje, plus buzunare laterale pentru obiectele mici care altfel s-ar pierde.

Când nu îl folosești, se pliază plat în câteva secunde și ocupă doar 3 cm.

### Ce primești în pachet

- Organizator pliabil
- Instrucțiuni de utilizare`,
    price: 89,
    currency: 'RON',
    categoryId: 'accesorii-auto',
    subcategoryId: 'organizatoare-auto',
    images: [
      { url: 'https://picsum.photos/seed/product3/600', alt: 'Organizator portbagaj în mașină', isPrimary: true },
    ],
    specs: [
      { label: 'Dimensiuni deschis', value: '60 x 35 x 30 cm' },
      { label: 'Dimensiuni pliat', value: '60 x 35 x 3 cm' },
      { label: 'Material', value: 'Poliester 600D impermeabil' },
      { label: 'Capacitate', value: '~50 litri' },
      { label: 'Compartimente', value: '3 mari + 4 buzunare laterale' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      '3 compartimente mari + 4 buzunare laterale pentru obiecte mici',
      'Bază rigidă întărită — nu se deformează când pui greutăți',
      'Mânere laterale pentru transport ușor',
      'Se pliază plat în 5 secunde (grosime pliată: 3 cm)',
      'Material impermeabil, ușor de curățat',
    ],
    stock: 12,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-10T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-004',
    slug: 'lampa-led-reincarcabila-senzor-miscare',
    sku: 'CASA-LED-001',
    name: 'Lampă LED Reîncărcabilă cu Senzor de Mișcare',
    shortDescription: 'Lampă LED fără fir cu senzor de mișcare și încărcare USB. Ideală pentru dulap, hol, scări sau debara.',
    description: `## Lumină când ai nevoie, întuneric când nu

Lampa LED cu senzor de mișcare se aprinde automat când treci pe lângă ea și se stinge singură după 15 secunde. Perfectă pentru locurile unde nu ajungi la întrerupător — dulapuri, scări, debara, hol.

Bateria reîncărcabilă ține până la 3 luni în mod senzor, iar încărcarea durează doar 2 ore.

### Ce primești în pachet

- Lampă LED
- Cablu USB-C pentru încărcare
- Bandă adezivă 3M + suport magnetic
- Instrucțiuni în română`,
    price: 45,
    currency: 'RON',
    categoryId: 'accesorii-casa',
    subcategoryId: 'iluminat-decorativ',
    images: [
      { url: 'https://picsum.photos/seed/product4/600', alt: 'Lampă LED în dulap', isPrimary: true },
    ],
    specs: [
      { label: 'Sursă lumină', value: '20 LED-uri' },
      { label: 'Baterie', value: '1000mAh, reîncărcabilă' },
      { label: 'Rază detecție', value: '3 metri, 120°' },
      { label: 'Dimensiuni', value: '21 x 3 x 1.5 cm' },
      { label: 'Temperatură culoare', value: '3000K (alb cald)' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Senzor de mișcare — se aprinde automat când treci pe lângă ea',
      'Baterie reîncărcabilă prin USB-C (autonomie până la 3 luni)',
      '3 moduri: permanent aprins / senzor zi-noapte / senzor permanent',
      'Montare cu bandă adezivă sau magnet (ambele incluse)',
      'Lumină albă caldă (3000K), nu orbitoare noaptea',
    ],
    stock: 30,
    isActive: true,
    isFeatured: true,
    isNew: true,
    createdAt: '2026-01-05T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-005',
    slug: 'set-cuburi-magnetice-64-piese',
    sku: 'JUC-EDU-001',
    name: 'Set Jucărie Educativă Cuburi Magnetice (64 piese)',
    shortDescription: 'Set de 64 piese magnetice pentru construcții 3D. Dezvoltă creativitatea și gândirea spațială la copii de 3+ ani.',
    description: `## Construcții fără limite

Cuburile magnetice permit copiilor să construiască de la forme simple la construcții complexe 3D. Magneții puternici mențin construcția stabilă, iar piesele se conectează ușor din orice unghi.

Set-ul include forme variate — pătrate, triunghiuri, hexagoane — pentru posibilități infinite de joacă.

### Ce primești în pachet

- 64 piese magnetice colorate
- Cutie de depozitare
- Idei de construcții

### Vârstă recomandată

3-12 ani (și adulți cărora le plac puzzle-urile)`,
    price: 129,
    currency: 'RON',
    categoryId: 'jucarii',
    subcategoryId: 'jucarii-educative',
    images: [
      { url: 'https://picsum.photos/seed/product5/600', alt: 'Cuburi magnetice construcție', isPrimary: true },
    ],
    specs: [
      { label: 'Număr piese', value: '64' },
      { label: 'Material', value: 'ABS non-toxic' },
      { label: 'Vârstă recomandată', value: '3+ ani' },
      { label: 'Include', value: 'Cutie depozitare' },
      { label: 'Certificări', value: 'CE, EN71' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      '64 piese în forme variate: pătrate, triunghiuri, hexagoane',
      'Magneți puternici care nu se desfac accidental',
      'Plastic ABS non-toxic, fără margini ascuțite',
      'Cutie de depozitare inclusă — piese ușor de strâns',
      'Dezvoltă creativitatea și gândirea spațială',
    ],
    stock: 15,
    isActive: true,
    isFeatured: true,
    isNew: false,
    createdAt: '2025-11-20T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-006',
    slug: 'suport-laptop-reglabil-aluminiu',
    sku: 'GAD-SUP-001',
    name: 'Suport Laptop Reglabil din Aluminiu',
    shortDescription: 'Suport de birou pentru laptop cu înălțime reglabilă și ventilație îmbunătățită. Compatibil cu laptopuri de 10-17 inch.',
    description: `## Postură corectă, laptop răcoros

Suportul reglabil ridică ecranul laptopului la nivelul ochilor, reducând tensiunea din gât și spate. Design-ul deschis permite aerului să circule, menținând laptopul răcoros în sesiuni lungi de lucru.

6 poziții de înălțime pentru a găsi unghiul perfect.

### Ce primești în pachet

- Suport laptop din aluminiu
- Instrucțiuni de utilizare`,
    price: 119,
    currency: 'RON',
    categoryId: 'gadgeturi',
    subcategoryId: 'electronice-utile',
    images: [
      { url: 'https://picsum.photos/seed/product6/600', alt: 'Suport laptop pe birou', isPrimary: true },
    ],
    specs: [
      { label: 'Material', value: 'Aliaj aluminiu' },
      { label: 'Compatibilitate', value: 'Laptopuri 10-17"' },
      { label: 'Greutate maximă', value: '15 kg' },
      { label: 'Greutate suport', value: '260g' },
      { label: 'Poziții înălțime', value: '6 (5-25 cm)' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Înălțime reglabilă în 6 poziții (de la 5 la 25 cm)',
      'Design deschis pentru ventilație îmbunătățită',
      'Aliaj de aluminiu, suportă laptopuri de până la 15 kg',
      'Picioare anti-alunecare din silicon',
      'Se pliază pentru transport',
    ],
    stock: 20,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-15T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-007',
    slug: 'set-recipiente-depozitare-capac-ermetic',
    sku: 'CASA-BUC-001',
    name: 'Set 3 Recipiente Depozitare cu Capac Ermetic',
    shortDescription: 'Set de 3 recipiente de depozitare alimente cu capac ermetic. Potrivite pentru cereale, paste, zahăr sau făină.',
    description: `## Alimente proaspete mai mult timp

Recipientele cu capac ermetic păstrează alimentele proaspete și crocante. Închiderea ermetică blochează umiditatea și aerul, prelungind durata de viață a cerealelor, pastelor, făinii și zahărului.

Transparente pentru a vedea conținutul fără să deschizi.

### Ce primești în pachet

- Recipient 0.8L
- Recipient 1.4L
- Recipient 2L`,
    price: 69,
    currency: 'RON',
    categoryId: 'accesorii-casa',
    subcategoryId: 'bucatarie',
    images: [
      { url: 'https://picsum.photos/seed/product7/600', alt: 'Recipiente depozitare în bucătărie', isPrimary: true },
    ],
    specs: [
      { label: 'Capacități', value: '0.8L + 1.4L + 2L' },
      { label: 'Material', value: 'Plastic fără BPA' },
      { label: 'Potrivit pentru', value: 'Cereale, paste, făină, zahăr' },
      { label: 'Mașină de spălat vase', value: 'Da' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Capac cu închidere ermetică — păstrează alimentele proaspete',
      'Plastic transparent — vezi ce e înăuntru fără să deschizi',
      '3 mărimi diferite: 0.8L, 1.4L și 2L',
      'Fără BPA, sigure pentru alimente',
      'Se stivuiesc pentru economisire spațiu',
    ],
    stock: 25,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-20T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-008',
    slug: 'masinuta-telecomanda-off-road-copii',
    sku: 'JUC-INT-001',
    name: 'Mașinuță Telecomandată Off-Road pentru Copii',
    shortDescription: 'Mașinuță cu telecomandă, roți mari și tracțiune 4x4. Merge pe iarbă, nisip și teren accidentat.',
    description: `## Distracție pe orice teren

Mașinuța off-road cu tracțiune 4x4 merge peste obstacole pe care alte mașinuțe s-ar bloca. Roțile mari din cauciuc oferă aderență pe iarbă, nisip, pietriș și chiar zăpadă.

Telecomanda funcționează de la distanță de până la 30 de metri.

### Ce primești în pachet

- Mașinuță off-road
- Telecomandă
- Baterie reîncărcabilă + încărcător
- 2 baterii AA pentru telecomandă
- Manual în română`,
    price: 149,
    currency: 'RON',
    categoryId: 'jucarii',
    subcategoryId: 'jucarii-interactive',
    images: [
      { url: 'https://picsum.photos/seed/product8/600', alt: 'Mașinuță telecomandată off-road', isPrimary: true },
    ],
    specs: [
      { label: 'Dimensiuni', value: '28 x 18 x 15 cm' },
      { label: 'Viteză maximă', value: '~12 km/h' },
      { label: 'Autonomie', value: '25-30 minute' },
      { label: 'Timp încărcare', value: '2 ore' },
      { label: 'Rază telecomandă', value: '30 metri' },
      { label: 'Vârstă recomandată', value: '6+ ani' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Roți mari din cauciuc — merge pe orice suprafață',
      'Tracțiune 4x4, nu se blochează ușor',
      'Rază telecomandă: până la 30 de metri',
      'Baterie reîncărcabilă, baterii telecomandă incluse',
      'Viteză potrivită pentru control și distracție',
    ],
    stock: 8,
    isActive: true,
    isFeatured: true,
    isNew: true,
    createdAt: '2026-01-02T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-009',
    slug: 'organizator-birou-incarcare-wireless',
    sku: 'GAD-ORG-001',
    name: 'Organizator Birou cu Încărcare Wireless',
    shortDescription: 'Organizator de birou cu suport pentru telefon, pixuri și accesorii, plus suprafață de încărcare wireless 10W integrată.',
    description: `## Birou ordonat, telefon încărcat

Organizatorul combină depozitarea pentru accesorii de birou cu o stație de încărcare wireless. Așezi telefonul pe suport, se încarcă în timp ce lucrezi, iar pixurile și cărțile de vizită sunt la îndemână.

### Ce primești în pachet

- Organizator cu încărcător wireless
- Cablu USB-C de 1.2m
- Manual de utilizare`,
    price: 99,
    currency: 'RON',
    categoryId: 'gadgeturi',
    subcategoryId: 'electronice-utile',
    images: [
      { url: 'https://picsum.photos/seed/product9/600', alt: 'Organizator birou cu încărcare wireless', isPrimary: true },
    ],
    specs: [
      { label: 'Dimensiuni', value: '22 x 12 x 10 cm' },
      { label: 'Putere încărcare', value: '10W max' },
      { label: 'Material', value: 'Plastic ABS + piele sintetică' },
      { label: 'Culori', value: 'Negru, Gri' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Încărcare wireless 10W integrată în bază',
      'Compartimente pentru pixuri, cărți de vizită, agrafe',
      'Suport înclinat pentru telefon',
      'Design compact pentru birou',
      'Cablu USB-C de 1.2m inclus',
    ],
    stock: 14,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-25T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-010',
    slug: 'lumina-noapte-copii-schimbare-culori',
    sku: 'JUC-NOP-001',
    name: 'Lumină de Noapte pentru Copii cu Schimbare Culori',
    shortDescription: 'Lumină de noapte în formă de animaluț cu 7 culori și timer de 30 minute. Ajută copiii să adoarmă fără frică.',
    description: `## Somn liniștit pentru cei mici

Lumina de noapte în formă de animaluț drăgălaș alungă frica de întuneric. 7 culori diferite, intensitate reglabilă și timer de 30 minute care stinge lumina după ce copilul adoarme.

Material din silicon moale, sigur de atins și nu se sparge dacă cade.

### Ce primești în pachet

- Lumină de noapte (formă la alegere)
- Cablu USB pentru încărcare
- Manual în română`,
    price: 59,
    currency: 'RON',
    categoryId: 'jucarii',
    subcategoryId: 'jucarii-educative',
    images: [
      { url: 'https://picsum.photos/seed/product10/600', alt: 'Lumină de noapte pentru copii', isPrimary: true },
    ],
    specs: [
      { label: 'Dimensiuni', value: '12 x 12 x 10 cm' },
      { label: 'Material', value: 'Silicon alimentar' },
      { label: 'Autonomie', value: '~8 ore' },
      { label: 'Modele', value: 'Pisică, Urs, Iepure' },
      { label: 'Culori', value: '7 culori + alb' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      '7 culori diferite — copilul alege culoarea preferată',
      'Timer automat 30 minute — se stinge singură',
      'Material silicon moale — sigur și rezistent',
      'Încărcare USB, baterie durează ~8 ore',
      'Intensitate reglabilă prin apăsare',
    ],
    stock: 22,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-18T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-011',
    slug: 'cuier-perete-autoadeziv-set-4',
    sku: 'CASA-ORG-001',
    name: 'Cuier Perete Autoadeziv (Set 4 bucăți)',
    shortDescription: 'Set de 4 cuiere autoadezive din oțel inoxidabil. Se montează fără găurire, pe orice suprafață netedă.',
    description: `## Montare fără găuri în perete

Cuierele autoadezive se montează în câteva secunde pe orice suprafață netedă — faianță, sticlă, metal, plastic, lemn lăcuit. Bandă adezivă 3M de calitate industrială.

Oțel inoxidabil 304 — nu ruginesc, potrivite și pentru baie.

### Ce primești în pachet

- 4 cuiere din oțel inoxidabil
- Bandă adezivă 3M pre-aplicată
- Instrucțiuni de montare`,
    price: 35,
    currency: 'RON',
    categoryId: 'accesorii-casa',
    subcategoryId: 'organizare',
    images: [
      { url: 'https://picsum.photos/seed/product11/600', alt: 'Cuiere autoadezive pe perete', isPrimary: true },
    ],
    specs: [
      { label: 'Material', value: 'Oțel inoxidabil 304' },
      { label: 'Greutate suportată', value: '3 kg / cuier' },
      { label: 'Dimensiuni', value: '4 x 4 x 3 cm' },
      { label: 'Potrivit pentru', value: 'Haine, prosoape, chei, genți' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Montare fără găuri sau șuruburi',
      'Oțel inoxidabil 304 — nu ruginește',
      'Fiecare cuier suportă până la 3 kg',
      'Design minimalist, se potrivește în orice interior',
      'Se demontează fără urme',
    ],
    stock: 40,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-22T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
  {
    id: 'prod-012',
    slug: 'cablu-usb-c-impletit-2-metri-incarcare-rapida',
    sku: 'GAD-CAB-001',
    name: 'Cablu USB-C Împletit 2 Metri (Încărcare Rapidă)',
    shortDescription: 'Cablu USB-C la USB-C de 2 metri cu înveliș împletit rezistent. Suportă încărcare rapidă până la 60W și transfer de date.',
    description: `## Cablu care rezistă

Cablul împletit din nylon nu se încurcă și nu se rupe la îndoire ca cele din plastic. Conectorii întăriți rezistă la conectări/deconectări repetate.

Lungimea de 2 metri îți permite să folosești telefonul în timp ce se încarcă, fără să stai lângă priză.

### Ce primești în pachet

- Cablu USB-C la USB-C, 2 metri
- Curea Velcro pentru organizare`,
    price: 39,
    currency: 'RON',
    categoryId: 'gadgeturi',
    subcategoryId: 'accesorii-telefon',
    images: [
      { url: 'https://picsum.photos/seed/product12/600', alt: 'Cablu USB-C împletit', isPrimary: true },
    ],
    specs: [
      { label: 'Lungime', value: '2 metri' },
      { label: 'Conectori', value: 'USB-C la USB-C' },
      { label: 'Putere maximă', value: '60W (PD 3.0)' },
      { label: 'Viteză transfer', value: '480 Mbps' },
      { label: 'Culori', value: 'Negru, Gri, Albastru' },
      { label: 'Garanție', value: '24 luni' },
    ],
    benefits: [
      'Lungime 2 metri — folosești telefonul în timp ce se încarcă',
      'Înveliș nylon împletit — nu se încurcă, nu se rupe',
      'Suportă încărcare rapidă până la 60W (PD 3.0)',
      'Transfer date până la 480 Mbps',
      'Conectori întăriți cu protecție la îndoire',
    ],
    stock: 50,
    isActive: true,
    isFeatured: false,
    isNew: false,
    createdAt: '2025-12-08T10:00:00Z',
    updatedAt: '2026-01-10T10:00:00Z',
  },
]

// =============================================================================
// DATA ACCESS FUNCTIONS
// =============================================================================

export function getAllProducts(): Product[] {
  return products.filter((p) => p.isActive)
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.isActive)
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id && p.isActive)
}

export function getFeaturedProducts(limit: number = 8): Product[] {
  return products
    .filter((p) => p.isActive && p.isFeatured)
    .slice(0, limit)
}

export function getNewProducts(limit: number = 8): Product[] {
  return products
    .filter((p) => p.isActive && p.isNew)
    .slice(0, limit)
}

export function getProductsByCategory(categoryId: string): Product[] {
  return products.filter(
    (p) => p.isActive && (p.categoryId === categoryId || p.subcategoryId === categoryId)
  )
}

export function getRelatedProducts(product: Product, limit: number = 4): Product[] {
  return products
    .filter(
      (p) =>
        p.isActive &&
        p.id !== product.id &&
        (p.categoryId === product.categoryId || p.subcategoryId === product.subcategoryId)
    )
    .slice(0, limit)
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase()
  return products.filter(
    (p) =>
      p.isActive &&
      (p.name.toLowerCase().includes(lowerQuery) ||
        p.shortDescription.toLowerCase().includes(lowerQuery))
  )
}

export function getFilteredProducts(filters: ProductFilters): PaginatedResponse<Product> {
  let filtered = products.filter((p) => p.isActive)

  // Category filter
  if (filters.categoryId) {
    filtered = filtered.filter(
      (p) => p.categoryId === filters.categoryId || p.subcategoryId === filters.categoryId
    )
  }

  // Subcategory filter
  if (filters.subcategoryId) {
    filtered = filtered.filter((p) => p.subcategoryId === filters.subcategoryId)
  }

  // Price filters
  if (filters.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= filters.minPrice!)
  }
  if (filters.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= filters.maxPrice!)
  }

  // Stock filter
  if (filters.inStock) {
    filtered = filtered.filter((p) => p.stock > 0)
  }

  // Sorting
  switch (filters.sortBy) {
    case 'price-asc':
      filtered.sort((a, b) => a.price - b.price)
      break
    case 'price-desc':
      filtered.sort((a, b) => b.price - a.price)
      break
    case 'newest':
      filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      break
    case 'popular':
    default:
      filtered.sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0))
  }

  // Pagination
  const page = filters.page || 1
  const pageSize = filters.pageSize || 12
  const total = filtered.length
  const totalPages = Math.ceil(total / pageSize)
  const start = (page - 1) * pageSize
  const items = filtered.slice(start, start + pageSize)

  return {
    items,
    total,
    page,
    pageSize,
    totalPages,
  }
}

