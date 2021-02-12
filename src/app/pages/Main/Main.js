import React from 'react';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import AppMusic from '../../utils/AppMusic';

import './Main.css'
import AppString from '../../utils/AppString';
import { MAX_SCREEN_MOBILE_WIDTH } from '../../utils/AppOtherValues';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      showContent: false,
      screenSize: {
        height: window.innerHeight,
        width: window.innerWidth
      },
      startAnimTransitions: false
    };
    this.music = AppMusic.getRandom();
  }

  componentDidMount() {
    window.addEventListener('resize', () => this.setState({
      screenSize: {
        height: window.innerHeight,
        width: window.innerWidth
      }
    }));
  }

  render() {
    const { showContent } = this.state;
    return (
      <div>
        <audio
          ref={ref => this.audioPlayer = ref}>
          <source type="audio/mp3" src={this.music} />
        </audio>
        {
          showContent
            ?
            <div className='main-view'>
              <div>
                <FirstPage />
              </div>
              <div
                className='gift-wrapper'
                ref={ref => this.giftDiv = ref}
                style={{ backgroundSize: `${this.state.screenSize.width}px auto` }}
              >
                <SecondPage />
              </div>
            </div>
            : this._renderClickToPlay()
        }
      </div>
    );
  }

  _renderClickToPlay() {
    const { screenSize, startAnimTransitions } = this.state;
    const maxHeight = screenSize.width < MAX_SCREEN_MOBILE_WIDTH ? '60%' : '20%';
    const maxWidth = screenSize.width < MAX_SCREEN_MOBILE_WIDTH ? '60%' : '20%';
    return (
      <div className={`tap-to-open-main-view ${startAnimTransitions ? "tap-to-open-main-view-with-anim" : ""}`}>
        <img
          alt="click-to-play"
          onClick={this._onClickToPlay}
          style={{ maxHeight, maxWidth, marginRight: 10, cursor: 'pointer' }}
          src={require('../../assets/animal_of_year_2.png')}
        />
        <span className="click-to-play">
          {AppString.get('click_to_play')}
        </span>
      </div>
    )
  }

  _onClickToPlay = () => {
    this.setState({ startAnimTransitions: true }, () => {
      setTimeout(() => this.setState({ showContent: true }), 700);
      this.audioPlayer.play();
    });
    setTimeout(() => this.giftDiv.scrollIntoView({ behavior: 'smooth', }), 5000);
  }
}