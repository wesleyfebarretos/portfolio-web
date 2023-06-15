import github from '../../images/icons8-github.svg';
import instagram from '../../images/icons8-instagram.svg';
import linkedin from '../../images/icons8-linkedin.svg';
import './footerComponent.css';

export function FooterComponent() {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <a href="#" className="footer-logo">
          <p className="footer-logo-name">wesley ferreira</p>
          <span className="footer-logo-description">software developer</span>
        </a>
        <div className="copyright">
          <p>&copy; 2023 wesley ferreira.</p>
          <p>all rights reserved.</p>
        </div>
      </div>
      <div>
        <a href="#" className="contact-button">
          contact me
        </a>
      </div>
      <div className="links-midia">
        <ul className="links-container">
          <li>
            <a href="/" className="link">
              home
            </a>
          </li>
          <li>
            <a href="/about" className="link">
              about
            </a>
          </li>
          <li>
            <a href="#" className="link es">
              projects
            </a>
          </li>
        </ul>
        <div className="social-midia">
          <a href="#">
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a href="#">
            <img src={instagram} alt="instagram icon" />
          </a>
          <a href="#">
            <img src={github} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
