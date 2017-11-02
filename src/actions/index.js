export const fakeAction = () => ({type: 'FAKE'});

export const fetchHousesSuccess = houses => {
  return {
    type: 'HOUSES_SUCCESS',
    houses
  };
};

export const fetchHouses = () => {
  return dispatch => {
    fetch(`http://localhost:3001/api/v1/houses`)
      .then(response => response.json())
      .then(results => dispatch(fetchHousesSuccess(results)))
      .catch(error => console.log(error));
  };
};
