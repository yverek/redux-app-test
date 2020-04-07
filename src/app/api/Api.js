import axios from 'axios';


// const URL = 'https://swapi.co/api/'

// const people = 'people'
// const films = 'films'
const URL = 'https://cat-fact.herokuapp.com/'
const films = "facts"
const people = "facts"
export const peopleListSrv = () => {
    return axios
        .get(URL + people)
        .then(res => {
            console.log("res");
            console.log(res.data);
            return res.data;
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            //  err(error);
            return error
        });
};

export const filmsListSrv = () => {
     return axios
        .get(URL + films)
        .then(res => {
            console.log("res");
            console.log(res.data);
            return res.data;
        })
        .catch(error => {
            console.log("err");
            console.log(error);
            //    err(error);
           return error

        });
};
