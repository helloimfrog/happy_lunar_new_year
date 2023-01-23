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
    const { showFireworks } = this.state;
    let fxProps = {
      count: 3,
      interval: 1500,
      colors: ['#cc3333', '#4CAF50', '#3eded1', '#bfed28'],
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
          showFireworks
            ? <Fireworks {...fxProps} />
            : null
        }
        <img
          alt="logo-year-number"
          className="logo-year-number"
          src={require('../../../../assets/year_logo_in_number.png')}
        />
        <div className="first-page-top-decoration"/>
        <div className="first-page-bottom-decoration"/>
      </div>
    );
  }
}