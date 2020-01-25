import React from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import AppMusic from '../../utils/AppMusic';

import './Main.css'
import AppString from '../../utils/AppString';

const pages = [
  animationProps =>
    <animated.div style={animationProps}>
      <FirstPage />
    </animated.div>,
  animationProps =>
    <animated.div style={animationProps}>
      <Spring
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}
        delay={800}
      >
        {
          props =>
            <div style={props}>
              <SecondPage />
            </div>
        }
      </Spring>
    </animated.div>
];

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentScreen: 0,
      showContent: false
    };
    this.music = AppMusic.getRandom();
  }

  render() {
    return (
      <div>
        <audio
          ref={ref => this.audioPlayer = ref}>
          <source type="audio/mp3" src={this.music} />
        </audio>
        {
          this.state.showContent
            ?
            <Transition
              native
              reset
              unique
              items={this.state.currentScreen}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}>
              {currentScreen => pages[currentScreen]}
            </Transition>
            :
            <div className="tap-to-open-main-view">
              <img
                onClick={this._onClickToPlay}
                style={{ maxHeight: '20%', maxWidth: '20%', marginRight: 10 }}
                src={require('../../assets/animal_of_year.webp')}
              />
              <span className="click-to-play">
                {AppString.get('click_to_play')}
              </span>
            </div>
        }
      </div>
    );
  }

  _onClickToPlay = () => {
    this.setState({ showContent: true }, () => {
      this.audioPlayer.play();
      setTimeout(() => this.setState({ currentScreen: 1 }), 5000);
    })
  }
}