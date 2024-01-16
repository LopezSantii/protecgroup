import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import { ModalProvider } from "./context/ModalContex";
import { CartProvider } from "./context/CartContext";
import CartDetail from "./Components/CartDetail/CartDetail";
import Landing from "./pages/Landing/Landing";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <ModalProvider>
        <CartProvider>
          <Navbar />
          <CartDetail />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/category/:id" element={<Catalogo />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
          <Footer />
        </CartProvider>
      </ModalProvider>
    </>
  );
}

export default App;
