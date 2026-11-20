# Suleiman Shahbal — Mombasa 2027

The campaign data, analysis and plan platform for Hon. Suleiman Shahbal's 2027 bid for Governor of
Mombasa, built by Firefly Management. It has the same structure, flow and tools as the Kitui
edition, rebuilt on Mombasa's data:

- **The register:** the IEBC 2022 register for Mombasa's 30 wards in six constituencies
  (641,913 voters) and the 1,041 polling stations.
- **The results:** the 2013, 2017 and 2022 governor races. The 2013 and 2017 figures come from
  the election-court judgments; the 2022 figures are as declared and reported.
- **The census:** the KNBS 2019 census for the six sub-counties, which coincide with the
  constituencies.
- **The county:** its finances, water, connectivity and poverty figures. Each figure carries its
  source, date and evidence tier, and every gap is named with the document that would close it.
- **Ward boundaries:** Omare & Omare (2017), Kenya County Assembly Boundaries, CC BY 4.0.

## Run it

```bash
npm ci
npm run dev        # http://localhost:3000
npm run build      # prebuild checks, then the production build
npm run verify     # data, figure and copy guards
```

Every number shown on the site is read from the figure registry in `lib/data/figures.ts`. Chapter
text lives in `content/*.md`, where it cites registry figures as `{{figure.id}}` tokens. Team
records are stored locally until a Supabase project is configured (see `.env.example`).
