import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/home_screen';
import AboutScreen from './screens/about_screen';
import PricingScreen from './screens/pricing_screen';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={HomeScreen} />
          <Route path="/about" component={AboutScreen} />
          <Route path="/pricing" component={PricingScreen} />
        </div>
      </Router>
    );
  }
}

export default App;
