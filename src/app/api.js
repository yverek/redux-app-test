const axios = require('axios');

const baseUrl = "https://swapi.co/api/"

/* 
"planets": "https://swapi.co/api/planets/",
"species": "https://swapi.co/api/species/",
"starships": "https://swapi.co/api/starships/",
"vehicles": "https://swapi.co/api/vehicles/"
*/

var getFilmsList = (fn, err) => {
    axios
        .get(baseUrl + "films")
        .then(res => {
            console.log("res");
            console.log(res.data);
            fn(res.json());
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            err(error);
        });
};

var getPeopleList = (fn, err) => {
    axios
        .get(baseUrl + "people")
        .then(res => {
            console.log("res");
            console.log(res.data);
            fn(res.json());
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            err(error);
        });
};
/* 
var getFilmList = (fn, err) => {
    axios
        .get(baseUrl + "films")
        .then(res => {
            console.log("res");
            console.log(res.data);
            fn(res.data);
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            err(error);
        });
};

var getFilmList = (fn, err) => {
    axios
        .get(baseUrl + "films")
        .then(res => {
            console.log("res");
            console.log(res.data);
            fn(res.data);
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            err(error);
        });
};

var getFilmList = (fn, err) => {
    axios
        .get(baseUrl + "films")
        .then(res => {
            console.log("res");
            console.log(res.data);
            fn(res.data);
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            err(error);
        });
}; */

export { getFilmsList, getPeopleList }