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
      <section className="container-fluid section_marcas">
        <h2 className="text-center">MARCAS CON LAS QUE TRABAJAMOS</h2>
        <div>
          <section className="row col-12">
            <div className="col-6 col-lg-3  d-flex justify-content-center align-items-center">
              <img
                className="mx-auto"
                style={{ width: "200px" }}
                src="/img/logo_libus.png"
                alt="logo libus"
              />
            </div>
            <div className="col-6 col-lg-3 d-flex justify-content-center align-items-center">
              <img
                className="mx-auto"
                src="/img/ombu_logo.png"
                alt="logo ombu"
              />
            </div>
            <div className="col-6 col-lg-3  d-flex justify-content-center align-items-center">
              <img
                className="mx-auto"
                src="/img/LOGO_MG.png"
                alt="logo mg solutions"
              />
            </div>
            <div className="col-6 col-lg-3  d-flex justify-content-center align-items-center">
              <img
                className="mx-auto"
                style={{ width: "150px" }}
                src="/img/Logo_dana.png"
                alt="logo dana seguridad industrial"
              />
            </div>
          </section>
        </div>
      </section>
      <section className="container">
        <div className="row">
          <div className="col-6 p-1">
            <Link to="/category/facial" className="facial">
              <h3 className="mx-auto">FACIAL</h3>
            </Link>
          </div>
          <div className="col-6 p-1">
            <Link to="/category/respiratoria" className="respiratoria">
              <h3 className="mx-auto">RESPIRATORIA</h3>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className=" col-12 p-1">
            <Link to="/category/auditiva" className="auditiva">
              <h3 className="mx-auto">AUDITIVA</h3>
            </Link>
          </div>
        </div>
      </section>

      <section className="envios">
        <h3 className="mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            className="pb-2 me-2 bi bi-box-seam-fill"
            viewBox="0 0 16 16"
          >
            <path d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.01-.003.268-.108a.75.75 0 0 1 .558 0l.269.108.01.003zM10.404 2 4.25 4.461 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339L8 5.961 5.596 5l6.154-2.461z" />
          </svg>
          HACEMOS ENVIOS A TODO EL PAIS
        </h3>
      </section>
    </>
  );
}
