# Elías Haig Alves — Personal Site (Next.js)

Production-ready personal website built with Next.js App Router, TypeScript, and Tailwind CSS 4 using the color palette provided by Elías. Content is centralized in [`src/content/site.ts`](src/content/site.ts) so you can edit the site without touching components.

## Tech stack
- Next.js 16 (App Router) + TypeScript
- Tailwind CSS 4
- Deployed-ready for Vercel
- GitHub Actions CI (install → lint → build)

## Getting started
1. Install dependencies
   ```bash
   npm install
   ```
2. Run the dev server
   ```bash
   npm run dev
   ```
3. Open http://localhost:3000 to view the site.

## Editing content
- Update all copy, links, and datasets in [`src/content/site.ts`](src/content/site.ts).
- Replace the placeholder headshot at [`public/headshot.svg`](public/headshot.svg) with your actual image and the CV at [`public/elias-haig-alves-cv.pdf`](public/elias-haig-alves-cv.pdf).
- Swap portfolio and writing placeholders with your real work: edit `designPortfolio.pieces` and `writingPortfolio.entries` arrays.

## Deploying
1. **GitHub**
   ```bash
   git init
   git remote add origin https://github.com/<your-username>/<repo>.git
   git add .
   git commit -m "Initial site"
   git push -u origin main
   ```
2. **Vercel**
   - Go to https://vercel.com/import/github and select the GitHub repo.
   - Use the defaults (framework: Next.js). No extra env vars needed.
   - Deploy; subsequent pushes to `main` will auto-deploy.

## Project scripts
- `npm run dev` – start the dev server
- `npm run lint` – run ESLint
- `npm run build` – create a production build
- `npm run start` – run the production build

## CI
GitHub Actions workflow at [`.github/workflows/ci.yml`](.github/workflows/ci.yml) installs dependencies, lints, and builds on every push/PR.

## License
Released under the MIT License — see [`LICENSE`](LICENSE).
