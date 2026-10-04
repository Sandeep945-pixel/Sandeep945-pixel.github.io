# Sandeep Kalari — personal website

Static academic portfolio hosted with GitHub Pages.

- `index.html`: short biography and selected work.
- `research.html`: research and selected publications.
- `systems.html`: product projects and industry experience.
- `teaching.html`: teaching and mentorship.
- `styles.e4d7bb5192.css`: shared responsive styles, versioned to prevent stale browser caches.
- `portrait.png`: supplied speaking photograph, used without image alteration.
- `cv.pdf` and `resume.pdf`: existing documents; update separately when revised.

Navigation is visible on desktop and mobile. Optional technical descriptions use native HTML disclosure controls. No JavaScript, framework, external font, or build step is required.

## Local preview

```sh
python -m http.server 8000
```

Open http://localhost:8000. GitHub Actions publishes an explicit list of website files when `main` changes. GitHub Pages must use **GitHub Actions** as its source.
