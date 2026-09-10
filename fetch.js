class Fetch {
    async getCurrent(input) {
        const myKey = window.RAPIDAPI_KEY;  // set in config.js (gitignored) — see README

        //make request to url
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": myKey
            }
        });


        const data = await response.json();

        console.log(data);

        return data;
    }
}