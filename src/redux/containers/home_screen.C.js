import { connect } from 'react-redux';
import HomeScreen from '../../screens/home_screen';
import { fetchPricingData } from '../actions/index.A';

const mapStateToProps = state => {
  return {
    pricingData: state.pricingData,
  };
};

const mapDispatchToProps = {
  fetchPricingData,
};

const HomeScreenContainer = connect(mapStateToProps, mapDispatchToProps)(
  HomeScreen
);

export default HomeScreenContainer;
