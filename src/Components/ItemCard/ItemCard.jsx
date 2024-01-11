import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function ItemCard({ product }) {
  return (
    <div className="col-lg-4 col-md-6 mt-5">
      <Link to={`/item/${product.id}`}>
        <img
          src={product.img.imgCard}
          className="card-img-top"
          alt={product.title}
        />
      </Link>
      <div className="card-body mt-3">
        <p className="card-title">{product.title}</p>
      </div>
      <Button
        clase="w-50 mt-3"
        funcion={() => addToCart(products, 1)}
        content={"Agregar al carrito"}
      />
    </div>
  );
}
