// import { createStore, combineReducers } from 'redux';
import { contactsOperationReducer } from './contactsOperationReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contactsOperation: contactsOperationReducer,
  },
});
//   contacts: contactsReducer,
//   filter: filterReducer,
