# Zach Benhamou

Personal site for Zach Benhamou, founder of Zakov AI. It is an open-source showcase and a résumé-style profile. The intended host is [zach.runs-on.dev](https://zach.runs-on.dev).

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The showcase fetch works without credentials. To raise GitHub API rate limits, copy `.env.example` to `.env.local` and set `GITHUB_TOKEN`. Public repository read access is enough. Never commit the token.

## How projects appear

The Open Source section lists public repositories owned by [ZAKOVAI](https://github.com/ZAKOVAI) that meet all of these rules:

- The repository has the topic `showcase`
- The repository is not a fork
- The repository is not archived

The list is cached and refreshed about once an hour. Add the `showcase` topic to a public ZAKOVAI repository and it will show up on the next refresh. Remove the topic and it will drop off.

Do not add the topic to Syftr or to client projects. `EXCLUDED_REPOS` in `src/data/site.ts` also filters names even if they are tagged. `syftr` is excluded by default.

If GitHub returns no matching repositories, or the request fails, the page uses `src/data/fallback-projects.ts` so the section is never empty.

Custom blurbs, language or license labels, and extra links live in `src/data/overrides.ts`, keyed by repository name. Overrides apply to live GitHub data and to the fallback list.

## Edit the profile

- `src/data/site.ts`: site URL, GitHub, and the LinkedIn and email placeholders. LinkedIn and email stay hidden until those constants are set.
- `src/data/experience.ts`: roles, organizations, and dates. Dates are marked `TODO` until you refine them.
- `src/data/skills.ts`: grouped stack tags.

## Deploy

The app is a Next.js project with no database and no custom server. Import the repository in Vercel and deploy. Set `GITHUB_TOKEN` in the project environment if you want authenticated GitHub requests. Pointing a domain at the deployment is a separate step.

## License

[MIT](LICENSE)
