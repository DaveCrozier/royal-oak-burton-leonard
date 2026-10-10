# The Royal Oak, Burton Leonard: website

A single-page static site that reads its content (opening hours, food menu, drinks, offers, events) from a spreadsheet. No build step. Works on GitHub Pages.

- `index.html`: the whole site
- `config.js`: where the seven spreadsheet links go, plus optional analytics IDs
- `data/*.csv`: backup copies of the sheet, used if the live sheet can't be reached
- `Royal-Oak-content.xlsx`: the spreadsheet template (tabs: Read me, Hours, Menu, Drinks, Offers, Events, Feature, Routes)
- `img/`: the pub's photos

## How the spreadsheet drives the site
Each row has **Show from** and **Show until** dates (blank = no limit). The site only shows rows whose dates include today (UK time), so staff can prepare a menu or Christmas hours weeks ahead and it appears on its own. Dates are inclusive. Other columns:

- **Days**: `Mon, Tue` or `Fri-Sun`; blank = every day
- **Status**: Live, Sold out (shown struck through) or Hidden
- **Menu only**: Where (Board / Sunday), Highlight = Yes for the dashed special box
- **Hours only**: Week (1st, 2nd, 3rd, 4th, Last), Opens, Closes, Food from/to/label, Closed = Yes, Note, Applies from/until, Announce from. A dated row beats a Week row, which beats a plain weekday row. A Closes time earlier than Opens means after midnight. Dated changes appear under "Coming up" 28 days ahead unless Announce from says otherwise.

Dates: dd/mm/yyyy, yyyy-mm-dd or `9 Oct 2026`. Times: 17:00, 5pm, 5:30pm. A date the site can't read hides that row (and logs a warning in the browser console).

## Connect it to Google Sheets (one-off, about 10 minutes)
1. Upload `Royal-Oak-content.xlsx` to Google Drive and open it as a Google Sheet.
2. **File > Settings > Locale: United Kingdom** (so 10/11/2026 means 10 November).
3. For each of the seven tabs: **File > Share > Publish to web**, choose that tab, choose **Comma-separated values (.csv)**, Publish, copy the link.
4. Paste the seven links into `config.js` (hours, menu, drinks, offers, events, feature, routes), commit and push.

After that, edit the sheet and the site updates within about 5 minutes. No further code changes.

If a link is blank or unreachable, the site falls back to the last good copy in the visitor's browser, then `data/*.csv`, then the text built into `index.html`.

## Preview another date
Add `?date=2026-12-31` to the address to see the site as it will look on that day (a ribbon shows the preview is on).

## Notes
- `index.html` contains a static fallback copy of the menu and hours; if the pub's regular menu changes a lot, update the fallback occasionally or just keep `data/*.csv` current.
- New Year's Eve BBQ (Thu 31 Dec 2026) is set up in Menu and Offers; price and times are blank until confirmed.
- Phone 01765 677198 is confirmed (Tripadvisor's 01765 677332 is out of date).
- Beer names aren't listed; add them in the Drinks tab. Photos are small; better originals would help. Reviews figures (Tripadvisor 4.8 / 114, Facebook 100% / 29) were as at 9 Oct 2026.

## What's on and walks
- **What's on** is driven by the Events tab (Event, Date, End date, Time, Description, Family friendly, Booking note, Show from, Status). An event appears from its Show from date and disappears after its date. With nothing scheduled the section shows "Next dates coming soon". The two rows in the sheet are hidden examples.
- **Walks & rides** comes from the Routes tab (see below).

## Drinks and wine prices
The Drinks tab has a Price column for single-price items and Small (125ml), Medium (175ml), Large (250ml) and Bottle (75cl) columns for wine. Blank sizes are not shown. The wine list is copied from the pub's current wine page; prices are blank until filled in.

## Feature panel
The big highlighted panel above the menu (currently the New Year's Eve BBQ, with bunting) comes from the Feature tab: Kicker, Heading, Text, Bullets (separated by |), Button label, Button link, Show from, Show until, Status. It appears and disappears on its dates; if none is live there is no panel. Link `feature` in `config.js` once the Feature tab is published.

## Walks & rides (Routes tab)
Columns: Type (Walk or Ride), Name, Miles, Climb (ft), Time, Difficulty, Description, Komoot tour ID, More info link, Show from, Show until, Status. Paste the number from the end of a public Komoot route link (komoot.com/tour/743511818) into Komoot tour ID and the card gets a "Show route map" button; the map and elevation profile only load from Komoot when someone clicks it. The two rides are Dave's recorded rides (Nidderdale Classic and Ferrensby, Knaresborough and Ripley). The three walks are from public sources and have no map, because there is no Komoot route for them yet.

## SEO and SEM
**Built in:** page title and description, canonical link, Open Graph and Twitter share card (`img/og.jpg`), structured data for Google (pub, address, phone, hours, menu link, plus an Event entry for every live item in the Events tab), `robots.txt`, `sitemap.xml`, a hidden but readable keyword-rich H1, descriptive image alt text, phone and address in the footer, mobile call/directions bar, and click tracking for calls, directions, Facebook and routes.

**When the real address is known:** the canonical, Open Graph and structured-data links point at the GitHub Pages address (`https://davecrozier.github.io/royal-oak-burton-leonard/`). If the pub gets its own domain, search and replace that address in `index.html`, `robots.txt` and `sitemap.xml`.

**Do these outside the website (this is where most local ranking comes from):**
1. Claim and complete the **Google Business Profile** (Royal Oak, Burton Leonard): category "Pub", add Restaurant and Bar, hours (with special hours), phone 01765 677198, website link, menu link, 10+ real photos, weekly Posts (events, 5-5-5, Sunday lunch). Ask regulars for reviews and reply to every one.
2. Do the same on **Bing Places** and **Apple Business Connect**.
3. Make the name, address and phone **identical everywhere**: Tripadvisor still shows the old number 01765 677332.
4. Add the live site to **Google Search Console** and submit `sitemap.xml`.
5. Get local links: Burton Leonard village website, Harrogate and Nidderdale tourism pages, CAMRA WhatPub, Good Pub Guide, Visit Harrogate, local walking and cycling groups.

**Google Ads (SEM), if the pub wants it:** start small (about £5 to £10 a day) with call-only or "call + location" ads limited to a 10 to 15 mile radius, running Thu to Sun evenings and Sunday lunch week. Good keywords: pub near me, Sunday lunch Harrogate, Sunday roast Ripon, pub food Burton Leonard, dog friendly beer garden Harrogate, pub NYE. Negative keywords: jobs, recipe, for sale, rent, hotel. Tracking: put the GA4 ID, Ads ID and call-conversion label in `config.js` (`ROYAL_OAK_ANALYTICS`). Nothing loads, and no cookies are set, until they are filled in; then a short "cookies OK?" question appears and nothing is tracked until the visitor says yes.
