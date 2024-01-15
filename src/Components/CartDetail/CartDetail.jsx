import { Modal } from "react-bootstrap";
import Button from "../Button/Button";
import { useModal } from "../../context/ModalContex";
import { useCart } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { useState } from "react";
import { isMobile } from "react-device-detect";

function CartDetail() {
  const [mensaje, setMensaje] = useState("");

  const handleEnviarMensaje = () => {
    const mensajeEncoded = encodeURIComponent(`${cart[0].title}`);

    let whatsappURL;

    // Verifica si el usuario está en un dispositivo móvil
    if (isMobile) {
      // Si es móvil, abre la aplicación de WhatsApp
      whatsappURL = `whatsapp://send?phone=1123895213&text=${mensajeEncoded}`;
    } else {
      // Si es una PC, abre WhatsApp Web en una nueva ventana o pestaña
      whatsappURL = `https://web.whatsapp.com/send?phone=1123895213&text=${mensajeEncoded}`;
    }

    window.open(whatsappURL, "_blank");
  };
  // se usa el context para poder abrir el modal en cualquier page
  const { isModalOpen, closeModal } = useModal();
  const handleClose = () => closeModal();
  const { cart, removeFromCart, total, updateCartItem } = useCart();

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <section>
            {cart.map((cart) => (
              <CartItem
                removeFromCart={removeFromCart}
                products={cart}
                key={cart.id}
              />
            ))}
          </section>
        </Modal.Body>
        <Modal.Footer>
          <Button
            clase={"w-50"}
            funcion={handleEnviarMensaje}
            content={"Consultar"}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartDetail;
