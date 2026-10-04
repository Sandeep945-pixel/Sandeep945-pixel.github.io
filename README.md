# Sandeep Kalari — personal website

A static research and engineering portfolio for GitHub Pages. No package installation or build step is required.

## Local preview

```bash
python -m http.server 8000
```

Open `http://localhost:8000` in a browser.

## Content

- `index.html`: biography, selected work, publications, industry experience, teaching, and contact links.
- `styles.css`: responsive layout and visual design.
- `site.js`: accessible mobile navigation.
- `profile.jpeg`: existing portrait.
- `cv.pdf` and `resume.pdf`: existing downloadable documents; update these independently when new versions are ready.

The website uses local assets and system fonts. Project pages remain the source for detailed methods, source availability, and demonstration status.

## Hosting

The included workflow publishes only the website files and the two linked PDFs. In the repository's **Settings → Pages**, select **GitHub Actions** as the source, then run **Deploy personal website** under Actions if it has not already run.

GitHub Pages support for private repositories depends on the account's plan. The workflow does not change repository visibility or account settings.
