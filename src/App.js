
import SignInSide from './pages/Login';
import SignUpSide from './pages/Register';
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import RecipeDetails from './pages/RecipeDetails';


function App() {
  return (
    <div>
      <Routes>
      <Route path="/" element={<SignInSide/>} />
      <Route path="/register" element={<SignUpSide/>} />
      <Route path="/Homepage" element={<Home/>} />
      <Route path="/recipedetails" element={<RecipeDetails/>} />
      
      </Routes> 

    </div>
  );
}

export default App;
