import React from "react";
import "./OrderItem.css";
export const OrderItem = ({ type, amount, price, total, maxTotal }) => {
  const getTotalPercentage = () => {
    return (total / maxTotal) * 100;
  };
  return (
    <div
      style={{
        background: `linear-gradient(to 
          ${type === "sell" ? "right" : "left"}
        , ${
          type === "sell" ? "green" : "red"
        } ${getTotalPercentage()}%, white 0%)`,
      }}
      className="order-item"
    >
      <div>{total}</div>
      <div>{amount}</div>
      <div className="percentage">{price}</div>
    </div>
  );
};
