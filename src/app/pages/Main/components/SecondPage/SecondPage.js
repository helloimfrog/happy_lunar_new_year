import React from 'react';
import { Fireworks } from 'fireworks/lib/react';
import { Spring } from 'react-spring/renderprops';
import AppString from '../../../../utils/AppString';
import { MAX_SCREEN_MOBILE_WIDTH } from '../../../../utils/AppOtherValues';

import './SecondPage.css';

export default class FirstPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showFirework: true
    }
    this.wishQuote = AppString.getRandomWish();
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showFirework: false }), 5000)
  }

  render() {
    let fxProps = {
      count: 3,
      interval: 1500,
      colors: ['#cc3333', '#4CAF50', '#81C784'],
      calc: (props, i) => ({
        ...props,
        x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
        y: window.innerHeight / 2 - 100
      })
    }
    return (
      <div className="main-view-of-2nd-screen">
        {
          this.state.showFirework ? <Fireworks {...fxProps} /> : null
        }
        <div className="wish-zone" style={{ height: window.innerHeight * 2 / 3 }}>
          <img
            className="blossom-top-left"
            style={{ maxHeight: 150 }}
            src={require('../../../../assets/blossom_top_left.png')}
          />
          <img
            className="blossom-bottom-right"
            style={{ maxHeight: 150 }}
            src={require('../../../../assets/blossom_bottom_right.png')}
          />
          <div className='from-author'>
            <img
              style={{ maxHeight: 60, maxWidth: 60, marginRight: 10 }}
              src={require('../../../../assets/animal_of_year.webp')}
            />
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={1500}
            >
              {
                props =>
                  <span style={props}>{AppString.get("from_author")}</span>
              }
            </Spring>
          </div>
          <Spring
            from={{ opacity: 0 }}
            to={{ opacity: 1 }}
            delay={1300}
          >
            {
              props => <span className="wish-quote" style={props}>{this.wishQuote}</span>
            }
          </Spring>
        </div>
      </div>
    );
  }
}