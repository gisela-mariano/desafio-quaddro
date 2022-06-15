import { legacy_createStore as createStore, combineReducers } from "redux";

import listServicesReducer from "./modules/listService/reducer";
import servicesReducer from "./modules/userServices/reducer";


const reducers = combineReducers({ services: servicesReducer, listServices: listServicesReducer})

const store = createStore(reducers);


export default store;