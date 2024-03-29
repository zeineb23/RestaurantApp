import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Menus from './Components/Menus';
import Acceuil from './Components/Accueil';
import Chefs from './Components/Chefs';
import Feedbacks from './Components/Feedbacks';
import About from './Components/About';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import RestaurantsNearby from './Components/RestaurantsNearby';
import Contact from './Components/Contacts';
import Restaurants from './Components/Restaurants';
import MenuResto from './Components/MenuResto';

function App() {
  return (
    <div className='All'>  
      <div className=''>
        <NavBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Acceuil />}/>
            <Route path="/menus" element={<Menus />} />            
            <Route path="/maps" element={<RestaurantsNearby />} />
            <Route path="/restos" element={<Restaurants />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chefs" element={<Chefs />} />
            <Route path="/feedback" element={<Feedbacks />} />
            <Route path="/about" element={<About />} /> 
            <Route path="/menu_resto" element={<MenuResto />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </BrowserRouter>
        <br/><br/>
        <Footer />
      </div> 
    </div>

  );
}

export default App;
