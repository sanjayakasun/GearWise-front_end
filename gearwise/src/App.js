import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar/Topbar';
import Navbar from './Components/Navbar/Navbar';
import Test from './Components/Carousel/Test';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Topbar/>
        <Navbar/>
        <Test/>
    </div>
  );
}

export default App;
