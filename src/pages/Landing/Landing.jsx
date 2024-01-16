import style from "./Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <>
      <header className={style.banner}>
        <section>
          <h1>LA MEJOR PROTECCION PARA TU EMPRESA</h1>
          <Link to="/category/Todos" className={`w-50 ${style.buttonLanding}`}>
            Ver mas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-eye-fill ms-3"
              viewBox="0 0 16 16"
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
              <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
            </svg>
          </Link>
        </section>
      </header>

      <section>
        <h2>Trabajamos con las mejores marcas del mercado</h2>
      </section>
    </>
  );
}
