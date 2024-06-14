import './App.css';
import NavBar from './components/common/NavBar';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import { BrowserRouter as Router ,Routes,Route} from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Footer from './components/common/Footer';
import About from './pages/About';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Error from './pages/Error';
import Logout from './pages/Logout';
import AdminLayout from './components/layouts/Admin-Layout';
import AdminUsers from './pages/Admin-Users';
import AdminContacts from './pages/Admin-Contacts';
import AdminUpdate from './pages/Admin-Update';
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path="/recipes" element = {<Recipes />}></Route>
        <Route path="/about" element = {<About />}></Route>
        <Route path="/contact" element = {<Contact />}></Route>
        <Route path="/register" element = {<Register />}></Route>
        <Route path="/login" element = {<Login />}></Route>
        <Route path="/logout" element = {<Logout />}></Route>
        <Route path="*" element = {<Error />}></Route>
        <Route path='/recipes/:recipeId' element={<RecipeDetails/>}/>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route path='users' element={<AdminUsers/>}/>
          <Route path='contacts' element={<AdminContacts/>}/>
          <Route path='users/:id/edit' element={<AdminUpdate/>}/>
        </Route>
      </Routes>
      <Footer/>
      <Toaster position="top-right"/>
    </Router>
  );
}

export default App;
