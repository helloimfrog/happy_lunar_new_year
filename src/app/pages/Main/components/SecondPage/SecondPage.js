import React from 'react';
import AppString from '../../../../utils/AppString';
import { getRandomLogoForWishCard } from '../../../../utils/AppOtherValues';
import { useSearchParams } from "react-router-dom";
import Base64 from '../../../../utils/Base64';

import './SecondPage.css';

/*
  Truyền vào url 3 cái params sau vào url
  - image_url: url ảnh (đã encode)
  - content: chuỗi string base64 mã hoá lời chúc
  - author: chuỗi string base64 mã hoã tác giả
*/

class SecondPageClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rotating: "",
      rotatingMainBox: "",
      rotatingArrows: "",
      animShowWishZone: false
    }
    this._processWishQuote(props);
    this._processWishLogo(props);
    this._processWishAuthor(props);
  }

  _processWishQuote(props) {
    const { urlParams } = props;

    const wishQuoteBase64 = urlParams.get('content');

    this.wishQuote = wishQuoteBase64
      ? Base64.decodeBase64(wishQuoteBase64)
      : AppString.getRandomWish();
  }

  _processWishLogo(props) {
    const { urlParams } = props;

    const wishLogoUrl = urlParams.get('image_url');

    this.wishCardLogo = wishLogoUrl
      ? wishLogoUrl
      : getRandomLogoForWishCard();
  }

  _processWishAuthor(props) {
    const { urlParams } = props;

    const wishAuthorBase64 = urlParams.get('author');

    this.wishAuthor = wishAuthorBase64
      ? Base64.decodeBase64(wishAuthorBase64)
      : AppString.get("from_author");
  }

  render() {
    return (
      <div className="main-view-of-2nd-screen">
        <img
          alt="blossom-top-left"
          className="second-page-corner-decoration second-page-top-left"
          src={require('../../../../assets/blossom_top_left.png')}
        />
        <img
          alt="blossom-top-left"
          className="second-page-corner-decoration second-page-bottom-right"
          src={require('../../../../assets/blossom_bottom_right.png')}
        />
        {this._renderGiftBox()}
        {this._renderWishBox()}
      </div>
    );
  }

  _animate() {
    this.setState({
      rotating: "rotating",
      rotatingMainBox: "rotating-down",
      rotatingArrows: "rotating-arrows",
      animShowWishZone: true
    });
  }

  _renderGiftBox() {
    const { rotating, rotatingMainBox, rotatingArrows } = this.state;
    return (
      <div className="wrap-text-arrow-giftbox">
        <div className={`wrap-text-arrow ${rotatingArrows}`}>
          <div className="click-to-open-gift-text">
            {AppString.get('label_gift_box')}
          </div>
          <div className="arrows"></div>
        </div>
        <div className="wrap-gift-box" onClick={this._animate.bind(this)}>
          <div className="lid-gift-box">
            <img
              alt="lid-gift-box__lid"
              className={`lid-gift-box__lid ${rotating}`}
              src={require('../../../../assets/lid_gift_box.png')}
            />
          </div>
          <div className="main-gift-box">
            <img
              alt="main-gift-box__main"
              className={`main-gift-box__main ${rotatingMainBox}`}
              src={require('../../../../assets/main_gift_box.png')}
            />
          </div>
        </div>
      </div>
    )
  }

  _renderWishBox() {
    return (
      <div className={`wish-zone ${this.state.animShowWishZone ? "wish-zone-anim" : ""}`}>
        <img
          alt="blossom-top-left"
          className="blossom-corner-decoration blossom-top-left"
          src={require('../../../../assets/flower-corners-1.png')}
        />
        <div className="row wish-quote-image-container">
          <div className="col-lg-4 wish-quote-image-wrapper">
            <img
              alt="wish-logo"
              className="wish-logo"
              src={this.wishCardLogo}
            />
          </div>
          <div className="col-lg-6 wish-quote-image-wrapper">
            <span className="wish-quote">
              {this.wishQuote}
            </span>
          </div>
        </div>
        <img
          alt="blossom-bottom-right"
          className="blossom-corner-decoration blossom-bottom-right"
          src={require('../../../../assets/flower-corners-2.png')}
        />
        <div className='from-author'>
          <img
            alt="animal-of-year"
            className="animal-of-year"
            src={require('../../../../assets/animal_of_year_1.png')}
          />
          <span>
            {this.wishAuthor}
          </span>
        </div>
      </div>
    )
  }
}

const SecondPage = () => {
  let [searchParams] = useSearchParams();

  return (
    <SecondPageClassComponent urlParams={searchParams} />
  )
}

export default SecondPage