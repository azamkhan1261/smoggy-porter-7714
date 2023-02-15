
import './App.css';
// import Adminnavbar from './Components/Admin/Adminnavbar';
// import Navbar from './Components/Users/Nav';
// import Cartsidebar from './Components/Users/Cartsidebar';
// import Carousel from './Components/Users/Home/Carousel';
import ScrollButton from './Components/Users/Home/ScrollButton';
import HomePage from './Components/Users/Home/HomePage';
import MainNavbar from './Components/Users/Navbar/MainNavbar';
// import ProductPage from "./Components/Users/ProductPage"
// import AllRoutes from './Components/Users/AllRoutes';
function App() {
  return (
    <div className="App">
      {/* <Adminnavbar  /> */}
      {/* <Cartsidebar/> */}
      {/* <Navbar/> */}
      {/* <Carousel/> */}
     
      <MainNavbar/>
      <HomePage/>
      <ScrollButton/>
       {/* <AllRoutes/> */}
      {/* <ProductPage/> */}
  
    </div>
  );
}

export default App;
