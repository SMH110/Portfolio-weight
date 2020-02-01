import {createStore, combineReducers} from 'redux';
import reducers from '../reducers';

const rootReducer = combineReducers(reducers);


const w : any = window;
const store = createStore(rootReducer,w['__REDUX_DEVTOOLS_EXTENSION__'] && w['__REDUX_DEVTOOLS_EXTENSION__']());



export default store;
