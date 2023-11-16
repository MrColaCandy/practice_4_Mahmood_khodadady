import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-top">
        <div>Buy</div>
        <div>Sell</div>
      </div>
      <div className="header-bottom">
        <div>Total(SAT)</div>
        <div>Amount(SAT)</div>
        <div>PRICE(RIAL)</div>
        <div>Amount(SAT)</div>
        <div>Total(SAT)</div>
      </div>
    </div>
  );
};

export default Header;
