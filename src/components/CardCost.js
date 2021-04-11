import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CardCost.css'

const fetchURL = "http://localhost:4000/users";
//https://api.github.com/users/deekshasharma

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
          <div className="pic"><img src="https://picsum.photos/200" alt="cost"/></div>
        </div>
        <div className="content">
            <div>
                <p className="card_title">Cost</p>
                <p>{userData[0].name}</p> 
            </div>
          </div>
      </div>
      <div className="box pink">
      <div className="profile">
          <div className="pic"><img src="https://picsum.photos/200" alt=""/></div>
        </div>
        <div className="content">
            <div>
              <p className="card_title">Quantity</p>
              <p>Title</p>
            </div>
            
          </div>
    </div> 
      <div className="box aqua">
      <div className="profile">
          <div className="pic"><img src="https://picsum.photos/200" alt=""/></div>
        </div>
        <div className="content">
            <div>
              <p className="card_title">Consommation</p>
              <p>Title</p>
            </div>
          </div>
        
      </div>
    </div>
    )
}
