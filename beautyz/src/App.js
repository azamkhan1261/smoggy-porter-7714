
import './App.css';
// import Adminnavbar from './Components/Admin/Adminnavbar';
// import Navbar from './Components/Users/Nav';
// import Cartsidebar from './Components/Users/Cartsidebar';
// import Carousel from './Components/Users/Home/Carousel';
// import AllRoutes from './Components/Users/Navbar/AllRoutes';
import ScrollButton from './Components/Users/Home/ScrollButton';
import HomePage from './Components/Users/Home/HomePage';
import MainNavbar from './Components/Users/Navbar/MainNavbar';
import Footer from './Components/Users/Footer/Footer';
import Lakme from './Components/Users/ProductPages/Lakme';
import {Routes,Route} from 'react-router-dom'
import SingleProductPage from './Components/Users/SingleProductPage/SingleProductPage';

function App() {
  return (
    <div className="App">
      {/* <Adminnavbar  /> */}
      {/* <Cartsidebar/> */}
      {/* <Navbar/> */}
      {/* <Carousel/> */}
     
      <MainNavbar/>
     <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/lakme" element={<Lakme/>}></Route>
      <Route path='/lakme/:id' element={<SingleProductPage/>}></Route>
     </Routes>
      <Footer/>
      <ScrollButton/>
        {/* <AllRoutes/> */}
     
  
    </div>
  );
}

export default App;
