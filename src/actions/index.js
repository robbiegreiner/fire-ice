export const fakeAction = () => ({type: 'FAKE'});

export const fetchHousesSuccess = houses => {
  return {
    type: 'HOUSES_SUCCESS',
    houses
  };
};

export const resetViewToHouses = () => {
  return {
    type: 'RESET_VIEW'
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

export const fetchMembersSuccess = (members) => {
  return {
    type: 'MEMBER_SUCCESS',
    members
  };
};

export const fetchMembers = (swornMembers) => {
  return dispatch => {

    const unresolvedPromises = swornMembers.map( memberURL =>{
      const theBody = JSON.stringify({ url: memberURL});

      return fetch('http://localhost:3001/api/v1/character', {
        method: 'POST',
        headers: {"Content-Type" : "application/json"},
        body: theBody
      })
        .then(response => response.json());
    });

    const promiseAll = Promise.all(unresolvedPromises);

    promiseAll.then( membersArray => {
      dispatch(fetchMembersSuccess(membersArray));
    });

  };
  // fetch initial api
  // map through sworn members and make fetch post to characters
  // dispatch array of members to store

};

// export const fetchHouses = () => {
//   return dispatch => {
//     fetch(`http://localhost:3001/api/v1/houses`)
//       .then(response => response.json())
//       .then(houses => {
//         const unresolvedPromises: houses.map( house =>{
//           return fetch('api/v1/character',
//           {
//             method: 'POST',
//             body: {url: house.}
//           })
//         })
//       })
//       .then(results => dispatch(fetchHousesSuccess(results)))
//       .catch(error => console.log(error));
//   };
// };
