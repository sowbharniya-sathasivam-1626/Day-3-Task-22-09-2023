var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();

request.onload = function () {
        var result = JSON.parse(request.response);
        for (var i = 0; i < result.length; i++) {
            var country = result[i];
            var flag = country.flags.svg;
            var name = country.name.common;
            console.log(name+ ":" + flag);
           
        }
    };
