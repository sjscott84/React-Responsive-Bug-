import React, { Component } from 'react';
import MediaQuery from 'react-responsive';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <MediaQuery minDeviceWidth={800}>
            <div className="contactCircles">
              <ContactType what="Phone" />
              <ContactType what="Email" />
            </div>
          </MediaQuery>
          <MediaQuery maxDeviceWidth={800}>
            <div className="contactCirclesSmall">
              <ContactType what="Phone" />
              <ContactType what="Email" />
            </div>
          </MediaQuery>
      </div>
    );
  }
}

class ContactType extends Component {

  render(){
    return (
      <svg className="svg" height={180} width={180}>
        <g>
          <circle className="svgCircle" cx={90} cy={90} r={90}></circle>
          <text x={"50%"} y={"50%"} textAnchor="middle">{this.props.what}</text>
        </g>
      </svg>
    )
  }
}

export default App;
