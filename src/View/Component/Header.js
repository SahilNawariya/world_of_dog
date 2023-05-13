import {Container, Form,Navbar, Nav,Button, NavDropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Home from '../Screens/Home';
import '../style/style.css'
import Register from '../Screens/Register';
import { useState } from 'react';
export default function Header(){

  const[user,setUser] = useState(localStorage.getItem('user'))
 /*  function Home(){
    navigation('Home')
  } */
 const navigation=useNavigate()


 function logout(){

  localStorage.clear();
  navigation("/")
  window.location.reload()
  alert('Log Out');
 }
    return(
      <Navbar className='main cur' expand="lg">
      <Container fluid >
        <Navbar.Brand className='text' onClick={()=>{navigation('/Home')}}><img src={require('../Images/dog.png')} style={{maxWidth:50,maxHeight:50}}/>World Of Dog</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 text"
            navbarScroll
          >
            <Nav.Link onClick={()=>{navigation('/Home')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigation('/About')}}>About</Nav.Link>
            {          !user?<>
            <Nav.Link onClick={()=>{navigation('/Register')}}>
              Register
            </Nav.Link>
            <Nav.Link onClick={()=>{navigation('/Login')}}>
            Login
            </Nav.Link>
            </>:
            <Nav.Link onClick={logout}>
            Logout
            </Nav.Link>
    }
            <NavDropdown className='text' title="Menu" id="navbarScrollingDropdown">
              <NavDropdown.Item  onClick={()=>{navigation('/Home')}}>My Cart</NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
       
          <Form className="d-flex">
            <Form.Control style={{backgroundColor:'rgb(200, 238, 200)'}}
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{backgroundColor:'rgb(200, 238, 200)'}} variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> 
    )
}

{/* <Container fluid className='main cur'>
            <img src={require('../Images/dog.png')} onClick={()=>{navigation('/Home')}}/>
            <h4 onClick={()=>{navigation('/Home')}}>Home</h4>
            <h4 onClick={()=>{navigation('/About')}}>About</h4>
            {          !user?<>
            <h4 onClick={()=>{navigation('/Register')}}>Register</h4>
            <h4 onClick={()=>{navigation('/Login')}}>Login</h4>
            </>:<h4 onClick={logout}>Logout</h4>
   
  }
            <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic" className='Dropdown '>
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/All Breeds-1" onClick={()=>{navigation('/Home')}}>All Breeds</Dropdown.Item>
      
      </Dropdown.Menu>
    </Dropdown>
        </Container> */}
