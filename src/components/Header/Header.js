import React from 'react';
import { withRouter } from 'react-router-dom'; 
import { Navbar, NavbarBrand, NavItem, NavLink, Nav, Container } from 'reactstrap';

const Header = ({ children }) => {
    return(
    <React.Fragment>

        <Navbar color="light">
            <NavbarBrand>Contoso-Pets</NavbarBrand>
            <Nav className="mr-auto">
                <NavItem>
                    <NavLink href="/">Home</NavLink>
                </NavItem>  
                <NavItem>
                    <NavLink href="/order">Orders</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
        <Container>
            {children}
        </Container>
     </React.Fragment>
    );
}

export default withRouter(Header);