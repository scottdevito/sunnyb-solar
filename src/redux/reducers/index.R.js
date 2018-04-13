import { combineReducers } from 'redux';
import fetchPricingDataReducer from './fetch_pricing_data.R';

const rootReducer = combineReducers({
  pricingData: fetchPricingDataReducer,
});

export default rootReducer;
