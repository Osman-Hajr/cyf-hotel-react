import React, {useState, useEffect} from "react";
import Search from "./Search.js";

import SearchResults from "./SearchResults.js";


const Bookings = () => {
  useEffect(() => {
    
    fetch('https://cyf-react.glitch.me/delayed')
    .then(response => response.json())
    .then(data => {
      setLoading(false)
      setBookings(data)
      
    })
  },[])
  const [bookings, setBookings] = useState([])
  const [loading, setLoading] = useState(true)
  const search = searchVal => {
    
    console.log("TO DO!", searchVal);
    setBookings(
      bookings.filter(
        e => 
        e.firstName.toLowerCase() === searchVal.toLowerCase() || 
        e.surname.toLowerCase() === searchVal.toLowerCase()
      )
    )
  };
  
  return (
    <div className="App-content">
      <div className="container">
        <Search search={search} />
        <SearchResults results={bookings} />
        {loading && (<p>"Data is loading... Still loading..."</p>)}
      </div>
    </div>
  );
};

export default Bookings;
/*
Instructions: Still in the <Bookings /> component, implement the search method. It must use the searchVal variable (that you just passed from the <Search /> component) to filter the search results. The filter function should return bookings where firstName or surname match searchVal. Once filtered, use the setBookings function to update the results rendered in <SearchResults />.

Test: Verify that when you enter an existing first name or surname and submit the form, the results are filtered accordingly in the customers table.
*/