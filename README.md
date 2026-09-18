# CyberHealth Solutions — website

Static site (plain HTML/CSS), no build step. Deploys directly via GitHub Pages
from the repo root on `main`.

## To push to GitHub

```bash
cd chs-site
git init
git remote add origin https://github.com/meesummeer/cyberhealth-solutions.git
git add .
git commit -m "Initial CHS site: hero, services, client records, contact"
git branch -M main
git push -u origin main
```

Then in the repo Settings → Pages, confirm source is `main` / root, and that
"Enforce HTTPS" is checked once DNS has propagated.

## To hand off to Claude Code

Open this folder in Claude Code and ask it to review/refine design details,
fill in real client names if any placeholders remain, or extend with
additional pages (About, Case Studies).
