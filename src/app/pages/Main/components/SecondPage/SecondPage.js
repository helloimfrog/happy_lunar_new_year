import React from 'react';
import { Spring } from 'react-spring/renderprops';
import AppString from '../../../../utils/AppString';

import './SecondPage.css';

export default class SecondPage extends React.Component {
  constructor() {
    super();
    this.state = {
      showFirework: true,
      rotated: "",
      rotating: "",
      rotatingMainBox: "",
      rotatingArrows: "",
      showWishZone: "none"
    }
    this.wishQuote = AppString.getRandomWish();
  }

  componentDidMount() {
    setTimeout(() => this.setState({ showFirework: false }), 5000)
  }

  render() {
    return (
      <div className="main-view-of-2nd-screen">
        {this._renderGiftBox()}      

        <div className="wish-zone" style={{ height: window.innerHeight * 2 / 3, display:`${this.state.showWishZone}` }}>
          <img
            alt="blossom-top-left"
            className="blossom-top-left"
            style={{ maxHeight: 150 }}
            src={require('../../../../assets/blossom_top_left.png')}
          />
          <img
            alt="blossom-bottom-right"
            className="blossom-bottom-right"
            style={{ maxHeight: 150 }}
            src={require('../../../../assets/blossom_bottom_right.png')}
          />
          <div className='from-author'>
            <img
              alt="animal-of-year"
              className="animal-of-year"
              style={{ maxHeight: 60, maxWidth: 60, marginRight: 10 }}
              src={require('../../../../assets/animal_of_year_2021.png')}
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
  _animate(){
    let isDone = this.state.rotated === "rotated" ? true : false;
    let init_state= this.state;
    if (!isDone) {
      this.setState({ rotating: "rotating", rotatingMainBox: "rotating-down", rotatingArrows: "rotating-arrows" });
      setTimeout(() => {
        this.setState({ rotated: "rotated" }, () =>{
          this.setState({
            showWishZone: "flex",
          })
        });
      }, 1000);
    } else {
      this.setState(init_state)
    }
  }

  _renderGiftBox(){
    const {rotated, rotating, rotatingMainBox, rotatingArrows} = this.state;
    console.log(this.state)

    return(
      <div style={{

        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        flexDirection: "column"
      }}>
        <div className={`wrapTextArrow ${rotatingArrows}`}>
          <div className="textBox">
            {AppString.get('label_gift_box')}
          </div>
          <div className="arrows"></div>
        </div>
        <div className="wrapGiftBox" onClick={() => this._animate()}>
          <div className="lidGiftBox">
            <img
                alt="lidGiftBox__lid"
                className={`lidGiftBox__lid ${rotating} ${rotated}`}
                src={require('../../../../assets/lid_gift_box.png')}
              />
          </div>
          <div className="mainGiftBox">
            <img
                alt="mainGiftBox__main"
                className={`mainGiftBox__main ${rotatingMainBox}`}
                src={require('../../../../assets/main_gift_box.png')}
              />
          </div>
        </div>
      </div>

    )
  }
}