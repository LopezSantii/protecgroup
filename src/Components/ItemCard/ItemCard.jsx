import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function ItemCard({ product, addToCart }) {
  return (
    <div className="col-lg-4 col-md-6 mt-5">
      <Link to={`/item/${product.id}`}>
        <img
          src={product.img.imgCard}
          className="card-img-top"
          alt={product.title}
        />
      </Link>
      <div
        style={{
          height: "50px",
        }}
        className="card-body mt-3"
      >
        <p className="card-title">{product.title}</p>
      </div>
      <Button
        clase="w-100 mt-2"
        funcion={() => addToCart(product, 1)}
        content={"Agregar al carrito"}
      />
    </div>
  );
}
