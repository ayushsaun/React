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
import { addComment , fetchDishes } from '../redux/ActionCreators';

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

// this is for dispatching changes we made to comments
// so when we click to button of form it will receive parameters in dispatch 
const mapDispatchToProps = dispatch => ({
  
  // addComment is a property which receives these 4 values and then dispatch the function
  // dispatch recieves addComment as action with all the 4 values

  addComment: (dishId, rating, author, comments) => dispatch(addComment(dishId, rating, author, comments)),
  fetchDishes : () => {dispatch(fetchDishes())}

});

class Main extends Component {

  constructor(props) {
    super(props)
  }

  // Called immediately after a component is mounted. Setting state here will trigger re-rendering.
  componentDidMount() {
    this.props.fetchDishes();
  }

  render(){

    // all the Redux state becomes available as props, hence the name mapStateToProps.
    // So, whatever we were using as this state here will have to be changed to this props,
    // because the props will come in as properties for the main component,
    // because we defined it this way, and then connected the main component to my Redux Store.
    const HomePage = () => {
      return (
        <Home dish = {this.props.dishes.dishes.filter((dish) => dish.featured==true)[0]}
        dishesLoading = {this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        promotion = {this.props.promotions.filter((promo) => promo.featured==true)[0]}
        leader = {this.props.leaders.filter((leader) => leader.featured==true)[0]}  />
      )
    }

    const DishWithId = ({match}) => {
      return(
        // parseInt will convert the string coming from match.params.dishId into a base 10 integer as mentioned in
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
        dishesLoading = {this.props.dishes.isLoading}
        dishesErrMess = {this.props.dishes.errMess}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        addComment={this.props.addComment}
      />
        // the addComment we made in MainComponent.js will be passed to dishDetail as parameter
        // so we can use it to dispatch the action to store
      )
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component = {HomePage} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} /> } />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          {/* earlier in menu we made whole card into a link which on clicking will show the dish detail and comments on it
          so that link was connected using the way given below where we received the link and then passed it to DishWithId */}
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
export default withRouter(connect(mapStateToProps , mapDispatchToProps)(Main));
