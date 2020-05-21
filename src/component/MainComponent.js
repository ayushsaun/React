import React, { Component } from 'react'
import Home from './HomeComponent'
import Menu from './menuComponent'
import DishDetail from "./DishdetailComponent"
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from "../shared/dishes"
import {Switch , Route , Redirect } from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
        // so basically we stored all the data of DISHES in dishes a new object
        dishes : DISHES,
        SelectedDish : null
    }
  }

  
  render(){

    const HomePage = () => {
      return (
        <Home />
      )
    }
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component = {HomePage} />
          <Route exact path="/menu" component={() => <Menu dish={this.state.dishes} />} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
