import './App.css';
import Footer from './Components/Footer';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Details from './Components/Details';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signin from './Components/Signin';
import Signup from './Components/Signup';
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>

        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;
