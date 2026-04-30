const revealItems = document.querySelectorAll(".section, .stats article, .hero-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
  }
);

revealItems.forEach((item) => {
  item.classList.add("reveal");
  observer.observe(item);
});

const translations = {
  tr: {
    meta: {
      title: "Velora Events",
      description:
        "İstanbul'da düğün, davet ve kurumsal etkinlikler için premium catering ve organizasyon çözümleri.",
    },
    "brand.tagline": "Luxury Catering & Event Design",
    "nav.services": "Hizmetler",
    "nav.packages": "Paketler",
    "nav.gallery": "Galeri",
    "nav.reviews": "Yorumlar",
    "nav.contact": "İletişim",
    "hero.eyebrow": "Catering ve organizasyon",
    "hero.title": "Avrupa'nın en seçkin catering hizmeti",
    "hero.primaryCta": "Hızlı Teklif Al",
    "hero.secondaryCta": "Paketleri İncele",
    "hero.trust1": "Kurumsal, özel ve konsept etkinlik uzmanlığı",
    "hero.trust2": "Menü, dekor, ekip ve operasyon planlaması bir arada",
    "hero.cardLabel": "Bu sezon en çok seçilen paket",
    "hero.cardTitle": "Velora Signature Wedding Dinner",
    "hero.cardPrice": "Kişi başı €38",
    "hero.cardMin": "Minimum 60 kişi",
    "hero.cardFeature1": "Karşılama kokteyli ve servis akışı",
    "hero.cardFeature2": "Özel menü danışmanlığı ve şef dokunuşu",
    "hero.cardFeature3": "Masa üstü stilizasyon ve premium sunum",
    "hero.cardLink": "Bu paket için görüşme planlayın",
    "stats.events": "tamamlanan etkinlik",
    "stats.guests": "ağırlanan misafir",
    "stats.satisfaction": "müşteri memnuniyeti",
    "intro.eyebrow": "Velora Deneyimi",
    "intro.title":
      "Avrupa'nın en seçkin mekânlarında, markanıza ve davetinize uygun kusursuz catering hizmetleri.",
    "intro.officeTitle": "Ofis etkinlikleri",
    "intro.officeText":
      "Toplantı, kutlama ve ekip buluşmaları için düzenli, şık ve pratik servis çözümleri",
    "intro.weddingTitle": "Düğün & Nişan",
    "intro.weddingText": "Zarif masa düzeni, güçlü mutfak ve kusursuz operasyon",
    "intro.corporateTitle": "Kurumsal Etkinlikler",
    "intro.corporateText": "Lansman, gala, workshop ve VIP ağırlama çözümleri",
    "services.eyebrow": "Hizmet Alanlarımız",
    "services.title": "Her konsept için ayrı tasarlanmış servis ve organizasyon çözümleri",
    "services.weddingTitle": "Düğün ve Nişan Catering",
    "services.weddingText":
      "Açık büfe, kokteyl düzeni veya oturmalı davet kurgusu ile misafir deneyimini baştan sona planlıyoruz.",
    "services.weddingLink": "Detaylı bilgi alın",
    "services.corporateTitle": "Kurumsal Lansman ve Gala",
    "services.corporateText":
      "Markanızın tonuna uygun menü, servis ekibi, karşılama akışı ve premium sunum detayları hazırlıyoruz.",
    "services.corporateLink": "Kurumsal teklif isteyin",
    "services.venueTitle": "Özel Mekan Davetleri",
    "services.venueText":
      "Seçtiğiniz mekâna özel menü, servis düzeni ve konsept kurgusu ile davetinizi baştan sona planlıyoruz.",
    "services.venueLink": "Davetinizi planlayın",
    "services.birthdayTitle": "Doğum Günü ve Özel Kutlamalar",
    "services.birthdayText":
      "Butik kutlamalarda samimi ama etkileyici bir sofra ve servis dili oluşturuyoruz.",
    "services.birthdayLink": "Kutlama tasarlayın",
    "packages.eyebrow": "Öne Çıkan Paketler",
    "packages.title": "Bütçenize ve davet seviyenize göre şekillenen üç ana servis yaklaşımı",
    "packages.basicTag": "Essential",
    "packages.basicTitle": "Business Lunch",
    "packages.basicPrice": "Kişi başı €24",
    "packages.basicFeature1": "Ana yemek + yan ürün + tatlı",
    "packages.basicFeature2": "Düğün ve ofis toplantıları için ideal",
    "packages.basicFeature3": "Hızlı kurulum ve zamanında teslim",
    "packages.featuredTag": "En Çok Tercih Edilen",
    "packages.featuredTitle": "Velora Signature",
    "packages.featuredPrice": "Kişi başı €38",
    "packages.featuredFeature1": "Karşılama kokteyli ve iki aşamalı servis",
    "packages.featuredFeature2": "Canlı istasyon veya şef sunumu",
    "packages.featuredFeature3": "Premium ekipman ve masa üstü stilizasyon",
    "packages.prestigeTag": "Prestige",
    "packages.prestigeTitle": "Lüks Düğün Sofrası",
    "packages.prestigePrice": "Kişi başı €56",
    "packages.prestigeFeature1": "Özel menü danışmanlığı ve kişiselleştirme",
    "packages.prestigeFeature2": "VIP servis ekibi ve detay operasyon yönetimi",
    "packages.prestigeFeature3": "Gece sonu ikram ve özel sunum desteği",
    "why.eyebrow": "Neden Velora",
    "why.title": "Yalnızca yemek değil, davetin ritmini tasarlayan bir ekip.",
    "why.text":
      "Menüden masa düzenine, servis akışından misafir karşılama deneyimine kadar tüm katmanları tek elden yönetiyor; organizasyon gününde sizi detaylarla değil anın keyfiyle baş başa bırakıyoruz.",
    "why.feature1": "Özel mekâna göre uyarlanmış menü tasarımı",
    "why.feature2": "Şef, servis ve operasyon ekibi planlaması",
    "why.feature3": "Premium ekipman ve sunum dili",
    "why.feature4": "Marka veya davet konseptine uygun atmosfer kurgusu",
    "process.eyebrow": "Çalışma Şeklimiz",
    "process.title": "Hızlı başlayan, net ilerleyen ve güven veren planlama süreci",
    "process.step1Title": "Kısa Brifing",
    "process.step1Text":
      "Tarih, kişi sayısı, mekân, servis tipi ve beklentileri ilk görüşmede netleştiriyoruz.",
    "process.step2Title": "Konsept ve Menü",
    "process.step2Text":
      "Davetin tonu, menü yapısı, ekip ihtiyacı ve operasyon akışı için size özel kurgu hazırlıyoruz.",
    "process.step3Title": "Uygulama Günü",
    "process.step3Text":
      "Kurulum, servis, koordinasyon ve kapanış akışını tek merkezden yöneterek kusursuz teslim sağlıyoruz.",
    "gallery.eyebrow": "İlham Veren Kareler",
    "gallery.title": "Gerçek etkinlik hissi veren görsel bir vitrin",
    "gallery.text":
      "Şimdilik temsili bloklarla hazırladım; sonraki adımda gerçek etkinlik fotoğraflarınızı yerleştirebiliriz.",
    "gallery.birthday": "Doğum Günü Masa Düzeni",
    "gallery.wedding": "Düğün yemeği masa düzeni",
    "gallery.corporate": "Kurumsal lansman servisi",
    "gallery.selfService": "Self Servis Deneyimi",
    "reviews.eyebrow": "Misafir Yorumları",
    "reviews.title": "Güven veren deneyim, güçlü operasyon ve hatırlanan lezzet",
    "reviews.review1Text":
      '"Düğün organizasyonumuzda servis kalitesi, sunum detayları ve zaman yönetimi beklentimizin üzerindeydi."',
    "reviews.review1Role": "Özel davet sahibi",
    "reviews.review2Text":
      '"Kurumsal lansman gecemizde markamıza uygun, çok temiz ve çok şık bir catering deneyimi sundular."',
    "reviews.review2Role": "Marka yöneticisi",
    "reviews.review3Text":
      '"Boğaz davetimizde her detay düşünülmüştü. Hem lezzet hem operasyon tarafında çok profesyonel bir ekipti."',
    "reviews.review3Role": "Nişan organizasyonu",
    "contact.eyebrow": "İletişim",
    "contact.title": "Hayal ettiğiniz daveti birlikte planlayalım.",
    "contact.text":
      "Tarih, kişi sayısı ve davet tipinizi paylaşın; size uygun servis yaklaşımını ve ön teklif çerçevesini kısa sürede hazırlayalım.",
    "contact.point1": "İstanbul merkezli hizmet",
    "contact.point2": "24 saat içinde geri dönüş",
    "contact.point3": "WhatsApp ve telefon entegrasyonu eklenebilir",
    "contact.nameLabel": "Ad Soyad",
    "contact.namePlaceholder": "Örnek: Ayşe Yılmaz",
    "contact.typeLabel": "Etkinlik Tipi",
    "contact.typePlaceholder": "Düğün / kurumsal davet / özel kutlama",
    "contact.guestsLabel": "Kişi Sayısı",
    "contact.guestsPlaceholder": "Örnek: 120 kişi",
    "contact.contactLabel": "İletişim",
    "contact.contactPlaceholder": "Telefon veya e-posta",
    "contact.button": "Ön Teklif İste",
  },
  en: {
    meta: {
      title: "Velora Events",
      description:
        "Premium catering and event design solutions for weddings, private celebrations, and corporate events in Europe.",
    },
    "brand.tagline": "Luxury Catering & Event Design",
    "nav.services": "Services",
    "nav.packages": "Packages",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.eyebrow": "Catering and event design",
    "hero.title": "Europe's most distinguished catering service",
    "hero.primaryCta": "Get a Quick Quote",
    "hero.secondaryCta": "Explore Packages",
    "hero.trust1": "Expertise in corporate, private, and concept events",
    "hero.trust2": "Menu, decor, team, and operations planning in one place",
    "hero.cardLabel": "Most selected package this season",
    "hero.cardTitle": "Velora Signature Wedding Dinner",
    "hero.cardPrice": "From €38 per guest",
    "hero.cardMin": "Minimum 60 guests",
    "hero.cardFeature1": "Welcome cocktail and service flow",
    "hero.cardFeature2": "Private menu consultancy and chef touch",
    "hero.cardFeature3": "Tablescape styling and premium presentation",
    "hero.cardLink": "Schedule a consultation for this package",
    "stats.events": "completed events",
    "stats.guests": "hosted guests",
    "stats.satisfaction": "customer satisfaction",
    "intro.eyebrow": "The Velora Experience",
    "intro.title":
      "A flawless catering setup tailored to your brand and occasion in Europe's most distinguished venues.",
    "intro.officeTitle": "Office events",
    "intro.officeText":
      "Organized, stylish, and practical service solutions for meetings, celebrations, and team gatherings",
    "intro.weddingTitle": "Wedding & Engagement",
    "intro.weddingText": "Elegant table styling, strong cuisine, and seamless operations",
    "intro.corporateTitle": "Corporate Events",
    "intro.corporateText": "Launch, gala, workshop, and VIP hosting solutions",
    "services.eyebrow": "Our Services",
    "services.title": "Service and event solutions designed separately for every concept",
    "services.weddingTitle": "Wedding & Engagement Catering",
    "services.weddingText":
      "We plan the guest experience end to end with buffet, cocktail reception, or seated dinner concepts.",
    "services.weddingLink": "Get more details",
    "services.corporateTitle": "Corporate Launches & Galas",
    "services.corporateText":
      "We prepare menus, service teams, welcome flow, and premium presentation details aligned with your brand tone.",
    "services.corporateLink": "Request a corporate quote",
    "services.venueTitle": "Private Venue Events",
    "services.venueText":
      "We design your event from start to finish with venue-specific menus, service flow, and concept planning.",
    "services.venueLink": "Plan your event",
    "services.birthdayTitle": "Birthdays & Private Celebrations",
    "services.birthdayText":
      "For boutique celebrations, we create a warm yet impressive table and service language.",
    "services.birthdayLink": "Design your celebration",
    "packages.eyebrow": "Featured Packages",
    "packages.title": "Three core service approaches shaped by your budget and event level",
    "packages.basicTag": "Essential",
    "packages.basicTitle": "Business Lunch",
    "packages.basicPrice": "From €24 per guest",
    "packages.basicFeature1": "Main course + side + dessert",
    "packages.basicFeature2": "Ideal for weddings and office meetings",
    "packages.basicFeature3": "Fast setup and on-time delivery",
    "packages.featuredTag": "Most Preferred",
    "packages.featuredTitle": "Velora Signature",
    "packages.featuredPrice": "From €38 per guest",
    "packages.featuredFeature1": "Welcome cocktail and two-stage service",
    "packages.featuredFeature2": "Live station or chef presentation",
    "packages.featuredFeature3": "Premium equipment and tablescape styling",
    "packages.prestigeTag": "Prestige",
    "packages.prestigeTitle": "Luxury Wedding Table",
    "packages.prestigePrice": "From €56 per guest",
    "packages.prestigeFeature1": "Private menu consultancy and personalization",
    "packages.prestigeFeature2": "VIP service team and detailed operation management",
    "packages.prestigeFeature3": "Late-night treats and bespoke presentation support",
    "why.eyebrow": "Why Velora",
    "why.title": "Not just food, but a team that designs the rhythm of your event.",
    "why.text":
      "From menu design to table styling, from service flow to guest welcome experience, we manage every layer under one roof so you can enjoy the moment instead of the details.",
    "why.feature1": "Venue-adapted menu design",
    "why.feature2": "Chef, service, and operations team planning",
    "why.feature3": "Premium equipment and presentation language",
    "why.feature4": "Atmosphere design aligned with your brand or event concept",
    "process.eyebrow": "How We Work",
    "process.title": "A planning process that starts fast, moves clearly, and builds confidence",
    "process.step1Title": "Short Briefing",
    "process.step1Text":
      "We clarify date, guest count, venue, service type, and expectations in the first meeting.",
    "process.step2Title": "Concept & Menu",
    "process.step2Text":
      "We create a tailored concept covering tone, menu structure, staffing needs, and operations flow.",
    "process.step3Title": "Execution Day",
    "process.step3Text":
      "We manage setup, service, coordination, and closing flow from a single center for flawless delivery.",
    "gallery.eyebrow": "Inspiring Moments",
    "gallery.title": "A visual showcase that brings the event atmosphere to life",
    "gallery.text":
      "These sections now feature real examples; we can add more of your own event photos next.",
    "gallery.birthday": "Birthday table styling",
    "gallery.wedding": "Wedding dinner table setup",
    "gallery.corporate": "Corporate launch service",
    "gallery.selfService": "Self-service experience",
    "reviews.eyebrow": "Guest Reviews",
    "reviews.title": "Reliable experience, strong execution, and memorable taste",
    "reviews.review1Text":
      '"At our wedding, the service quality, presentation details, and time management exceeded our expectations."',
    "reviews.review1Role": "Private event host",
    "reviews.review2Text":
      '"At our corporate launch, they delivered a very clean and stylish catering experience aligned with our brand."',
    "reviews.review2Role": "Brand manager",
    "reviews.review3Text":
      '"Every detail of our Bosphorus event was carefully considered. They were highly professional in both flavor and operations."',
    "reviews.review3Role": "Engagement event",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's plan the event you have in mind together.",
    "contact.text":
      "Share your date, guest count, and event type, and we will quickly prepare the right service approach and a preliminary offer framework.",
    "contact.point1": "Europe-based service",
    "contact.point2": "Response within 24 hours",
    "contact.point3": "WhatsApp and phone integration can be added",
    "contact.nameLabel": "Full Name",
    "contact.namePlaceholder": "Example: Ayse Yilmaz",
    "contact.typeLabel": "Event Type",
    "contact.typePlaceholder": "Wedding / corporate event / private celebration",
    "contact.guestsLabel": "Guest Count",
    "contact.guestsPlaceholder": "Example: 120 guests",
    "contact.contactLabel": "Contact",
    "contact.contactPlaceholder": "Phone or email",
    "contact.button": "Request a Quote",
  },
  nl: {
    meta: {
      title: "Velora Events",
      description:
        "Premium catering- en eventdesignoplossingen voor bruiloften, privévieringen en bedrijfsevenementen in Europe.",
    },
    "brand.tagline": "Luxe Catering & Eventdesign",
    "nav.services": "Diensten",
    "nav.packages": "Pakketten",
    "nav.gallery": "Galerij",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "hero.eyebrow": "Catering en eventdesign",
    "hero.title": "Europa's meest exclusieve cateringservice",
    "hero.primaryCta": "Snelle Offerte",
    "hero.secondaryCta": "Bekijk Pakketten",
    "hero.trust1": "Specialist in zakelijke, privé- en conceptuele evenementen",
    "hero.trust2": "Menu, decor, team en operationele planning onder één dak",
    "hero.cardLabel": "Meest gekozen pakket van dit seizoen",
    "hero.cardTitle": "Velora Signature Wedding Dinner",
    "hero.cardPrice": "Vanaf €38 per gast",
    "hero.cardMin": "Minimaal 60 gasten",
    "hero.cardFeature1": "Welkomstcocktail en serviceflow",
    "hero.cardFeature2": "Persoonlijk menuadvies en chef-touch",
    "hero.cardFeature3": "Tafelstyling en premium presentatie",
    "hero.cardLink": "Plan een gesprek voor dit pakket",
    "stats.events": "afgeronde evenementen",
    "stats.guests": "ontvangen gasten",
    "stats.satisfaction": "klanttevredenheid",
    "intro.eyebrow": "De Velora Ervaring",
    "intro.title":
      "Een vlekkeloze cateringopzet, afgestemd op uw merk en gelegenheid op Europa's meest exclusieve locaties.",
    "intro.officeTitle": "Kantoorevenementen",
    "intro.officeText":
      "Georganiseerde, stijlvolle en praktische service-oplossingen voor vergaderingen, vieringen en teammomenten",
    "intro.weddingTitle": "Bruiloft & Verloving",
    "intro.weddingText": "Elegante tafelstyling, sterke keuken en foutloze uitvoering",
    "intro.corporateTitle": "Zakelijke Events",
    "intro.corporateText": "Lanceringen, gala's, workshops en VIP-ontvangsten",
    "services.eyebrow": "Onze Diensten",
    "services.title": "Service- en eventoplossingen, apart ontworpen voor elk concept",
    "services.weddingTitle": "Bruiloft & Verloving Catering",
    "services.weddingText":
      "Wij plannen de volledige gastervaring met buffet, cocktailreceptie of een zittend dinerconcept.",
    "services.weddingLink": "Meer informatie",
    "services.corporateTitle": "Zakelijke Lanceringen & Gala's",
    "services.corporateText":
      "Wij verzorgen menu's, serviceteams, ontvangstflow en premium presentatie die passen bij uw merkidentiteit.",
    "services.corporateLink": "Zakelijke offerte aanvragen",
    "services.venueTitle": "Events op Privélocaties",
    "services.venueText":
      "Wij ontwerpen uw evenement van begin tot eind met locatiegerichte menu's, serviceflow en conceptplanning.",
    "services.venueLink": "Plan uw evenement",
    "services.birthdayTitle": "Verjaardagen & Privévieringen",
    "services.birthdayText":
      "Voor boutique-vieringen creëren we een warme maar indrukwekkende tafel- en servicebeleving.",
    "services.birthdayLink": "Ontwerp uw viering",
    "packages.eyebrow": "Uitgelichte Pakketten",
    "packages.title": "Drie service-aanpakken afgestemd op uw budget en evenementniveau",
    "packages.basicTag": "Essential",
    "packages.basicTitle": "Business Lunch",
    "packages.basicPrice": "Vanaf €24 per gast",
    "packages.basicFeature1": "Hoofdgerecht + bijgerecht + dessert",
    "packages.basicFeature2": "Ideaal voor bruiloften en kantoorbijeenkomsten",
    "packages.basicFeature3": "Snelle opbouw en stipte levering",
    "packages.featuredTag": "Meest Gekozen",
    "packages.featuredTitle": "Velora Signature",
    "packages.featuredPrice": "Vanaf €38 per gast",
    "packages.featuredFeature1": "Welkomstcocktail en tweefasenservice",
    "packages.featuredFeature2": "Live station of chef-presentatie",
    "packages.featuredFeature3": "Premium materiaal en tafelstyling",
    "packages.prestigeTag": "Prestige",
    "packages.prestigeTitle": "Luxe Bruiloftstafel",
    "packages.prestigePrice": "Vanaf €56 per gast",
    "packages.prestigeFeature1": "Persoonlijk menuadvies en maatwerk",
    "packages.prestigeFeature2": "VIP-serviceteam en gedetailleerd operationeel beheer",
    "packages.prestigeFeature3": "Late-night bites en exclusieve presentatieondersteuning",
    "why.eyebrow": "Waarom Velora",
    "why.title": "Niet alleen eten, maar een team dat het ritme van uw event ontwerpt.",
    "why.text":
      "Van menu en tafelstyling tot serviceflow en ontvangstbeleving: wij beheren alles centraal zodat u van het moment kunt genieten in plaats van de details te regelen.",
    "why.feature1": "Menuontwerp afgestemd op de locatie",
    "why.feature2": "Planning van chef-, service- en operationele teams",
    "why.feature3": "Premium materialen en presentatiestijl",
    "why.feature4": "Sfeervorming passend bij uw merk of eventconcept",
    "process.eyebrow": "Onze Werkwijze",
    "process.title": "Een planningsproces dat snel start, helder verloopt en vertrouwen geeft",
    "process.step1Title": "Korte Briefing",
    "process.step1Text":
      "We bespreken datum, aantal gasten, locatie, servicetype en verwachtingen tijdens het eerste gesprek.",
    "process.step2Title": "Concept & Menu",
    "process.step2Text":
      "We maken een voorstel op maat voor sfeer, menustructuur, personeelsbehoefte en operationele flow.",
    "process.step3Title": "Uitvoeringsdag",
    "process.step3Text":
      "We beheren opbouw, service, coördinatie en afronding centraal voor een vlekkeloze oplevering.",
    "gallery.eyebrow": "Inspirerende Beelden",
    "gallery.title": "Een visuele showcase die de sfeer van het evenement laat voelen",
    "gallery.text":
      "Deze secties tonen nu echte voorbeelden; we kunnen later meer van uw eigen evenementen toevoegen.",
    "gallery.birthday": "Verjaardagstafel styling",
    "gallery.wedding": "Bruiloftsdiner tafelschikking",
    "gallery.corporate": "Zakelijke lanceringsservice",
    "gallery.selfService": "Self-service ervaring",
    "reviews.eyebrow": "Gastervaringen",
    "reviews.title": "Betrouwbare ervaring, sterke uitvoering en memorabele smaak",
    "reviews.review1Text":
      '"Tijdens onze bruiloft overtroffen de servicekwaliteit, presentatiedetails en timing al onze verwachtingen."',
    "reviews.review1Role": "Gastheer privé-evenement",
    "reviews.review2Text":
      '"Tijdens onze zakelijke lancering leverden zij een zeer verzorgde en stijlvolle cateringervaring die perfect bij ons merk paste."',
    "reviews.review2Role": "Brand manager",
    "reviews.review3Text":
      '"Aan elk detail van ons Bosporus-event was gedacht. Zowel qua smaak als uitvoering werkte het team uiterst professioneel."',
    "reviews.review3Role": "Verlovingsevenement",
    "contact.eyebrow": "Contact",
    "contact.title": "Laten we samen het evenement plannen dat u voor ogen heeft.",
    "contact.text":
      "Deel uw datum, aantal gasten en eventtype, dan werken wij snel een passende service-aanpak en eerste offerte uit.",
    "contact.point1": "Service vanuit Europa",
    "contact.point2": "Reactie binnen 24 uur",
    "contact.point3": "WhatsApp- en telefoonintegratie kan worden toegevoegd",
    "contact.nameLabel": "Volledige Naam",
    "contact.namePlaceholder": "Voorbeeld: Ayse Yilmaz",
    "contact.typeLabel": "Type Evenement",
    "contact.typePlaceholder": "Bruiloft / zakelijk event / privéviering",
    "contact.guestsLabel": "Aantal Gasten",
    "contact.guestsPlaceholder": "Voorbeeld: 120 gasten",
    "contact.contactLabel": "Contact",
    "contact.contactPlaceholder": "Telefoon of e-mail",
    "contact.button": "Vraag een Offerte Aan",
  },
};

