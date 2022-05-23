import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";
import ItemDetailContainer from "./Containers/ItemDetailContainer";
import CategoryContainer from "./Containers/CategoryContainer";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer/Footer";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import CartCheckout from "./components/CartCheckout/CartCheckout";


function App() {
  return (
    <div className="App">
      <CartProvider> 
      {/* <BrowserRouter basename="/CarabettaReactjs16940"> */}
      <BrowserRouter>
        <header className="App-header">          
          <NavBar />
        </header>        
        <Routes>
          <Route exact path="/" element={<ItemListContainer/>} />
          <Route exact path="/product/:id" element={<ItemDetailContainer/>} />
          <Route exact path="/category/:category" element={<CategoryContainer/>} />
          <Route exact path="/Cart" element={<Cart/>} />
          <Route exact path="/CartCheckout" element={<CartCheckout/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      </CartProvider> 
    </div>
  );
}

export default App;