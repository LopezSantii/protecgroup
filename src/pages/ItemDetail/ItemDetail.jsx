import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import Button from "../../Components/Button/Button";
import style from "./ItemDetail.module.css";

export default function ItemDetail() {
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
            className="col-5 d-block carousel slide carousel-dark"
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
          <section className={`col-6 ${style.description_item}`}>
            <h1>{product.title}</h1>
            <p className="m-3">{product.description}</p>
            <h3>Caracteristicas</h3>
            <ul>
              {product.caracteristicas.map((item, index) => {
                return (
                  <li className="mb-1" key={index}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <Button clase="m-3" content="Agregar al carrito" />
          </section>
        </section>
      </main>
    )
  );
}
