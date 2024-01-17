import React, { createContext, useContext, useState } from "react";
import { useModal } from "./ModalContex";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

// Crea el contexto del carrito
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const { closeModal } = useModal();

  const updateQuantity = (productId, newQuantity) => {
    // Actualizar la cantidad del producto en el carrito
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });

    setCart(updatedCart);
  };

  // Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        }
        return item;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }

    Toastify({
      text: "Producto agregado",
      duration: 800,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "black",
      },
    }).showToast();
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    updatedCart.length === 0 ? closeModal() : "";
    Toastify({
      text: "Producto eliminado",
      duration: 800,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "black",
      },
    }).showToast();
  };

  // Precio total del carrito

  // Actualizar la cantidad de un producto en el carrito
  const updateCartItem = (productId, newQuantity) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: newQuantity,
        };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        updateCartItem,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  return useContext(CartContext);
}
