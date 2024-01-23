import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemCard from "../Components/ItemCard/ItemCard";
import { useCart } from "../context/CartContext";

export default function Catalogo() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCart();
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log("ID from params:", id);
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    if (id === "Todos") {
      setTitle("Todos nuestros productos");
    }
    if (id === "craneana") {
      setTitle("Proteccion Craneana");
    }
    if (id === "auditiva") {
      setTitle("Proteccion Auditiva");
    }
    if (id === "facial") {
      setTitle("Proteccion Facial");
    }
    if (id === "ocular") {
      setTitle("Proteccion Ocular");
    }
    if (id === "respiratoria") {
      setTitle("Proteccion Respiratoria");
    }
    if (id === "guantes") {
      setTitle("Guantes");
    }
    if (id === "indumentaria") {
      setTitle("Indumentaria de Trabajo");
    }
    if (id === "vial") {
      setTitle("Seguridad Vial");
    }
    if (id === "otros") {
      setTitle("Otros Productos");
    }
    if (id === "soldadura") {
      setTitle("Proteccion para Soldadura");
    }

    getDocs(itemCollection)
      .then((snapshot) => {
        const itemsFromSnapshot = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        // Agregar los productos filtrados al estado
        setProducts(
          id === undefined || id == "Todos"
            ? itemsFromSnapshot
            : itemsFromSnapshot.filter(
                (product) =>
                  product.category === id ||
                  (product.categories && product.categories.includes(id))
              )
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return (
    <section style={{ marginBottom: "10vh" }}>
      <h1 className="mt-5 text-center py-4">{title}</h1>
      <section className="container">
        {loading ? (
          // Mostrar placeholders si loading es true
          <section className="row">
            {[1, 2, 3, 4, 5, 6].map((placeholder) => (
              <div
                className="my-2 col-lg-4 col-6 placeholder-glow"
                key={placeholder}
              >
                {/* Placeholder para ItemCard */}
                <div className="placeHolder mb-3 placeholder bg-secondary"></div>
              </div>
            ))}
          </section>
        ) : (
          // Mostrar contenido real si loading es false
          <section className="row">
            {products.map((product) => (
              <div key={product.id} className="my-2 col-lg-4 col-6">
                <ItemCard addToCart={addToCart} product={product} />
              </div>
            ))}
          </section>
        )}
      </section>
    </section>
  );
}
