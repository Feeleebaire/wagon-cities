const activeCityReducer = (state, action) => { if (state === undefined) {
    // Reducer initialisation
return null; }

  if (action.type === 'SET_CITY'){
    return action.payload;
  } else {
    return state;
  }

};
export default activeCityReducer;
