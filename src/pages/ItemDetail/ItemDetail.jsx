import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Button from "../../Components/Button/Button";
import style from "./ItemDetail.module.css";
import { useCart } from "../../context/CartContext";

export default function ItemDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const db = getFirestore();
    const itemCollection = collection(db, "items");

    getDocs(itemCollection)
      .then((snapshot) => {
        const itemsFromSnapshot = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProduct(itemsFromSnapshot.find((product) => product.id === id));
      })
      .finally(() => {
        // setLoading(false);
      });
  }, []);

  return (
    product && (
      <main className="mb-5 container">
        <section className="m-5 row">
          <div
            id="carouselExample"
            className="col-xxl-5 col-xl-5 col-12 h-100 d-block carousel slide carousel-dark"
          >
            <div className="carousel-indicators">
              {Object.values(product.img).map((item, index) => (
                <button
                  key={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : ""}
                  type="button"
                  data-bs-target="#carouselExample"
                  data-bs-slide-to={index}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
            <div className="carousel-inner">
              {Object.values(product.img).map((item, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <img
                    className="img-fluid d-block w-100"
                    src={item}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <section
            className={`col-xxl-6 col-xl-5 col-12 ${style.description_item}`}
          >
            <h1>{product.title}</h1>
            <p className="m-3">{product.description}</p>
            <h3 className="d-none d-lg-block">Caracteristicas</h3>
            <ul className="d-none d-lg-block">
              {product.caracteristicas.map((item, index) => {
                return (
                  <li className="mb-1" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <div
              className="d-block d-lg-none accordion accordion-flush"
              id="accordionFlushExample"
            >
              <div className="accordion-item">
                <h3 className="accordion-header">
                  <button
                    className="p-auto accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="true"
                    aria-controls="flush-collapseOne"
                  >
                    Caracteristicas
                  </button>
                </h3>
                <div
                  id="flush-collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionFlushExample"
                >
                  <ul className="accordion-body">
                    {product.caracteristicas.map((item, index) => {
                      return (
                        <li className="mb-1" key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <Button
              clase="m-3"
              funcion={() => addToCart(product, 1)}
              content="Agregar al carrito"
            />
          </section>
        </section>
      </main>
    )
  );
}
