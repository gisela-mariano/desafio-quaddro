import { LIST_SERVICES, ORDER_BY_CREATION_TIME_SERVICE, ORDER_BY_START_TIME_SERVICE, ORDER_BY_END_TIME_SERVICE } from "./actionsTypes";


const initialState = [];

const listServicesReducer = (state = initialState, action) => {

  const { service } = action;

  console.log('reducer', service);

  switch(action.type){
    case LIST_SERVICES:
      return service;

    case ORDER_BY_CREATION_TIME_SERVICE:
      // console.log('creationTimeService', service);
      return service;

    case ORDER_BY_START_TIME_SERVICE:
      // console.log('startTimeService', service);
      return service;

    case ORDER_BY_END_TIME_SERVICE:
      // console.log('endTimeService', service);
      return service;
    
    default:
      return state;
  };
};


export default listServicesReducer;