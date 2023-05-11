import { Button, Container, Form } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Register(){
    const nav=useNavigate();
    const [Name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [FName,setFName]=useState('');
    const [MName,setMName]=useState('');
    const [Password,setPassword]=useState('');

    async function register(){
       
let params = {
    username:Name,
    email:email,
    password:Password
}
        let res = await axios.post('register',params)
        console.log(res.data);
        const {message,success} =res.data
        if(success){
            alert(message)
            nav("/login")
        }
        else{
            alert(message)
        }

        setEmail('')
        setFName('')
        setMName('')
        setPassword('')
        setName('')
}
    return(
       <Container className="RegisterCon1">
        <Header/>
        <div className="RegisterForm cur">
            <h1>Reqister Form</h1>
            <input name="name" placeholder="Name"  value={Name} onChange={(d)=>setName(d.target.value)} />
            <input name="name" placeholder="Enter Email" value={email} onChange={(d)=>setEmail(d.target.value)} />
            <input name="name" placeholder="Father Name" value={FName} onChange={(d)=>setFName(d.target.value)} />
            <input name="name" placeholder="Mother Name"  value={MName} onChange={(d)=>setMName(d.target.value)} />
            <input name="name" placeholder="Password" type="password" value={Password} onChange={(d)=>setPassword(d.target.value)}/>
            <Button onClick={register}>Submit</Button>
        </div>
        <Footer/>
       </Container>
    )
}