import { LIST_SERVICES, ORDER_BY_CREATION_TIME_SERVICE, ORDER_BY_START_TIME_SERVICE, ORDER_BY_END_TIME_SERVICE } from "./actionsTypes";

export const listService = (service) => {

  return {
    type: LIST_SERVICES,
    service
  };
};

export const orderByCreationTime = (service) => {

  return {
    type: ORDER_BY_CREATION_TIME_SERVICE,
    service
  };
};

export const orderByStartTime = (service) => {

  return {
    type: ORDER_BY_START_TIME_SERVICE,
    service
  };
};

export const orderEndTime = (service) => {

  return {
    type: ORDER_BY_END_TIME_SERVICE,
    service
  };
};
