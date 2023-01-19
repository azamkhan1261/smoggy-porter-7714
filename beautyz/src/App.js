
import './App.css';
import Adminnavbar from './Components/Admin/Adminnavbar';
import Navbar from './Components/Users/Navbar';
import Landing from './Components/Users/Landing';
function App() {
  return (
    <div className="App">
      {/* <Adminnavbar  /> */}
      <Navbar/>
      <Landing/>
    </div>
  );
}

export default App;
