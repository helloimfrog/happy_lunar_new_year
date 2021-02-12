import React from 'react';
import { Fireworks } from 'fireworks/lib/react';
import { MAX_SCREEN_MOBILE_WIDTH } from '../../../../utils/AppOtherValues';

import './FirstPage.css';

export default class FirstPage extends React.Component {
  constructor() {
    super();
    this.isMobileViewport = window.innerWidth < MAX_SCREEN_MOBILE_WIDTH;
    this.state = {
      showFireworks: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showFireworks: false }), 4500);
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
      <div className="main-view">
        {
          this.state.showFireworks
            ? <Fireworks {...fxProps} />
            : null
        }
        <div className="cloud-top-container"/>
        <img
          alt="2021-logo"
          className="logo-2021"
          src={require('../../../../assets/2021_logo.png')}
        />
      </div>
    );
  }
}