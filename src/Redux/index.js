import {createStore} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Reducer} from "./Reducer";

export const store = createStore(Reducer, composeWithDevTools)