const textNodes = document.querySelectorAll("[data-i18n]");
const placeholderNodes = document.querySelectorAll("[data-i18n-placeholder]");
const langButtons = document.querySelectorAll(".lang-button");
const langSwitch = document.querySelector(".lang-switch");
const langTrigger = document.querySelector(".lang-trigger");
const pageTitle = document.getElementById("page-title");
const pageDescription = document.getElementById("page-description");

function applyLanguage(lang) {
  const locale = translations[lang] ? lang : "tr";
  const dictionary = translations[locale];

  document.documentElement.lang = locale;
  pageTitle.textContent = dictionary.meta.title;
  pageDescription.setAttribute("content", dictionary.meta.description);

  textNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  placeholderNodes.forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      node.setAttribute("placeholder", dictionary[key]);
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === locale);
  });

  localStorage.setItem("velora-language", locale);
}

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang);
    langSwitch?.classList.remove("is-open");
    langTrigger?.setAttribute("aria-expanded", "false");
  });
});

langTrigger?.addEventListener("click", () => {
  const isOpen = langSwitch.classList.toggle("is-open");
  langTrigger.setAttribute("aria-expanded", String(isOpen));
});

document.addEventListener("click", (event) => {
  if (!langSwitch?.contains(event.target)) {
    langSwitch?.classList.remove("is-open");
    langTrigger?.setAttribute("aria-expanded", "false");
  }
});

const initialLanguage = localStorage.getItem("velora-language") || "tr";
applyLanguage(initialLanguage);
