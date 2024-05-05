import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Carousel from './Components/Carousel/Carousel';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <Navbar/>
        <Carousel/>
    </div>
  );
}

export default App;
