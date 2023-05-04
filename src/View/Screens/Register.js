import { Button, Container, Form } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useState } from "react";
export default function Register(){
    const [Name,setName]=useState('');
    const [LName,setLName]=useState('');
    const [FName,setFName]=useState('');
    const [MName,setMName]=useState('');
    const [Password,setPassword]=useState('');

    function register(){
        console.log(Name);
        console.log(LName);
        console.log(FName);
        console.log(MName);
        console.log(Password);
        alert("User Register")
}
    return(
       <Container className="RegisterCon1">
        <Header/>
        <div className="RegisterForm cur">
            <h1>Reqister Form</h1>
            <input name="name" placeholder="Name"  value={Name} onChange={(d)=>setName(d.target.value)} />
            <input name="name" placeholder="Last Name" value={LName} onChange={(d)=>setLName(d.target.value)} />
            <input name="name" placeholder="Father Name" value={FName} onChange={(d)=>setFName(d.target.value)} />
            <input name="name" placeholder="Mother Name"  value={MName} onChange={(d)=>setMName(d.target.value)} />
            <input name="name" placeholder="Password"  value={Password} onChange={(d)=>setPassword(d.target.value)}/>
            <Button onClick={register}>Submit</Button>
        </div>
        <Footer/>
       </Container>
    )
}