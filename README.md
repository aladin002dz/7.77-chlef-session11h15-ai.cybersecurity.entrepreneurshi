# IA, Cybersécurité & Entrepreneuriat Digital

🔗 **[Live preview](https://aladin002dz.github.io/7.77-chlef-session11h15-ai.cybersecurity.entrepreneurshi/)**

Diapositives interactives de l'atelier **Programme 7.77 · Skills Center Mobilis Chlef**, animé par Mahfoudh Arous.

Le contenu original (`SESSION_11h15_24-30_ANS.md`) a été transformé en un mini-site de présentation navigable :

- **Sur ordinateur** : flèches `←` `→` du clavier (ou les boutons de navigation).
- **Sur mobile** : glisser le doigt à gauche/droite (swipe) sur l'écran.
- **3 langues** : Français (`/`), English (`/en`), العربية (`/ar`, mise en page RTL).
- **Responsive** : de la taille smartphone au grand écran de projection.

## Stack technique

Même stack que [aladin002dz.github.io](https://github.com/aladin002dz/aladin002dz.github.io) :

- [Next.js](https://nextjs.org) (App Router, export statique) + TypeScript
- [Tailwind CSS](https://tailwindcss.com) v4
- Contenu multilingue structuré par dictionnaires (`lib/content/{fr,en,ar}.ts`), sur le même principe que les `dictionaries/` du site de référence
- Déploiement automatique sur **GitHub Pages** via GitHub Actions (`.github/workflows/deploy.yml`)

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Build / export statique

```bash
npm run build
```

Génère le site statique dans `out/`. Le préfixe d'URL GitHub Pages (`basePath`) n'est appliqué que lorsque la variable d'environnement `GITHUB_PAGES=true` est définie (voir `next.config.ts`), ce qui est fait automatiquement par le workflow de déploiement.

## Structure du contenu

Chaque langue est un fichier de données (`lib/content/fr.ts`, `en.ts`, `ar.ts`) respectant le même schéma (`lib/content/types.ts`) : diapositive de titre, diapositives de séparation de bloc, diapositives de contenu (listes à puces/numérotées, citations) et diapositive de clôture. Pour modifier un texte, il suffit d'éditer la diapositive correspondante dans le fichier de la langue concernée — l'ordre et le nombre de diapositives doivent rester identiques entre les trois langues.

## Ajouter une langue

1. Créer `lib/content/<code>.ts` en copiant `en.ts` et en traduisant.
2. L'enregistrer dans `lib/content/index.ts` (`decks`, `locales`).
3. Créer `app/<code>/page.tsx` (copier `app/en/page.tsx`).
4. Ajouter `<code>` dans `LOCALE_HREF` de `components/Slideshow.tsx`.
