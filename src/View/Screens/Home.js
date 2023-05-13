import { productdata,sliders } from "../Data/Data"
import {Carousel,Container,Row,Col} from 'react-bootstrap';
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { useNavigate } from "react-router-dom";
export default function Home(){
  
  const navigate=useNavigate()

  function productinfo(d){
    navigate('/Details',{state:d})
  }
    return(
        <Container fluid className="Container1 " >
          <Container>
          <Header/>
          
        <Row className="Sliderbox">
        <Col lg={7} className="con1slider">
          <Carousel>
              {sliders.map(function(d){
                  console.log(d);
                  return(
              <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={d}
                      alt="First slide"
                      style={{width:'100%',minHeight:250,maxHeight:600,borderRadius:30}}
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
          </Col>
      </Row>
     
      <Row className="con1Row" >
        
           {
                productdata.map(function(d){
                    console.log(d);
                    return(
                      <Col lg={4} md={6} className="con1col cur" style={{justifyContent:'center',textAlign:'center'}} onClick={()=>{productinfo(d)}} >
                             <img src={d.Image} className="" style={{margin:'auto'}}/> 
                            <h4>{d.name}</h4>
                            <h6>{d.description}</h6>
                        
                        </Col>
                    )
                })
           }
        
      </Row>
      <Footer/>
      </Container>
        </Container>
    )
}