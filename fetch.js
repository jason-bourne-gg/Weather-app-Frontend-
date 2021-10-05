class Fetch {
    async getCurrent(input) {
        const myKey = "211c79d500msh2a3328842354603p188695jsnf4d4c0ed87e5";

        //make request to url
        const response = await fetch(`https://community-open-weather-map.p.rapidapi.com/weather?q=${input}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
                "x-rapidapi-key": "211c79d500msh2a3328842354603p188695jsnf4d4c0ed87e5"
            }
        });


        const data = await response.json();

        console.log(data);

        return data;
    }
}