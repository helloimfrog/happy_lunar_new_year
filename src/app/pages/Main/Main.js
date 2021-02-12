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
            <>
              <div id='welcome'>
                <FirstPage />
              </div>
              <div id='gift' ref={ref => this.giftDiv = ref}>
                <SecondPage />
              </div>
            </>
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
    this.setState({ showContent: true }, () => this.audioPlayer.play());
    setTimeout(() => this.giftDiv.scrollIntoView({ behavior: 'smooth', }), 5000);
  }
}