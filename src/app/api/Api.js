import axios from 'axios';


const URL = 'https://swapi.co/api/'

const people ='people'
const films ='films'

export const peopleListSrv = (fn, err) => {
    axios
      .get(URL+people)
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

export const filmsListSrv = (fn, err) => {
    axios
      .get(URL+films)
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
