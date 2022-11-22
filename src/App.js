import './App.css';
import Header from './component/Header';
import WebFont from "webfontloader";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { useEffect } from "react";
import Footer from './component/Footer';
import Home from './component/Home';
import Products from './component/Products';
import Login from './component/User/Login';
import About from './component/About';



function App() {

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });
  
  }, []);


  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/products" element={<Products/>} />
      <Route exact path="/about" element={<About/>} />
      </Routes>
      <Footer />
    </Router>
   
  );
}

export default App;
