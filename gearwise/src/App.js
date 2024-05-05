import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';
import Aboutus from './Components/Aboutus/Aboutus';
import Service from './Components/Service/Service';
import Packages from './Components/Packages/Packages';
import Location from './Components/Location/Location';
import Reviews from './Components/Reviews/Reviews';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <Navbar/>
        <Aboutus/>
        <Service/>
        <Packages/>
        <Location/>
        <Reviews/>
    </div>
  );
}

export default App;
