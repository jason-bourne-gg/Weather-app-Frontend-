# Weather App

Type a city, get its current weather. My first vanilla web project — no framework,
no build step, just three scripts and the DOM.

**Stack:** HTML · CSS · vanilla JavaScript · [RapidAPI](https://rapidapi.com) OpenWeatherMap

## Setup

The app needs your own RapidAPI key for the Open Weather Map community API.

```bash
cp config.example.js config.js
```

Then edit `config.js` and paste your key in. `config.js` is gitignored, so it stays
out of version control. Open `index.html` in a browser and you're running.

> **Note:** an earlier version of this repo had the API key hardcoded in `fetch.js`.
> That key has been revoked. Never commit a real key — it stays in git history even
> after you delete the line.

## How it's put together

```
├── index.html    # markup + the search input
├── config.js     # your API key (gitignored, copied from config.example.js)
├── fetch.js      # Fetch class — wraps the weather API call
├── ui.js         # UI class — paints the response into the DOM
└── app.js        # wires the input event to Fetch and UI
```

Three plain classes with one job each: `Fetch` talks to the network, `UI` touches the
DOM, and `app.js` is the only file that knows about both. It's the same separation a
framework gives you, done by hand.

## License

MIT © Aniket Ravindra Charjan
