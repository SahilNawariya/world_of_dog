import {Button, Carousel, Col, Container, Row} from 'react-bootstrap';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sliders } from '../Data/Data';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Details(){
    const navigation=useNavigate()
    const loc=useLocation()
    const[d,setd]=useState(loc.state)
    async function AddToCart(){
    let params = {
     name:d.name,
     rate:d.rate_sell,
     mrprate:d.mrprate,
     image:d.Image
  }
          let res = await axios.post('addtocart',params)
          console.log(res.data);
          const {message,success} =res.data
          if(success){
              alert(message)
              localStorage.setItem("user",true)
              navigation("/")
              window.location.reload();
          }
          else{
              alert(message)
          }
        }
    return(
        <Container className='Detailcon1'>
          <Header/>
              <Carousel className='DelailSlider justify-content-center'>
              {sliders.map(function(d){
                  console.log(d);
                  return(
              <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={d}
                      alt="First slide"
                      style={{width:'70%',height:600,borderRadius:30}}
                    />
                    <Carousel.Caption>
                      <h3>First slide label</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
              </Carousel.Item>
      
                )
                }
              )
            }
          </Carousel>
            <Row className='DetailItem'>
              <Col lg={6}>
                <img src={d.Image}/>
              </Col> 
            
            <Col lg={6} className='DetailText'>
                  <h1>{d.name}</h1>
                  <h2>{d.description}</h2>
                  <Col className='d-flex align-items-center '>
                  <h2>Rs:{d.rate_sell}/-</h2>
                  <h4 className='delprice'><del>Rs:<sub>{d.mrprate}/-</sub></del></h4>
                  <h4 className='discountprice mx-5'>-({100-((d.rate_sell/d.mrprate)*100)})%</h4>
                   
                  </Col>
                  <Button  onClick={AddToCart}>Add To Cart</Button>   
            </Col>
            </Row>
            <Footer/>
        </Container>
    )
}