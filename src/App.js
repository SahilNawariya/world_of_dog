import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './View/Screens/Home';
import Header from './View/Component/Header';
import Footer from './View/Component/Footer';
import Details from './View/Screens/Details';
import Register from './View/Screens/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import './View/style/style.css'
import Login from './View/Screens/Login';
import About from './View/Screens/About';
import OrderDetail from './View/Screens/OrderDetail';
import MyOrder from './View/Screens/MyOrder';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Header' element={<Header/>}/>
        <Route path='/Footer' element={<Footer/>}/>
        <Route path='/Details' element={<Details/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/OrderDetail' element={<OrderDetail/>}/>
        <Route path='/MyOrder' element={<MyOrder/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
