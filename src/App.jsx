import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import ItemDetail from "./pages/ItemDetail/ItemDetail";
import { ModalProvider } from "./context/ModalContex";
import { CartProvider } from "./context/CartContext";
import CartDetail from "./Components/CartDetail/CartDetail";

function App() {
  return (
    <main>
      <ModalProvider>
        <CartProvider>
          <Navbar />
          <CartDetail />
          <Routes>
            <Route path="/" element={<Catalogo />} />
            <Route path="/category/:id" element={<Catalogo />} />
            <Route path="/item/:id" element={<ItemDetail />} />
          </Routes>
        </CartProvider>
      </ModalProvider>
    </main>
  );
}

export default App;
