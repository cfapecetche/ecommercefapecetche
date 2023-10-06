import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"



const NavBar = () =>{
      return (
        <Navbar expand="lg" className="bg-secondary-subtle">
          <Container >
            <Navbar.Brand href="#">Altus Automatización</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href="#action1">PLC</Nav.Link>
                <Nav.Link href="#action2">HMI</Nav.Link>
                <Nav.Link href="#action3">Variadores</Nav.Link>
                <Nav.Link href="#action4">Conectividad</Nav.Link>
                <Nav.Link href="#action5">Educativo</Nav.Link>
                <NavDropdown title="Perifericos" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Inductivos</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Capacitivos
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Opticos
                  </NavDropdown.Item>
                </NavDropdown>
            
                
              </Nav>
              <button >
              
              <CartWidget />
              </button>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default NavBar;