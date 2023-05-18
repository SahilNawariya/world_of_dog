import {Alert, Button, Carousel, Col, Container, Row} from 'react-bootstrap';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sliders } from '../Data/Data';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
export default function Details(){
  const[user,setUser] = useState(localStorage.getItem('user'))
    const navigation=useNavigate()
    const loc=useLocation()
    const[d,setd]=useState(loc.state)
    async function AddToCart(){
      if(!user){
        alert('Please Login');
        navigation('/Login')
      }else{
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
        }
        async function ByyNow(){
          if(!user){
            alert('Please Login');
            navigation('/Login')
          }else{
          let params = {
          name:d.name,
          rate:d.rate_sell,
          mrprate:d.mrprate,
          image:d.Image
          }
              let res = await axios.post('MyOrder',params)
              console.log(res.data);
              const {message,success} =res.data
              if(success){
                  localStorage.setItem("user",true)
                  navigation("/OrderDetail")
                  window.location.reload();
              }
              else{
                  alert(message)
              }
            }
            }
    return(
        <Container fluid className='Detailcon1'>
          <Container>
          <Header/>
          <Row>
            <Col lg={10} className='text-align-center justify-content-center' style={{margin:'auto'}}>
              <div className=' DelailSlider '>
               
              <Carousel >
              {sliders.map(function(d){
                  console.log(d);
                  return(
              <Carousel.Item>
                    <img  style={{width:'100%',minHeight:250,maxHeight:600,borderRadius:30}}
                      className="d-block w-100"
                      src={d}
                      alt="First slide"
                    />
                    <Carousel.Caption>
                      {/* <h3>First slide label</h3> */}
                      {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                    </Carousel.Caption>
              </Carousel.Item>
      
                )
                }
              )
            }
          </Carousel>
          </div>
          </Col>
          </Row>
            <Row className='DetailItem m-1'>
              <Col lg={6} >
                <img src={d.Image}/>
              </Col> 
            
            <Col lg={6} className='DetailText'>
                  <h1>{d.name}</h1>
                  <h2>{d.description}</h2>
                  <Col lg={12} className='d-flex align-items-center '>
                  <h2>Rs:{d.rate_sell}/-</h2>
                  <h4 className='delprice'><del>Rs:<sub>{d.mrprate}/-</sub></del></h4>
                  </Col>
                  <h4 className='discountprice'>-({100-((d.rate_sell/d.mrprate)*100)})%</h4>
                  <Button onClick={AddToCart}>Add To Cart</Button> 
                  <Button onClick={ByyNow}>Byy Now</Button>  
            </Col>
            </Row>
            <Footer/>
            </Container>
        </Container>
    )
}