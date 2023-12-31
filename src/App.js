
import SignInSide from './pages/Login';
import SignUpSide from './pages/Register';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import RecipeDetails from './pages/RecipeDetails';
import ReqAuth from './components/Reqauth';
import FavarateRecipe from './pages/FavarateRecipe';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={ <ReqAuth> <Home/> </ReqAuth> } />
      <Route path="/:id" element={ <ReqAuth> <RecipeDetails/> </ReqAuth> } />
      <Route path="/faverate" element={ <ReqAuth> <FavarateRecipe/> </ReqAuth> } />
      <Route path="/login" element={<SignInSide/>} />
      <Route path="/register" element={<SignUpSide/>} /> 
      </Routes> 

    </div>
  );
}

export default App;
