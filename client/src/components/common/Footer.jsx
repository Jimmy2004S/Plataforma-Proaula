import "../../assets/styles/layout/footer.scss";
import { AiTwotonePhone, AiFillHome, AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="row">
          <div>
            <h4 className="footer__title">Información de contacto</h4>
            <p>
              <AiTwotonePhone />
              Teléfono: (57) (605) 651 7180
            </p>
          </div>
          <div>
            <p>
              <a
                href="https://unicolombo.edu.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__link"
              >
                <AiFillHome />
                Pagina Web Oficial de UniColombo
              </a>
            </p>
          </div>
        </div>
        <div className="row-center">
          <p>© copyright 2023</p>
        </div>
      </div>
      <div className="footer__info">
        <p>
          <a href="" className="footer__link">
            <AiFillGithub /> Desrrollador Front-end
          </a>
        </p>
        <p>
          <a href="" className="footer__link">
            <AiFillGithub /> Desrrollador Back-end
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
