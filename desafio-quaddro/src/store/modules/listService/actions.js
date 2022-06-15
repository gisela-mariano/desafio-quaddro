import { LIST_SERVICES, ORDER_BY_CREATION_TIME_SERVICE, ORDER_BY_START_TIME_SERVICE, ORDER_BY_END_TIME_SERVICE } from "./actionsTypes";

export const listService = (services) => {

  return {
    type: LIST_SERVICES,
    services
  };
};

export const orderByCreationTime = (services) => {

  return {
    type: ORDER_BY_CREATION_TIME_SERVICE,
    services
  };
};

export const orderByStartTime = (services) => {

  return {
    type: ORDER_BY_START_TIME_SERVICE,
    services
  };
};

export const orderByEndTime = (services) => {

  return {
    type: ORDER_BY_END_TIME_SERVICE,
    services
  };
};
