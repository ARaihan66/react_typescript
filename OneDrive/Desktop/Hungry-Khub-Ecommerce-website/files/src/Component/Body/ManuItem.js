import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

function ManuItem(props) {
    return (
        <div style={{ display: 'inline-block', margin: '10px' }}>
            {/* <Card onClick={props.onDishSelected} style={{ margin: "10px", cursor: "pointer" }}>
                <CardBody>
                    <CardImg width="100%" alt={props.dish.name} src={props.dish.image} style={{ opacity: "0.7" }} />
                    <CardImgOverlay>
                        <CardTitle style={{ fontWeight: "bolder", fontSize: "20px" }}>{props.dish.name}</CardTitle>
                    </CardImgOverlay>

                </CardBody>
            </Card> */}

            <Card
                onClick={props.onDishSelected}
                style={{
                    width: '18rem',
                    // height: '300px',
                    // width: '300px',
                    cursor: "pointer"
                }}
                className="itemCard"
            >
                <CardBody>
                    <CardTitle tag="h5">
                        {props.dish.name}
                    </CardTitle>
                </CardBody>
                <img
                    alt={props.dish.name}
                    src={props.dish.image}
                    width="100%"
                    style={{ opacity: '0.7' }}
                />
            </Card>

        </div>
    );
}

export default ManuItem;