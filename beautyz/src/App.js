
import './App.css';
// import Adminnavbar from './Components/Admin/Adminnavbar';
// import Navbar from './Components/Users/Nav';
// import Cartsidebar from './Components/Users/Cartsidebar';
// import Carousel from './Components/Users/Home/Carousel';
import ScrollButton from './Components/Users/Home/ScrollButton';
import HomePage from './Components/Users/Home/HomePage';
import MainNavbar from './Components/Users/Navbar/MainNavbar';
import Footer from './Components/Users/Footer/Footer';
import ProductPage from "./Components/Users/ProductPage"
// import AllRoutes from './Components/Users/Navbar/AllRoutes';
import {Routes,Route} from 'react-router-dom'
import SingleProductPage from './Components/Users/SingleProductPage';
function App() {
  return (
    <div className="App">
      {/* <Adminnavbar  /> */}
      {/* <Cartsidebar/> */}
      {/* <Navbar/> */}
      {/* <Carousel/> */}
     
      <MainNavbar/>
     <Routes>

      <Route path="/" element={<HomePage/>}>  </Route>
      <Route path="/lakme" element={<ProductPage/>}></Route>
      <Route path='/lakme/:id' element={<SingleProductPage/>}></Route>
     </Routes>
      <Footer/>
      <ScrollButton/>
        {/* <AllRoutes/> */}
     
  
    </div>
  );
}

export default App;
