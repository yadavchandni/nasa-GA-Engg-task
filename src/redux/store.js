// NPM packages
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducer file 
import {AsteroidDetailsReducer} from "./Reducers/AsteroidDetailReducer";

// let's get start: 

let store;

// Enable redux dev tool only in development mode
if(process.env.NODE_ENV !== "production"){
const composeEnhancers=window.__REDUX_DEVTOOLS_EXNTENSION_COMPOSE__ || compose;
store = createStore (AsteroidDetailsReducer, composeEnhancers(applyMiddleware(thunk)));

}
else{
  store= createStore(AsteroidDetailsReducer, applyMiddleware(thunk));
}

export default store;
