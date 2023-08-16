import logo from './logo.svg';
import './App.css';
import SignInSide from './pages/Login';
import SignUpSide from './pages/Register';
import Footer from './components/Footer';

function App() {
  return (
    <div>
        <SignInSide/>
        <SignUpSide/>
        <Footer/>

    </div>
  );
}

export default App;
