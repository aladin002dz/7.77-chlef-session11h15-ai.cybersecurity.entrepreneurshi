import type { Deck } from "./types";

const fr: Deck = {
  locale: "fr",
  dir: "ltr",
  meta: {
    title: "IA, Cybersécurité & Entrepreneuriat Digital",
    description:
      "Atelier pour les 24-30 ans (Programme 7.77, Skills Center Mobilis Chlef, animé par Mahfoudh Arous) : prompts IA pour trouver des clients en freelance, cybersécurité freelance (protéger données et appareils) et entrepreneuriat digital.",
  },
  ui: {
    langName: "Français",
    prev: "Précédent",
    next: "Suivant",
    switchLanguage: "Langue",
    swipeHint: "Glissez pour naviguer",
    keyboardHint: "Utilisez les flèches ← →",
    home: "Accueil",
    fullscreen: "Plein écran",
    exitFullscreen: "Quitter le plein écran",
    scanToOpen: "Scannez pour ouvrir en ligne",
  },
  slides: [
    {
      type: "title",
      title: "IA, Cybersécurité & Entrepreneuriat Digital",
      subtitle:
        "Du diplôme au premier projet : portfolio, micro-services, indépendance",
      speaker: "Mahfoudh Arous — Skills Center Mobilis Chlef · Programme 7.77",
    },
    { type: "block", label: "Bloc 1", title: "Intelligence Artificielle" },
    {
      type: "content",
      eyebrow: "Diapositive 1/11",
      title: "Le Test de Réalité",
      lines: [
        { marker: "bullet", bold: "Sondage à main levée :" },
        {
          marker: "quote",
          indent: 1,
          text: "« Qui dans la salle a déjà testé ChatGPT ou Claude ? » → La plupart des mains se lèvent.",
        },
        {
          marker: "bullet",
          bold: "Le diagnostic :",
          text: "Beaucoup de personnes consomment l'IA comme un moteur de recherche sophistiqué. Rares sont ceux qui l'utilisent pleinement comme outil de création de valeur concrète.",
        },
        {
          marker: "bullet",
          bold: "Objectif de l'atelier :",
          text: "Transformer une simple curiosité en une compétence immédiatement applicable.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 2/11",
      title: "Les 3 Niveaux d'Exploitation de l'IA",
      lines: [
        {
          marker: "number",
          number: 1,
          bold: "Automatisation :",
          text: "Je demande à l'outil de faire un travail d'exécution basique (corriger mon CV, traduire un paragraphe). Impact souvent limité.",
        },
        {
          marker: "number",
          number: 2,
          bold: "Augmentation :",
          text: "L'outil est un copilote de réflexion stratégique (structuration d'un projet, identification de faiblesses).",
        },
        {
          marker: "number",
          number: 3,
          bold: "Autonomie :",
          text: "Mise en place d'agents ou de workflows semi-automatiques pour délivrer des micro-services.",
        },
        {
          marker: "bullet",
          bold: "La clé :",
          text: "La véritable valeur ajoutée réside dans le niveau 2 et 3. La simple exécution de tâches ne suffit plus pour se démarquer.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 3/11",
      title: "Les 4 Compétences Clés",
      lines: [
        {
          marker: "bullet",
          bold: "1. Délégation :",
          text: "Savoir exactement quoi externaliser à l'algorithme (mise en page, structure, variations d'accroches) et ce qui fait votre valeur (négociation humaine, expertise de terrain).",
        },
        {
          marker: "bullet",
          bold: "2. Description :",
          text: "Savoir briefer l'outil comme un client exigeant (contraintes, ton, cible chélifienne).",
        },
        {
          marker: "bullet",
          bold: "3. Discernement :",
          text: "Repérer les clichés, les inventions et les textes sans saveur.",
        },
        {
          marker: "bullet",
          bold: "4. Diligence :",
          text: "Garantir personnellement la conformité et la pertinence du livrable.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 4/11",
      title: "Diplômés & Freelances — Les Nouvelles Attentes du Marché",
      lines: [
        {
          marker: "bullet",
          bold: "Le constat :",
          text: "Au-delà du module spécifique validé en Master 2, le recruteur ou le partenaire local se pose souvent cette question :",
        },
        {
          marker: "quote",
          indent: 1,
          text: "« Est-ce que cette personne sait résoudre mon problème concret de visibilité, de gestion ou d'organisation ? »",
        },
        {
          marker: "bullet",
          bold: "La réalité du marché :",
          text: "Le diplôme atteste de votre parcours académique.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "L'étude de cas et le portfolio démontrent votre valeur immédiate.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 5/11",
      title: "Comment Créer une Preuve Sans Avoir de Client Préalable ?",
      lines: [
        { marker: "bullet", bold: 'Méthodologie « Reverse-Engineering » :' },
        {
          marker: "number",
          number: 1,
          indent: 1,
          text: "Choisissez un commerce, une clinique, une PME ou un artisan réel à Chlef (ex : magasin de meubles, cabinet médical, grossiste).",
        },
        {
          marker: "number",
          number: 2,
          indent: 1,
          text: "Identifiez un problème évident : fiche Google Maps inexistante ou mal rédigée, catalogue produit illisible, communication réseaux sociaux inexistante.",
        },
        {
          marker: "number",
          number: 3,
          indent: 1,
          text: "Utilisez l'IA pour monter un dossier d'audit complet en 1 heure (audit + proposition de refonte + maquette de post ou fiche technique).",
        },
        {
          marker: "number",
          number: 4,
          indent: 1,
          text: "Présentez la démarche sous le format imparable : Problème Identifié → Solution Proposée → Impact Mesurable.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 6/11",
      title: "Démo Live — Créer une Offre Locale en 10 Minutes",
      lines: [
        {
          marker: "bullet",
          bold: "Compétence socle :",
          text: "Restructuration d'offres et fiches produits pour commerces de Chlef.",
        },
        {
          marker: "bullet",
          bold: "Cible :",
          text: "Prêt-à-porter ou matériel informatique du centre-ville de Chlef.",
        },
        { marker: "bullet", bold: "Production en direct avec l'auditoire :" },
        {
          marker: "number",
          number: 1,
          indent: 1,
          text: "Définition du package d'offre : Pack Visibilité Express (Audit Google Maps + 5 fiches produits optimisées).",
        },
        {
          marker: "number",
          number: 2,
          indent: 1,
          text: "Message d'approche WhatsApp ultra-court et respectueux.",
        },
        {
          marker: "number",
          number: 3,
          indent: 1,
          text: "Plan d'action clair pour prouver votre expertise.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 7/11",
      title: "Prompt Basique vs Prompt de Prospection Structuré",
      lines: [
        { marker: "bullet", bold: "Le prompt peu optimal :" },
        {
          marker: "quote",
          indent: 1,
          text: "« Écris-moi une description de mon service de communication digitale. »",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "Résultat :",
          text: "jargon générique (« synergie », « visibilité 360 »), phrases longues, souvent inadapté pour un commerçant local.",
        },
        { marker: "bullet", bold: "Le prompt d'impact (RCTFC) :" },
        {
          marker: "quote",
          indent: 1,
          text: "« Tu es consultant commercial pour PME régionales. Je propose des services numériques à Chlef. Rédige un message WhatsApp de 60 mots pour un commerçant local. Propose d'optimiser gratuitement 2 fiches produits pour tester la qualité de mon travail, sans engagement. Ton direct, respectueux, sans jargon. Termine par une question fermée et claire. »",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 8/11",
      title: "Le Modèle RCTFC Appliqué au Business",
      lines: [
        {
          marker: "bullet",
          bold: "R — Rôle :",
          text: "Consultant en acquisition pour PME et commerces indépendants.",
        },
        {
          marker: "bullet",
          bold: "C — Contexte :",
          text: "Marché local de Chlef ; prospection directe via WhatsApp business.",
        },
        {
          marker: "bullet",
          bold: "T — Tâche :",
          text: "Message d'accroche pour proposer une démonstration de valeur gratuite.",
        },
        {
          marker: "bullet",
          bold: "F — Format :",
          text: "60 mots maximum, formulation percutante en français accessible ou darija professionnelle.",
        },
        {
          marker: "bullet",
          bold: "C — Contraintes :",
          text: "Aucun mot savant, aucune promesse démesurée, appel à l'action précis (validation d'un créneau d'appel de 5 min).",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 9/11",
      title: "Astuces Avancées pour Optimiser l'Utilisation de l'IA",
      lines: [
        {
          marker: "bullet",
          bold: "Espaces de travail dédiés :",
          text: "Au lieu de longues discussions qui diluent le contexte, utilisez les Projects (ChatGPT/Claude) ou Gems (Gemini) pour structurer vos tâches.",
        },
        {
          marker: "bullet",
          bold: "Le bon modèle pour la bonne tâche :",
          text: "Utilisez des modèles rapides pour les tâches simples (résumés, formatage) et des modèles de raisonnement pour les problèmes complexes.",
        },
        {
          marker: "bullet",
          bold: 'Capitaliser sur les « Skills » :',
          text: "Créez et exploitez des Skills (instructions personnalisées réutilisables) pour automatiser vos workflows réguliers.",
        },
        {
          marker: "bullet",
          bold: "L'approche Agentique :",
          text: "Pour les projets d'envergure, ne demandez pas tout d'un coup. Décomposez le travail et utilisez des sous-agents spécialisés (ex : recherche, rédaction, révision).",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 10/11",
      title: "Le Mur des Hallucinations",
      lines: [
        { marker: "bullet", bold: "Mise en garde :" },
        {
          marker: "bullet",
          indent: 1,
          text: "Demandez à l'IA des horaires administratifs locaux, des lois fiscales algériennes précises ou des coordonnées d'entreprises.",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Elle peut inventer des adresses à Chlef ou citer des articles de loi obsolètes avec un aplomb total.",
        },
        {
          marker: "bullet",
          bold: "Conséquence :",
          text: "Si vous présentez un livrable contenant une hallucination à un client, votre réputation professionnelle locale peut être fortement compromise.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 11/11",
      title: "Atelier Pratique (30 min — Travail en Binômes)",
      lines: [
        { marker: "bullet", bold: "Consignes :" },
        {
          marker: "number",
          number: 1,
          indent: 1,
          text: "Formez des binômes avec votre smartphone.",
        },
        {
          marker: "number",
          number: 2,
          indent: 1,
          text: "Choisissez une compétence que vous maîtrisez réellement (rédaction, design, tableur Excel, gestion de page FB, traduction).",
        },
        {
          marker: "number",
          number: 3,
          indent: 1,
          text: "Définissez votre cible concrète à Chlef ou en Algérie.",
        },
        {
          marker: "number",
          number: 4,
          indent: 1,
          text: "Générez votre offre et votre message d'approche avec la structure RCTFC.",
        },
        {
          marker: "number",
          number: 5,
          indent: 1,
          text: "Détectez 2 défauts majeurs dans la réponse et itérez une fois.",
        },
        {
          marker: "number",
          number: 6,
          indent: 1,
          bold: "Résultat exigé :",
          text: "Un message prêt à être envoyé à 3 prospects réels dès ce soir.",
        },
      ],
    },
    { type: "block", label: "Bloc 2", title: "Cybersécurité" },
    {
      type: "content",
      eyebrow: "Diapositive 1/5",
      title: "Action Immédiate — Sécuriser sa Boîte Mail",
      lines: [
        {
          marker: "bullet",
          bold: "Pourquoi la boîte mail ?",
          text: "C'est la clé de voûte de toute votre existence numérique. Qui contrôle votre boîte mail peut réinitialiser vos banques, réseaux sociaux et démarches administratives.",
        },
        { marker: "bullet", bold: "Procédure en direct (2 minutes) :" },
        {
          marker: "number",
          number: 1,
          indent: 1,
          text: "Vérifier si vos identifiants ont déjà fuité sur haveibeenpwned.com.",
        },
        {
          marker: "number",
          number: 2,
          indent: 1,
          text: "Ouvrir les paramètres du compte Google / Microsoft sur votre smartphone.",
        },
        {
          marker: "number",
          number: 3,
          indent: 1,
          text: "Activer la validation en deux étapes (2FA / Double Authentification).",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 2/5",
      title: "Cybersécurité Freelance — Protéger ses Données et son Matériel",
      lines: [
        { marker: "bullet", bold: "1. Fausses offres de missions :" },
        {
          marker: "bullet",
          indent: 1,
          text: "Annonces sur Telegram/Facebook réclamant des « frais de dossier », l'achat de kits de départ, ou l'exécution d'un fichier .zip ou .exe déguisé en brief.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "Règle absolue :",
          text: "Un vrai projet ne nécessite jamais de payer pour travailler.",
        },
        {
          marker: "bullet",
          bold: "2. L'arnaque au faux test de compétence / hameçonnage :",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Le « client » exige l'installation d'un logiciel spécifique ou l'accès à vos comptes pour évaluer votre travail.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "Règle absolue :",
          text: "Ne donnez jamais accès à vos données personnelles, mots de passe ou environnement de travail sans garanties.",
        },
        {
          marker: "bullet",
          bold: "3. Hygiène de base :",
          text: "Ne cliquez sur aucun lien suspect reçu par SMS ou message non sollicité.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 3/5",
      title: "Cybersécurité — Le Piège des Liens et QR Codes Malveillants",
      lines: [
        {
          marker: "bullet",
          bold: "Le Danger des QR Codes (Quishing) :",
          text: "Scanner un QR code dans un lieu public ou sur un document non vérifié peut vous rediriger vers un site frauduleux ou télécharger un malware à votre insu.",
        },
        {
          marker: "bullet",
          bold: "Les Liens Trompeurs (Phishing) :",
          text: "Méfiez-vous des liens reçus par SMS (Smishing), email ou sur les réseaux sociaux. Les pirates clonent souvent des sites officiels (banques, services publics) pour voler vos identifiants.",
        },
        { marker: "bullet", bold: "Les bons réflexes :" },
        {
          marker: "number",
          number: 1,
          indent: 1,
          bold: "Vérifiez l'URL :",
          text: "Avant d'entrer un mot de passe ou des données, assurez-vous que l'adresse du site est exacte.",
        },
        {
          marker: "number",
          number: 2,
          indent: 1,
          bold: "Ne scannez pas aveuglément :",
          text: "Évitez de scanner des QR codes douteux ou collés par-dessus d'autres affichages.",
        },
        {
          marker: "number",
          number: 3,
          indent: 1,
          bold: "Privilégiez l'accès direct :",
          text: "Tapez vous-même l'adresse du service web au lieu de cliquer sur un lien reçu.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 4/5",
      title: 'Le Piège du « Vibe Coding »',
      lines: [
        { marker: "bullet", bold: "Qu'est-ce que le Vibe Coding ?" },
        { marker: "bullet", bold: "Les Dangers Majeurs :" },
        {
          marker: "bullet",
          indent: 1,
          bold: "Identifiants en clair :",
          text: "L'IA peut générer du code contenant vos mots de passe ou clés d'API en dur, les rendant accessibles à tous si le code est publié.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "Failles de sécurité ignorées :",
          text: "En copiant-collant aveuglément le code généré, les utilisateurs laissent des failles de sécurité majeures dans leurs applications, facilement exploitables par les pirates.",
        },
        { marker: "bullet", bold: "La Règle d'Or (Sécurisation des clés) :" },
        {
          marker: "bullet",
          indent: 1,
          text: "Stockez toujours vos clés d'API et mots de passe dans un fichier .env.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "Crucial :",
          text: "Ajoutez impérativement ce fichier .env à votre fichier .gitignore pour éviter qu'il ne soit publié accidentellement sur des plateformes comme GitHub.",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Faites toujours valider la sécurité de vos applications avant de les publier.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 5/5",
      title: "Protéger son Argent & ses Proches (BaridiMob & IA)",
      lines: [
        { marker: "bullet", bold: "Fraudes BaridiMob & E-commerce :" },
        {
          marker: "bullet",
          indent: 1,
          bold: "Règle absolue :",
          text: "Le code SMS / OTP est votre signature. Ne le donnez jamais. Aucun agent d'Algérie Poste ne vous appellera pour vérifier un compte.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "L'arnaque des pages Instagram :",
          text: "Méfiez-vous des vendeurs en ligne (vêtements, tech) sans magasin physique qui exigent un paiement total via BaridiMob avant la livraison.",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: 'Le piège des applications « Crackées » :',
          text: "Télécharger un APK gratuit (Spotify moddé, faux WhatsApp) hors des stores officiels est le meilleur moyen de se faire voler ses OTP. Ces applis lisent vos SMS en arrière-plan et vident votre compte.",
        },
        {
          marker: "bullet",
          bold: "Ingénierie Sociale & Clonage Vocal (IA) :",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "L'arnaque de l'urgence :",
          text: "Vous recevez un message WhatsApp (ou même un vocal cloné par IA) d'un ami ou d'un membre de la famille : « Je suis bloqué, envoie-moi 5000 DA sur ce numéro BaridiMob en urgence ».",
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "Le rôle de bouclier :",
          text: 'Vous êtes souvent le « tech support » de vos parents. Sensibilisez-les à ne jamais transférer d\'argent suite à un simple message.',
        },
        {
          marker: "bullet",
          indent: 1,
          bold: "L'antidote immédiat :",
          text: "Ne vous fiez pas à la voix ni à la photo. Raccrochez et appelez la personne directement (par appel téléphonique classique) pour confirmer.",
        },
      ],
    },
    { type: "block", label: "Bloc 3", title: "Entrepreneuriat Digital" },
    {
      type: "content",
      eyebrow: "Diapositive 1/3",
      title: "Valoriser ses Compétences en Algérie — La Réalité du Terrain",
      lines: [
        { marker: "bullet", bold: "Le marché national :" },
        {
          marker: "bullet",
          indent: 1,
          text: "Privilégiez les projets qui répondent à des besoins locaux concrets (digitalisation de commerces, amélioration de la visibilité).",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Construisez un réseau de confiance basé sur la qualité de vos livrables.",
        },
        { marker: "bullet", bold: "Le marché international :" },
        {
          marker: "bullet",
          indent: 1,
          text: "Les plateformes (Upwork, Fiverr) permettent de confronter vos compétences aux standards mondiaux.",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Misez sur la niche plutôt que sur les services génériques.",
        },
        {
          marker: "bullet",
          bold: "Un piège à éviter :",
          text: "Attendre d'avoir une offre ou un portfolio parfait. Lancez-vous avec une première version (MVP) et itérez avec les retours du marché.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 2/3",
      title: "Valoriser son Expertise et sa Visibilité",
      lines: [
        {
          marker: "bullet",
          bold: "Développer sa visibilité en ligne :",
          text: "Ne restez pas dans l'ombre. Prenez la parole sur les réseaux professionnels pour partager votre expérience et vos idées.",
        },
        {
          marker: "bullet",
          bold: "Construire un portfolio solide :",
          text: "Rassemblez et documentez vos réalisations, projets et expérimentations pour prouver concrètement votre savoir-faire.",
        },
        {
          marker: "bullet",
          bold: "Créer et expérimenter :",
          text: "L'apprentissage passe par la pratique. Lancez des projets, testez de nouvelles idées et partagez ouvertement vos apprentissages.",
        },
        {
          marker: "bullet",
          bold: "Réseauter et connecter avec les gens :",
          text: "La finalité reste humaine. Utilisez ces outils pour identifier vos pairs, engager la conversation et bâtir des relations authentiques.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 3/3",
      title: "La Règle des 30 Jours",
      lines: [
        {
          marker: "bullet",
          bold: "Désamorcer le mythe :",
          text: "L'IA est un outil, elle ne fera pas le travail à votre place. Méfiez-vous de l'idée du succès sans effort ou des résultats magiques.",
        },
        {
          marker: "bullet",
          bold: "L'objectif stratégique :",
          text: "Livrer votre premier projet réel (même un micro-service gratuit ou un audit) pour un partenaire dans les 30 prochains jours.",
        },
        {
          marker: "bullet",
          bold: "Pourquoi ?",
          text: "C'est la première confrontation avec le terrain qui aide souvent à dépasser le syndrome de l'imposteur.",
        },
      ],
    },
    {
      type: "block",
      label: "Bloc 4",
      title: "Conclusion & Passage à l'Action",
    },
    {
      type: "content",
      eyebrow: "Diapositive 1/2",
      title: "Votre Engagement Dès Aujourd'hui",
      lines: [
        {
          marker: "number",
          number: 1,
          bold: "Double authentification (2FA) activée",
          text: "sur votre email professionnel et WhatsApp.",
        },
        {
          marker: "number",
          number: 2,
          bold: "Une preuve concrète finalisée",
          text: "(mini-dossier ou audit de 2 pages avec l'aide de l'IA).",
        },
        {
          marker: "number",
          number: 3,
          bold: "Trois prises de contact ciblées",
          text: "envoyées au cours de la semaine.",
        },
      ],
    },
    {
      type: "content",
      eyebrow: "Diapositive 2/2",
      title: "Rester à Jour Sans Y Passer ses Soirées",
      lines: [
        { marker: "bullet", bold: "La méthode minimaliste et durable :" },
        {
          marker: "bullet",
          indent: 1,
          bold: "Pour la vidéo :",
          text: "Suivre une chaîne pertinente (ex : [Entrepreneur DZ](https://www.youtube.com/@Entrepreneurdz/)).",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Pas 10 newsletters : une seule lecture ciblée (ex : [TLDR AI](https://tldr.tech/ai) en 5 minutes ou [Superhuman AI](https://www.joinsuperhuman.ai/)).",
        },
        {
          marker: "bullet",
          indent: 1,
          text: "Un rituel unique : 10 minutes chaque samedi soir ou dimanche matin à 08h00.",
        },
      ],
    },
    {
      type: "closing",
      title: "Ressources & Contact",
      message:
        "Merci pour votre attention ! (L'avenir se construit aujourd'hui.)",
      items: [
        {
          label: "Programme National 7.77",
          value:
            "[777.mpt.gov.dz](https://777.mpt.gov.dz/) — Ressources et accompagnement via le Skills Center Mobilis Chlef.",
        },
        {
          label: "Site web",
          value: "[mahfoudh.dev](https://mahfoudh.dev)",
        },
        {
          label: "YouTube",
          value:
            "[@mahfoudh_arous](https://www.youtube.com/@mahfoudh_arous) (FR) · " +
            "[ورشة البرمجة مع محفوظ](https://www.youtube.com/@%D9%88%D8%B1%D8%B4%D8%A9_%D8%A7%D9%84%D8%A8%D8%B1%D9%85%D8%AC%D8%A9_%D9%85%D8%B9_%D9%85%D8%AD%D9%81%D9%88%D8%B8) (AR)",
        },
        {
          label: "Questions & Échanges d'expérience",
          value: "Micro ouvert.",
        },
      ],
    },
  ],
};

export default fr;
