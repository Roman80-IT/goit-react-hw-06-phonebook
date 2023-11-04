import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { contactsOperationReducer } from './contactsOperationReducer';

const rootReducer = combineReducers({
  contactsOperation: contactsOperationReducer,
  //   contacts: contactsReducer,
  //   filter: filterReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
