import { ADD_SERVICE, EDIT_SERVICE, DELETE_SERVICE } from "./actionsTypes";


const initialState = JSON.parse(localStorage.getItem('dataServices')) || [];

const servicesReducer = (state = initialState, action) => {

  const { service } = action;

  switch(action.type){
    case ADD_SERVICE:

      localStorage.setItem('dataServices', JSON.stringify([...state, service]));

      return [...state, service];

    case EDIT_SERVICE:
      localStorage.setItem('dataServices', JSON.stringify([...state]));

      return [...state];

    case DELETE_SERVICE:
      localStorage.setItem('dataServices', JSON.stringify([...state]));

      return [...state];
    
    default:
      return state;
  };
};


export default servicesReducer;