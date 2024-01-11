import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Catalogo from "./pages/Catalogo";
import ItemDetail from "./pages/ItemDetail/ItemDetail";

function App() {
  return (
    <main>
      <Navbar />
      <Routes>
        <Route path="/" element={<Catalogo />} />
        <Route path="/category/:id" element={<Catalogo />} />
        <Route path="/item/:id" element={<ItemDetail />} />
      </Routes>
    </main>
  );
}

export default App;
