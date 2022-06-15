import { ADD_SERVICE, EDIT_SERVICE, DELETE_SERVICE } from "./actionsTypes";

export const addService = (service) => {

  return {
    type: ADD_SERVICE,
    service
  };
};

export const editService = () => {

  return {
    type: EDIT_SERVICE
  };
};

export const deleteService = () => {

  return {
    type: DELETE_SERVICE
  };
};