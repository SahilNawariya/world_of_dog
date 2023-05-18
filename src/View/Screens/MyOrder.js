import axios from "axios";
import { useState,useEffect } from "react";
import { Col,Container, Row } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
export default function MyOrder(){
    const[data,setData] = useState('')
    useEffect(()=>{
        let showData=async()=>{
        let res =await axios.get("showtocart")
        setData(res.data)
        }
        showData();
    },[])
    return(
        <Container fluid className="MyOrderCon1">
            <Container>
            <Header/>
            <div className="MyOrderMain">
                <div className="MyOrder">
                <h1 className="m-3">My Orders:-</h1>
                </div>
         {data!==''?data.map(d=>{
        return(
            <div className="MyOrderBox">
            <Row>
                <Col className="text-align-center">
                <img src={d.image}/>
                <h3>{d.name}</h3>
                </Col>
            </Row>
            <Row className="m-2">
                <h5>Rate:- {d.rate}</h5>
                <h5>Mrp Rate:- {d.mrprate}</h5>
            </Row>
            </div>
            
            
        )
       })
        :null
    }
    </div>
    <Footer/>
    </Container>
        </Container>
    )
}