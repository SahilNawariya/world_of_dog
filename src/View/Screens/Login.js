import { Container,Button } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useState } from "react";
export default function Login(){
    const [Name,setName]=useState('');
    const [LName,setLName]=useState('');
    const [Password,setPassword]=useState('');

    function Login(){
        console.log(Name);
        console.log(LName);
        console.log(Password);
        alert("Login")
            }
    return(
       <Container className="LoginCon1">
        <Header/>
        <div className="LoginItem cur">
            <h1>Login User</h1>
            <div>
            <input name="name" placeholder="Name" value={Name} onChange={(d)=>setName(d.target.value)} />
            <input name="name" placeholder="Last Name" value={LName} onChange={(d)=>setLName(d.target.value)} />
            <input name="name" placeholder="Password" value={Password} onChange={(d)=>setPassword(d.target.value)} />
            <Button onClick={Login}>Submit</Button>
            </div>
        </div>
        <Footer/>
       </Container>
    )
}