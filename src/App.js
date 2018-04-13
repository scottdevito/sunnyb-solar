import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreenContainer from './redux/containers/home_screen.C';
import AboutScreen from './screens/about_screen';
import PricingScreenContainer from './redux/containers/pricing_screen.C';
import AppBarNav from './components/app-bar-nav/app_bar_nav.MUI';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBarNav />
          <Route
            pattern="/"
            render={props => {
              window.scrollTo(0, 0);
              return null;
            }}
          />
          <Route exact path="/" component={HomeScreenContainer} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/pricing" component={PricingScreenContainer} />
        </div>
      </Router>
    );
  }
}

export default App;
