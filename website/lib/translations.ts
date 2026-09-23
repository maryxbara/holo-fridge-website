import { Locale } from './i18n';

export type TranslationKey = keyof typeof translations.en;

export const translations = {
  en: {
    // Meta
    siteTitle: 'Holo Fridge - Smart Food & Fridge Assistant',
    siteDescription: 'Holo Fridge helps you track food, reduce waste, discover recipes, and build smarter shopping lists.',
    
    // Navbar
    navFeatures: 'Features',
    navHowItWorks: 'How it works',
    navMeetHolo: 'Meet Holo',
    navDownload: 'Download',
    navSupport: 'Support',
    navPrivacy: 'Privacy Policy',
    navTerms: 'Terms of Use',
    
    // Hero
    heroNowAvailable: 'Now available',
    heroTitle1: 'Your fridge,',
    heroTitle2: 'finally smart.',
    heroSubtitle: 'Track what you have, cook from it, waste less, and shop smarter — with Holo by your side.',
    heroFreeToStart: 'Free to start. Premium features available inside the app.',
    
    // Chips
    chipExpireSoon: '3 products expire soon',
    chipRecipeReady: 'Recipe ready in 15 min',
    chipShoppingUpdated: 'Shopping list updated',
    chipDinnerIdeas: 'Holo found dinner ideas',
    
    // Store Buttons
    downloadOnThe: 'Download on the',
    appStore: 'App Store',
    getItOn: 'Get it on',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Sound familiar?',
    problemSubtitle: 'Your fridge is full — but dinner feels impossible',
    problemItem1Title: 'Forgotten food',
    problemItem1Desc: 'Items get pushed to the back and expire before you remember them.',
    problemItem2Title: 'Recipe paralysis',
    problemItem2Desc: 'You have ingredients but no idea what to make.',
    problemItem3Title: 'Wasted trips',
    problemItem3Desc: 'You buy duplicates or forget what you actually need.',
    
    // Features Section
    featuresLabel: 'Features',
    featuresTitle: 'Everything you need to run a smarter kitchen',
    featuresSubtitle: 'From tracking to cooking to shopping — Holo handles it all.',
    feature1Title: 'Smart Inventory',
    feature1Desc: 'Know exactly what\'s in your fridge, freezer, and pantry — and when it expires.',
    feature2Title: 'AI Recipes',
    feature2Desc: 'Get personalized recipe ideas based on what you already have.',
    feature3Title: 'Shopping Lists',
    feature3Desc: 'Build lists that sync across devices and check off as you shop.',
    feature4Title: 'Expiry Alerts',
    feature4Desc: 'Never forget about that yogurt again. Get notified before food goes bad.',
    feature5Title: 'Family Sharing',
    feature5Desc: 'Share lists and inventory with your household. Everyone stays in sync.',
    feature6Title: 'Voice & Photo Input',
    feature6Desc: 'Add items by voice or photo. No typing required.',
    
    // App Preview Section
    appPreviewLabel: 'How it works',
    appPreviewTitle: 'Simple steps to a calmer kitchen',
    appPreviewSubtitle: 'Getting started takes less than a minute.',
    appPreviewStep1Title: 'Add your food',
    appPreviewStep1Desc: 'Scan, type, or speak — add items however works for you.',
    appPreviewStep2Title: 'Get suggestions',
    appPreviewStep2Desc: 'Holo suggests recipes, alerts you about expiring items, and keeps your lists up to date.',
    appPreviewStep3Title: 'Cook & shop smarter',
    appPreviewStep3Desc: 'Use what you have, waste less, and never forget what you need.',
    
    // Meet Holo Section
    meetHoloLabel: 'Meet Holo',
    meetHoloTitle: 'Your friendly kitchen assistant',
    meetHoloDesc: 'Holo is here to help you stay organized, reduce waste, and make cooking feel effortless. Think of Holo as a calm, helpful presence in your kitchen — always ready with a suggestion, never judging.',
    
    // Final CTA
    ctaLabel: 'Get Holo Fridge',
    ctaTitle: 'Ready to make your fridge smart?',
    ctaSubtitle: 'Start organizing your kitchen today. Download Holo Fridge and make your food feel effortless.',
    
    // Footer
    footerTagline: 'Smart food, calmer kitchens.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Terms of Use',
    footerContact: 'Contact',
    footerSupport: 'Support',
    footerGuides: 'Guides',
    footerCopyright: '© {year} Holo Fridge. All rights reserved.',
    footerMadeWith: 'Made with care.',
    
    // Guides
    guidesTitle: 'Guides',
    guidesSubtitle: 'Practical advice for reducing food waste and making the most of your kitchen.',
    guidesAvailableInEnglish: 'Guides are currently available in English.',
    guidesMinRead: 'min read',
    
    // Support Page
    supportTitle: 'Support',
    supportSubtitle: 'For any questions or help, reach us anytime — we reply within 24 hours.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Contact us',
    supportFaq: 'Frequently Asked Questions',
    supportFaq1Q: 'How do I add items to my fridge?',
    supportFaq1A: 'You can add items by typing, using voice input, scanning barcodes, or taking photos. Go to the home screen and tap the + button.',
    supportFaq2Q: 'How do I share my fridge with family?',
    supportFaq2A: 'Go to Settings → Family Sharing and invite members by email. They\'ll get access to shared lists and inventory.',
    supportFaq3Q: 'How do I cancel my subscription?',
    supportFaq3A: 'Subscriptions are managed through your App Store or Google Play account. Go to your store settings to manage or cancel.',
    supportFaq4Q: 'Is my data secure?',
    supportFaq4A: 'Yes. We use encryption in transit and at rest, and never sell your personal data. See our Privacy Policy for details.',
    
    // Privacy Page
    privacyTitle: 'Privacy Policy',
    privacyLastUpdated: 'Last updated: September 2026',
    
    // Terms Page
    termsTitle: 'Terms of Service',
    termsLastUpdated: 'Last updated: September 2026',
    
    // Coming Soon
    comingSoon: 'Coming soon!',
    
    // Delete Account Page
    deleteAccountTitle: 'Delete your Holo Fridge account',
    deleteAccountDesc: 'You can permanently delete your account and all associated data directly in the app:',
    deleteAccountStep1: 'Open Holo Fridge → Profile → Account',
    deleteAccountStep2: 'Tap Delete Account',
    deleteAccountStep3: 'Confirm twice — deletion is immediate and irreversible',
    deleteAccountNote: 'This removes your inventory, recipes, chat history, subscriptions, and auth credentials.',
    deleteAccountQuestions: 'Questions? Email',
  },
  
  uk: {
    // Meta
    siteTitle: 'Holo Fridge - Розумний помічник для їжі та холодильника',
    siteDescription: 'Holo Fridge допомагає відстежувати продукти, зменшувати відходи, відкривати рецепти та створювати розумніші списки покупок.',
    
    // Navbar
    navFeatures: 'Функції',
    navHowItWorks: 'Як це працює',
    navMeetHolo: 'Познайомтесь з Holo',
    navDownload: 'Завантажити',
    navSupport: 'Підтримка',
    navPrivacy: 'Політика конфіденційності',
    navTerms: 'Умови використання',
    
    // Hero
    heroNowAvailable: 'Вже доступно',
    heroTitle1: 'Ваш холодильник,',
    heroTitle2: 'нарешті розумний.',
    heroSubtitle: 'Відстежуйте, що у вас є, готуйте з цього, витрачайте менше та купуйте розумніше — з Holo поруч.',
    heroFreeToStart: 'Безкоштовний старт. Преміум-функції доступні в додатку.',
    
    // Chips
    chipExpireSoon: '3 продукти скоро зіпсуються',
    chipRecipeReady: 'Рецепт готовий за 15 хв',
    chipShoppingUpdated: 'Список покупок оновлено',
    chipDinnerIdeas: 'Holo знайшов ідеї для вечері',
    
    // Store Buttons
    downloadOnThe: 'Завантажити в',
    appStore: 'App Store',
    getItOn: 'Отримати в',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Знайоме?',
    problemSubtitle: 'Ваш холодильник повний — але вечеря здається неможливою',
    problemItem1Title: 'Забуті продукти',
    problemItem1Desc: 'Продукти заштовхуються назад і псуються, перш ніж ви про них згадаєте.',
    problemItem2Title: 'Параліч рецептів',
    problemItem2Desc: 'У вас є інгредієнти, але немає ідей, що приготувати.',
    problemItem3Title: 'Марні походи',
    problemItem3Desc: 'Ви купуєте дублікати або забуваєте, що вам насправді потрібно.',
    
    // Features Section
    featuresLabel: 'Функції',
    featuresTitle: 'Все, що потрібно для розумнішої кухні',
    featuresSubtitle: 'Від відстеження до приготування та покупок — Holo впорається з усім.',
    feature1Title: 'Розумний інвентар',
    feature1Desc: 'Знайте точно, що є у вашому холодильнику, морозильнику та коморі — і коли термін придатності закінчується.',
    feature2Title: 'AI Рецепти',
    feature2Desc: 'Отримуйте персоналізовані ідеї рецептів на основі того, що у вас вже є.',
    feature3Title: 'Списки покупок',
    feature3Desc: 'Створюйте списки, які синхронізуються між пристроями, та відмічайте під час покупок.',
    feature4Title: 'Сповіщення про термін',
    feature4Desc: 'Ніколи більше не забувайте про той йогурт. Отримуйте сповіщення до того, як їжа зіпсується.',
    feature5Title: 'Сімейний доступ',
    feature5Desc: 'Діліться списками та інвентарем з домогосподарством. Усі залишаються в курсі.',
    feature6Title: 'Голос і фото',
    feature6Desc: 'Додавайте продукти голосом або фото. Друкувати не потрібно.',
    
    // App Preview Section
    appPreviewLabel: 'Як це працює',
    appPreviewTitle: 'Прості кроки до спокійнішої кухні',
    appPreviewSubtitle: 'Початок роботи займає менше хвилини.',
    appPreviewStep1Title: 'Додайте свою їжу',
    appPreviewStep1Desc: 'Скануйте, друкуйте або говоріть — додавайте продукти як вам зручно.',
    appPreviewStep2Title: 'Отримуйте пропозиції',
    appPreviewStep2Desc: 'Holo пропонує рецепти, попереджає про продукти, що закінчуються, та підтримує ваші списки в актуальному стані.',
    appPreviewStep3Title: 'Готуйте та купуйте розумніше',
    appPreviewStep3Desc: 'Використовуйте те, що маєте, витрачайте менше та ніколи не забувайте, що вам потрібно.',
    
    // Meet Holo Section
    meetHoloLabel: 'Познайомтесь з Holo',
    meetHoloTitle: 'Ваш дружній кухонний помічник',
    meetHoloDesc: 'Holo тут, щоб допомогти вам залишатися організованими, зменшувати відходи та робити приготування їжі легким. Думайте про Holo як про спокійну, корисну присутність на вашій кухні — завжди готову з пропозицією, ніколи не засуджуючи.',
    
    // Final CTA
    ctaLabel: 'Отримати Holo Fridge',
    ctaTitle: 'Готові зробити ваш холодильник розумним?',
    ctaSubtitle: 'Почніть організовувати свою кухню сьогодні. Завантажте Holo Fridge і зробіть вашу їжу легкою.',
    
    // Footer
    footerTagline: 'Розумна їжа, спокійніші кухні.',
    footerPrivacy: 'Політика конфіденційності',
    footerTerms: 'Умови використання',
    footerContact: 'Контакти',
    footerSupport: 'Підтримка',
    footerGuides: 'Поради',
    footerCopyright: '© {year} Holo Fridge. Усі права захищені.',
    footerMadeWith: 'Зроблено з турботою.',
    
    // Guides
    guidesTitle: 'Поради',
    guidesSubtitle: 'Практичні поради щодо зменшення харчових відходів та ефективного використання вашої кухні.',
    guidesAvailableInEnglish: 'Поради наразі доступні англійською мовою.',
    guidesMinRead: 'хв читання',
    
    // Support Page
    supportTitle: 'Підтримка',
    supportSubtitle: 'З будь-якими питаннями звертайтеся до нас у будь-який час — ми відповідаємо протягом 24 годин.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Зв\'яжіться з нами',
    supportFaq: 'Часті запитання',
    supportFaq1Q: 'Як додати продукти до холодильника?',
    supportFaq1A: 'Ви можете додавати продукти, друкуючи, використовуючи голосовий ввід, скануючи штрих-коди або фотографуючи. Перейдіть на головний екран і натисніть кнопку +.',
    supportFaq2Q: 'Як поділитися холодильником з сім\'єю?',
    supportFaq2A: 'Перейдіть до Налаштування → Сімейний доступ і запросіть учасників електронною поштою. Вони отримають доступ до спільних списків та інвентарю.',
    supportFaq3Q: 'Як скасувати підписку?',
    supportFaq3A: 'Підписки керуються через ваш обліковий запис App Store або Google Play. Перейдіть до налаштувань магазину, щоб керувати або скасувати.',
    supportFaq4Q: 'Чи мої дані в безпеці?',
    supportFaq4A: 'Так. Ми використовуємо шифрування при передачі та зберіганні, і ніколи не продаємо ваші особисті дані. Дивіться нашу Політику конфіденційності для деталей.',
    
    // Privacy Page
    privacyTitle: 'Політика конфіденційності',
    privacyLastUpdated: 'Останнє оновлення: Вересень 2026',
    
    // Terms Page
    termsTitle: 'Умови надання послуг',
    termsLastUpdated: 'Останнє оновлення: Вересень 2026',
    
    // Coming Soon
    comingSoon: 'Скоро!',
    
    // Delete Account Page
    deleteAccountTitle: 'Видалити обліковий запис Holo Fridge',
    deleteAccountDesc: 'Ви можете назавжди видалити свій обліковий запис та всі пов\'язані дані безпосередньо в додатку:',
    deleteAccountStep1: 'Відкрийте Holo Fridge → Профіль → Обліковий запис',
    deleteAccountStep2: 'Натисніть Видалити обліковий запис',
    deleteAccountStep3: 'Підтвердіть двічі — видалення негайне та незворотне',
    deleteAccountNote: 'Це видаляє ваш інвентар, рецепти, історію чату, підписки та облікові дані.',
    deleteAccountQuestions: 'Питання? Напишіть на',
  },
  
  ro: {
    // Meta
    siteTitle: 'Holo Fridge - Asistent inteligent pentru alimente și frigider',
    siteDescription: 'Holo Fridge te ajută să urmărești alimentele, să reduci risipa, să descoperi rețete și să creezi liste de cumpărături mai inteligente.',
    
    // Navbar
    navFeatures: 'Caracteristici',
    navHowItWorks: 'Cum funcționează',
    navMeetHolo: 'Cunoaște-l pe Holo',
    navDownload: 'Descarcă',
    navSupport: 'Suport',
    navPrivacy: 'Politica de confidențialitate',
    navTerms: 'Termeni de utilizare',
    
    // Hero
    heroNowAvailable: 'Disponibil acum',
    heroTitle1: 'Frigiderul tău,',
    heroTitle2: 'în sfârșit inteligent.',
    heroSubtitle: 'Urmărește ce ai, gătește din asta, risipește mai puțin și cumpără mai inteligent — cu Holo alături.',
    heroFreeToStart: 'Gratuit la start. Funcții premium disponibile în aplicație.',
    
    // Chips
    chipExpireSoon: '3 produse expiră curând',
    chipRecipeReady: 'Rețetă gata în 15 min',
    chipShoppingUpdated: 'Lista de cumpărături actualizată',
    chipDinnerIdeas: 'Holo a găsit idei pentru cină',
    
    // Store Buttons
    downloadOnThe: 'Descarcă din',
    appStore: 'App Store',
    getItOn: 'Obține de pe',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Sună cunoscut?',
    problemSubtitle: 'Frigiderul tău e plin — dar cina pare imposibilă',
    problemItem1Title: 'Alimente uitate',
    problemItem1Desc: 'Produsele sunt împinse în spate și expiră înainte să îți amintești de ele.',
    problemItem2Title: 'Paralizia rețetelor',
    problemItem2Desc: 'Ai ingrediente dar nicio idee ce să gătești.',
    problemItem3Title: 'Drumuri inutile',
    problemItem3Desc: 'Cumperi duplicate sau uiți ce ai nevoie de fapt.',
    
    // Features Section
    featuresLabel: 'Caracteristici',
    featuresTitle: 'Tot ce ai nevoie pentru o bucătărie mai inteligentă',
    featuresSubtitle: 'De la urmărire la gătit și cumpărături — Holo se ocupă de tot.',
    feature1Title: 'Inventar inteligent',
    feature1Desc: 'Știi exact ce ai în frigider, congelator și cămară — și când expiră.',
    feature2Title: 'Rețete AI',
    feature2Desc: 'Primești idei de rețete personalizate bazate pe ce ai deja.',
    feature3Title: 'Liste de cumpărături',
    feature3Desc: 'Creezi liste care se sincronizează între dispozitive și bifezi pe măsură ce cumperi.',
    feature4Title: 'Alerte de expirare',
    feature4Desc: 'Nu mai uita niciodată de iaurtul ăla. Primești notificări înainte să se strice mâncarea.',
    feature5Title: 'Partajare în familie',
    feature5Desc: 'Partajează liste și inventar cu familia. Toți rămân sincronizați.',
    feature6Title: 'Voce și foto',
    feature6Desc: 'Adaugă produse prin voce sau foto. Fără să tastezi.',
    
    // App Preview Section
    appPreviewLabel: 'Cum funcționează',
    appPreviewTitle: 'Pași simpli către o bucătărie mai calmă',
    appPreviewSubtitle: 'Să începi durează mai puțin de un minut.',
    appPreviewStep1Title: 'Adaugă-ți alimentele',
    appPreviewStep1Desc: 'Scanează, tastează sau vorbește — adaugă produse cum îți convine.',
    appPreviewStep2Title: 'Primește sugestii',
    appPreviewStep2Desc: 'Holo sugerează rețete, te avertizează despre produsele care expiră și îți ține listele actualizate.',
    appPreviewStep3Title: 'Gătește și cumpără mai inteligent',
    appPreviewStep3Desc: 'Folosește ce ai, risipește mai puțin și nu uita niciodată ce ai nevoie.',
    
    // Meet Holo Section
    meetHoloLabel: 'Cunoaște-l pe Holo',
    meetHoloTitle: 'Asistentul tău prietenos de bucătărie',
    meetHoloDesc: 'Holo e aici să te ajute să stai organizat, să reduci risipa și să faci gătitul fără efort. Gândește-te la Holo ca la o prezență calmă și utilă în bucătărie — mereu gata cu o sugestie, fără să judece.',
    
    // Final CTA
    ctaLabel: 'Obține Holo Fridge',
    ctaTitle: 'Gata să-ți faci frigiderul inteligent?',
    ctaSubtitle: 'Începe să-ți organizezi bucătăria azi. Descarcă Holo Fridge și fă mâncarea să pară fără efort.',
    
    // Footer
    footerTagline: 'Alimente inteligente, bucătării mai calme.',
    footerPrivacy: 'Politica de confidențialitate',
    footerTerms: 'Termeni de utilizare',
    footerContact: 'Contact',
    footerSupport: 'Suport',
    footerGuides: 'Ghiduri',
    footerCopyright: '© {year} Holo Fridge. Toate drepturile rezervate.',
    footerMadeWith: 'Făcut cu grijă.',
    
    // Guides
    guidesTitle: 'Ghiduri',
    guidesSubtitle: 'Sfaturi practice pentru reducerea risipei alimentare și utilizarea eficientă a bucătăriei.',
    guidesAvailableInEnglish: 'Ghidurile sunt disponibile momentan în engleză.',
    guidesMinRead: 'min citire',
    
    // Support Page
    supportTitle: 'Suport',
    supportSubtitle: 'Pentru orice întrebări sau ajutor, contactează-ne oricând — răspundem în 24 de ore.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Contactează-ne',
    supportFaq: 'Întrebări frecvente',
    supportFaq1Q: 'Cum adaug produse în frigider?',
    supportFaq1A: 'Poți adăuga produse tastând, folosind vocea, scanând coduri de bare sau făcând poze. Du-te pe ecranul principal și apasă butonul +.',
    supportFaq2Q: 'Cum partajez frigiderul cu familia?',
    supportFaq2A: 'Du-te la Setări → Partajare în familie și invită membri prin email. Vor primi acces la listele și inventarul partajat.',
    supportFaq3Q: 'Cum îmi anulez abonamentul?',
    supportFaq3A: 'Abonamentele sunt gestionate prin contul tău App Store sau Google Play. Du-te la setările magazinului pentru a gestiona sau anula.',
    supportFaq4Q: 'Sunt datele mele în siguranță?',
    supportFaq4A: 'Da. Folosim criptare în tranzit și în stocare, și nu vindem niciodată datele tale personale. Vezi Politica noastră de confidențialitate pentru detalii.',
    
    // Privacy Page
    privacyTitle: 'Politica de confidențialitate',
    privacyLastUpdated: 'Ultima actualizare: Septembrie 2026',
    
    // Terms Page
    termsTitle: 'Termeni și condiții',
    termsLastUpdated: 'Ultima actualizare: Septembrie 2026',
    
    // Coming Soon
    comingSoon: 'În curând!',
    
    // Delete Account Page
    deleteAccountTitle: 'Șterge contul Holo Fridge',
    deleteAccountDesc: 'Poți șterge permanent contul și toate datele asociate direct din aplicație:',
    deleteAccountStep1: 'Deschide Holo Fridge → Profil → Cont',
    deleteAccountStep2: 'Apasă Șterge contul',
    deleteAccountStep3: 'Confirmă de două ori — ștergerea este imediată și ireversibilă',
    deleteAccountNote: 'Aceasta elimină inventarul, rețetele, istoricul conversațiilor, abonamentele și credențialele de autentificare.',
    deleteAccountQuestions: 'Întrebări? Email',
  },
  
  pl: {
    // Meta
    siteTitle: 'Holo Fridge - Inteligentny asystent do jedzenia i lodówki',
    siteDescription: 'Holo Fridge pomaga śledzić jedzenie, ograniczać marnowanie, odkrywać przepisy i tworzyć mądrzejsze listy zakupów.',
    
    // Navbar
    navFeatures: 'Funkcje',
    navHowItWorks: 'Jak to działa',
    navMeetHolo: 'Poznaj Holo',
    navDownload: 'Pobierz',
    navSupport: 'Wsparcie',
    navPrivacy: 'Polityka prywatności',
    navTerms: 'Regulamin',
    
    // Hero
    heroNowAvailable: 'Już dostępne',
    heroTitle1: 'Twoja lodówka,',
    heroTitle2: 'wreszcie inteligentna.',
    heroSubtitle: 'Śledź co masz, gotuj z tego, marnuj mniej i kupuj mądrzej — z Holo u boku.',
    heroFreeToStart: 'Start za darmo. Funkcje premium dostępne w aplikacji.',
    
    // Chips
    chipExpireSoon: '3 produkty wkrótce się przeterminują',
    chipRecipeReady: 'Przepis gotowy w 15 min',
    chipShoppingUpdated: 'Lista zakupów zaktualizowana',
    chipDinnerIdeas: 'Holo znalazł pomysły na kolację',
    
    // Store Buttons
    downloadOnThe: 'Pobierz z',
    appStore: 'App Store',
    getItOn: 'Pobierz z',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Brzmi znajomo?',
    problemSubtitle: 'Twoja lodówka jest pełna — ale kolacja wydaje się niemożliwa',
    problemItem1Title: 'Zapomniane jedzenie',
    problemItem1Desc: 'Produkty zostają zepchnięte w tył i przeterminowują się, zanim o nich przypomnisz.',
    problemItem2Title: 'Paraliż przepisów',
    problemItem2Desc: 'Masz składniki, ale nie wiesz co przygotować.',
    problemItem3Title: 'Zmarnowane wyprawy',
    problemItem3Desc: 'Kupujesz duplikaty lub zapominasz czego naprawdę potrzebujesz.',
    
    // Features Section
    featuresLabel: 'Funkcje',
    featuresTitle: 'Wszystko czego potrzebujesz do mądrzejszej kuchni',
    featuresSubtitle: 'Od śledzenia przez gotowanie po zakupy — Holo zajmie się wszystkim.',
    feature1Title: 'Inteligentny inwentarz',
    feature1Desc: 'Wiedz dokładnie co masz w lodówce, zamrażarce i spiżarni — i kiedy się kończy.',
    feature2Title: 'Przepisy AI',
    feature2Desc: 'Otrzymuj spersonalizowane pomysły na przepisy na podstawie tego co już masz.',
    feature3Title: 'Listy zakupów',
    feature3Desc: 'Twórz listy synchronizowane między urządzeniami i odznaczaj podczas zakupów.',
    feature4Title: 'Alerty przydatności',
    feature4Desc: 'Nigdy więcej nie zapomnij o tym jogurcie. Otrzymuj powiadomienia zanim jedzenie się zepsuje.',
    feature5Title: 'Udostępnianie rodzinne',
    feature5Desc: 'Udostępniaj listy i inwentarz domownikom. Wszyscy są zsynchronizowani.',
    feature6Title: 'Głos i zdjęcia',
    feature6Desc: 'Dodawaj produkty głosem lub zdjęciem. Bez pisania.',
    
    // App Preview Section
    appPreviewLabel: 'Jak to działa',
    appPreviewTitle: 'Proste kroki do spokojniejszej kuchni',
    appPreviewSubtitle: 'Rozpoczęcie zajmuje mniej niż minutę.',
    appPreviewStep1Title: 'Dodaj swoje jedzenie',
    appPreviewStep1Desc: 'Skanuj, pisz lub mów — dodawaj produkty jak ci wygodnie.',
    appPreviewStep2Title: 'Otrzymuj sugestie',
    appPreviewStep2Desc: 'Holo sugeruje przepisy, ostrzega o produktach bliskich przeterminowania i aktualizuje twoje listy.',
    appPreviewStep3Title: 'Gotuj i kupuj mądrzej',
    appPreviewStep3Desc: 'Wykorzystuj co masz, marnuj mniej i nigdy nie zapominaj czego potrzebujesz.',
    
    // Meet Holo Section
    meetHoloLabel: 'Poznaj Holo',
    meetHoloTitle: 'Twój przyjazny asystent kuchenny',
    meetHoloDesc: 'Holo jest tutaj, aby pomóc ci być zorganizowanym, ograniczać marnowanie i sprawić, że gotowanie będzie łatwe. Myśl o Holo jak o spokojnej, pomocnej obecności w twojej kuchni — zawsze gotowej z sugestią, nigdy nie oceniającej.',
    
    // Final CTA
    ctaLabel: 'Pobierz Holo Fridge',
    ctaTitle: 'Gotowy uczynić swoją lodówkę inteligentną?',
    ctaSubtitle: 'Zacznij organizować swoją kuchnię już dziś. Pobierz Holo Fridge i spraw, by jedzenie było łatwe.',
    
    // Footer
    footerTagline: 'Inteligentne jedzenie, spokojniejsze kuchnie.',
    footerPrivacy: 'Polityka prywatności',
    footerTerms: 'Regulamin',
    footerContact: 'Kontakt',
    footerSupport: 'Wsparcie',
    footerGuides: 'Poradniki',
    footerCopyright: '© {year} Holo Fridge. Wszelkie prawa zastrzeżone.',
    footerMadeWith: 'Stworzone z troską.',
    
    // Guides
    guidesTitle: 'Poradniki',
    guidesSubtitle: 'Praktyczne porady dotyczące ograniczania marnowania żywności i efektywnego wykorzystania kuchni.',
    guidesAvailableInEnglish: 'Poradniki są obecnie dostępne w języku angielskim.',
    guidesMinRead: 'min czytania',
    
    // Support Page
    supportTitle: 'Wsparcie',
    supportSubtitle: 'W razie pytań lub pomocy, skontaktuj się z nami w dowolnym momencie — odpowiadamy w ciągu 24 godzin.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Skontaktuj się z nami',
    supportFaq: 'Często zadawane pytania',
    supportFaq1Q: 'Jak dodać produkty do lodówki?',
    supportFaq1A: 'Możesz dodawać produkty pisząc, używając głosu, skanując kody kreskowe lub robiąc zdjęcia. Przejdź do ekranu głównego i naciśnij przycisk +.',
    supportFaq2Q: 'Jak udostępnić lodówkę rodzinie?',
    supportFaq2A: 'Przejdź do Ustawienia → Udostępnianie rodzinne i zaproś członków przez email. Otrzymają dostęp do wspólnych list i inwentarza.',
    supportFaq3Q: 'Jak anulować subskrypcję?',
    supportFaq3A: 'Subskrypcje są zarządzane przez twoje konto App Store lub Google Play. Przejdź do ustawień sklepu, aby zarządzać lub anulować.',
    supportFaq4Q: 'Czy moje dane są bezpieczne?',
    supportFaq4A: 'Tak. Używamy szyfrowania w transmisji i przechowywaniu, i nigdy nie sprzedajemy twoich danych osobowych. Zobacz naszą Politykę prywatności po szczegóły.',
    
    // Privacy Page
    privacyTitle: 'Polityka prywatności',
    privacyLastUpdated: 'Ostatnia aktualizacja: Wrzesień 2026',
    
    // Terms Page
    termsTitle: 'Regulamin',
    termsLastUpdated: 'Ostatnia aktualizacja: Wrzesień 2026',
    
    // Coming Soon
    comingSoon: 'Wkrótce!',
    
    // Delete Account Page
    deleteAccountTitle: 'Usuń konto Holo Fridge',
    deleteAccountDesc: 'Możesz trwale usunąć swoje konto i wszystkie powiązane dane bezpośrednio w aplikacji:',
    deleteAccountStep1: 'Otwórz Holo Fridge → Profil → Konto',
    deleteAccountStep2: 'Naciśnij Usuń konto',
    deleteAccountStep3: 'Potwierdź dwukrotnie — usunięcie jest natychmiastowe i nieodwracalne',
    deleteAccountNote: 'To usuwa twój inwentarz, przepisy, historię czatu, subskrypcje i dane uwierzytelniające.',
    deleteAccountQuestions: 'Pytania? Email',
  },
  
  de: {
    // Meta
    siteTitle: 'Holo Fridge - Intelligenter Lebensmittel- & Kühlschrank-Assistent',
    siteDescription: 'Holo Fridge hilft dir, Lebensmittel zu verfolgen, Verschwendung zu reduzieren, Rezepte zu entdecken und intelligentere Einkaufslisten zu erstellen.',
    
    // Navbar
    navFeatures: 'Funktionen',
    navHowItWorks: 'So funktioniert\'s',
    navMeetHolo: 'Triff Holo',
    navDownload: 'Herunterladen',
    navSupport: 'Support',
    navPrivacy: 'Datenschutz',
    navTerms: 'Nutzungsbedingungen',
    
    // Hero
    heroNowAvailable: 'Jetzt verfügbar',
    heroTitle1: 'Dein Kühlschrank,',
    heroTitle2: 'endlich intelligent.',
    heroSubtitle: 'Verfolge, was du hast, koche damit, verschwende weniger und kaufe klüger ein — mit Holo an deiner Seite.',
    heroFreeToStart: 'Kostenlos starten. Premium-Funktionen in der App verfügbar.',
    
    // Chips
    chipExpireSoon: '3 Produkte laufen bald ab',
    chipRecipeReady: 'Rezept in 15 Min fertig',
    chipShoppingUpdated: 'Einkaufsliste aktualisiert',
    chipDinnerIdeas: 'Holo hat Abendessen-Ideen',
    
    // Store Buttons
    downloadOnThe: 'Laden im',
    appStore: 'App Store',
    getItOn: 'Jetzt bei',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Kommt dir bekannt vor?',
    problemSubtitle: 'Dein Kühlschrank ist voll — aber das Abendessen scheint unmöglich',
    problemItem1Title: 'Vergessene Lebensmittel',
    problemItem1Desc: 'Produkte werden nach hinten geschoben und verderben, bevor du dich erinnerst.',
    problemItem2Title: 'Rezept-Paralyse',
    problemItem2Desc: 'Du hast Zutaten, aber keine Idee, was du kochen sollst.',
    problemItem3Title: 'Vergeudete Einkäufe',
    problemItem3Desc: 'Du kaufst Duplikate oder vergisst, was du wirklich brauchst.',
    
    // Features Section
    featuresLabel: 'Funktionen',
    featuresTitle: 'Alles, was du für eine intelligentere Küche brauchst',
    featuresSubtitle: 'Vom Verfolgen übers Kochen bis zum Einkaufen — Holo erledigt alles.',
    feature1Title: 'Intelligentes Inventar',
    feature1Desc: 'Wisse genau, was in deinem Kühlschrank, Gefrierfach und Vorratsschrank ist — und wann es abläuft.',
    feature2Title: 'KI-Rezepte',
    feature2Desc: 'Erhalte personalisierte Rezeptideen basierend auf dem, was du bereits hast.',
    feature3Title: 'Einkaufslisten',
    feature3Desc: 'Erstelle Listen, die sich zwischen Geräten synchronisieren und hake beim Einkaufen ab.',
    feature4Title: 'Ablauf-Warnungen',
    feature4Desc: 'Vergiss nie wieder diesen Joghurt. Erhalte Benachrichtigungen, bevor Lebensmittel schlecht werden.',
    feature5Title: 'Familienfreigabe',
    feature5Desc: 'Teile Listen und Inventar mit deinem Haushalt. Alle bleiben synchron.',
    feature6Title: 'Sprache & Foto',
    feature6Desc: 'Füge Artikel per Sprache oder Foto hinzu. Kein Tippen nötig.',
    
    // App Preview Section
    appPreviewLabel: 'So funktioniert\'s',
    appPreviewTitle: 'Einfache Schritte zu einer ruhigeren Küche',
    appPreviewSubtitle: 'Der Einstieg dauert weniger als eine Minute.',
    appPreviewStep1Title: 'Füge deine Lebensmittel hinzu',
    appPreviewStep1Desc: 'Scannen, tippen oder sprechen — füge Artikel hinzu, wie es dir passt.',
    appPreviewStep2Title: 'Erhalte Vorschläge',
    appPreviewStep2Desc: 'Holo schlägt Rezepte vor, warnt dich bei ablaufenden Artikeln und hält deine Listen aktuell.',
    appPreviewStep3Title: 'Koche & kaufe klüger',
    appPreviewStep3Desc: 'Nutze, was du hast, verschwende weniger und vergiss nie, was du brauchst.',
    
    // Meet Holo Section
    meetHoloLabel: 'Triff Holo',
    meetHoloTitle: 'Dein freundlicher Küchenassistent',
    meetHoloDesc: 'Holo ist hier, um dir zu helfen, organisiert zu bleiben, Verschwendung zu reduzieren und das Kochen mühelos zu gestalten. Denke an Holo als ruhige, hilfreiche Präsenz in deiner Küche — immer bereit mit einem Vorschlag, ohne zu urteilen.',
    
    // Final CTA
    ctaLabel: 'Holo Fridge holen',
    ctaTitle: 'Bereit, deinen Kühlschrank intelligent zu machen?',
    ctaSubtitle: 'Beginne heute, deine Küche zu organisieren. Lade Holo Fridge herunter und mache dein Essen mühelos.',
    
    // Footer
    footerTagline: 'Intelligentes Essen, ruhigere Küchen.',
    footerPrivacy: 'Datenschutz',
    footerTerms: 'Nutzungsbedingungen',
    footerContact: 'Kontakt',
    footerSupport: 'Support',
    footerGuides: 'Ratgeber',
    footerCopyright: '© {year} Holo Fridge. Alle Rechte vorbehalten.',
    footerMadeWith: 'Mit Sorgfalt gemacht.',
    
    // Guides
    guidesTitle: 'Ratgeber',
    guidesSubtitle: 'Praktische Tipps zur Reduzierung von Lebensmittelverschwendung und effizienten Nutzung Ihrer Küche.',
    guidesAvailableInEnglish: 'Ratgeber sind derzeit auf Englisch verfügbar.',
    guidesMinRead: 'Min. Lesezeit',
    
    // Support Page
    supportTitle: 'Support',
    supportSubtitle: 'Bei Fragen oder Hilfe, kontaktiere uns jederzeit — wir antworten innerhalb von 24 Stunden.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Kontaktiere uns',
    supportFaq: 'Häufig gestellte Fragen',
    supportFaq1Q: 'Wie füge ich Artikel zum Kühlschrank hinzu?',
    supportFaq1A: 'Du kannst Artikel durch Tippen, Spracheingabe, Barcode-Scannen oder Fotos hinzufügen. Gehe zum Startbildschirm und tippe auf die +-Taste.',
    supportFaq2Q: 'Wie teile ich meinen Kühlschrank mit der Familie?',
    supportFaq2A: 'Gehe zu Einstellungen → Familienfreigabe und lade Mitglieder per E-Mail ein. Sie erhalten Zugang zu geteilten Listen und Inventar.',
    supportFaq3Q: 'Wie kündige ich mein Abo?',
    supportFaq3A: 'Abonnements werden über dein App Store oder Google Play Konto verwaltet. Gehe zu den Store-Einstellungen zum Verwalten oder Kündigen.',
    supportFaq4Q: 'Sind meine Daten sicher?',
    supportFaq4A: 'Ja. Wir nutzen Verschlüsselung bei Übertragung und Speicherung und verkaufen niemals deine persönlichen Daten. Siehe unsere Datenschutzrichtlinie für Details.',
    
    // Privacy Page
    privacyTitle: 'Datenschutzrichtlinie',
    privacyLastUpdated: 'Zuletzt aktualisiert: September 2026',
    
    // Terms Page
    termsTitle: 'Nutzungsbedingungen',
    termsLastUpdated: 'Zuletzt aktualisiert: September 2026',
    
    // Coming Soon
    comingSoon: 'Demnächst!',
    
    // Delete Account Page
    deleteAccountTitle: 'Holo Fridge Konto löschen',
    deleteAccountDesc: 'Du kannst dein Konto und alle zugehörigen Daten dauerhaft direkt in der App löschen:',
    deleteAccountStep1: 'Öffne Holo Fridge → Profil → Konto',
    deleteAccountStep2: 'Tippe auf Konto löschen',
    deleteAccountStep3: 'Bestätige zweimal — die Löschung ist sofort und unwiderruflich',
    deleteAccountNote: 'Dies entfernt dein Inventar, Rezepte, Chat-Verlauf, Abonnements und Anmeldedaten.',
    deleteAccountQuestions: 'Fragen? E-Mail an',
  },
  
  es: {
    // Meta
    siteTitle: 'Holo Fridge - Asistente inteligente de alimentos y nevera',
    siteDescription: 'Holo Fridge te ayuda a rastrear alimentos, reducir desperdicios, descubrir recetas y crear listas de compras más inteligentes.',
    
    // Navbar
    navFeatures: 'Características',
    navHowItWorks: 'Cómo funciona',
    navMeetHolo: 'Conoce a Holo',
    navDownload: 'Descargar',
    navSupport: 'Soporte',
    navPrivacy: 'Política de privacidad',
    navTerms: 'Términos de uso',
    
    // Hero
    heroNowAvailable: 'Ya disponible',
    heroTitle1: 'Tu nevera,',
    heroTitle2: 'finalmente inteligente.',
    heroSubtitle: 'Rastrea lo que tienes, cocina con ello, desperdicia menos y compra más inteligente — con Holo a tu lado.',
    heroFreeToStart: 'Gratis para empezar. Funciones premium disponibles en la app.',
    
    // Chips
    chipExpireSoon: '3 productos caducan pronto',
    chipRecipeReady: 'Receta lista en 15 min',
    chipShoppingUpdated: 'Lista de compras actualizada',
    chipDinnerIdeas: 'Holo encontró ideas para cenar',
    
    // Store Buttons
    downloadOnThe: 'Descargar en',
    appStore: 'App Store',
    getItOn: 'Disponible en',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: '¿Te suena familiar?',
    problemSubtitle: 'Tu nevera está llena — pero la cena parece imposible',
    problemItem1Title: 'Alimentos olvidados',
    problemItem1Desc: 'Los productos se quedan al fondo y caducan antes de que los recuerdes.',
    problemItem2Title: 'Parálisis de recetas',
    problemItem2Desc: 'Tienes ingredientes pero no sabes qué preparar.',
    problemItem3Title: 'Viajes desperdiciados',
    problemItem3Desc: 'Compras duplicados u olvidas lo que realmente necesitas.',
    
    // Features Section
    featuresLabel: 'Características',
    featuresTitle: 'Todo lo que necesitas para una cocina más inteligente',
    featuresSubtitle: 'Desde el seguimiento hasta cocinar y comprar — Holo se encarga de todo.',
    feature1Title: 'Inventario inteligente',
    feature1Desc: 'Sabe exactamente qué hay en tu nevera, congelador y despensa — y cuándo caduca.',
    feature2Title: 'Recetas IA',
    feature2Desc: 'Obtén ideas de recetas personalizadas basadas en lo que ya tienes.',
    feature3Title: 'Listas de compras',
    feature3Desc: 'Crea listas que se sincronizan entre dispositivos y marca mientras compras.',
    feature4Title: 'Alertas de caducidad',
    feature4Desc: 'Nunca más olvides ese yogur. Recibe notificaciones antes de que la comida se eche a perder.',
    feature5Title: 'Compartir en familia',
    feature5Desc: 'Comparte listas e inventario con tu hogar. Todos permanecen sincronizados.',
    feature6Title: 'Voz y foto',
    feature6Desc: 'Añade artículos por voz o foto. Sin necesidad de escribir.',
    
    // App Preview Section
    appPreviewLabel: 'Cómo funciona',
    appPreviewTitle: 'Pasos simples hacia una cocina más tranquila',
    appPreviewSubtitle: 'Empezar toma menos de un minuto.',
    appPreviewStep1Title: 'Añade tu comida',
    appPreviewStep1Desc: 'Escanea, escribe o habla — añade artículos como te convenga.',
    appPreviewStep2Title: 'Recibe sugerencias',
    appPreviewStep2Desc: 'Holo sugiere recetas, te alerta sobre artículos que caducan y mantiene tus listas actualizadas.',
    appPreviewStep3Title: 'Cocina y compra más inteligente',
    appPreviewStep3Desc: 'Usa lo que tienes, desperdicia menos y nunca olvides lo que necesitas.',
    
    // Meet Holo Section
    meetHoloLabel: 'Conoce a Holo',
    meetHoloTitle: 'Tu asistente de cocina amigable',
    meetHoloDesc: 'Holo está aquí para ayudarte a mantenerte organizado, reducir desperdicios y hacer que cocinar sea fácil. Piensa en Holo como una presencia tranquila y útil en tu cocina — siempre listo con una sugerencia, sin juzgar.',
    
    // Final CTA
    ctaLabel: 'Obtener Holo Fridge',
    ctaTitle: '¿Listo para hacer tu nevera inteligente?',
    ctaSubtitle: 'Empieza a organizar tu cocina hoy. Descarga Holo Fridge y haz que tu comida sea fácil.',
    
    // Footer
    footerTagline: 'Comida inteligente, cocinas más tranquilas.',
    footerPrivacy: 'Política de privacidad',
    footerTerms: 'Términos de uso',
    footerContact: 'Contacto',
    footerSupport: 'Soporte',
    footerGuides: 'Guías',
    footerCopyright: '© {year} Holo Fridge. Todos los derechos reservados.',
    footerMadeWith: 'Hecho con cuidado.',
    
    // Guides
    guidesTitle: 'Guías',
    guidesSubtitle: 'Consejos prácticos para reducir el desperdicio de alimentos y aprovechar al máximo tu cocina.',
    guidesAvailableInEnglish: 'Las guías están disponibles actualmente en inglés.',
    guidesMinRead: 'min de lectura',
    
    // Support Page
    supportTitle: 'Soporte',
    supportSubtitle: 'Para cualquier pregunta o ayuda, contáctanos en cualquier momento — respondemos en 24 horas.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Contáctanos',
    supportFaq: 'Preguntas frecuentes',
    supportFaq1Q: '¿Cómo añado artículos a mi nevera?',
    supportFaq1A: 'Puedes añadir artículos escribiendo, usando entrada de voz, escaneando códigos de barras o tomando fotos. Ve a la pantalla principal y toca el botón +.',
    supportFaq2Q: '¿Cómo comparto mi nevera con la familia?',
    supportFaq2A: 'Ve a Configuración → Compartir en familia e invita miembros por correo electrónico. Obtendrán acceso a listas e inventario compartidos.',
    supportFaq3Q: '¿Cómo cancelo mi suscripción?',
    supportFaq3A: 'Las suscripciones se gestionan a través de tu cuenta de App Store o Google Play. Ve a la configuración de la tienda para gestionar o cancelar.',
    supportFaq4Q: '¿Están mis datos seguros?',
    supportFaq4A: 'Sí. Usamos cifrado en tránsito y en reposo, y nunca vendemos tus datos personales. Consulta nuestra Política de privacidad para más detalles.',
    
    // Privacy Page
    privacyTitle: 'Política de privacidad',
    privacyLastUpdated: 'Última actualización: Septiembre 2026',
    
    // Terms Page
    termsTitle: 'Términos de servicio',
    termsLastUpdated: 'Última actualización: Septiembre 2026',
    
    // Coming Soon
    comingSoon: '¡Próximamente!',
    
    // Delete Account Page
    deleteAccountTitle: 'Eliminar tu cuenta de Holo Fridge',
    deleteAccountDesc: 'Puedes eliminar permanentemente tu cuenta y todos los datos asociados directamente en la app:',
    deleteAccountStep1: 'Abre Holo Fridge → Perfil → Cuenta',
    deleteAccountStep2: 'Toca Eliminar cuenta',
    deleteAccountStep3: 'Confirma dos veces — la eliminación es inmediata e irreversible',
    deleteAccountNote: 'Esto elimina tu inventario, recetas, historial de chat, suscripciones y credenciales de autenticación.',
    deleteAccountQuestions: 'Preguntas? Email',
  },
  
  it: {
    // Meta
    siteTitle: 'Holo Fridge - Assistente intelligente per cibo e frigorifero',
    siteDescription: 'Holo Fridge ti aiuta a tracciare il cibo, ridurre gli sprechi, scoprire ricette e creare liste della spesa più intelligenti.',
    
    // Navbar
    navFeatures: 'Caratteristiche',
    navHowItWorks: 'Come funziona',
    navMeetHolo: 'Conosci Holo',
    navDownload: 'Scarica',
    navSupport: 'Supporto',
    navPrivacy: 'Privacy Policy',
    navTerms: 'Termini di utilizzo',
    
    // Hero
    heroNowAvailable: 'Disponibile ora',
    heroTitle1: 'Il tuo frigorifero,',
    heroTitle2: 'finalmente intelligente.',
    heroSubtitle: 'Traccia cosa hai, cucina con quello, spreca meno e fai acquisti più intelligenti — con Holo al tuo fianco.',
    heroFreeToStart: 'Gratuito per iniziare. Funzioni premium disponibili nell\'app.',
    
    // Chips
    chipExpireSoon: '3 prodotti scadono presto',
    chipRecipeReady: 'Ricetta pronta in 15 min',
    chipShoppingUpdated: 'Lista della spesa aggiornata',
    chipDinnerIdeas: 'Holo ha trovato idee per cena',
    
    // Store Buttons
    downloadOnThe: 'Scarica su',
    appStore: 'App Store',
    getItOn: 'Disponibile su',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Ti suona familiare?',
    problemSubtitle: 'Il tuo frigorifero è pieno — ma la cena sembra impossibile',
    problemItem1Title: 'Cibo dimenticato',
    problemItem1Desc: 'I prodotti vengono spinti in fondo e scadono prima che te ne ricordi.',
    problemItem2Title: 'Paralisi delle ricette',
    problemItem2Desc: 'Hai ingredienti ma non sai cosa preparare.',
    problemItem3Title: 'Viaggi sprecati',
    problemItem3Desc: 'Compri duplicati o dimentichi cosa ti serve davvero.',
    
    // Features Section
    featuresLabel: 'Caratteristiche',
    featuresTitle: 'Tutto ciò di cui hai bisogno per una cucina più intelligente',
    featuresSubtitle: 'Dal tracciamento alla cucina agli acquisti — Holo gestisce tutto.',
    feature1Title: 'Inventario intelligente',
    feature1Desc: 'Sai esattamente cosa c\'è nel frigorifero, freezer e dispensa — e quando scade.',
    feature2Title: 'Ricette AI',
    feature2Desc: 'Ottieni idee di ricette personalizzate basate su ciò che già hai.',
    feature3Title: 'Liste della spesa',
    feature3Desc: 'Crea liste che si sincronizzano tra dispositivi e spunta mentre fai acquisti.',
    feature4Title: 'Avvisi di scadenza',
    feature4Desc: 'Non dimenticare mai più quello yogurt. Ricevi notifiche prima che il cibo vada a male.',
    feature5Title: 'Condivisione familiare',
    feature5Desc: 'Condividi liste e inventario con la tua famiglia. Tutti restano sincronizzati.',
    feature6Title: 'Voce e foto',
    feature6Desc: 'Aggiungi articoli con voce o foto. Senza digitare.',
    
    // App Preview Section
    appPreviewLabel: 'Come funziona',
    appPreviewTitle: 'Semplici passi verso una cucina più serena',
    appPreviewSubtitle: 'Iniziare richiede meno di un minuto.',
    appPreviewStep1Title: 'Aggiungi il tuo cibo',
    appPreviewStep1Desc: 'Scansiona, digita o parla — aggiungi articoli come preferisci.',
    appPreviewStep2Title: 'Ricevi suggerimenti',
    appPreviewStep2Desc: 'Holo suggerisce ricette, ti avvisa degli articoli in scadenza e mantiene le tue liste aggiornate.',
    appPreviewStep3Title: 'Cucina e acquista in modo più intelligente',
    appPreviewStep3Desc: 'Usa quello che hai, spreca meno e non dimenticare mai cosa ti serve.',
    
    // Meet Holo Section
    meetHoloLabel: 'Conosci Holo',
    meetHoloTitle: 'Il tuo amichevole assistente di cucina',
    meetHoloDesc: 'Holo è qui per aiutarti a restare organizzato, ridurre gli sprechi e rendere la cucina senza sforzo. Pensa a Holo come una presenza calma e utile nella tua cucina — sempre pronto con un suggerimento, mai giudicante.',
    
    // Final CTA
    ctaLabel: 'Ottieni Holo Fridge',
    ctaTitle: 'Pronto a rendere il tuo frigorifero intelligente?',
    ctaSubtitle: 'Inizia a organizzare la tua cucina oggi. Scarica Holo Fridge e rendi il tuo cibo senza sforzo.',
    
    // Footer
    footerTagline: 'Cibo intelligente, cucine più serene.',
    footerPrivacy: 'Privacy Policy',
    footerTerms: 'Termini di utilizzo',
    footerContact: 'Contatto',
    footerSupport: 'Supporto',
    footerGuides: 'Guide',
    footerCopyright: '© {year} Holo Fridge. Tutti i diritti riservati.',
    footerMadeWith: 'Fatto con cura.',
    
    // Guides
    guidesTitle: 'Guide',
    guidesSubtitle: 'Consigli pratici per ridurre lo spreco alimentare e sfruttare al meglio la tua cucina.',
    guidesAvailableInEnglish: 'Le guide sono attualmente disponibili in inglese.',
    guidesMinRead: 'min di lettura',
    
    // Support Page
    supportTitle: 'Supporto',
    supportSubtitle: 'Per qualsiasi domanda o aiuto, contattaci in qualsiasi momento — rispondiamo entro 24 ore.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Contattaci',
    supportFaq: 'Domande frequenti',
    supportFaq1Q: 'Come aggiungo articoli al mio frigorifero?',
    supportFaq1A: 'Puoi aggiungere articoli digitando, usando l\'input vocale, scansionando codici a barre o scattando foto. Vai alla schermata principale e tocca il pulsante +.',
    supportFaq2Q: 'Come condivido il mio frigorifero con la famiglia?',
    supportFaq2A: 'Vai a Impostazioni → Condivisione familiare e invita membri via email. Otterranno accesso a liste e inventario condivisi.',
    supportFaq3Q: 'Come annullo il mio abbonamento?',
    supportFaq3A: 'Gli abbonamenti sono gestiti tramite il tuo account App Store o Google Play. Vai alle impostazioni dello store per gestire o annullare.',
    supportFaq4Q: 'I miei dati sono sicuri?',
    supportFaq4A: 'Sì. Usiamo crittografia in transito e a riposo, e non vendiamo mai i tuoi dati personali. Consulta la nostra Privacy Policy per i dettagli.',
    
    // Privacy Page
    privacyTitle: 'Informativa sulla privacy',
    privacyLastUpdated: 'Ultimo aggiornamento: Settembre 2026',
    
    // Terms Page
    termsTitle: 'Termini di servizio',
    termsLastUpdated: 'Ultimo aggiornamento: Settembre 2026',
    
    // Coming Soon
    comingSoon: 'Prossimamente!',
    
    // Delete Account Page
    deleteAccountTitle: 'Elimina il tuo account Holo Fridge',
    deleteAccountDesc: 'Puoi eliminare permanentemente il tuo account e tutti i dati associati direttamente nell\'app:',
    deleteAccountStep1: 'Apri Holo Fridge → Profilo → Account',
    deleteAccountStep2: 'Tocca Elimina account',
    deleteAccountStep3: 'Conferma due volte — l\'eliminazione è immediata e irreversibile',
    deleteAccountNote: 'Questo rimuove il tuo inventario, ricette, cronologia chat, abbonamenti e credenziali di autenticazione.',
    deleteAccountQuestions: 'Domande? Email',
  },
  
  fr: {
    // Meta
    siteTitle: 'Holo Fridge - Assistant intelligent pour aliments et réfrigérateur',
    siteDescription: 'Holo Fridge vous aide à suivre vos aliments, réduire le gaspillage, découvrir des recettes et créer des listes de courses plus intelligentes.',
    
    // Navbar
    navFeatures: 'Fonctionnalités',
    navHowItWorks: 'Comment ça marche',
    navMeetHolo: 'Rencontrez Holo',
    navDownload: 'Télécharger',
    navSupport: 'Support',
    navPrivacy: 'Politique de confidentialité',
    navTerms: 'Conditions d\'utilisation',
    
    // Hero
    heroNowAvailable: 'Disponible maintenant',
    heroTitle1: 'Votre réfrigérateur,',
    heroTitle2: 'enfin intelligent.',
    heroSubtitle: 'Suivez ce que vous avez, cuisinez avec, gaspillez moins et faites des achats plus malins — avec Holo à vos côtés.',
    heroFreeToStart: 'Gratuit pour commencer. Fonctions premium disponibles dans l\'app.',
    
    // Chips
    chipExpireSoon: '3 produits expirent bientôt',
    chipRecipeReady: 'Recette prête en 15 min',
    chipShoppingUpdated: 'Liste de courses mise à jour',
    chipDinnerIdeas: 'Holo a trouvé des idées de dîner',
    
    // Store Buttons
    downloadOnThe: 'Télécharger sur',
    appStore: 'App Store',
    getItOn: 'Disponible sur',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Ça vous dit quelque chose?',
    problemSubtitle: 'Votre réfrigérateur est plein — mais le dîner semble impossible',
    problemItem1Title: 'Aliments oubliés',
    problemItem1Desc: 'Les produits sont poussés au fond et périment avant que vous vous en souveniez.',
    problemItem2Title: 'Paralysie des recettes',
    problemItem2Desc: 'Vous avez des ingrédients mais aucune idée de quoi préparer.',
    problemItem3Title: 'Déplacements gaspillés',
    problemItem3Desc: 'Vous achetez des doublons ou oubliez ce dont vous avez vraiment besoin.',
    
    // Features Section
    featuresLabel: 'Fonctionnalités',
    featuresTitle: 'Tout ce dont vous avez besoin pour une cuisine plus intelligente',
    featuresSubtitle: 'Du suivi à la cuisine en passant par les achats — Holo gère tout.',
    feature1Title: 'Inventaire intelligent',
    feature1Desc: 'Sachez exactement ce qu\'il y a dans votre réfrigérateur, congélateur et garde-manger — et quand ça expire.',
    feature2Title: 'Recettes IA',
    feature2Desc: 'Obtenez des idées de recettes personnalisées basées sur ce que vous avez déjà.',
    feature3Title: 'Listes de courses',
    feature3Desc: 'Créez des listes qui se synchronisent entre les appareils et cochez en faisant vos achats.',
    feature4Title: 'Alertes d\'expiration',
    feature4Desc: 'N\'oubliez plus jamais ce yaourt. Recevez des notifications avant que les aliments ne se gâtent.',
    feature5Title: 'Partage familial',
    feature5Desc: 'Partagez listes et inventaire avec votre foyer. Tout le monde reste synchronisé.',
    feature6Title: 'Voix et photo',
    feature6Desc: 'Ajoutez des articles par voix ou photo. Sans taper.',
    
    // App Preview Section
    appPreviewLabel: 'Comment ça marche',
    appPreviewTitle: 'Des étapes simples vers une cuisine plus sereine',
    appPreviewSubtitle: 'Commencer prend moins d\'une minute.',
    appPreviewStep1Title: 'Ajoutez vos aliments',
    appPreviewStep1Desc: 'Scannez, tapez ou parlez — ajoutez des articles comme bon vous semble.',
    appPreviewStep2Title: 'Recevez des suggestions',
    appPreviewStep2Desc: 'Holo suggère des recettes, vous alerte sur les articles qui expirent et maintient vos listes à jour.',
    appPreviewStep3Title: 'Cuisinez et achetez plus malin',
    appPreviewStep3Desc: 'Utilisez ce que vous avez, gaspillez moins et n\'oubliez jamais ce dont vous avez besoin.',
    
    // Meet Holo Section
    meetHoloLabel: 'Rencontrez Holo',
    meetHoloTitle: 'Votre assistant de cuisine amical',
    meetHoloDesc: 'Holo est là pour vous aider à rester organisé, réduire le gaspillage et rendre la cuisine sans effort. Pensez à Holo comme une présence calme et utile dans votre cuisine — toujours prêt avec une suggestion, sans jamais juger.',
    
    // Final CTA
    ctaLabel: 'Obtenir Holo Fridge',
    ctaTitle: 'Prêt à rendre votre réfrigérateur intelligent?',
    ctaSubtitle: 'Commencez à organiser votre cuisine aujourd\'hui. Téléchargez Holo Fridge et rendez votre alimentation sans effort.',
    
    // Footer
    footerTagline: 'Alimentation intelligente, cuisines plus sereines.',
    footerPrivacy: 'Politique de confidentialité',
    footerTerms: 'Conditions d\'utilisation',
    footerContact: 'Contact',
    footerSupport: 'Support',
    footerGuides: 'Guides',
    footerCopyright: '© {year} Holo Fridge. Tous droits réservés.',
    footerMadeWith: 'Fait avec soin.',
    
    // Guides
    guidesTitle: 'Guides',
    guidesSubtitle: 'Conseils pratiques pour réduire le gaspillage alimentaire et tirer le meilleur parti de votre cuisine.',
    guidesAvailableInEnglish: 'Les guides sont actuellement disponibles en anglais.',
    guidesMinRead: 'min de lecture',
    
    // Support Page
    supportTitle: 'Support',
    supportSubtitle: 'Pour toute question ou aide, contactez-nous à tout moment — nous répondons sous 24 heures.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Contactez-nous',
    supportFaq: 'Questions fréquentes',
    supportFaq1Q: 'Comment ajouter des articles à mon réfrigérateur?',
    supportFaq1A: 'Vous pouvez ajouter des articles en tapant, utilisant la saisie vocale, scannant des codes-barres ou prenant des photos. Allez à l\'écran principal et appuyez sur le bouton +.',
    supportFaq2Q: 'Comment partager mon réfrigérateur avec ma famille?',
    supportFaq2A: 'Allez dans Paramètres → Partage familial et invitez des membres par email. Ils auront accès aux listes et à l\'inventaire partagés.',
    supportFaq3Q: 'Comment annuler mon abonnement?',
    supportFaq3A: 'Les abonnements sont gérés via votre compte App Store ou Google Play. Allez dans les paramètres du store pour gérer ou annuler.',
    supportFaq4Q: 'Mes données sont-elles sécurisées?',
    supportFaq4A: 'Oui. Nous utilisons le chiffrement en transit et au repos, et ne vendons jamais vos données personnelles. Consultez notre Politique de confidentialité pour les détails.',
    
    // Privacy Page
    privacyTitle: 'Politique de confidentialité',
    privacyLastUpdated: 'Dernière mise à jour: Septembre 2026',
    
    // Terms Page
    termsTitle: 'Conditions de service',
    termsLastUpdated: 'Dernière mise à jour: Septembre 2026',
    
    // Coming Soon
    comingSoon: 'Bientôt!',
    
    // Delete Account Page
    deleteAccountTitle: 'Supprimer votre compte Holo Fridge',
    deleteAccountDesc: 'Vous pouvez supprimer définitivement votre compte et toutes les données associées directement dans l\'app:',
    deleteAccountStep1: 'Ouvrez Holo Fridge → Profil → Compte',
    deleteAccountStep2: 'Appuyez sur Supprimer le compte',
    deleteAccountStep3: 'Confirmez deux fois — la suppression est immédiate et irréversible',
    deleteAccountNote: 'Cela supprime votre inventaire, recettes, historique de chat, abonnements et identifiants d\'authentification.',
    deleteAccountQuestions: 'Questions? Email',
  },
  
  ru: {
    // Meta
    siteTitle: 'Holo Fridge - Умный помощник для еды и холодильника',
    siteDescription: 'Holo Fridge помогает отслеживать продукты, сокращать отходы, находить рецепты и составлять умные списки покупок.',
    
    // Navbar
    navFeatures: 'Функции',
    navHowItWorks: 'Как это работает',
    navMeetHolo: 'Познакомьтесь с Holo',
    navDownload: 'Скачать',
    navSupport: 'Поддержка',
    navPrivacy: 'Политика конфиденциальности',
    navTerms: 'Условия использования',
    
    // Hero
    heroNowAvailable: 'Уже доступно',
    heroTitle1: 'Ваш холодильник,',
    heroTitle2: 'наконец-то умный.',
    heroSubtitle: 'Отслеживайте, что у вас есть, готовьте из этого, тратьте меньше и покупайте умнее — с Holo рядом.',
    heroFreeToStart: 'Бесплатный старт. Премиум-функции доступны в приложении.',
    
    // Chips
    chipExpireSoon: '3 продукта скоро испортятся',
    chipRecipeReady: 'Рецепт готов за 15 мин',
    chipShoppingUpdated: 'Список покупок обновлён',
    chipDinnerIdeas: 'Holo нашёл идеи для ужина',
    
    // Store Buttons
    downloadOnThe: 'Загрузить в',
    appStore: 'App Store',
    getItOn: 'Доступно в',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Знакомо?',
    problemSubtitle: 'Ваш холодильник полон — но ужин кажется невозможным',
    problemItem1Title: 'Забытые продукты',
    problemItem1Desc: 'Продукты задвигаются назад и портятся, прежде чем вы о них вспомните.',
    problemItem2Title: 'Паралич рецептов',
    problemItem2Desc: 'У вас есть ингредиенты, но нет идей, что приготовить.',
    problemItem3Title: 'Бесполезные походы',
    problemItem3Desc: 'Вы покупаете дубликаты или забываете, что вам действительно нужно.',
    
    // Features Section
    featuresLabel: 'Функции',
    featuresTitle: 'Всё, что нужно для более умной кухни',
    featuresSubtitle: 'От отслеживания до готовки и покупок — Holo справится со всем.',
    feature1Title: 'Умный инвентарь',
    feature1Desc: 'Знайте точно, что есть в вашем холодильнике, морозилке и кладовой — и когда истекает срок.',
    feature2Title: 'ИИ-рецепты',
    feature2Desc: 'Получайте персонализированные идеи рецептов на основе того, что у вас уже есть.',
    feature3Title: 'Списки покупок',
    feature3Desc: 'Создавайте списки, которые синхронизируются между устройствами, и отмечайте во время покупок.',
    feature4Title: 'Уведомления о сроке',
    feature4Desc: 'Больше никогда не забывайте о том йогурте. Получайте уведомления до того, как еда испортится.',
    feature5Title: 'Семейный доступ',
    feature5Desc: 'Делитесь списками и инвентарём с домочадцами. Все остаются в курсе.',
    feature6Title: 'Голос и фото',
    feature6Desc: 'Добавляйте продукты голосом или фото. Печатать не нужно.',
    
    // App Preview Section
    appPreviewLabel: 'Как это работает',
    appPreviewTitle: 'Простые шаги к более спокойной кухне',
    appPreviewSubtitle: 'Начать работу займёт меньше минуты.',
    appPreviewStep1Title: 'Добавьте свою еду',
    appPreviewStep1Desc: 'Сканируйте, печатайте или говорите — добавляйте продукты как вам удобно.',
    appPreviewStep2Title: 'Получайте предложения',
    appPreviewStep2Desc: 'Holo предлагает рецепты, предупреждает о продуктах с истекающим сроком и поддерживает ваши списки актуальными.',
    appPreviewStep3Title: 'Готовьте и покупайте умнее',
    appPreviewStep3Desc: 'Используйте то, что имеете, тратьте меньше и никогда не забывайте, что вам нужно.',
    
    // Meet Holo Section
    meetHoloLabel: 'Познакомьтесь с Holo',
    meetHoloTitle: 'Ваш дружелюбный кухонный помощник',
    meetHoloDesc: 'Holo здесь, чтобы помочь вам оставаться организованными, сокращать отходы и делать готовку лёгкой. Думайте о Holo как о спокойном, полезном присутствии на вашей кухне — всегда готовом с предложением, никогда не осуждающем.',
    
    // Final CTA
    ctaLabel: 'Получить Holo Fridge',
    ctaTitle: 'Готовы сделать ваш холодильник умным?',
    ctaSubtitle: 'Начните организовывать свою кухню сегодня. Скачайте Holo Fridge и сделайте вашу еду лёгкой.',
    
    // Footer
    footerTagline: 'Умная еда, спокойные кухни.',
    footerPrivacy: 'Политика конфиденциальности',
    footerTerms: 'Условия использования',
    footerContact: 'Контакты',
    footerSupport: 'Поддержка',
    footerGuides: 'Руководства',
    footerCopyright: '© {year} Holo Fridge. Все права защищены.',
    footerMadeWith: 'Сделано с заботой.',
    
    // Guides
    guidesTitle: 'Руководства',
    guidesSubtitle: 'Практические советы по сокращению пищевых отходов и эффективному использованию кухни.',
    guidesAvailableInEnglish: 'Руководства пока доступны на английском языке.',
    guidesMinRead: 'мин чтения',
    
    // Support Page
    supportTitle: 'Поддержка',
    supportSubtitle: 'По любым вопросам обращайтесь к нам в любое время — мы отвечаем в течение 24 часов.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Свяжитесь с нами',
    supportFaq: 'Часто задаваемые вопросы',
    supportFaq1Q: 'Как добавить продукты в холодильник?',
    supportFaq1A: 'Вы можете добавлять продукты, печатая, используя голосовой ввод, сканируя штрих-коды или фотографируя. Перейдите на главный экран и нажмите кнопку +.',
    supportFaq2Q: 'Как поделиться холодильником с семьёй?',
    supportFaq2A: 'Перейдите в Настройки → Семейный доступ и пригласите участников по электронной почте. Они получат доступ к общим спискам и инвентарю.',
    supportFaq3Q: 'Как отменить подписку?',
    supportFaq3A: 'Подписки управляются через вашу учётную запись App Store или Google Play. Перейдите в настройки магазина, чтобы управлять или отменить.',
    supportFaq4Q: 'Мои данные в безопасности?',
    supportFaq4A: 'Да. Мы используем шифрование при передаче и хранении, и никогда не продаём ваши личные данные. Смотрите нашу Политику конфиденциальности для подробностей.',
    
    // Privacy Page
    privacyTitle: 'Политика конфиденциальности',
    privacyLastUpdated: 'Последнее обновление: Сентябрь 2026',
    
    // Terms Page
    termsTitle: 'Условия предоставления услуг',
    termsLastUpdated: 'Последнее обновление: Сентябрь 2026',
    
    // Coming Soon
    comingSoon: 'Скоро!',
    
    // Delete Account Page
    deleteAccountTitle: 'Удалить учётную запись Holo Fridge',
    deleteAccountDesc: 'Вы можете навсегда удалить свою учётную запись и все связанные данные прямо в приложении:',
    deleteAccountStep1: 'Откройте Holo Fridge → Профиль → Учётная запись',
    deleteAccountStep2: 'Нажмите Удалить учётную запись',
    deleteAccountStep3: 'Подтвердите дважды — удаление немедленное и необратимое',
    deleteAccountNote: 'Это удаляет ваш инвентарь, рецепты, историю чата, подписки и учётные данные.',
    deleteAccountQuestions: 'Вопросы? Напишите на',
  },
  
  lt: {
    // Meta
    siteTitle: 'Holo Fridge - Išmanusis maisto ir šaldytuvo asistentas',
    siteDescription: 'Holo Fridge padeda sekti maistą, mažinti atliekas, atrasti receptus ir kurti protingesnius pirkinių sąrašus.',
    
    // Navbar
    navFeatures: 'Funkcijos',
    navHowItWorks: 'Kaip tai veikia',
    navMeetHolo: 'Susipažink su Holo',
    navDownload: 'Atsisiųsti',
    navSupport: 'Pagalba',
    navPrivacy: 'Privatumo politika',
    navTerms: 'Naudojimo sąlygos',
    
    // Hero
    heroNowAvailable: 'Jau galima',
    heroTitle1: 'Tavo šaldytuvas,',
    heroTitle2: 'pagaliau protingas.',
    heroSubtitle: 'Sek, ką turi, gamink iš to, švaisty mažiau ir pirk protingiau — su Holo šalia.',
    heroFreeToStart: 'Nemokamas startas. Premium funkcijos programėlėje.',
    
    // Chips
    chipExpireSoon: '3 produktai greitai baigs galioti',
    chipRecipeReady: 'Receptas paruoštas per 15 min',
    chipShoppingUpdated: 'Pirkinių sąrašas atnaujintas',
    chipDinnerIdeas: 'Holo rado vakarienės idėjų',
    
    // Store Buttons
    downloadOnThe: 'Parsisiųsti iš',
    appStore: 'App Store',
    getItOn: 'Gauti iš',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Skamba pažįstamai?',
    problemSubtitle: 'Tavo šaldytuvas pilnas — bet vakarienė atrodo neįmanoma',
    problemItem1Title: 'Pamirštas maistas',
    problemItem1Desc: 'Produktai nustumiami į galą ir sugenda, kol prisimeni.',
    problemItem2Title: 'Receptų paralyžius',
    problemItem2Desc: 'Turi ingredientų, bet nežinai, ką gaminti.',
    problemItem3Title: 'Švaistomos kelionės',
    problemItem3Desc: 'Perki dublikatus arba pamiršti, ko iš tikrųjų reikia.',
    
    // Features Section
    featuresLabel: 'Funkcijos',
    featuresTitle: 'Viskas, ko reikia protingesnei virtuvei',
    featuresSubtitle: 'Nuo sekimo iki gaminimo ir apsipirkimo — Holo pasirūpins viskuo.',
    feature1Title: 'Išmanus inventorius',
    feature1Desc: 'Žinok tiksliai, kas yra tavo šaldytuve, šaldiklyje ir sandėliuke — ir kada baigia galioti.',
    feature2Title: 'AI receptai',
    feature2Desc: 'Gauk personalizuotas receptų idėjas pagal tai, ką jau turi.',
    feature3Title: 'Pirkinių sąrašai',
    feature3Desc: 'Kurk sąrašus, kurie sinchronizuojasi tarp įrenginių, ir žymėk perkant.',
    feature4Title: 'Galiojimo įspėjimai',
    feature4Desc: 'Niekada daugiau nepamiršk to jogurto. Gauk pranešimus prieš maistui sugedant.',
    feature5Title: 'Šeimos dalijimasis',
    feature5Desc: 'Dalinkis sąrašais ir inventoriumi su namų ūkiu. Visi lieka sinchronizuoti.',
    feature6Title: 'Balsas ir nuotrauka',
    feature6Desc: 'Pridėk produktus balsu arba nuotrauka. Nereikia rašyti.',
    
    // App Preview Section
    appPreviewLabel: 'Kaip tai veikia',
    appPreviewTitle: 'Paprasti žingsniai link ramesnės virtuvės',
    appPreviewSubtitle: 'Pradėti užtrunka mažiau nei minutę.',
    appPreviewStep1Title: 'Pridėk savo maistą',
    appPreviewStep1Desc: 'Skenuok, rašyk ar kalbėk — pridėk produktus kaip tau patogiau.',
    appPreviewStep2Title: 'Gauk pasiūlymus',
    appPreviewStep2Desc: 'Holo siūlo receptus, įspėja apie besibaigiantį galiojimą ir laiko tavo sąrašus atnaujintus.',
    appPreviewStep3Title: 'Gamink ir pirk protingiau',
    appPreviewStep3Desc: 'Naudok, ką turi, švaisty mažiau ir niekada nepamiršk, ko reikia.',
    
    // Meet Holo Section
    meetHoloLabel: 'Susipažink su Holo',
    meetHoloTitle: 'Tavo draugiškas virtuvės asistentas',
    meetHoloDesc: 'Holo čia, kad padėtų tau būti organizuotam, mažinti atliekas ir padaryti gaminimą lengvą. Galvok apie Holo kaip ramią, naudingą būtybę tavo virtuvėje — visada pasiruošusią su pasiūlymu, niekada neteisiančią.',
    
    // Final CTA
    ctaLabel: 'Gauti Holo Fridge',
    ctaTitle: 'Pasiruošęs padaryti šaldytuvą protingą?',
    ctaSubtitle: 'Pradėk organizuoti savo virtuvę šiandien. Atsisiųsk Holo Fridge ir padaryk maistą lengvą.',
    
    // Footer
    footerTagline: 'Protingas maistas, ramesnės virtuvės.',
    footerPrivacy: 'Privatumo politika',
    footerTerms: 'Naudojimo sąlygos',
    footerContact: 'Kontaktai',
    footerSupport: 'Pagalba',
    footerGuides: 'Gidai',
    footerCopyright: '© {year} Holo Fridge. Visos teisės saugomos.',
    footerMadeWith: 'Sukurta su rūpesčiu.',
    
    // Guides
    guidesTitle: 'Gidai',
    guidesSubtitle: 'Praktiniai patarimai, kaip sumažinti maisto švaistymą ir efektyviai naudoti virtuvę.',
    guidesAvailableInEnglish: 'Gidai šiuo metu prieinami anglų kalba.',
    guidesMinRead: 'min skaitymo',
    
    // Support Page
    supportTitle: 'Pagalba',
    supportSubtitle: 'Dėl bet kokių klausimų ar pagalbos kreipkitės bet kuriuo metu — atsakome per 24 valandas.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Susisiekite su mumis',
    supportFaq: 'Dažnai užduodami klausimai',
    supportFaq1Q: 'Kaip pridėti produktus į šaldytuvą?',
    supportFaq1A: 'Galite pridėti produktus rašydami, naudodami balsą, skenuodami brūkšninius kodus arba fotografuodami. Eikite į pagrindinį ekraną ir paspauskite + mygtuką.',
    supportFaq2Q: 'Kaip dalintis šaldytuvu su šeima?',
    supportFaq2A: 'Eikite į Nustatymai → Šeimos dalijimasis ir pakvieskite narius el. paštu. Jie gaus prieigą prie bendrų sąrašų ir inventoriaus.',
    supportFaq3Q: 'Kaip atšaukti prenumeratą?',
    supportFaq3A: 'Prenumeratos valdomos per jūsų App Store arba Google Play paskyrą. Eikite į parduotuvės nustatymus, kad valdytumėte ar atšauktumėte.',
    supportFaq4Q: 'Ar mano duomenys saugūs?',
    supportFaq4A: 'Taip. Naudojame šifravimą perdavimo ir saugojimo metu, ir niekada neparduodame jūsų asmeninių duomenų. Žiūrėkite mūsų Privatumo politiką daugiau informacijos.',
    
    // Privacy Page
    privacyTitle: 'Privatumo politika',
    privacyLastUpdated: 'Paskutinis atnaujinimas: 2026 m. rugsėjis',
    
    // Terms Page
    termsTitle: 'Paslaugų teikimo sąlygos',
    termsLastUpdated: 'Paskutinis atnaujinimas: 2026 m. rugsėjis',
    
    // Coming Soon
    comingSoon: 'Greitai!',
    
    // Delete Account Page
    deleteAccountTitle: 'Ištrinti Holo Fridge paskyrą',
    deleteAccountDesc: 'Galite visam laikui ištrinti savo paskyrą ir visus susijusius duomenis tiesiogiai programėlėje:',
    deleteAccountStep1: 'Atidarykite Holo Fridge → Profilis → Paskyra',
    deleteAccountStep2: 'Paspauskite Ištrinti paskyrą',
    deleteAccountStep3: 'Patvirtinkite du kartus — ištrynimas yra nedelsiant ir negrįžtamas',
    deleteAccountNote: 'Tai pašalina jūsų inventorių, receptus, pokalbių istoriją, prenumeratas ir autentifikavimo duomenis.',
    deleteAccountQuestions: 'Klausimų? El. paštas',
  },
  
  nl: {
    // Meta
    siteTitle: 'Holo Fridge - Slimme voedsel- en koelkastassistent',
    siteDescription: 'Holo Fridge helpt je voedsel bij te houden, verspilling te verminderen, recepten te ontdekken en slimmere boodschappenlijsten te maken.',
    
    // Navbar
    navFeatures: 'Functies',
    navHowItWorks: 'Hoe het werkt',
    navMeetHolo: 'Maak kennis met Holo',
    navDownload: 'Downloaden',
    navSupport: 'Ondersteuning',
    navPrivacy: 'Privacybeleid',
    navTerms: 'Gebruiksvoorwaarden',
    
    // Hero
    heroNowAvailable: 'Nu beschikbaar',
    heroTitle1: 'Je koelkast,',
    heroTitle2: 'eindelijk slim.',
    heroSubtitle: 'Houd bij wat je hebt, kook ermee, verspil minder en shop slimmer — met Holo aan je zijde.',
    heroFreeToStart: 'Gratis starten. Premiumfuncties beschikbaar in de app.',
    
    // Chips
    chipExpireSoon: '3 producten verlopen binnenkort',
    chipRecipeReady: 'Recept klaar in 15 min',
    chipShoppingUpdated: 'Boodschappenlijst bijgewerkt',
    chipDinnerIdeas: 'Holo heeft dinerideeën gevonden',
    
    // Store Buttons
    downloadOnThe: 'Download in de',
    appStore: 'App Store',
    getItOn: 'Verkrijgbaar op',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Klinkt bekend?',
    problemSubtitle: 'Je koelkast is vol — maar het avondeten lijkt onmogelijk',
    problemItem1Title: 'Vergeten voedsel',
    problemItem1Desc: 'Producten worden naar achteren geduwd en bederven voordat je ze herinnert.',
    problemItem2Title: 'Receptverlamming',
    problemItem2Desc: 'Je hebt ingrediënten maar geen idee wat je moet maken.',
    problemItem3Title: 'Verspilde uitstapjes',
    problemItem3Desc: 'Je koopt duplicaten of vergeet wat je echt nodig hebt.',
    
    // Features Section
    featuresLabel: 'Functies',
    featuresTitle: 'Alles wat je nodig hebt voor een slimmere keuken',
    featuresSubtitle: 'Van bijhouden tot koken tot boodschappen — Holo regelt het allemaal.',
    feature1Title: 'Slimme inventaris',
    feature1Desc: 'Weet precies wat er in je koelkast, vriezer en voorraadkast zit — en wanneer het verloopt.',
    feature2Title: 'AI-recepten',
    feature2Desc: 'Krijg gepersonaliseerde receptideeën op basis van wat je al hebt.',
    feature3Title: 'Boodschappenlijsten',
    feature3Desc: 'Maak lijsten die synchroniseren tussen apparaten en vink af terwijl je winkelt.',
    feature4Title: 'Houdbaarheidswaarschuwingen',
    feature4Desc: 'Vergeet die yoghurt nooit meer. Krijg meldingen voordat voedsel bederft.',
    feature5Title: 'Gezinsdeling',
    feature5Desc: 'Deel lijsten en inventaris met je huishouden. Iedereen blijft gesynchroniseerd.',
    feature6Title: 'Stem en foto',
    feature6Desc: 'Voeg items toe met stem of foto. Geen typen nodig.',
    
    // App Preview Section
    appPreviewLabel: 'Hoe het werkt',
    appPreviewTitle: 'Eenvoudige stappen naar een rustiger keuken',
    appPreviewSubtitle: 'Beginnen duurt minder dan een minuut.',
    appPreviewStep1Title: 'Voeg je voedsel toe',
    appPreviewStep1Desc: 'Scan, typ of spreek — voeg items toe zoals het jou uitkomt.',
    appPreviewStep2Title: 'Ontvang suggesties',
    appPreviewStep2Desc: 'Holo stelt recepten voor, waarschuwt je voor verlopende items en houdt je lijsten up-to-date.',
    appPreviewStep3Title: 'Kook en shop slimmer',
    appPreviewStep3Desc: 'Gebruik wat je hebt, verspil minder en vergeet nooit wat je nodig hebt.',
    
    // Meet Holo Section
    meetHoloLabel: 'Maak kennis met Holo',
    meetHoloTitle: 'Je vriendelijke keukenassistent',
    meetHoloDesc: 'Holo is er om je te helpen georganiseerd te blijven, verspilling te verminderen en koken moeiteloos te maken. Zie Holo als een rustige, behulpzame aanwezigheid in je keuken — altijd klaar met een suggestie, nooit oordelend.',
    
    // Final CTA
    ctaLabel: 'Download Holo Fridge',
    ctaTitle: 'Klaar om je koelkast slim te maken?',
    ctaSubtitle: 'Begin vandaag met het organiseren van je keuken. Download Holo Fridge en maak je eten moeiteloos.',
    
    // Footer
    footerTagline: 'Slim voedsel, rustigere keukens.',
    footerPrivacy: 'Privacybeleid',
    footerTerms: 'Gebruiksvoorwaarden',
    footerContact: 'Contact',
    footerSupport: 'Ondersteuning',
    footerGuides: 'Gidsen',
    footerCopyright: '© {year} Holo Fridge. Alle rechten voorbehouden.',
    footerMadeWith: 'Gemaakt met zorg.',
    
    // Guides
    guidesTitle: 'Gidsen',
    guidesSubtitle: 'Praktisch advies om voedselverspilling te verminderen en het meeste uit je keuken te halen.',
    guidesAvailableInEnglish: 'Gidsen zijn momenteel beschikbaar in het Engels.',
    guidesMinRead: 'min leestijd',
    
    // Support Page
    supportTitle: 'Ondersteuning',
    supportSubtitle: 'Voor vragen of hulp, neem op elk moment contact met ons op — we reageren binnen 24 uur.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Neem contact op',
    supportFaq: 'Veelgestelde vragen',
    supportFaq1Q: 'Hoe voeg ik items toe aan mijn koelkast?',
    supportFaq1A: 'Je kunt items toevoegen door te typen, stemmen te gebruiken, barcodes te scannen of foto\'s te maken. Ga naar het startscherm en tik op de +-knop.',
    supportFaq2Q: 'Hoe deel ik mijn koelkast met mijn gezin?',
    supportFaq2A: 'Ga naar Instellingen → Gezinsdeling en nodig leden uit via e-mail. Ze krijgen toegang tot gedeelde lijsten en inventaris.',
    supportFaq3Q: 'Hoe annuleer ik mijn abonnement?',
    supportFaq3A: 'Abonnementen worden beheerd via je App Store of Google Play account. Ga naar de store-instellingen om te beheren of annuleren.',
    supportFaq4Q: 'Zijn mijn gegevens veilig?',
    supportFaq4A: 'Ja. We gebruiken encryptie tijdens overdracht en opslag, en verkopen nooit je persoonlijke gegevens. Zie ons Privacybeleid voor details.',
    
    // Privacy Page
    privacyTitle: 'Privacybeleid',
    privacyLastUpdated: 'Laatst bijgewerkt: September 2026',
    
    // Terms Page
    termsTitle: 'Servicevoorwaarden',
    termsLastUpdated: 'Laatst bijgewerkt: September 2026',
    
    // Coming Soon
    comingSoon: 'Binnenkort!',
    
    // Delete Account Page
    deleteAccountTitle: 'Verwijder je Holo Fridge account',
    deleteAccountDesc: 'Je kunt je account en alle bijbehorende gegevens permanent verwijderen direct in de app:',
    deleteAccountStep1: 'Open Holo Fridge → Profiel → Account',
    deleteAccountStep2: 'Tik op Account verwijderen',
    deleteAccountStep3: 'Bevestig twee keer — verwijdering is onmiddellijk en onomkeerbaar',
    deleteAccountNote: 'Dit verwijdert je inventaris, recepten, chatgeschiedenis, abonnementen en inloggegevens.',
    deleteAccountQuestions: 'Vragen? E-mail',
  },
  
  sv: {
    // Meta
    siteTitle: 'Holo Fridge - Smart mat- och kylskåpsassistent',
    siteDescription: 'Holo Fridge hjälper dig spåra mat, minska svinn, upptäcka recept och skapa smartare inköpslistor.',
    
    // Navbar
    navFeatures: 'Funktioner',
    navHowItWorks: 'Hur det fungerar',
    navMeetHolo: 'Möt Holo',
    navDownload: 'Ladda ner',
    navSupport: 'Support',
    navPrivacy: 'Integritetspolicy',
    navTerms: 'Användarvillkor',
    
    // Hero
    heroNowAvailable: 'Tillgänglig nu',
    heroTitle1: 'Ditt kylskåp,',
    heroTitle2: 'äntligen smart.',
    heroSubtitle: 'Spåra vad du har, laga mat av det, slösa mindre och handla smartare — med Holo vid din sida.',
    heroFreeToStart: 'Gratis att börja. Premiumfunktioner tillgängliga i appen.',
    
    // Chips
    chipExpireSoon: '3 produkter går ut snart',
    chipRecipeReady: 'Recept klart på 15 min',
    chipShoppingUpdated: 'Inköpslista uppdaterad',
    chipDinnerIdeas: 'Holo hittade middagsidéer',
    
    // Store Buttons
    downloadOnThe: 'Ladda ner från',
    appStore: 'App Store',
    getItOn: 'Hämta på',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Låter bekant?',
    problemSubtitle: 'Ditt kylskåp är fullt — men middagen känns omöjlig',
    problemItem1Title: 'Bortglömd mat',
    problemItem1Desc: 'Produkter skjuts bakåt och förstörs innan du kommer ihåg dem.',
    problemItem2Title: 'Receptförlamning',
    problemItem2Desc: 'Du har ingredienser men ingen aning om vad du ska laga.',
    problemItem3Title: 'Bortkastade turer',
    problemItem3Desc: 'Du köper dubbletter eller glömmer vad du verkligen behöver.',
    
    // Features Section
    featuresLabel: 'Funktioner',
    featuresTitle: 'Allt du behöver för ett smartare kök',
    featuresSubtitle: 'Från spårning till matlagning till shopping — Holo hanterar allt.',
    feature1Title: 'Smart inventering',
    feature1Desc: 'Vet exakt vad som finns i kylskåp, frys och skafferi — och när det går ut.',
    feature2Title: 'AI-recept',
    feature2Desc: 'Få personliga receptidéer baserat på vad du redan har.',
    feature3Title: 'Inköpslistor',
    feature3Desc: 'Skapa listor som synkas mellan enheter och bocka av medan du handlar.',
    feature4Title: 'Utgångsvarningar',
    feature4Desc: 'Glöm aldrig den där yoghurten igen. Få notiser innan maten förstörs.',
    feature5Title: 'Familjedelning',
    feature5Desc: 'Dela listor och inventering med hushållet. Alla hålls synkade.',
    feature6Title: 'Röst och foto',
    feature6Desc: 'Lägg till artiklar med röst eller foto. Ingen skrivning behövs.',
    
    // App Preview Section
    appPreviewLabel: 'Hur det fungerar',
    appPreviewTitle: 'Enkla steg till ett lugnare kök',
    appPreviewSubtitle: 'Att komma igång tar mindre än en minut.',
    appPreviewStep1Title: 'Lägg till din mat',
    appPreviewStep1Desc: 'Skanna, skriv eller prata — lägg till artiklar hur det passar dig.',
    appPreviewStep2Title: 'Få förslag',
    appPreviewStep2Desc: 'Holo föreslår recept, varnar för utgående artiklar och håller listorna uppdaterade.',
    appPreviewStep3Title: 'Laga och handla smartare',
    appPreviewStep3Desc: 'Använd vad du har, slösa mindre och glöm aldrig vad du behöver.',
    
    // Meet Holo Section
    meetHoloLabel: 'Möt Holo',
    meetHoloTitle: 'Din vänliga köksassistent',
    meetHoloDesc: 'Holo finns här för att hjälpa dig hålla ordning, minska svinn och göra matlagning enkel. Tänk på Holo som en lugn, hjälpsam närvaro i ditt kök — alltid redo med ett förslag, aldrig dömande.',
    
    // Final CTA
    ctaLabel: 'Hämta Holo Fridge',
    ctaTitle: 'Redo att göra ditt kylskåp smart?',
    ctaSubtitle: 'Börja organisera ditt kök idag. Ladda ner Holo Fridge och gör din mat enkel.',
    
    // Footer
    footerTagline: 'Smart mat, lugnare kök.',
    footerPrivacy: 'Integritetspolicy',
    footerTerms: 'Användarvillkor',
    footerContact: 'Kontakt',
    footerSupport: 'Support',
    footerGuides: 'Guider',
    footerCopyright: '© {year} Holo Fridge. Alla rättigheter förbehållna.',
    footerMadeWith: 'Gjort med omsorg.',
    
    // Guides
    guidesTitle: 'Guider',
    guidesSubtitle: 'Praktiska råd för att minska matsvinn och få ut det mesta av ditt kök.',
    guidesAvailableInEnglish: 'Guider finns för närvarande på engelska.',
    guidesMinRead: 'min läsning',
    
    // Support Page
    supportTitle: 'Support',
    supportSubtitle: 'För frågor eller hjälp, kontakta oss när som helst — vi svarar inom 24 timmar.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Kontakta oss',
    supportFaq: 'Vanliga frågor',
    supportFaq1Q: 'Hur lägger jag till artiklar i mitt kylskåp?',
    supportFaq1A: 'Du kan lägga till artiklar genom att skriva, använda röstinmatning, skanna streckkoder eller ta foton. Gå till startskärmen och tryck på +-knappen.',
    supportFaq2Q: 'Hur delar jag mitt kylskåp med familjen?',
    supportFaq2A: 'Gå till Inställningar → Familjedelning och bjud in medlemmar via e-post. De får tillgång till delade listor och inventering.',
    supportFaq3Q: 'Hur avslutar jag min prenumeration?',
    supportFaq3A: 'Prenumerationer hanteras via ditt App Store- eller Google Play-konto. Gå till butikens inställningar för att hantera eller avsluta.',
    supportFaq4Q: 'Är mina data säkra?',
    supportFaq4A: 'Ja. Vi använder kryptering vid överföring och lagring, och säljer aldrig dina personuppgifter. Se vår Integritetspolicy för detaljer.',
    
    // Privacy Page
    privacyTitle: 'Integritetspolicy',
    privacyLastUpdated: 'Senast uppdaterad: September 2026',
    
    // Terms Page
    termsTitle: 'Användarvillkor',
    termsLastUpdated: 'Senast uppdaterad: September 2026',
    
    // Coming Soon
    comingSoon: 'Kommer snart!',
    
    // Delete Account Page
    deleteAccountTitle: 'Ta bort ditt Holo Fridge-konto',
    deleteAccountDesc: 'Du kan permanent ta bort ditt konto och all tillhörande data direkt i appen:',
    deleteAccountStep1: 'Öppna Holo Fridge → Profil → Konto',
    deleteAccountStep2: 'Tryck på Ta bort konto',
    deleteAccountStep3: 'Bekräfta två gånger — borttagningen är omedelbar och oåterkallelig',
    deleteAccountNote: 'Detta tar bort din inventering, recept, chatthistorik, prenumerationer och inloggningsuppgifter.',
    deleteAccountQuestions: 'Frågor? E-posta',
  },
  
  da: {
    // Meta
    siteTitle: 'Holo Fridge - Smart mad- og køleskabsassistent',
    siteDescription: 'Holo Fridge hjælper dig med at holde styr på mad, reducere spild, opdage opskrifter og lave smartere indkøbslister.',
    
    // Navbar
    navFeatures: 'Funktioner',
    navHowItWorks: 'Sådan virker det',
    navMeetHolo: 'Mød Holo',
    navDownload: 'Download',
    navSupport: 'Support',
    navPrivacy: 'Privatlivspolitik',
    navTerms: 'Brugsvilkår',
    
    // Hero
    heroNowAvailable: 'Tilgængelig nu',
    heroTitle1: 'Dit køleskab,',
    heroTitle2: 'endelig smart.',
    heroSubtitle: 'Hold styr på hvad du har, lav mad af det, spild mindre og shop smartere — med Holo ved din side.',
    heroFreeToStart: 'Gratis at starte. Premiumfunktioner tilgængelige i appen.',
    
    // Chips
    chipExpireSoon: '3 produkter udløber snart',
    chipRecipeReady: 'Opskrift klar på 15 min',
    chipShoppingUpdated: 'Indkøbsliste opdateret',
    chipDinnerIdeas: 'Holo fandt aftensmadsidéer',
    
    // Store Buttons
    downloadOnThe: 'Download fra',
    appStore: 'App Store',
    getItOn: 'Hent den på',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Lyder det bekendt?',
    problemSubtitle: 'Dit køleskab er fuldt — men aftensmaden virker umulig',
    problemItem1Title: 'Glemt mad',
    problemItem1Desc: 'Produkter skubbes bagud og bliver dårlige før du husker dem.',
    problemItem2Title: 'Opskriftslammelse',
    problemItem2Desc: 'Du har ingredienser, men ingen idé om hvad du skal lave.',
    problemItem3Title: 'Spildte ture',
    problemItem3Desc: 'Du køber dubletter eller glemmer hvad du virkelig har brug for.',
    
    // Features Section
    featuresLabel: 'Funktioner',
    featuresTitle: 'Alt hvad du behøver til et smartere køkken',
    featuresSubtitle: 'Fra sporing til madlavning til indkøb — Holo klarer det hele.',
    feature1Title: 'Smart inventar',
    feature1Desc: 'Ved præcis hvad der er i køleskab, fryser og spisekammer — og hvornår det udløber.',
    feature2Title: 'AI-opskrifter',
    feature2Desc: 'Få personlige opskriftsidéer baseret på hvad du allerede har.',
    feature3Title: 'Indkøbslister',
    feature3Desc: 'Opret lister der synkroniserer på tværs af enheder og afkryds mens du handler.',
    feature4Title: 'Udløbsadvarsler',
    feature4Desc: 'Glem aldrig den yoghurt igen. Få besked før maden bliver dårlig.',
    feature5Title: 'Familiedeling',
    feature5Desc: 'Del lister og inventar med husstanden. Alle holdes synkroniserede.',
    feature6Title: 'Stemme og foto',
    feature6Desc: 'Tilføj varer med stemme eller foto. Ingen indtastning nødvendig.',
    
    // App Preview Section
    appPreviewLabel: 'Sådan virker det',
    appPreviewTitle: 'Simple trin til et roligere køkken',
    appPreviewSubtitle: 'At komme i gang tager mindre end et minut.',
    appPreviewStep1Title: 'Tilføj din mad',
    appPreviewStep1Desc: 'Scan, skriv eller tal — tilføj varer som det passer dig.',
    appPreviewStep2Title: 'Få forslag',
    appPreviewStep2Desc: 'Holo foreslår opskrifter, advarer om udløbende varer og holder dine lister opdaterede.',
    appPreviewStep3Title: 'Lav mad og shop smartere',
    appPreviewStep3Desc: 'Brug hvad du har, spild mindre og glem aldrig hvad du har brug for.',
    
    // Meet Holo Section
    meetHoloLabel: 'Mød Holo',
    meetHoloTitle: 'Din venlige køkkenassistent',
    meetHoloDesc: 'Holo er her for at hjælpe dig med at holde orden, reducere spild og gøre madlavning ubesværet. Tænk på Holo som en rolig, hjælpsom tilstedeværelse i dit køkken — altid klar med et forslag, aldrig dømmende.',
    
    // Final CTA
    ctaLabel: 'Hent Holo Fridge',
    ctaTitle: 'Klar til at gøre dit køleskab smart?',
    ctaSubtitle: 'Begynd at organisere dit køkken i dag. Download Holo Fridge og gør din mad ubesværet.',
    
    // Footer
    footerTagline: 'Smart mad, roligere køkkener.',
    footerPrivacy: 'Privatlivspolitik',
    footerTerms: 'Brugsvilkår',
    footerContact: 'Kontakt',
    footerSupport: 'Support',
    footerGuides: 'Guider',
    footerCopyright: '© {year} Holo Fridge. Alle rettigheder forbeholdes.',
    footerMadeWith: 'Lavet med omhu.',
    
    // Guides
    guidesTitle: 'Guider',
    guidesSubtitle: 'Praktiske råd til at reducere madspild og få mest muligt ud af dit køkken.',
    guidesAvailableInEnglish: 'Guider er i øjeblikket tilgængelige på engelsk.',
    guidesMinRead: 'min læsning',
    
    // Support Page
    supportTitle: 'Support',
    supportSubtitle: 'For spørgsmål eller hjælp, kontakt os når som helst — vi svarer inden for 24 timer.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Kontakt os',
    supportFaq: 'Ofte stillede spørgsmål',
    supportFaq1Q: 'Hvordan tilføjer jeg varer til mit køleskab?',
    supportFaq1A: 'Du kan tilføje varer ved at skrive, bruge stemmeinput, scanne stregkoder eller tage billeder. Gå til startskærmen og tryk på +-knappen.',
    supportFaq2Q: 'Hvordan deler jeg mit køleskab med familien?',
    supportFaq2A: 'Gå til Indstillinger → Familiedeling og inviter medlemmer via e-mail. De får adgang til delte lister og inventar.',
    supportFaq3Q: 'Hvordan annullerer jeg mit abonnement?',
    supportFaq3A: 'Abonnementer administreres via din App Store- eller Google Play-konto. Gå til butikkens indstillinger for at administrere eller annullere.',
    supportFaq4Q: 'Er mine data sikre?',
    supportFaq4A: 'Ja. Vi bruger kryptering under overførsel og opbevaring, og sælger aldrig dine personlige data. Se vores Privatlivspolitik for detaljer.',
    
    // Privacy Page
    privacyTitle: 'Privatlivspolitik',
    privacyLastUpdated: 'Sidst opdateret: September 2026',
    
    // Terms Page
    termsTitle: 'Servicevilkår',
    termsLastUpdated: 'Sidst opdateret: September 2026',
    
    // Coming Soon
    comingSoon: 'Kommer snart!',
    
    // Delete Account Page
    deleteAccountTitle: 'Slet din Holo Fridge-konto',
    deleteAccountDesc: 'Du kan permanent slette din konto og alle tilknyttede data direkte i appen:',
    deleteAccountStep1: 'Åbn Holo Fridge → Profil → Konto',
    deleteAccountStep2: 'Tryk på Slet konto',
    deleteAccountStep3: 'Bekræft to gange — sletningen er øjeblikkelig og uigenkaldelig',
    deleteAccountNote: 'Dette fjerner dit inventar, opskrifter, chathistorik, abonnementer og loginoplysninger.',
    deleteAccountQuestions: 'Spørgsmål? E-mail',
  },
  
  fi: {
    // Meta
    siteTitle: 'Holo Fridge - Älykäs ruoka- ja jääkaappiavustaja',
    siteDescription: 'Holo Fridge auttaa sinua seuraamaan ruokaa, vähentämään hävikkiä, löytämään reseptejä ja luomaan älykkäämpiä ostoslistoja.',
    
    // Navbar
    navFeatures: 'Ominaisuudet',
    navHowItWorks: 'Miten se toimii',
    navMeetHolo: 'Tapaa Holo',
    navDownload: 'Lataa',
    navSupport: 'Tuki',
    navPrivacy: 'Tietosuojakäytäntö',
    navTerms: 'Käyttöehdot',
    
    // Hero
    heroNowAvailable: 'Nyt saatavilla',
    heroTitle1: 'Jääkaappisi,',
    heroTitle2: 'vihdoin älykäs.',
    heroSubtitle: 'Seuraa mitä sinulla on, kokkaa siitä, tuhlaa vähemmän ja osta älykkäämmin — Holo rinnallasi.',
    heroFreeToStart: 'Ilmainen aloitus. Premium-ominaisuudet sovelluksessa.',
    
    // Chips
    chipExpireSoon: '3 tuotetta vanhenee pian',
    chipRecipeReady: 'Resepti valmis 15 min',
    chipShoppingUpdated: 'Ostoslista päivitetty',
    chipDinnerIdeas: 'Holo löysi illallisideoita',
    
    // Store Buttons
    downloadOnThe: 'Lataa',
    appStore: 'App Storesta',
    getItOn: 'Saatavilla',
    googlePlay: 'Google Playsta',
    
    // Problem Section
    problemTitle: 'Kuulostaako tutulta?',
    problemSubtitle: 'Jääkaappisi on täynnä — mutta illallinen tuntuu mahdottomalta',
    problemItem1Title: 'Unohdettu ruoka',
    problemItem1Desc: 'Tuotteet työnnetään taakse ja pilaantuvat ennen kuin muistat ne.',
    problemItem2Title: 'Reseptihalvaus',
    problemItem2Desc: 'Sinulla on aineksia, mutta ei aavistustakaan mitä tehdä.',
    problemItem3Title: 'Turhat kauppamatkat',
    problemItem3Desc: 'Ostat tuplia tai unohdat mitä oikeasti tarvitset.',
    
    // Features Section
    featuresLabel: 'Ominaisuudet',
    featuresTitle: 'Kaikki mitä tarvitset älykkäämpään keittiöön',
    featuresSubtitle: 'Seurannasta kokkaamiseen ja ostoksiin — Holo hoitaa kaiken.',
    feature1Title: 'Älykäs inventaario',
    feature1Desc: 'Tiedät tarkalleen mitä jääkaapissa, pakastimessa ja ruokavarastossa on — ja milloin se vanhenee.',
    feature2Title: 'AI-reseptit',
    feature2Desc: 'Saat henkilökohtaisia resepti-ideoita sen perusteella mitä sinulla jo on.',
    feature3Title: 'Ostoslistat',
    feature3Desc: 'Luo listoja jotka synkronoituvat laitteiden välillä ja rastita ostoksia tehdessäsi.',
    feature4Title: 'Vanhentumisvaroitukset',
    feature4Desc: 'Älä enää unohda sitä jogurttia. Saat ilmoitukset ennen kuin ruoka pilaantuu.',
    feature5Title: 'Perhejako',
    feature5Desc: 'Jaa listoja ja inventaariota kotitaloutesi kanssa. Kaikki pysyvät synkassa.',
    feature6Title: 'Ääni ja kuva',
    feature6Desc: 'Lisää tuotteita äänellä tai kuvalla. Ei kirjoittamista.',
    
    // App Preview Section
    appPreviewLabel: 'Miten se toimii',
    appPreviewTitle: 'Yksinkertaiset askeleet rauhallisempaan keittiöön',
    appPreviewSubtitle: 'Aloittaminen vie alle minuutin.',
    appPreviewStep1Title: 'Lisää ruokasi',
    appPreviewStep1Desc: 'Skannaa, kirjoita tai puhu — lisää tuotteita miten sinulle sopii.',
    appPreviewStep2Title: 'Saa ehdotuksia',
    appPreviewStep2Desc: 'Holo ehdottaa reseptejä, varoittaa vanhentuvista tuotteista ja pitää listasi ajan tasalla.',
    appPreviewStep3Title: 'Kokkaa ja osta älykkäämmin',
    appPreviewStep3Desc: 'Käytä mitä sinulla on, tuhlaa vähemmän äläkä koskaan unohda mitä tarvitset.',
    
    // Meet Holo Section
    meetHoloLabel: 'Tapaa Holo',
    meetHoloTitle: 'Ystävällinen keittiöavustajasi',
    meetHoloDesc: 'Holo on täällä auttaakseen sinua pysymään järjestelmällisenä, vähentämään hävikkiä ja tekemään kokkaamisesta vaivatonta. Ajattele Holoa rauhallisena, avuliaana läsnäolona keittiössäsi — aina valmiina ehdottamaan, ei koskaan tuomitsemaan.',
    
    // Final CTA
    ctaLabel: 'Hanki Holo Fridge',
    ctaTitle: 'Valmis tekemään jääkaapistasi älykkään?',
    ctaSubtitle: 'Aloita keittiösi järjestäminen tänään. Lataa Holo Fridge ja tee ruuasta vaivatonta.',
    
    // Footer
    footerTagline: 'Älykästä ruokaa, rauhallisempia keittiöitä.',
    footerPrivacy: 'Tietosuojakäytäntö',
    footerTerms: 'Käyttöehdot',
    footerContact: 'Yhteystiedot',
    footerSupport: 'Tuki',
    footerGuides: 'Oppaat',
    footerCopyright: '© {year} Holo Fridge. Kaikki oikeudet pidätetään.',
    footerMadeWith: 'Tehty huolella.',
    
    // Guides
    guidesTitle: 'Oppaat',
    guidesSubtitle: 'Käytännön neuvoja ruokahävikin vähentämiseen ja keittiön tehokkaaseen käyttöön.',
    guidesAvailableInEnglish: 'Oppaat ovat tällä hetkellä saatavilla englanniksi.',
    guidesMinRead: 'min lukuaika',
    
    // Support Page
    supportTitle: 'Tuki',
    supportSubtitle: 'Kysymyksissä tai avun tarpeessa ota yhteyttä milloin tahansa — vastaamme 24 tunnin sisällä.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Ota yhteyttä',
    supportFaq: 'Usein kysytyt kysymykset',
    supportFaq1Q: 'Miten lisään tuotteita jääkaappiini?',
    supportFaq1A: 'Voit lisätä tuotteita kirjoittamalla, käyttämällä ääntä, skannaamalla viivakoodeja tai ottamalla kuvia. Mene aloitusnäyttöön ja napauta +-painiketta.',
    supportFaq2Q: 'Miten jaan jääkaappini perheen kanssa?',
    supportFaq2A: 'Mene Asetukset → Perhejako ja kutsu jäseniä sähköpostilla. He saavat pääsyn jaettuihin listoihin ja inventaarioon.',
    supportFaq3Q: 'Miten peruutan tilaukseni?',
    supportFaq3A: 'Tilauksia hallitaan App Store- tai Google Play -tilisi kautta. Mene kaupan asetuksiin hallitaksesi tai peruuttaaksesi.',
    supportFaq4Q: 'Ovatko tietoni turvassa?',
    supportFaq4A: 'Kyllä. Käytämme salausta siirrossa ja tallennuksessa, emmekä koskaan myy henkilökohtaisia tietojasi. Katso Tietosuojakäytäntömme lisätietoja.',
    
    // Privacy Page
    privacyTitle: 'Tietosuojakäytäntö',
    privacyLastUpdated: 'Päivitetty viimeksi: Syyskuu 2026',
    
    // Terms Page
    termsTitle: 'Palveluehdot',
    termsLastUpdated: 'Päivitetty viimeksi: Syyskuu 2026',
    
    // Coming Soon
    comingSoon: 'Tulossa pian!',
    
    // Delete Account Page
    deleteAccountTitle: 'Poista Holo Fridge -tilisi',
    deleteAccountDesc: 'Voit poistaa tilisi ja kaikki siihen liittyvät tiedot pysyvästi suoraan sovelluksessa:',
    deleteAccountStep1: 'Avaa Holo Fridge → Profiili → Tili',
    deleteAccountStep2: 'Napauta Poista tili',
    deleteAccountStep3: 'Vahvista kahdesti — poisto on välitön ja peruuttamaton',
    deleteAccountNote: 'Tämä poistaa inventaariosi, reseptisi, keskusteluhistoriasi, tilauksesi ja kirjautumistietosi.',
    deleteAccountQuestions: 'Kysyttävää? Sähköposti',
  },
  
  pt: {
    // Meta
    siteTitle: 'Holo Fridge - Assistente inteligente de comida e geladeira',
    siteDescription: 'Holo Fridge ajuda você a rastrear alimentos, reduzir desperdício, descobrir receitas e criar listas de compras mais inteligentes.',
    
    // Navbar
    navFeatures: 'Recursos',
    navHowItWorks: 'Como funciona',
    navMeetHolo: 'Conheça o Holo',
    navDownload: 'Baixar',
    navSupport: 'Suporte',
    navPrivacy: 'Política de Privacidade',
    navTerms: 'Termos de Uso',
    
    // Hero
    heroNowAvailable: 'Disponível agora',
    heroTitle1: 'Sua geladeira,',
    heroTitle2: 'finalmente inteligente.',
    heroSubtitle: 'Acompanhe o que você tem, cozinhe com isso, desperdice menos e compre de forma mais inteligente — com Holo ao seu lado.',
    heroFreeToStart: 'Grátis para começar. Recursos premium disponíveis no app.',
    
    // Chips
    chipExpireSoon: '3 produtos vencem em breve',
    chipRecipeReady: 'Receita pronta em 15 min',
    chipShoppingUpdated: 'Lista de compras atualizada',
    chipDinnerIdeas: 'Holo encontrou ideias para o jantar',
    
    // Store Buttons
    downloadOnThe: 'Baixe na',
    appStore: 'App Store',
    getItOn: 'Disponível no',
    googlePlay: 'Google Play',
    
    // Problem Section
    problemTitle: 'Parece familiar?',
    problemSubtitle: 'Sua geladeira está cheia — mas o jantar parece impossível',
    problemItem1Title: 'Comida esquecida',
    problemItem1Desc: 'Produtos são empurrados para trás e estragam antes de você lembrar.',
    problemItem2Title: 'Paralisia de receitas',
    problemItem2Desc: 'Você tem ingredientes mas não sabe o que fazer.',
    problemItem3Title: 'Viagens desperdiçadas',
    problemItem3Desc: 'Você compra duplicatas ou esquece do que realmente precisa.',
    
    // Features Section
    featuresLabel: 'Recursos',
    featuresTitle: 'Tudo que você precisa para uma cozinha mais inteligente',
    featuresSubtitle: 'Do rastreamento ao cozinhar às compras — Holo cuida de tudo.',
    feature1Title: 'Inventário inteligente',
    feature1Desc: 'Saiba exatamente o que está na geladeira, freezer e despensa — e quando vence.',
    feature2Title: 'Receitas IA',
    feature2Desc: 'Receba ideias de receitas personalizadas baseadas no que você já tem.',
    feature3Title: 'Listas de compras',
    feature3Desc: 'Crie listas que sincronizam entre dispositivos e marque enquanto compra.',
    feature4Title: 'Alertas de validade',
    feature4Desc: 'Nunca mais esqueça daquele iogurte. Receba notificações antes da comida estragar.',
    feature5Title: 'Compartilhamento familiar',
    feature5Desc: 'Compartilhe listas e inventário com sua família. Todos ficam sincronizados.',
    feature6Title: 'Voz e foto',
    feature6Desc: 'Adicione itens por voz ou foto. Sem necessidade de digitar.',
    
    // App Preview Section
    appPreviewLabel: 'Como funciona',
    appPreviewTitle: 'Passos simples para uma cozinha mais tranquila',
    appPreviewSubtitle: 'Começar leva menos de um minuto.',
    appPreviewStep1Title: 'Adicione sua comida',
    appPreviewStep1Desc: 'Escaneie, digite ou fale — adicione itens como preferir.',
    appPreviewStep2Title: 'Receba sugestões',
    appPreviewStep2Desc: 'Holo sugere receitas, alerta sobre itens vencendo e mantém suas listas atualizadas.',
    appPreviewStep3Title: 'Cozinhe e compre de forma inteligente',
    appPreviewStep3Desc: 'Use o que você tem, desperdice menos e nunca esqueça do que precisa.',
    
    // Meet Holo Section
    meetHoloLabel: 'Conheça o Holo',
    meetHoloTitle: 'Seu assistente de cozinha amigável',
    meetHoloDesc: 'Holo está aqui para ajudá-lo a se manter organizado, reduzir desperdício e tornar a culinária fácil. Pense no Holo como uma presença calma e útil na sua cozinha — sempre pronto com uma sugestão, nunca julgando.',
    
    // Final CTA
    ctaLabel: 'Obtenha o Holo Fridge',
    ctaTitle: 'Pronto para tornar sua geladeira inteligente?',
    ctaSubtitle: 'Comece a organizar sua cozinha hoje. Baixe o Holo Fridge e torne sua comida fácil.',
    
    // Footer
    footerTagline: 'Comida inteligente, cozinhas mais tranquilas.',
    footerPrivacy: 'Política de Privacidade',
    footerTerms: 'Termos de Uso',
    footerContact: 'Contato',
    footerSupport: 'Suporte',
    footerGuides: 'Guias',
    footerCopyright: '© {year} Holo Fridge. Todos os direitos reservados.',
    footerMadeWith: 'Feito com cuidado.',
    
    // Guides
    guidesTitle: 'Guias',
    guidesSubtitle: 'Dicas práticas para reduzir o desperdício de alimentos e aproveitar ao máximo sua cozinha.',
    guidesAvailableInEnglish: 'Os guias estão atualmente disponíveis em inglês.',
    guidesMinRead: 'min de leitura',
    
    // Support Page
    supportTitle: 'Suporte',
    supportSubtitle: 'Para qualquer dúvida ou ajuda, entre em contato a qualquer momento — respondemos em 24 horas.',
    supportEmail: 'support@holofridge.com',
    contactUs: 'Fale conosco',
    supportFaq: 'Perguntas frequentes',
    supportFaq1Q: 'Como adiciono itens à minha geladeira?',
    supportFaq1A: 'Você pode adicionar itens digitando, usando entrada de voz, escaneando códigos de barras ou tirando fotos. Vá para a tela inicial e toque no botão +.',
    supportFaq2Q: 'Como compartilho minha geladeira com a família?',
    supportFaq2A: 'Vá para Configurações → Compartilhamento familiar e convide membros por e-mail. Eles terão acesso a listas e inventário compartilhados.',
    supportFaq3Q: 'Como cancelo minha assinatura?',
    supportFaq3A: 'As assinaturas são gerenciadas pela sua conta App Store ou Google Play. Vá para as configurações da loja para gerenciar ou cancelar.',
    supportFaq4Q: 'Meus dados estão seguros?',
    supportFaq4A: 'Sim. Usamos criptografia em trânsito e em repouso, e nunca vendemos seus dados pessoais. Consulte nossa Política de Privacidade para detalhes.',
    
    // Privacy Page
    privacyTitle: 'Política de Privacidade',
    privacyLastUpdated: 'Última atualização: Setembro de 2026',
    
    // Terms Page
    termsTitle: 'Termos de Serviço',
    termsLastUpdated: 'Última atualização: Setembro de 2026',
    
    // Coming Soon
    comingSoon: 'Em breve!',
    
    // Delete Account Page
    deleteAccountTitle: 'Excluir sua conta Holo Fridge',
    deleteAccountDesc: 'Você pode excluir permanentemente sua conta e todos os dados associados diretamente no app:',
    deleteAccountStep1: 'Abra Holo Fridge → Perfil → Conta',
    deleteAccountStep2: 'Toque em Excluir conta',
    deleteAccountStep3: 'Confirme duas vezes — a exclusão é imediata e irreversível',
    deleteAccountNote: 'Isso remove seu inventário, receitas, histórico de chat, assinaturas e credenciais de autenticação.',
    deleteAccountQuestions: 'Dúvidas? E-mail',
  },
} as const;

export function getTranslation(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] || translations.en[key] || key;
}

export function t(locale: Locale, key: TranslationKey, replacements?: Record<string, string>): string {
  let text = getTranslation(locale, key);
  if (replacements) {
    Object.entries(replacements).forEach(([k, v]) => {
      text = text.replace(`{${k}}`, v);
    });
  }
  return text;
}
