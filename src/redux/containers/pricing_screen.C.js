import { connect } from 'react-redux';

import PricingScreen from '../../screens/pricing_screen';
import { fetchPricingData } from '../actions/index.A';

const mapStateToProps = state => {
  return {
    pricingData: state.pricingData,
  };
};

const mapDispatchToProps = { fetchPricingData };

const PricingScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  PricingScreen
);

export default PricingScreenContainer;
