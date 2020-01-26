import React from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import AppMusic from '../../utils/AppMusic';

import './Main.css'
import AppString from '../../utils/AppString';
import { MAX_SCREEN_MOBILE_WIDTH } from '../../utils/AppOtherValues';

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
      showContent: false,
      screenSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    };
    this.music = AppMusic.getRandom();
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({
      screenSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }))
  }

  render() {
    const { showContent, currentScreen } = this.state;
    return (
      <div>
        <audio
          ref={ref => this.audioPlayer = ref}>
          <source type="audio/mp3" src={this.music} />
        </audio>
        {
          showContent
            ?
            <Transition
              native
              reset
              unique
              items={currentScreen}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}>
              {currentScreen => pages[currentScreen]}
            </Transition>
            : this._renderClickToPlay()
        }
      </div>
    );
  }

  _renderClickToPlay() {
    const { screenSize } = this.state;
    const maxHeight = screenSize.width < MAX_SCREEN_MOBILE_WIDTH ? '60%' : '20%';
    const maxWidth = screenSize.width < MAX_SCREEN_MOBILE_WIDTH ? '60%' : '20%';
    return (
      <div className="tap-to-open-main-view">
        <img
          alt="click-to-play"
          onClick={this._onClickToPlay}
          style={{ maxHeight, maxWidth, marginRight: 10 }}
          src={require('../../assets/animal_of_year_2.png')}
        />
        <span className="click-to-play">
          {AppString.get('click_to_play')}
        </span>
      </div>
    )
  }

  _onClickToPlay = () => {
    this.setState({ showContent: true }, () => {
      this.audioPlayer.play();
      setTimeout(() => this.setState({ currentScreen: 1 }), 5000);
    })
  }
}