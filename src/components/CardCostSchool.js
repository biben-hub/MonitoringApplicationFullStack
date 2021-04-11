import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardCostSchool.css'

const fetchURL = "http://localhost:4000/costperschool";
//https://api.github.com/users/deekshasharma

export default function CardCost() {
    const [userData, setUserData] = useState([]);

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
                        <p className="card_title">Cost Per School</p>
                        {userData.length > 0 && (<p className="card_cost">{userData[0].sum}</p>)}
                    </div>
                    <ul>
                        {
                            userData.map(r => (
                                <li key={r.subscriptionname}>{r.subscriptionname} : {r.cost}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            
            </div>
    )
}
