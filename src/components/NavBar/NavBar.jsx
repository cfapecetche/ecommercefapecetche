import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'



const NavBar = () =>{
  const navigate = useNavigate()
      return (
        <Navbar expand="lg" className="bg-secondary-subtle">
          <Container >
            <Navbar.Brand ><h1 onClick={() => navigate('/')}>Vitec Automatización</h1></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            
             <Nav variant="pills" style={{backgroundColor:'#adb5bd'}}>
          
                <Nav.Link href="#first" onClick={() => navigate('/category/plc')}>PLC</Nav.Link>
                <Nav.Link href="#link1" onClick={() => navigate('/category/hmi')}>MHI</Nav.Link>
                <Nav.Link href="#link2" onClick={() => navigate('/category/variadores')}>Variadores</Nav.Link>
                <Nav.Link href="#link3" onClick={() => navigate('/category/conectividad')}>Conectividad</Nav.Link>
                <Nav.Link href="#link4" onClick={() => navigate('/category/educativo')}>Educativo</Nav.Link>
                               
                
              </Nav>
              <Button variant='outline-secondary' >
              
              <CartWidget />
              </Button>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
    export default NavBar;