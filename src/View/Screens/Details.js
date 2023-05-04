import {Button, Carousel, Container} from 'react-bootstrap';
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { sliders } from '../Data/Data';
import Header from '../Component/Header';
import Footer from '../Component/Footer';
import OrderDetail from './OrderDetail';
import { useNavigate } from 'react-router-dom';
export default function Details(){
    const navigation=useNavigate()
    const loc=useLocation()
    const[d,setd]=useState(loc.state)
    return(
        <Container className='Detailcon1'>
          <Header/>
              <Carousel className='DelailSlider'>
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
            <div className='DetailItem cur'>
                <img src={d.Image}/>
                <div className='DetailText'>
                  <h1>{d.name}</h1>
                  <h2>{d.description}</h2>
                  <div className='d-flex  align-items-center '>
                  <h2>Rs:{d.rate_sell}/-</h2>
                  <h4 className='delprice'><del>Rs:<sub>{d.mrprate}/-</sub></del></h4>
                  <h4 className='discountprice mx-5'>-({100-((d.rate_sell/d.mrprate)*100)})%</h4>
                
                </div>
                    <Button onClick={()=>{navigation('/OrderDetail')}}>Buy Now</Button>
  
                </div>
            </div>
            <Footer/>
        </Container>
    )
}