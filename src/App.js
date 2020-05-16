import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/menuComponent';
import './App.css';
import { DISHES } from "./shared/dishes"

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      // so basically we stored all the data of DISHES in dishes a new object
      dishes : DISHES
    }
  }
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>RISTORANTE CON FUSION</NavbarBrand>
          </div>
        </Navbar>
        {/* here we made a new array of object dish for this.state which stored all values we got
         from dishes and we are going to use this dish into our menuComponent for all works */}
        <Menu dish = {this.state.dishes}/>
      </div>
    );
  }
}

export default App;
