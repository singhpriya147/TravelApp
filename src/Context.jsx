import { createContext ,useReducer } from "react";
import {properties} from './data/data.js';

import {reducer} from './reducer.js'

const AppContext=createContext(null);

const Context=({children})=>{

  console.log("10",properties)
const initialState = {
  data: properties,
  cart: [],
  selectedProperty: null,
page:1,
  filter: '',
};

const [state,dispatch]=useReducer(reducer,initialState)
return (
 <AppContext.Provider value={{state,dispatch}}>
  {children}
  </AppContext.Provider>
)
}
export { AppContext };
export default Context;