# The Royal Oak, Burton Leonard: website redesign concept

A single-page static site. No build step, no dependencies.

- `index.html`: the whole site (HTML, CSS and a little JavaScript)
- `img/`: the pub's photos, downloaded from theroyaloak-burtonleonard.co.uk

## Publish on GitHub Pages
```
cd royal-oak-site
git remote add origin https://github.com/<your-username>/royal-oak-burton-leonard.git
git push -u origin main
```
Then on GitHub: Settings > Pages > Deploy from branch > `main` / root. (With the GitHub CLI: `gh repo create royal-oak-burton-leonard --public --source . --push`.)

## Things to keep up to date
- **Special offers:** edit the `OFFERS` list at the top of the script in `index.html`. Each offer has its text and a last day (`until`, as YYYYMMDD), and the red banner hides itself after that day. The 5-5-5 menu is in there until 10 October 2026.
- **Opening hours:** the `HOURS` block in the same script drives the "Open now" panel. The hours table is plain HTML further up.
- **Sunday lunch:** runs on the last Sunday of every month; the next date is worked out automatically.
- **Menu:** copied from the pub's current "Winter bar menu". Menus and offers are posted on Facebook, which couldn't be read without signing in, so update the menu by hand when it changes.

## Confirm with the pub before going live
- **Phone number:** 01765 677198 is confirmed. The Tripadvisor listing shows 01765 677332, which looks out of date.
- **Closing times:** Thursday and Friday say "close" on the current site, so no time is shown.
- **Beer list and "changing local guest":** based on CAMRA's 2019 listing and reviews. Replace with the current line-up.
- **Photos:** all nine are from the pub's current website. Only two are large (the front and the garden); the other seven are small 274px images and are only used at small sizes. Better originals would lift the page. Facebook photos weren't used because Facebook needs a login.
- **Reviews:** the 4.8 rating (114 reviews) is from Tripadvisor and the 100% (29 reviews) from Facebook, as at 9 October 2026. Update these numbers occasionally.
- **Email:** the Tripadvisor listing has a Gmail address; it isn't shown on the site until confirmed.
