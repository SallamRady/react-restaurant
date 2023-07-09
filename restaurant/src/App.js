import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import MenuPage from "./pages/Menu/Menu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import CartList from "./pages/cart/CartList";
import SearchResult from "./pages/search-result/SearchResult";
import SingleProduct from "./pages/product-details/SingleProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartList />} />
        <Route path="/searchResult" element={<SearchResult/>} />
        <Route path="/product/:id" element={<SingleProduct/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
