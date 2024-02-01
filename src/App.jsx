import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/common/Home"
import Coins from "./components/Coins"
import CoinDetails from "./components/CoinDetails"
import Exchanges from "./components/Exchanges"
import Header from "./components/common/Header"
import "./App.css";
import Footer from "./components/common/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/coins" element={<Coins />}/>
        <Route path="/exchanges" element={<Exchanges />}/>
        <Route path="/coin/:id" element={<CoinDetails />}/>
        <Route path="/cart" element={<Cart />}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
