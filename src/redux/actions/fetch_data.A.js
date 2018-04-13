import { db } from '../../startup/db_init';
import { FETCH_PRICING_DATA_SUCCESS, FETCH_PRICING_DATA_FAIL } from './types';

const fetchPricingData = () => {
  return dispatch => {
    db
      .collection('pricing')
      .orderBy('pricingId', 'asc')
      .get()
      .then(function(querySnapshot) {
        let pricingDataArray = [];

        querySnapshot.forEach(function(doc) {
          pricingDataArray = [...pricingDataArray, doc.data()];
        });
        dispatch({
          type: FETCH_PRICING_DATA_SUCCESS,
          payload: pricingDataArray,
        });
      })
      .catch(function(error) {
        dispatch({ type: FETCH_PRICING_DATA_FAIL });
        return error;
      });
  };
};

export { fetchPricingData };
