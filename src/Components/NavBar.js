import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img src={''} alt="logo"></img>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">projects</Nav.Link>
          </Nav>
          <span classnameName='logo-icon'>
            <a href="#"><img src={'https://th.bing.com/th/id/R.c3fcc390427d68b89647e834adf7fc87?rik=KjgxDpSgaFnXKA&pid=ImgRaw&r=0'} alt='linkedin logo'width="30px" height="30px"></img></a>
            <a href="#"><img src={'https://tse4.mm.bing.net/th/id/OIP.PJEpwUehyFj2zQy_T0TYEgHaHY?rs=1&pid=ImgDetMain&o=7&rm=3'} alt='facebook logo'width="30px" height="30px"></img></a>
            <a href="#"><img src={'https://pluspng.com/img-png/instagram-logo-eps-png-instagram-logo-1784.png'} alt='instagram logo'width="30px" height="30px"></img></a>
          </span>

          <button onClick={()=>console.log('pressed')
          }>
            <span>Let's Connect</span>

          </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;