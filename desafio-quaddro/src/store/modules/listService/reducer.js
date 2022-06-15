import { LIST_SERVICES, ORDER_BY_CREATION_TIME_SERVICE, ORDER_BY_START_TIME_SERVICE, ORDER_BY_END_TIME_SERVICE } from "./actionsTypes";


const initialState = [];

const listServicesReducer = (state = initialState, action) => {

  const { services } = action;

  switch(action.type){
    case LIST_SERVICES:
      return services;

    case ORDER_BY_CREATION_TIME_SERVICE:
      const callbackSortCreationTime = (a, b) => {
        const splitedTimeA = a.creationHour.split(':');
        const splitedTimeB = b.creationHour.split(':');
    
        const timeA = new Date(`${a.creationDate}T${splitedTimeA[0]}:${splitedTimeA[1]}:00`).getTime();
        const timeB = new Date(`${b.creationDate}T${splitedTimeB[0]}:${splitedTimeB[1]}:00`).getTime();
    
        return timeA - timeB;
      };

      const orderCreationTime = services.sort(callbackSortCreationTime);

      return orderCreationTime;

    case ORDER_BY_START_TIME_SERVICE:
      const callbackSortStartTime = (a, b) => {
        const splitedTimeA = a.startHour !== '00' ? a.startHour.split(':') : ['00', '00'];
        const splitedTimeB = b.startHour !== '00' ? b.startHour.split(':') : ['00', '00'];
    
        const timeA = new Date(`${a.startDate}T${splitedTimeA[0]}:${splitedTimeA[1]}:00`).getTime();
        const timeB = new Date(`${b.startDate}T${splitedTimeB[0]}:${splitedTimeB[1]}:00`).getTime();
    
        return timeA - timeB;
      };

      const orderStartTime = services.sort(callbackSortStartTime);

      return orderStartTime;

    case ORDER_BY_END_TIME_SERVICE:
      const callbackSortEndTime = (a, b) => {

        const splitedTimeA = a.endHour !== '00' ? a.endHour.split(':') : ['00', '00'];
        const splitedTimeB = b.endHour !== '00' ? b.endHour.split(':') : ['00', '00'];
    
        const timeA = new Date(`${a.endDate}T${splitedTimeA[0]}:${splitedTimeA[1]}:00`).getTime();
        const timeB = new Date(`${b.endDate}T${splitedTimeB[0]}:${splitedTimeB[1]}:00`).getTime();
    
        return timeA - timeB;
      };

      const orderEndTime = services.sort(callbackSortEndTime);
      
      return orderEndTime;
    
    default:
      return state;
  };
};


export default listServicesReducer;