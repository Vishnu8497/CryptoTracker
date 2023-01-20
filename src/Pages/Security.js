import React from "react";
import "./Security.css";
import privacy from '../Images/privacy.png'
import threat from '../Images/threat.png'
import security from '../Images/security.png'

const Security = () => {
  return (
    <div className="security">
      <div className="security_heading">
        <h1>
          The Ultimate Security for <br /> Your Digital Assets
        </h1>
        <p>
          Crypto Tracker is equipped with a top-quality security infrastructure
          designed to ensure maximum protection of assets at all times. Since we
          ask for read-only access only, your holdings are perfectly safe under
          any conditions.
        </p>
      </div>
      <div className="security_items">
        <div className="security_item">
            <img src={privacy} alt="privacy image"/>
            <h2>Grade Encryption</h2>
            <h3>We value our users' privacy, so we use the most advanced encryption to securely store data.</h3>
        </div>
        <div className="security_item">
            <img src={threat} alt="privacy image"/>
            <h2>Secured by Hexens</h2>
            <h3>We value our users' privacy, so we use the most advanced military-grade encryption to securely store data.</h3>
        </div>
        <div className="security_item">
            <img src={security} alt="privacy image"/>
            <h2>Industry Best Practices</h2>
            <h3>We take the most advanced security measures to ensure that your account is as safe as possible.</h3>
        </div>
      </div>
      <div className="security_trial">
        <p>
          Enjoy unlimited access for 7 days. Love it and keep investing in
          yourself for only Rs 1660 a month, or simply cancel
          and you won’t ever be charged.
        </p>
        <button>Start Free Trial</button>
      </div>
    </div>
  );
};

export default Security;
