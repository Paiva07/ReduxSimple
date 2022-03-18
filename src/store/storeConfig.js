import { createStore, combineReducers } from 'redux';
import numerosReducers from './reducers/numerosReducers';

const reducer = combineReducers({
  numeros: numerosReducers,
});

function storeConfig() {
  return createStore(reducer);
}

export default storeConfig;
