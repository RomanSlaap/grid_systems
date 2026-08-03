# Grid Systems Simracing — Website

Marketing site for Grid Systems Simracing, a turnkey multiplayer sim racing installer for party centers and event venues.

Plain HTML/CSS/JS, no build step, no dependencies to install. Fonts load from Google Fonts via CDN.

```
index.html   structure and content
style.css    all styling
main.js      hero light sequence, scroll reveals, footer year, status clock
```

## Preview locally

Open `index.html` directly in a browser, or serve it so relative paths behave exactly like production:

```
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploy

Hosted on GitHub Pages from the `main` branch. Pushing to `main` updates the live site within a minute or two.

## Update before going live

- Replace the placeholder contact email in the "Get in touch" section (`index.html`, search for `gridsystemssimracing.com`).
- Update the "Where We Stand" board and revenue table as your status changes.
