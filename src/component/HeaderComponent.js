import React , { Component } from 'react'
import { Navbar, NavbarBrand , Nav, NavbarToggler , NavItem , Collapse , Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom'

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isNavOpen : false
        }
        this.toggleNav = this.toggleNav.bind(this)
    }
    
    // this is another method where we can create out function (this.toggleNav in this case) besides this 
    // we can use arrow function to do work for us

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return(
            <React.Fragment>
                <Navbar dark expand='md'>
                <div className="container">

                    {/* This toggleNav work is to pass true or false value to isOpen basically as long as isOpen is
                    false content will remain hidden and when we click on toggleNav it will pass true and all 
                    content will be shown and NavbarToggler is for adding button */}
                    
                    <NavbarToggler onClick={this.toggleNav} />
                    <NavbarBrand className='mr-auto' href='/'>
                        <img src='assets/images/logo.png' height='30' width='41' alt="Ristorante Con Fusion"></img>
                    </NavbarBrand>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className='nav-link' to="/home">
                                    <span className='fa fa-home fa-lg'></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/aboutus">
                                    <span className='fa fa-info fa-lg'></span> About Us
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/menu">
                                    <span className='fa fa-list fa-lg'></span> Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to="/contactus">
                                    <span className='fa fa-address fa-lg'></span> Contact Us
                                </NavLink>
                            </NavItem>
                        </Nav>  
                    </Collapse>
                </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className='col-12 col-sm-6'>
                                <h1>RISTORANTE CON FUSION</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    }
}

export default Header