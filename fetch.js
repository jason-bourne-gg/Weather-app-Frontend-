class Fetch {
    // The key is never committed. Resolution order:
    //   1. window.RAPIDAPI_KEY  — from config.js when running locally
    //   2. localStorage         — remembered from a previous visit
    //   3. prompt the visitor   — so the hosted demo works without a build step
    static resolveKey() {
        if (window.RAPIDAPI_KEY && window.RAPIDAPI_KEY !== "your-rapidapi-key-here") {
            return window.RAPIDAPI_KEY;
        }

        let stored = localStorage.getItem("rapidapi_key");
        if (stored) return stored;

        const entered = window.prompt(
            "This demo needs a free RapidAPI key for the Community Open Weather Map API.\n" +
            "Get one at rapidapi.com, paste it here, and it stays in your browser only."
        );
        if (entered) {
            localStorage.setItem("rapidapi_key", entered.trim());
            return entered.trim();
        }
        return null;
    }

    async getCurrent(input) {
        const myKey = Fetch.resolveKey();
        if (!myKey) throw new Error("No RapidAPI key provided.");

        //make request to url
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": myKey
            }
        });

        // A bad or unsubscribed key comes back 401/403 — clear it so the next
        // attempt re-prompts instead of silently failing forever.
        if (response.status === 401 || response.status === 403) {
            localStorage.removeItem("rapidapi_key");
            throw new Error("That RapidAPI key was rejected. Reload and try another.");
        }

        const data = await response.json();

        return data;
    }
}
