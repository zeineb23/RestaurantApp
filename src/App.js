import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from './Components/Accueil';
import Chefs from './Components/Chefs';
import Contacts from './Components/Contacts';
import Feedbacks from './Components/Feedbacks';
//import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Menus from './Components/Menus';

function App() {
  return (
    <div>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Acceuil />}/>
          <Route path="/menus" element={<Menus />} />
          <Route path="/chefs" element={<Chefs />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/feedback" element={<Feedbacks />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>

  );
}

export default App;
