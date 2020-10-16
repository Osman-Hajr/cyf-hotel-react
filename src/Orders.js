import React, { useState } from "react";
import RestaurantButton from "./RestaurantButton";
const Orders = ({ orderType }) => {
  const [orders, setOrders] = useState(0);
  const OrderOne = () => {
    return setOrders(orders + 1);
  };
  return (
    <li className="list-orders">
      {orderType} : {orders} <RestaurantButton prop={OrderOne} />
    </li>
  );
};
export default Orders;
