
import SignInSide from './pages/Login';
import SignUpSide from './pages/Register';
import Footer from './components/Footer';
import PrimarySearchAppBar from './components/Navbar';


function App() {
  return (
    <div>
       <PrimarySearchAppBar/>
        <SignInSide/>
        <SignUpSide/>
        <Footer/>

    </div>
  );
}

export default App;
