import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/menuComponent';
import './App.css';

class App extends Component {
  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href='/'>RISTORANTE CON FUSION</NavbarBrand>
          </div>
        </Navbar>
        <Menu />
      </div>
    );
  }
}

export default App;
