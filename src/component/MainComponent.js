import React, { Component } from 'react'
import Home from './HomeComponent'
import Menu from './menuComponent'
import Contact from './ContactComponent'
import DishDetail from "./DishdetailComponent"
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch , Route , Redirect , withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import About from './Aboutus'

// here we are getting state values from the state function we made in reducer.js which is accessible from configureStore
// and we added that in app.js so its accessible everywhere now
const mapStateToProps = state => {
  return {
    dishes : state.dishes,
    comments : state.comments,
    leaders : state.leaders,
    promotions : state.promotions
  }   
}

class Main extends Component {

  constructor(props) {
    super(props)

  }

  render(){

    // all the Redux state becomes available as props, hence the name mapStateToProps.
    // So, whatever we were using as this state here will have to be changed to this props,
    // because the props will come in as properties for the main component,
    // because we defined it this way, and then connected the main component to my Redux Store.
    const HomePage = () => {
      return (
        <Home dish = {this.props.dishes.filter((dish) => dish.featured==true)[0]}
        promotion = {this.props.promotions.filter((promo) => promo.featured==true)[0]}
        leader = {this.props.leaders.filter((leader) => leader.featured==true)[0]}  />
      )
    }

    const DishWithId = ({match}) => {
      return(
        // parseInt will convert the string coming from match.params.dishId into a base 10 integer as mentioned in
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id == parseInt(match.params.dishId,10))[0]} 
        comments={this.props.comments.filter((comment) => comment.id == parseInt(match.params.dishId,10))}
          />
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component = {HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
          <Route exact path="/menu" component={() => <Menu dish={this.props.dishes} />} />
          {/* here we passed dishId to menu in different fashion and it can be used in menuComponent as we observed */}
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component = {Contact} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// for exporting purpose we export our content like this
// export default (connect(mapStateToProps)(Main));
// in case we are working with reactrouter we need to enclose this with withRouter as given below
export default withRouter(connect(mapStateToProps)(Main));
