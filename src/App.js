import React, { Component } from 'react';

import './App.css';
import RadioButtons from './components/RadioButtons';
import Widget from './components/Widget';

class App extends Component {
  render() {
    return (
      <div>
        <div id="main" className="container">
          <div className="row">
            <div className="col-lg-6">
              <label htmlFor="title">Title</label>
              <input id="title"
                type="text"
                placeholder=" Title of widget"
              />
              <RadioButtons />
              <RadioButtons />

            </div>

            <div className="col-lg-6">
              <Widget />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
