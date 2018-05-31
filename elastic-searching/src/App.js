import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { ReactiveBase } from '@appbaseio/reactivesearch';

class App extends Component {

  render() {
    return (
      <ReactiveBase
        app="car-store"
        credentials="cf7QByt5e:d2d60548-82a9-43cc-8b40-93cbbe75c34c">
        // other components will go here.
        <div>
          Hello ReactiveSearch!
				</div>
      </ReactiveBase>
    );
  }
}

export default App;
