import React from "react";
import OrderShell from "./components/OrderShell";
import Header from "./components/Header";
import List from "./components/List";
import orders from "./data/orders.json";
const App = () => {
  return (
    <div>
      <OrderShell>
        <Header />
        <List orders={orders} />
      </OrderShell>
    </div>
  );
};

export default App;
