import moviesJSON from '../assets/json/data.json';

//const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=';
const API_URL = process.env.API_URL; // configurada en las variables de entorno

//const API_KEY = 'c68e4bc0';
const API_KEY = process.env.API_KEY; // configurada en las variables de entorno

export {
  moviesJSON,
  API_URL,
  API_KEY
};
