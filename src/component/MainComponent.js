import React, { Component } from 'react';
import Menu from './menuComponent';
import DishDetail from "./DishdetailComponent"
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from "../shared/dishes"

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
        // so basically we stored all the data of DISHES in dishes a new object
        dishes : DISHES,
        SelectedDish : null
    }
  }

  
onDishSelect(dishId) {
    this.setState({
            SelectedDish: dishId
    });
}

  render(){
    return (
      <div>
        <Header />
        {/* here we made a new array of object dish for this.state which stored all values we got
         from dishes and we are going to use this dish into our menuComponent for all works */}
        <Menu dish = {this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish = {this.state.dishes.filter((dish) => dish.id === this.state.SelectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
