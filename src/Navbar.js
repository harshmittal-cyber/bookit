import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,

} from "reactstrap";
import "./App.css";


class NavbarMain extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.token = {
      token: null
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount() {
    const token = localStorage.getItem('token');
    console.log(token);
    this.setState({ token: token })
    console.log(this.token.token)
  }


  render() {
    return (
      <div>
        <Navbar

          dark
          expand="md"
          fixed={`top`}
          className="navDark"
        >
          <Container>

            <NavbarBrand href="/"><h4 className="NavBrand">BOOKIT</h4></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/react/card">Locations</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/react/admin">
                    Admin Login
                  </NavLink>

                </NavItem>



              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavbarMain;