const citiesReducer = (state, action) => { if (state === undefined) {
    // Reducer initialisation
return []; }

  if (action.type === 'SET_CITIES'){
    return action.payload;
  } else {
    return state;
  }

};
export default citiesReducer;
