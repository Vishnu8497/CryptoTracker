import React from "react";
import "./AppInfo.css";
import appleLogo from "../Images/appleLogo.png";
import playstoreLogo from "../Images/playstoreLogo.png";
import ratingImg from "../Images/ratingImg.png";
import reviewRatingImg from "../Images/reviewRatingImg.png";
import user from "../Images/user.png";
import user1 from "../Images/user1.png";
import user2 from "../Images/user2.png";
import user3 from "../Images/user3.png";

const AppInfo = () => {
  return (
    <div className="appInfo">
      <h1>Join 1 Milion Others Growing Their Crypto with CoinStats</h1>
      <div className="appInfo_Items">
        <div className="appInfo_Item">
          <div className="appInfo_Item_logo">
            <img src={appleLogo} alt="logo" />
            <h4>App Store</h4>
          </div>
          <h2>153,000 Reviews</h2>
          <div className="rating">
            <img src={ratingImg} alt="Rating" />
            <h3>4.8 Stars</h3>
          </div>
        </div>
        <div className="appInfo_Item">
          <div className="appInfo_Item_logo">
            <img src={playstoreLogo} alt="logo" />
            <h4>Play Store</h4>
          </div>
          <h2>57,000 Reviews</h2>
          <div className="rating">
            <img src={ratingImg} alt="Rating" />
            <h3>4.7 Stars</h3>
          </div>
        </div>
      </div>  
      <div className="reviews">
        <div className="reviewsItem">
          <div className="reviewsItem_user">
          <img src={user} alt="user" />
          <div className="userInfo">
          <h4>James Scott</h4>
          <img src={reviewRatingImg} slt="Review Rating" style={{marginTop:"-50px"}}/>
          </div>
          </div>
          <p  style={{marginTop:"-30px"}}>
            Of all portfolio managers on the market, CoinStats supports the most
            number of wallets and exchanges. It's really a cool platform that
            connects all of my portfolios into one place.
          </p>
        </div>
        <div className="reviewsItem">
          <div className="reviewsItem_user">
          <img src={user1} alt="user" />
          <div className="userInfo">
          <h4>Mrunal Thakur</h4>
          <img src={reviewRatingImg} slt="Review Rating" style={{marginTop:"-50px"}}/>
          </div>
          </div>
          <p  style={{marginTop:"-15px"}}>
            Of all portfolio managers on the market, CoinStats supports the most
            number of wallets and exchanges. It's really a cool platform that
            connects all of my portfolios into one place.
          </p>
        </div>
        <div className="reviewsItem">
          <div className="reviewsItem_user">
          <img src={user2} alt="user" />
          <div className="userInfo">
          <h4>Harshal Rane</h4>
          <img src={reviewRatingImg} slt="Review Rating" style={{marginTop:"-50px"}}/>
          </div>
          </div>
          <p  style={{marginTop:"-10px"}}>
            Of all portfolio managers on the market, CoinStats supports the most
            number of wallets and exchanges. It's really a cool platform that
            connects all of my portfolios into one place.
          </p>
        </div>
        <div className="reviewsItem">
          <div className="reviewsItem_user">
          <img src={user3} alt="user" />
          <div className="userInfo">
          <h4>Swati Jadhav</h4>
          <img src={reviewRatingImg} slt="Review Rating" style={{marginTop:"-50px"}}/>
          </div>
          </div>
          <p  style={{marginTop:"-20px"}}>
            Of all portfolio managers on the market, CoinStats supports the most
            number of wallets and exchanges. It's really a cool platform that
            connects all of my portfolios into one place.
          </p>
        </div>
        
      </div>
      <a href="#" style={{ color: "white", fontSize:"25px", fontWeight:600 }}>
        Show More Reviews
      </a>
      <button>Start Free Trial</button>
    </div>
  );
};

export default AppInfo;
