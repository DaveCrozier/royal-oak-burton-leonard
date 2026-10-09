# The Royal Oak, Burton Leonard: website

A single-page static site that reads its content (opening hours, food menu, drinks, offers, events) from a spreadsheet. No build step. Works on GitHub Pages.

- `index.html`: the whole site
- `config.js`: where the four spreadsheet links go
- `data/*.csv`: backup copies of the sheet, used if the live sheet can't be reached
- `Royal-Oak-content.xlsx`: the spreadsheet template (tabs: Read me, Hours, Menu, Drinks, Offers, Events)
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
3. For each of the five tabs: **File > Share > Publish to web**, choose that tab, choose **Comma-separated values (.csv)**, Publish, copy the link.
4. Paste the five links into `config.js` (hours, menu, drinks, offers, events), commit and push.

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
- **Walks & rides** is plain HTML in `index.html`, using public route details from Yorkshire.com and Walking Britain. It's a demonstration; swap in the pub's own favourite routes when known.
