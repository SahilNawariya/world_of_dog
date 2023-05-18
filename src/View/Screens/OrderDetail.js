import { Button, Container, Form } from "react-bootstrap";
import axios from "axios";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useEffect, useState } from "react";
export default function OrderDetail(){

    const [Name,setName]=useState('');
    const [Address,setAddress]=useState('');
    const [Pincood,setPincood]=useState('');
    const [Area,setArea]=useState('');
    const [Landmark,setLandmark]=useState('');
    const[user,setUser] = useState(localStorage.getItem('user'))

async function OrderBook(){
    if(user){
    let params={
        name:Name,
        address:Address,
        pincood:Pincood,
        area:Area,
        landmark:Landmark
    }
    let res = await axios.post('Order',params).catch(err=>console.log("error"))
    const {message,success} =res.data;
    if(success){
        alert(message)
    }
    else{
        alert(message)
    }
    setName('')
    setAddress('')
    setPincood('')
    setArea('')
    setLandmark('')
    }else(
        alert('Please Login')
    )
}
    return(
       <Container fluid className="OrderCon1">
        <Container>
        <Header/>
        <div className="OrderDetail cur">
            <h1>Order Book Screen</h1>
            <input name="name" placeholder="Name"  value={Name} onChange={(d)=>setName(d.target.value)} />
            <input name="name" placeholder="Address" value={Address} onChange={(d)=>setAddress(d.target.value)} />
            <input name="name" placeholder="Pincood" value={Pincood} onChange={(d)=>setPincood(d.target.value)} />
            <input name="name" placeholder="Area Name"  value={Area} onChange={(d)=>setArea(d.target.value)} />
            <input name="name" placeholder="Landmark"  value={Landmark} onChange={(d)=>setLandmark(d.target.value)}/> 
            <Button onClick={OrderBook}>Order Now</Button>
        </div>
        <Footer/>
        </Container>
       </Container>
    )
}