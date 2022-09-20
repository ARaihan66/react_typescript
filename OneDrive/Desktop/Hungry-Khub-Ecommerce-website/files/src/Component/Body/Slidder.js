import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import bekary from './Slidder Image/bekary.jpg';
import burger from './Slidder Image/burger.jpg';
import fastFood from './Slidder Image/fastFood.jpg';
import iceCream from './Slidder Image/iceCream.jpg';
import pasta from './Slidder Image/pasta.jpg';
import pizza from './Slidder Image/pizza.jpg';


const Slidder = () => {
    return (
        <div style={{ background: 'gray' }}>
            <div className="container" >
                <h2 style={{ textAlign: 'center' }}>DELICIOUS FOODS</h2>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className=" w-100"
                            src={bekary}
                            alt="bekary"
                            style={{ opacity: '0.8' }}
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'black' }}>BEKARY</h1>
                            <h3>15% OFF</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} >
                        <img
                            className=" w-100"
                            src={pasta}
                            alt="Pasta"
                            style={{ opacity: '0.8' }}
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'black' }}>PASTA</h1>
                            <h3>10% OFF</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className=" w-100"
                            src={burger}
                            alt="Third slide"
                            style={{ opacity: '0.8' }}
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'black' }}>BURGER</h1>
                            <h3>17% OFF</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} >
                        <img
                            className=" w-100"
                            src={fastFood}
                            alt="Fast Food"
                            style={{ opacity: '0.8' }}
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'black' }}>FAST FOOD</h1>
                            <h3>19% OFF</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500} >
                        <img
                            className=" w-100"
                            src={iceCream}
                            alt="Ice Cream"
                            style={{ opacity: '0.8' }}
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'black' }}>ICE CREAM</h1>
                            <h3>14% OFF</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item  >
                        <img
                            className=" w-100"
                            src={pizza}
                            alt="Pizza"
                            style={{ opacity: '0.8' }}
                        />
                        <Carousel.Caption>
                            <h1 style={{ color: 'black' }}>PIZZA</h1>
                            <h3>10% OFF</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>

    );
}

export default Slidder;