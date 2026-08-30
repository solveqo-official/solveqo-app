import type { SiteCopy } from './types';

const copy: SiteCopy = {
  locale: 'sk',
  langLabel: 'Slovenčina',
  menu: 'Menu',
  downloadAppCta: 'Stiahnuť aplikáciu',
  footerTagline: 'Trhovisko lokálnych služieb spájajúce zákazníkov a profesionálov.',
  footerRights: 'Všetky práva vyhradené.',
  nav: [
    { route: 'privacy', label: 'Súkromie' },
    { route: 'terms', label: 'Podmienky' },
    { route: 'support', label: 'Podpora' },
    { route: 'deleteAccount', label: 'Vymazať účet' },
    { route: 'communityGuidelines', label: 'Pravidlá komunity' },
  ],
  home: {
    meta: {
      title: 'SOLVEQO — OD PROBLÉMU K RIEŠENIU.',
      description:
        'SOLVEQO spája ľudí, ktorí potrebujú pomoc, s profesionálmi, ktorí dokážu prácu vyriešiť. Zverejňujte požiadavky, prijímajte ponuky, chatujte a dokončujte práce lokálne.',
    },
    eyebrow: 'Trhovisko lokálnych služieb',
    tagline: 'OD PROBLÉMU K RIEŠENIU.',
    lead1:
      'SOLVEQO spája ľudí, ktorí potrebujú pomoc, s profesionálmi, ktorí dokážu prácu vyriešiť. Zákazníci zverejňujú lokálne požiadavky, profesionáli odpovedajú ponukami a obe strany sa koordinujú cez chat až do dokončenia práce.',
    lead2:
      'Mobilná aplikácia SOLVEQO je dostupná pre iOS a Android. Táto webstránka poskytuje podporu, právne informácie a návod na správu účtu.',
    heroCardTitle: 'Ako to funguje',
    heroCardBody:
      'Zákazníci popíšu prácu a lokalitu. Profesionáli prehliadajú blízke príležitosti, posielajú ponuky a komunikujú v aplikácii. Recenzie a reputácia pomáhajú budovať dôveru v komunite.',
    heroCardAria: 'O SOLVEQO',
    featuresAria: 'Hlavné výhody platformy',
    feature1Title: 'Zverejňovanie a hľadanie prác',
    feature1Body:
      'Zákazníci zverejňujú lokálne požiadavky. Profesionáli nájdu prácu podľa svojich zručností a oblasti.',
    feature2Title: 'Ponuky a chat',
    feature2Body:
      'Porovnajte ponuky, prijmite vhodného profesionála a dohodnite detaily cez správy v aplikácii.',
    feature3Title: 'Nástroje dôvery a bezpečia',
    feature3Body:
      'Nahlasovanie, blokovanie a pravidlá komunity pomáhajú udržiavať trhovisko slušné a užitočné.',
    ctaTitle: 'Potrebujete pomoc s účtom?',
    ctaBodyHtml:
      'Navštívte naše <a href="/support">Centrum podpory</a>, prečítajte si <a href="/community-guidelines">Pravidlá komunity</a> alebo napíšte na <a href="mailto:support@solveqo.com">support@solveqo.com</a>.',
    downloadTitle: 'Stiahnite si SOLVEQO',
    downloadBody:
      'Mobilná aplikácia SOLVEQO bude dostupná pre iOS a Android. Odkazy na stiahnutie v obchodoch sa tu zobrazia po uvedení aplikácie.',
    downloadStoreAppStore: 'App Store — čoskoro',
    downloadStoreGooglePlay: 'Google Play — čoskoro',
  },
  support: {
    meta: {
      title: 'Podpora — SOLVEQO',
      description:
        'Pomoc s účtom SOLVEQO, bezpečnostnými nástrojmi, predplatným a vymazaním účtu. Kontakt: support@solveqo.com.',
      heading: 'Podpora',
      intro:
        'Pomôžeme vám s prístupom k účtu, problémami na trhovisku, bezpečnostnými nástrojmi a predplatným. Odpovedáme zvyčajne do 2–3 pracovných dní.',
    },
    contactTitle: 'Kontakt',
    contactBodyHtml:
      'Napíšte na <a href="mailto:support@solveqo.com">support@solveqo.com</a> z e-mailu vášho účtu a stručne popíšte problém.',
    accountTitle: 'Pomoc s účtom',
    accountItems: [
      'Overenie e-mailu a obnovenie hesla',
      'Profil a nastavenia profesionálneho režimu',
      'Práce, ponuky, chat, recenzie a notifikácie',
      'Odhlásenie zo všetkých zariadení',
    ],
    accountNoteHtml:
      'Väčšinu nastavení účtu nájdete v aplikácii v časti <strong>Profil → Nastavenia</strong>.',
    safetyTitle: 'Bezpečnosť, nahlasovanie a blokovanie',
    safetyBody1:
      'Pri obťažovaní, podvodoch, spame alebo inom škodlivom správaní použite nástroje na nahlasovanie a blokovanie v aplikácii. Môžete nám poslať aj e-mail s podrobnosťami na posúdenie.',
    safetyBody2Html:
      'Očakávané správanie na SOLVEQO nájdete v <a href="/community-guidelines">Pravidlách komunity</a>.',
    subscriptionTitle: 'Pomoc s predplatným (SOLVEQO Pro)',
    subscriptionBody1Html:
      'Predplatné SOLVEQO Pro spravujete cez Apple App Store alebo Google Play. Použite <strong>Spravovať predplatné</strong> v nastaveniach aplikácie alebo fakturáciu priamo v účte Apple alebo Google.',
    subscriptionBody2Html:
      'Vymazanie účtu SOLVEQO automaticky nezruší predplatné spravované obchodom. Viac na stránke <a href="/delete-account">Vymazať účet</a>.',
    deletionTitle: 'Vymazanie účtu',
    deletionBodyHtml:
      'Účet môžete vymazať v aplikácii v časti <strong>Nastavenia → Vymazať účet</strong>, alebo postupujte podľa samostatnej stránky, ak potrebujete návod alebo nemáte prístup k aplikácii.',
    deletionLink: 'Vymazať účet',
    legalTitle: 'Právne informácie',
    legalPrivacy: 'Zásady ochrany súkromia',
    legalTerms: 'Podmienky používania',
    legalGuidelines: 'Pravidlá komunity',
  },
  deleteAccount: {
    meta: {
      title: 'Vymazať účet — SOLVEQO',
      description:
        'Ako vymazať účet SOLVEQO v aplikácii alebo kontaktovaním support@solveqo.com. Predplatné v obchode je potrebné zrušiť samostatne v nastaveniach Apple alebo Google.',
      heading: 'Vymazať účet SOLVEQO',
      intro:
        'Účet SOLVEQO a súvisiace údaje môžete natrvalo vymazať. Pred pokračovaním si pozorne prečítajte túto stránku, najmä ak máte aktívne predplatné SOLVEQO Pro.',
    },
    inAppTitle: 'Vymazanie v aplikácii SOLVEQO',
    inAppIntro: 'Najrýchlejší spôsob vymazania účtu je v mobilnej aplikácii:',
    inAppSteps: [
      'Otvorte SOLVEQO a prihláste sa.',
      'Prejdite na Profil → Nastavenia.',
      'Klepnite na Vymazať účet a dokončite potvrdenie.',
    ],
    inAppNoteHtml:
      'Vymazanie účtu je trvalé. Odstráni váš účet SOLVEQO a súvisiace údaje podľa našich <a href="/privacy">Zásad ochrany súkromia</a>.',
    subscriptionTitle: 'Dôležité: predplatné App Store a Google Play',
    subscriptionWarningHtml:
      '<strong>Vymazanie účtu SOLVEQO automaticky nezruší aktívne predplatné SOLVEQO Pro spravované Apple App Store alebo Google Play.</strong>',
    subscriptionBody:
      'SOLVEQO nemôže priamo zrušiť predplatné fakturované spoločnosťou Apple alebo Google vo vašom mene. Ak máte SOLVEQO Pro, musíte predplatné samostatne spravovať alebo zrušiť v nastaveniach účtu Apple alebo Google, aby ste predišli ďalším poplatkom.',
    subscriptionApple: 'Apple: Nastavenia → Apple ID → Predplatné → SOLVEQO Pro',
    subscriptionGoogle:
      'Google Play: Obchod Google Play → Platby a predplatné → Predplatné → SOLVEQO Pro',
    subscriptionManageHtml:
      'Ak máte stále prístup k aplikácii, pred vymazaním účtu môžete použiť aj <strong>Spravovať predplatné</strong> v nastaveniach SOLVEQO.',
    noAccessTitle: 'Nemáte prístup k aplikácii?',
    noAccessBody1Html:
      'Ak sa nemôžete prihlásiť alebo už nemáte aplikáciu nainštalovanú, kontaktujte nás na <a href="mailto:support@solveqo.com">support@solveqo.com</a>.',
    noAccessBody2:
      'Napíšte nám z e-mailovej adresy prepojenej s vaším účtom SOLVEQO, aby sme mohli overiť žiadosť. Môžeme požiadať o ďalšie informácie na ochranu vášho účtu.',
    afterTitle: 'Čo sa stane po vymazaní',
    afterItems: [
      'Vaše prihlásenie do SOLVEQO bude odstránené a budete odhlásení.',
      'Profil, práce, správy a ďalšie údaje účtu sa vymažú podľa Zásad ochrany súkromia.',
      'Nahrané súbory spojené s účtom (profil, portfólio, fotky prác) sa odstránia v rámci procesu vymazania.',
      'Aktívne predplatné App Store alebo Google Play môže pokračovať, kým ho nezrušíte u Apple alebo Google.',
    ],
    relatedTitle: 'Súvisiace informácie',
    relatedPrivacy: 'Zásady ochrany súkromia',
    relatedTerms: 'Podmienky používania',
    relatedSupport: 'Centrum podpory',
  },
  communityGuidelines: {
    meta: {
      title: 'Pravidlá komunity — SOLVEQO',
      description:
        'Pravidlá slušného a bezpečného používania SOLVEQO. Informácie o nahlasovaní, blokovaní a vymáhaní pravidiel na našom trhovisku.',
      heading: 'Pravidlá komunity',
      intro:
        'SOLVEQO spája zákazníkov a profesionálov na lokálnom trhovisku. Tieto pravidlá pomáhajú udržiavať komunitu slušnú, bezpečnú a užitočnú pre všetkých.',
    },
    sections: [
      {
        title: 'Buďte slušní',
        bodyHtml:
          'Správajte sa k ostatným s úctou. Jasne komunikujte o prácach, dostupnosti, cenových očakávaniach a rozsahu práce. Pri nezhodách zostávajte profesionálni a sústreďte sa na vecné riešenie.',
      },
      {
        title: 'Žiadne obťažovanie ani hrozby',
        bodyHtml:
          'Nešikanujte, nezastrašujte, nestalkujte ani nevyhrážajte sa ostatným. Opakovaný nechcený kontakt, urážlivý jazyk alebo snaha tlačiť na používateľa po odmietnutí ponuky či zablokovaní nie je povolená.',
      },
      {
        title: 'Žiadna diskriminácia ani nenávisť',
        bodyHtml:
          'SOLVEQO netoleruje diskrimináciu, urážky ani nenávistné správanie na základe rasy, etnicity, národnosti, náboženstva, pohlavia, sexuálnej orientácie, zdravotného postihnutia alebo veku.',
      },
      {
        title: 'Žiadne podvody, klamstvo ani podvodné konanie',
        bodyHtml:
          'Nezneužívajte identitu iných, nevytvárajte falošné účty, nezavádzajte ohľadom zručností ani identity a nepokúšajte sa oklamať používateľov. Nepýtajte sa na platby mimo dohodnutých pravidiel ani na citlivé finančné údaje nesúvisiace s prácou.',
      },
      {
        title: 'Žiadny spam',
        bodyHtml:
          'Neposielajte hromadné nevyžiadané správy, duplicitné ponuky, propagačný obsah nesúvisiaci s prácou ani opakovaný kontakt po odmietnutí či zablokovaní.',
      },
      {
        title: 'Žiadna nelegálna ani nebezpečná aktivita',
        bodyHtml:
          'Nepoužívajte SOLVEQO na nelegálne služby, kradnutý tovar, nebezpečnú prácu, na ktorú nemáte kvalifikáciu, ani aktivitu, ktorá ohrozuje ostatných. Dodržiavajte platné zákony a bezpečnostné normy.',
      },
      {
        title: 'Len vhodný obsah',
        bodyHtml:
          'Inzeráty prác, profily, portfólio a chat musia byť relevantné a vhodné. Nezverejňujte sexuálne explicitný obsah, grafické násilie ani materiál, ktorý zneužíva alebo ohrozuje ostatných — najmä maloletých.',
      },
      {
        title: 'Pravdivé inzeráty a profily',
        bodyHtml:
          'Zákazníci majú popisovať práce pravdivo. Profesionáli majú presne uvádzať skúsenosti, služby a dostupnosť. Zavádzajúce nadpisy, fotky, lokality alebo ponuky narúšajú dôveru a môžu viesť k opatreniam voči účtu.',
      },
      {
        title: 'Nahlasovanie',
        bodyHtml:
          'Ak vidíte obsah alebo správanie porušujúce tieto pravidlá, použite nahlasovanie v aplikácii. Môžete nás tiež kontaktovať na <a href="mailto:support@solveqo.com">support@solveqo.com</a> s e-mailom účtu, kontextom práce alebo chatu a popisom udalosti.',
      },
      {
        title: 'Blokovanie',
        bodyHtml:
          'Používateľov môžete zablokovať, aby ste zabránili ďalšej interakcii. Blokovanie je nástroj osobnej bezpečnosti; pri vážnych alebo opakovaných porušeniach nás tiež informujte nahlasením.',
      },
      {
        title: 'Vymáhanie pravidiel',
        bodyHtml:
          'SOLVEQO môže pri porušení týchto pravidiel, Podmienok používania alebo zákona upozorniť, obmedziť, pozastaviť alebo natrvalo odstrániť účty. Môžeme odstrániť obsah, obmedziť funkcie alebo prijať iné opatrenia na ochranu používateľov a trhoviska.',
      },
      {
        title: 'Otázky',
        bodyHtml:
          'Pre pomoc alebo nahlásenie problému navštívte <a href="/support">Podporu</a> alebo napíšte na <a href="mailto:support@solveqo.com">support@solveqo.com</a>.',
      },
    ],
  },
  privacy: {
    meta: {
      title: 'Zásady ochrany súkromia — SOLVEQO',
      description:
        'Informácie o spracúvaní osobných údajov v aplikácii SOLVEQO a na solveqo.com. Otázky: support@solveqo.com.',
      heading: 'Zásady ochrany súkromia',
      intro:
        'Ako SOLVEQO zhromažďuje, používa a chráni osobné údaje pri používaní mobilnej aplikácie a súvisiacich služieb.',
    },
  },
  terms: {
    meta: {
      title: 'Podmienky používania — SOLVEQO',
      description:
        'Podmienky používania mobilnej aplikácie SOLVEQO a súvisiacich služieb. Kontakt: support@solveqo.com.',
      heading: 'Podmienky používania',
      intro: 'Pravidlá a očakávania pri používaní trhoviska SOLVEQO a súvisiacich služieb.',
    },
    reviewNotice:
      'Tieto Podmienky používania aktualizujeme podľa nedávnych zmien v SOLVEQO vrátane bezpečnostných funkcií, prístupu k úložisku, vymazania účtu a správy predplatného. Pred zverejnením aktualizovanej verzie nás kontaktujte na support@solveqo.com.',
  },
};

export default copy;
