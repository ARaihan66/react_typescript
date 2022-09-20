import React from "react";
import one from './Service Image/one.png';
import two from './Service Image/two.png';
import three from './Service Image/three.png';

const Services = () => {
    return (
        <div className="container" style={{ marginTop: "80px", }}>
            <h1>SERVICES</h1>
            <div className="row">
                <div className="col-lg-4 serviceCard" >
                    <img src={one} style={{ height: "150px", weidth: "180px" }} />
                    <h3>Fastest Delivery</h3>
                    <p>Get your food delivered in less than an hour! That’s as fast as it can get.</p>
                </div>
                <div className="col-lg-4 serviceCard" >
                    <img src={two} style={{ height: "150px", weidth: "180px" }} />
                    <h3>So Much to Choose From</h3>
                    <p>Find your favourite among the thousands of restaurants in our app.</p>
                </div>
                <div className="col-lg-4 serviceCard" >
                    <img src={three} style={{ height: "150px", weidth: "180px" }} />
                    <h3>Best Offers In Town!</h3>
                    <p>Get the best offers and combos at the best price only at Pathao Food!</p>
                </div>
            </div>
        </div>
    )
}

export default Services;