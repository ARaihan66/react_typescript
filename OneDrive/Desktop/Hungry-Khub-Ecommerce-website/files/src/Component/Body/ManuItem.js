import React from 'react';
import { Card, CardTitle, CardBody, CardSubtitle } from 'reactstrap';

function ManuItem(props) {
    return (
        <div style={{ display: 'inline-block', margin: '10px' }}>
            <Card
                onClick={props.DishSelect}
                style={{
                    width: '18rem',
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