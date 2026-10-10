/*
  Where the website reads its content from.

  Paste the seven "Publish to web" CSV links from the Google Sheet between the quotes.
  Leave a link empty and that part of the site reads data/<name>.csv instead
  (hours.csv, menu.csv, drinks.csv, offers.csv, events.csv, feature.csv, routes.csv in the data folder).
*/
window.ROYAL_OAK_SOURCES = {
  hours:  "",   // Hours tab
  menu:   "",   // Menu tab
  drinks: "",   // Drinks tab
  offers: "",   // Offers tab
  events: "",   // Events tab
  feature: "",  // Feature tab
  routes: ""    // Routes tab
};

/* Optional: Google Analytics 4 and Google Ads. Leave blank to switch everything off.
   ga4: "G-XXXXXXXXXX"   adsId: "AW-1234567890"   adsCallLabel: the conversion label for phone-call clicks.
   When set, a simple cookie question appears; nothing is tracked unless the visitor says yes. */
window.ROYAL_OAK_ANALYTICS = { ga4: "", adsId: "", adsCallLabel: "" };
