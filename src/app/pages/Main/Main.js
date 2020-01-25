import React from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ReactAudioPlayer from 'react-audio-player';
import { Spring, Transition, animated } from 'react-spring/renderprops';
import AppMusic from '../../utils/AppMusic';

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
      currentScreen: 0
    };
    this.music = new Audio(AppMusic.getRandom());
  }

  componentDidMount() {
    this.music.play();
    setTimeout(() => this.setState({ currentScreen: 1 }), 5000);
  }

  render() {
    return (
      <div>
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
      </div>
    );
  }
}