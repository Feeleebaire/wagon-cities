// src/actions/index.js
import cities from '../citiesdb';
console.log(cities);
export function setCities() {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITIES',
    payload: cities
  }
};
export function selectCity(city) {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'SET_CITY',
    payload: city
  }
}
