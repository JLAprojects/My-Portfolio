# John Laurence Aguilar — Portfolio

A one-page portfolio site for virtual assistant / administrative / accounting-support work. Plain HTML, CSS, and JS — no build step, no dependencies.

```
index.html
css/style.css   ← all colors and fonts live in the THEME block at the top
js/script.js    ← copy-email button
```

## Put it on GitHub Pages (free hosting)

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Upload these three files/folders (`index.html`, `css/`, `js/`), keeping the folder structure.
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to `Deploy from a branch`, branch `main`, folder `/ (root)`. Save.
5. Wait a minute, then your site is live at `https://<your-username>.github.io/<repo-name>/`.

Any time you push a change to `main`, the live site updates automatically within a minute or two.

## Changing colors

Open `css/style.css` and edit the `:root { ... }` block at the very top. Everything on the page — text, borders, buttons, badges — pulls its color from these variables, so you only need to change them in one place:

```css
--bg: #f5f4f0;      /* page background */
--ink: #1c2430;     /* main text color */
--accent: #b5722e;  /* buttons, links, highlights */
```

Below that block are a few ready-made alternate palettes in a comment (cool slate/teal, warm plum, deep navy) — copy one over the default values to switch the whole look in one edit. There's a matching dark-mode block right after (`prefers-color-scheme: dark`) — update both if you change the palette, so the site still looks right for visitors with dark mode on.

## Changing fonts

Also in the `:root` block:

```css
--font-display: "Source Serif 4", Georgia, serif;   /* headings */
--font-body: "IBM Plex Sans", ui-sans-serif, system-ui, sans-serif;
--font-mono: "IBM Plex Mono", ui-monospace, monospace; /* dates, small labels */
```

If you swap a font name here, also update the Google Fonts `<link>` near the top of `index.html` so the new font actually loads. [fonts.google.com](https://fonts.google.com) lets you pick a font and copy its `<link>` tag directly.

## Editing content

Everything else — your name, summary, experience, skills — is plain text inside `index.html`, organized into clearly labeled `<section>` blocks (`Summary`, `Services`, `Skills`, `Experience`, `Education`, `Achievements`, `Contact`). Edit the text directly; no other files need to change.

## Updating your resume over time

When you add a new job or skill, add a new `.entry` block under `#experience` (copy an existing one as a template) or a new `.tag` under `#skills`. The layout will adjust automatically.
