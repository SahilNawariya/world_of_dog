import {Container, Dropdown} from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import Home from '../Screens/Home';
import '../style/style.css'
import Register from '../Screens/Register';
export default function Header(){

 /*  function Home(){
    navigation('Home')
  } */
 const navigation=useNavigate()
    return(
        <div className='main cur'>
            <img src={require('../Images/dog.png')} onClick={()=>{navigation('/Home')}}/>
            <h4 onClick={()=>{navigation('/Home')}}>Home</h4>
            <h4 onClick={()=>{navigation('/Register')}}>Register</h4>
            <h4 onClick={()=>{navigation('/Login')}}>Login</h4>
            <h4 onClick={()=>{navigation('/About')}}>About</h4>
            <Dropdown>
      <Dropdown.Toggle variant="danger" id="dropdown-basic" className='Dropdown'>
        Menu
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/All Breeds-1" onClick={()=>{navigation('/Home')}}>All Breeds</Dropdown.Item>
        {/* <Dropdown.Item href="#/Weight Vise-2" onClick={()=>{navigation('/Login')}}>Weight Vise</Dropdown.Item>
        <Dropdown.Item href="#/Size vice-3" onClick={()=>{navigation('/About')}}>Size vice</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
        </div>
    )
}

