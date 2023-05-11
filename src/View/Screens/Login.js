import { Container,Button } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login(){
    
    const nav=useNavigate();
    const [Name,setName]=useState('');
    const [Email,setEmail]=useState('');
    const [Password,setPassword]=useState('');

   async function Login(){
        console.log(Name);
        console.log(Email);
        console.log(Password);
        alert("Login")

              
let params = {
    email:Email,
    password:Password
}
        let res = await axios.post('login',params)
        console.log(res.data);
        const {message,success} =res.data
        if(success){
            alert(message)
            localStorage.setItem("user",true)
            nav("/")
            window.location.reload();
        }
        else{
            alert(message)
        }

        setEmail('')
       
        setPassword('')
        setName('')
            }
    return(
       <Container className="LoginCon1">
        <Header/>
        <div className="LoginItem cur">
            <h1>Login User</h1>
            <div>
             <input name="name" placeholder="Enter email" value={Email} onChange={(d)=>setEmail(d.target.value)} />
            <input name="name" placeholder="Password" value={Password} onChange={(d)=>setPassword(d.target.value)} />
            <Button onClick={Login}>Login</Button>
            </div>
        </div>
        <Footer/>
       </Container>
    )
}