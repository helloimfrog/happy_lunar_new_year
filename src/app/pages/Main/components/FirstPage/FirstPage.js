import React from 'react';
import { Fireworks } from 'fireworks/lib/react';
import { Spring } from 'react-spring/renderprops';
import { MAX_SCREEN_MOBILE_WIDTH } from '../../../../utils/AppOtherValues';

import './FirstPage.css';

export default class FirstPage extends React.Component {
  constructor() {
    super();
    this.isMobileViewport = window.innerWidth < MAX_SCREEN_MOBILE_WIDTH;
  }

  render() {
    let fxProps = {
      count: 3,
      interval: 1500,
      colors: ['#cc3333', '#4CAF50', '#81C784'],
      calc: (props, i) => ({
        ...props,
        x: this.isMobileViewport
          ? (i + 1) * (window.innerWidth / 3) - (i + 1) * 30
          : (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
        y: window.innerHeight / 2 - 100
      })
    }
    return (
      <div className="main-view" style={this.props.animationProps}>
        <Spring
          from={{ left: -50, opacity: 0 }}
          to={{ left: 0, opacity: 1 }}
          config={{ delay: 1500, duration: 200 }}
        >
          {props => <div style={props}><Fireworks {...fxProps} /></div>}
        </Spring>
        <Spring
          from={{ left: -50, opacity: 0 }}
          to={{ left: 0, opacity: 1 }}
          config={{ delay: 500 }}
        >
          {props =>
            <img
              style={props}
              className="blossom"
              src={require('../../../../assets/blossom.png')}
            />
          }
        </Spring>
        <Spring
          from={{ maxHeight: '50%', maxWidth: '50%', opacity: 0 }}
          to={{
            maxHeight: this.isMobileViewport ? '80%' : '40%',
            maxWidth: this.isMobileViewport ? '80%' : '40%',
            opacity: 1
          }}
          config={{ delay: 1000 }}
        >
          {props =>
            <img
              className="logo-2020"
              style={props}
              src={require('../../../../assets/2020_logo.png')}
            />
          }
        </Spring>
      </div>
    );
  }
}