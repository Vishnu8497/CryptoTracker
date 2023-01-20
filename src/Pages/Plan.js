import React, { useState } from "react";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import "./Plan.css";

const Plan = () => {
  const [checked, setChecked] = useState(true);

  const handleChange =(event)=>{
    setChecked(event.target.checked);
  }

  const IOSSwitch = styled((props) => (
    <Switch
      focusVisibleClassName=".Mui-focusVisible"
      disableRipple
      {...props}
    />
  ))(({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(16px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "orange" : "orange",
          opacity: 1,
          border: 0,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 22,
      height: 22,
    },
    "& .MuiSwitch-track": {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  }));
  return (
    <div className="plan" id="plan">
      <h1>Discover the Full Potential of CoinStats</h1>
      <p>
        14-day money-back guarantee. Cancel anytime for any reason.
        <br />
        Explore CoinStats without limitations and you’ll never want to go back.
      </p>
      <div className="switch">
        <h4>1 Month</h4>
        <IOSSwitch checked={checked} onChange={handleChange} />
        <h4>
          12 Months
          <br />
          <span>(Save uoto 58% Yearly)</span>
        </h4>
      </div>
      <div className="planDetails">
        <div className="currentPlan">
          <p>currentPlan</p>
          <h1>Basic</h1>
          <h3>Free</h3>
          <div className="options">
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>10 Connected Portfolios</p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>1000 Transaction</p>
            </div>
            <div className="optionItem">
              <ClearIcon />
              <p style={{ marginLeft: "10px" }}>Reach your goals with a profit/loss analysis</p>
            </div>
            <div className="optionItem">
              <ClearIcon />
              <p style={{ marginLeft: "10px" }}>Make data-driven decisions with in-depth portfolio analytics</p>
            </div>
            <div className="optionItem">
              <ClearIcon />
              <p style={{ marginLeft: "10px" }}>Find your next favorite coin wih exclusive coin insights</p>
            </div>
            <div className="optionItem">
              <ClearIcon />
              <p style={{ marginLeft: "10px" }}>Stay on top of your holdings with order fill notifications</p>
            </div>
            <div className="optionItem">
              <ClearIcon />
              <p style={{ marginLeft: "10px" }}>Act at the right moment with customized price alerts</p>
            </div>
            <div className="optionItem">
              <ClearIcon />
              <p style={{ marginLeft: "10px" }}>Enjoy a no-distraction ad-free experiences</p>
            </div>
          </div>
          <button>Select</button>
        </div>

        <div className="premiumPlan">
          <p>Best Value</p>
          <h1>Premium</h1>
          {checked === true ? 
          <>
          <h2>Rs 1660 / month </h2>
          <p>billed every 12 months</p>
          <h3>You’re saving 58% with the Yearly Plan</h3>
          </> : 
          <>
          <h2>Rs 3990 / month </h2>
          </>
          }
          <div className="options">
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Unlimited Connected Portfolios
              </p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>1,000,000 Transactions</p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Reach your goals with a profit/loss analysis
              </p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Make data-driven decisions with in-depth portfolio analytics
              </p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Find your next favorite coin with exclusive coin insights
              </p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Stay on top of your holdings with order fill notifications
              </p>
            </div>

            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Act at the right moment with customized price alerts
              </p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p style={{ marginLeft: "10px" }}>
                Enjoy a no-distraction ad-free experience
              </p>
            </div>
          </div>
          <button>Start Free Trial</button>
        </div>

        <div className="currentPlan">
          <h1>Team</h1>
          <p>Get CoinStats tailored to your needs.</p>
          <h3>All the Premium Features, Plus</h3>
          <div className="options">
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p>VIP Support via Dedicated Channel</p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p>Seats For Communities</p>
            </div>
            <div className="optionItem">
              <CheckIcon style={{ color: "orange" }} />
              <p>Personalized Features Upon Request</p>
            </div>
          </div>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
