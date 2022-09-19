import React from "react";
import background from './Background/Background.jpg';

const Home = () => {
    return (
        <div className="container-fluid" style={{ backgroundImage: `url(${background})`, opacity: '0.8', height: '570px', maxWidth: '1350px', marginTop: '55px' }}>
            <div className="row">
                <div className="col-lg-8" style={{ paddingTop: '80px' }}>
                    <span style={{ color: 'white', fontWeight: 'bolder', fontSize: '60px', letterSpacing: '7px' }}>FEEL</span>
                    <span style={{ color: 'yellow', fontWeight: 'bolder', fontSize: '60px', paddingLeft: '15px', letterSpacing: '7px' }}>HUNGRY</span>
                    <span style={{ color: 'red', fontWeight: 'bolder', fontSize: '60px', paddingLeft: '15px' }}>?</span><br />
                    <span style={{ color: 'white', backgroundColor: 'blue', letterSpacing: '5px', fontSize: '30px', borderRadius: '4px' }}>Your Favourite Food delivery Partner</span>
                </div>
            </div>
            <div className="col-lg-4">

            </div>
        </div >

    );
}


export default Home;