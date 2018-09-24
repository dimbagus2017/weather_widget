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
              <RadioButtons
                id={'tempArea'}
                labelText={'Temperature'}
                value1={'metric'}
                value2={'imperial'}
              />
              <RadioButtons
                id={'windArea'}
                labelText={'Wind'}
                value1={true}
                value2={false}
              />

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
