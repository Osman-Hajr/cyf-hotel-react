import React from "react";
const RestaurantButton = ({ prop }) => (
  <div>
    <button className="btn btn-primary" onClick={prop}>
      {" "}
      Add{" "}
    </button>
  </div>
);

export default RestaurantButton;
