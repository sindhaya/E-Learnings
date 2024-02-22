import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Error from './Components/Error';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';


function App() {
  return (
    <div>
    <Navbar/>
     <Routes>
        <Route exact path='/' Component={Home}/>
        <Route exact path='/about' Component={About}/>
        <Route exact path='/service' Component={Service}/>
        <Route exact path='/contact' Component={Contact}/>
        <Route exact path='/error' Component={Error}/>
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
