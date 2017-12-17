import { createStore } from 'redux';
//Reducers
import app from './../reduces';

export const appStore = createStore(app);
