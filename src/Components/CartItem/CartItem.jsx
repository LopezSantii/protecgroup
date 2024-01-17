import style from "./CartItem.module.css";
import { useCart } from "../../context/CartContext";
import { useState, useEffect } from "react";

export default function CartItem({ products, removeFromCart }) {
  const { cart, updateQuantity } = useCart();
  const [inputValue, setInputValue] = useState(products.quantity);

  useEffect(() => {
    setInputValue(products.quantity);
  }, [products.quantity]);

  const handleInputChange = (e) => {
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      setInputValue(inputValue);
      updateQuantity(products.id, inputValue);
    }
  };

  const suma = () => {
    const newQuantity = products.quantity + 1;
    setInputValue(newQuantity);
    updateQuantity(products.id, newQuantity);
  };

  const resta = () => {
    if (products.quantity > 1) {
      const newQuantity = products.quantity - 1;
      setInputValue(newQuantity);
      updateQuantity(products.id, newQuantity);
    }
  };

  return (
    <section className={style.itemCarrito}>
      <img
        className="img-fluid"
        src={products.img.imgCard}
        alt={products.title}
      />
      <section className="container">
        <h3 className="col-12">{products.title}</h3>
        <div>
          <div className={`${style.input_cart}`}>
            <button onClick={resta}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-dash"
                viewBox="0 0 16 16"
              >
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
              </svg>
            </button>
            <input
              className="text-center"
              type="text"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button onClick={suma}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-plus"
                viewBox="0 0 16 16"
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
              </svg>
            </button>
          </div>
          <button className="btn" onClick={() => removeFromCart(products.id)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-trash3"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
            </svg>
          </button>
        </div>
      </section>
    </section>
  );
}
