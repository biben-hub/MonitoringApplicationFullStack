import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardCost.css'

const fetchURL = "https://13.68.153.183:4000/monitoring";
//https://13.68.153.183:4000/monitoring


export default function CardCost() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getDataFetch();
  }, []);

  const getDataFetch = async () => {
    const response = await axios.get(fetchURL);
    setUserData(response.data);
    console.log(response.data);
  };
  return (
    <div className="container">
      <div className="box yellow">
        <div className="profile">
          <div className="pic"><img src="https://picsum.photos/200" alt="cost" /></div>
        </div>
        <div className="content">
          <div>
            <p className="card_title">Total Cost</p>
            {userData.length > 0 && (<p key={userData.sum} className="card_cost">{Math.ceil(userData[0].sum)} €</p>)}
          </div>
        </div>

      </div>
    </div>
  )
}
