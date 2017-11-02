import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import App from './components/App/App.js';

class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Route path="/" component={ App } />
      </div>
    );
  }
}

export default Routes;
