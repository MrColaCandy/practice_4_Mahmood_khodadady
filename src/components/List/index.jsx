import React from "react";
import "./List.css";
import { OrderItem } from "../OrderItem";
const List = ({ orders = [] }) => {
  return (
    <div className="list">
      <div className="buy-list">{renderOrders("buy")}</div>
      <div className="sell-list">{renderOrders("sell")}</div>
    </div>
  );

  function renderOrders(type) {
    let total = 0;
    return orders
      .filter((order) => order.type === type)
      .sort((a, b) => {
        if (type === "buy") {
          return b.price - a.price;
        } else {
          return a.price - b.price;
        }
      })
      .map((order) => {
        total += order.quantity;

        return (
          <OrderItem
            price={order.price}
            amount={order.quantity}
            type={order.type}
            total={total}
            maxTotal={orders
              .filter((order) => order.type === type)
              .reduce((ac, current) => {
                return ac + current.quantity;
              }, 0)}
          />
        );
      });
  }
};

export default List;
