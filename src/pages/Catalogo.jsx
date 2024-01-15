import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import ItemCard from "../Components/ItemCard/ItemCard";
import { useCart } from "../context/CartContext";

export default function Catalogo() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const { addToCart } = useCart();

  useEffect(() => {
    console.log("ID from params:", id);
    const db = getFirestore();
    const itemCollection = collection(db, "items");

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
            : itemsFromSnapshot.filter((product) => product.category === id)
        );
      })
      .finally(() => {
        // setLoading(false);
      });
  }, [id]);

  return (
    <main>
      <h1 className="mt-5 text-center py-4">ÚLTIMOS LANZAMIENTOS</h1>
      <section className="container row mx-auto">
        {console.log(products)}
        {products.map((product) => (
          <ItemCard
            className="col-3"
            addToCart={addToCart}
            product={product}
            key={product.id}
          />
        ))}
      </section>
    </main>
  );
}
