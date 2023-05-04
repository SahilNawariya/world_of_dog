import { Container } from "react-bootstrap";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
export default function About(){
    return(
       <Container className="AboutCon1">
        <Header/>
        <div className="AboutDetail">
            <h1>About</h1>
            <h4>A pet shop or pet store is a retail business which sells animals and pet care resources to the public. A variety of animal supplies and pet accessories are also sold in pet shops. The products sold include: food, treats, toys, collars, leashes, cat litter, cages and aquariums.<br/>
            Pet shops may also offer both hygienic care (such as pet cleaning) and aesthetic services (such as cat and dog grooming).[1] Some pet stores also provide tips on training and behaviour, as well as advice on pet nutrition. Some pet stores provide engraving services for pet tags, which have the owner's contact information in case the pet gets lost.<br/>
            any pet stores also offer retail products online. Citing convenience as the key motivational factor for purchasing from online pet stores, the number of United States households that shopped online for pet care products in 2018 was 13 million.[2] Other stated advantages for online shopping include competitive pricing and good value due to free shipping offers. As of 2017, North America has the largest online pet care market of any other region. the online sales of pet care products grew by about 3.4 billion dollars, while traditional brick-and-mortar stores reported only about 317 million dollars in sales growth.[2]
            </h4>
        </div>
        <Footer/>
       </Container>
    )
}