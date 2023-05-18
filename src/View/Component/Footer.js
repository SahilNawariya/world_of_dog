import '../style/style.css'
import { useNavigate } from 'react-router-dom'
export default function Footer(){
    const navigation=useNavigate()
    return(
        <div className='Footmain cur' onClick={()=>navigation('/MyOrder')}>
            <img src={require('../Images/ic_cart.png')} style={{maxWidth:50,maxHeight:50,marginTop:-5}}/>
           <h4>My Cart</h4> 
        </div>
    )
}