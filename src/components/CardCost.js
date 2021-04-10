import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './CardCost.css'

export default function CardCost() {
    const [nom, setData] = useState('');

    const fetchMyAPI = async () => {
      let json = await axios(`http://localhost:4000/users`)
      setData(json.nom);
      
    }
    useEffect(() => {
        fetchMyAPI();
        console.log(fetchMyAPI());
       }, []);
    return (
        <div className="container">
            <div className="box yellow">
        <div className="profile">
          <div className="pic"><img src="https://picsum.photos/200" alt="cost"/></div>
        </div>
        <div className="content">
            <div>
                <p className="card_title">Cost</p>
                <p>{nom}</p> 
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
