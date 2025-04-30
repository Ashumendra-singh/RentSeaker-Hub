import React, { useEffect, useState } from 'react';
import {useNavigate ,useLocation } from 'react-router-dom';
import axios from 'axios';
import './Listings.css';

function Listings() {
  const location = useLocation();
  const navigate = useNavigate();
  const passedData = location.state;

  const [listings, setListings] = useState([]);
  // const [isLogin, setisLogin] = useState([true]);
  // console.log(prop)
  const fetchListings = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/users/listings',{
        withCredentials:true
      }); // Replace with your API
      // console.log("res ",response.data.success);
      
      setListings(response.data.list); // Assuming the API returns { listings: [...] }
    } catch (error) {
      console.error('Error fetching listings:', error);
      navigate('/login');
    }
    
    console.log(isLogin);
  };


  // console.log(passedData)
  useEffect(() => {
    fetchListings();
    
  }, []);

  return (
    <div className="listings-container">
      
      {listings.length > 0 ? (
        listings.map((listing) => (
          <div key={listing._id} className="listing-card">
            <img src={listing.image.url} alt={listing.title} className="listing-image" />
            <div className="listing-info">
              <h3>{listing.title}</h3>
              <p>{listing.description}</p>
              <p><strong>Price:</strong> ₹{listing.price}</p>
              <p><strong>Country:</strong> {listing.country}</p>
              <p><strong>Location:</strong> {listing.location}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading listings...</p>
      )}
    </div>
  );
}

export default Listings;
