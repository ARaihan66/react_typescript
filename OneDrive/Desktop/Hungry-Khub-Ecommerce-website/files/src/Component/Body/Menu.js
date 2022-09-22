import React from 'react';
import { Component } from 'react';
import DISHES from '../../data/dishes';
import COMMENTS from '../../data/comments'
import ManuItem from './ManuItem';
import DishDetail from './DishDetail';
import { CardColumns, Modal, ModalBody, ModalFooter } from 'reactstrap';

class Menu extends Component {
    state = {
        dishes: DISHES,
        selectedDish: null,
        modalDish: false,
        comments: COMMENTS,
    }

    onDishSelected = (dish) => {
        this.setState({
            selectedDish: dish,
            modalDish: !this.state.modalDish
        })
    }

    popUp = () => {
        this.setState({
            modalDish: !this.state.modalDish
        })

    }

    render() {
        // const menu = this.state.dishes.map(item => {
        //     return <ManuItem
        //         dish={item}
        //         key={item.id}
        //         onDishSelected={() => this.onDishSelected(item)}
        //     />
        // })

        // let dishDetail = null;
        // if (this.state.selectedDish != null) {
        //     dishDetail = <DishDetail dish={this.state.selectedDish} />
        // }


        //document.title = "Menu";
        const menu = this.state.dishes.map(item => {
            return (
                <ManuItem
                    dish={item}
                    key={item.id}
                    DishSelect={() => this.onDishSelected(item)}
                />
            );
        })

        let dishDetail = null;
        if (this.state.selectedDish != null) {
            const comments = this.state.comments.filter(comment => comment.dishId === this.state.selectedDish.id
            )
            dishDetail = <DishDetail
                dish={this.state.selectedDish}
                comments={comments} />
        }

        return (
            <div className="container-fluid" style={{ marginTop: '76px', backgroundColor: 'pink' }}>
                <div className="row">
                    <h2>FOOD ITEM'S</h2>
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalDish}>
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <button onClick={this.popUp}>Cancel</button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default Menu;