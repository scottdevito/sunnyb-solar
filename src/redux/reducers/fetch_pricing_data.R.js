import {
  FETCH_PRICING_DATA_SUCCESS,
  FETCH_PRICING_DATA_FAIL,
} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_PRICING_DATA_SUCCESS:
      return Object.assign(...state, action.payload);
    case FETCH_PRICING_DATA_FAIL:
      return state;
    default:
      return state;
  }
}
