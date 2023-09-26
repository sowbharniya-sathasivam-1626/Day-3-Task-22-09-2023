var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
        var result = JSON.parse(request.response);
        for (var i = 0; i < result.length; i++) {
            var country = result[i];
            var name = country.name.common;
            var population = country.population;
            var region = country.region;
            var subregion = country.subregion;

            console.log("Country: " + name);
            console.log("Population: " + population);
            console.log("Region: " + region);
            console.log("Subregion: " + subregion);
            console.log("                           ");
        }
    };

