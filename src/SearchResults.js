import React, { useState } from "react";
import TableHeading from "./TableHeading";
import TableBody from "./TableBody";
import CustomerProfile from "./CustomerProfile";

const SearchResults = ({ results, id }) => {
  console.log("my results", results);
  const [customerID, setCustomerID] = useState("");
  console.log("the customerId", { customerID });
  function changeId(id) {
    setCustomerID(id);
  }
  return (
    <table className="table">
      <TableHeading />
      <TableBody bookings={results} changeId={changeId} />
      <CustomerProfile id={customerID} />
    </table>
  );
};

export default SearchResults;
