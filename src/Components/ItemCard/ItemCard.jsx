import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { useState, useEffect } from "react";

export default function ItemCard({ product, addToCart }) {
  const [title, setTitle] = useState(product.title);
  const longitudMaxima = 37;

  useEffect(() => {
    const isMobileResolution = window.innerWidth < 600;
    if (isMobileResolution && title.length > longitudMaxima) {
      setTitle(title.substring(0, longitudMaxima) + "...");
    }
  }, [title]);

  return (
    <div className="itemCard">
      <Link to={`/item/${product.id}`}>
        <img
          src={product.img.imgCard}
          className="card-img-top"
          alt={product.title}
        />
      </Link>
      <div
        style={{
          height: "7vh",
        }}
        className="card-body my-3"
      >
        <p className="titleCard card-title">{title}</p>
      </div>
      <Button
        clase={`w-100 mt-2`}
        funcion={() => addToCart(product, 1)}
        content={"Agregar al carrito"}
      />
    </div>
  );
}
