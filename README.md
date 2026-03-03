# littletonerecords.com

Static site built with [Eleventy](https://www.11ty.dev/) and [Bun](https://bun.sh/).

## Local Development

```
bun install
bun dev
```

Site runs at `http://localhost:8080`.

## Build

```
bun run build
```

Output goes to `_site/`.

## Deployment

Deployed to GitHub Pages automatically on push to `main` via GitHub Actions.

### Setup

1. Go to repo **Settings > Pages**
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow handles the rest

Custom domain is configured via the `CNAME` file.
