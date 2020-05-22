import React, { Component } from 'react'
import Home from './HomeComponent'
import Menu from './menuComponent'
import Contact from './ContactComponent'
import DishDetail from "./DishdetailComponent"
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { DISHES } from "../shared/dishes"
import {COMMENTS} from '../shared/Comments'
import {LEADERS} from '../shared/Leaders'
import {PROMOTIONS} from '../shared/Promotions'
import {Switch , Route , Redirect } from 'react-router-dom'

class Main extends Component {

  constructor(props) {
    super(props)

    this.state = {
        // so basically we stored all the data of DISHES in dishes a new object
        dishes : DISHES,
        SelectedDish : null,
        comments : COMMENTS,
        promotions : PROMOTIONS,
        leaders : LEADERS
    }
  }

  
  render(){

    const HomePage = () => {
      return (
        <Home dish = {this.state.dishes.filter((dish) => dish.featured==true)[0]}
        promotion = {this.state.promotions.filter((promo) => promo.featured==true)[0]}
        leader = {this.state.leaders.filter((leader) => leader.featured==true)[0]}  />
      )
    }

    const DishWithId = ({match}) => {
      return(
        // parseInt will convert the string coming from match.params.dishId into a base 10 integer as mentioned in
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id == parseInt(match.params.dishId,10))[0]} 
        comments={this.state.comments.filter((comment) => comment.id == parseInt(match.params.dishId,10))}
          />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component = {HomePage} />
          <Route exact path="/menu" component={() => <Menu dish={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component = {Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
