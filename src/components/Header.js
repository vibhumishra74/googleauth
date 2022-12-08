import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
        <Link to="/home">
            <img src='https://e7.pngegg.com/pngimages/1000/547/png-clipart-computer-icons-letter-d-text-trademark.png' style={{height:'25px',width:'40px'}} />
        </Link>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Learn</Nav.Link>
            <Nav.Link>
                <Link to="/Blog">Blog</Link>
                </Nav.Link>
            <Nav.Link href="#UI_KIT">UI KIT</Nav.Link>
            <Nav.Link eventKey={2} href="#LAINNYA">
            LAIN NYA
            </Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#UI_KIT">
                <img src='https://cdn-icons-png.flaticon.com/512/87/87390.png' alt='instagram' style={{width:'20px',height:'20px'}} /> </Nav.Link>
            <Nav.Link href="#UI_KIT"><img src='https://cdn.icon-icons.com/icons2/2066/PNG/512/twitter_icon_125119.png' alt='instagram' style={{width:'20px',height:'20px'}} /> </Nav.Link>
            <Nav.Link href="#UI_KIT"><img src='https://cdn-icons-png.flaticon.com/512/5968/5968885.png' alt='instagram' style={{width:'20px',height:'20px'}} /> </Nav.Link>
            <Nav.Link href="#UI_KIT"><img src='https://cdn-icons-png.flaticon.com/512/87/87385.png' alt='instagram' style={{width:'20px',height:'20px'}} /> </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;