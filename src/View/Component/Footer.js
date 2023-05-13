import '../style/style.css'
import { useNavigate } from 'react-router-dom'
export default function Footer(){
    const navigation=useNavigate()
    return(
        <div className='Footmain cur' onClick={()=>{navigation('/Home')}}>
           <h4>My Cart</h4><img src={require('../Images/ic_cart.png')} /> 
        </div>
    )
}