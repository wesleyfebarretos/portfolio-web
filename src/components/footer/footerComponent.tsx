/* eslint-disable jsx-a11y/no-static-element-interactions */
import github from '../../images/icons8-github.svg';
import linkedin from '../../images/icons8-linkedin.svg';
import './footerComponent.css';

interface Iexclude {
  // eslint-disable-next-line react/require-default-props
  exclude?: boolean;
}

function learnMoreScrolling() {
  const element = document.querySelector('main .title');
  element?.scrollIntoView({ behavior: 'smooth' });
}

export function FooterComponent({ exclude }: Iexclude) {
  return (
    <div className="footer-container">
      <div className="footer-logo-container">
        <a href="/" className="footer-logo">
          <p className="footer-logo-name">wesley ferreira</p>
          <span className="footer-logo-description">software developer</span>
        </a>
        <div className="copyright">
          <p>&copy; 2023 wesley ferreira.</p>
          <p>all rights reserved.</p>
        </div>
      </div>
      <div className="contact-button-container">
        <a
          href="https://www.linkedin.com/in/wesleyfebarretos/"
          className="contact-button"
          target="_blank"
          rel="noreferrer"
        >
          Entre em contato
        </a>
      </div>
      <div className="links-midia">
        <ul className="links-container">
          <li>
            <a href="/" className="link">
              início
            </a>
          </li>
          <li>
            <a href="/about" className="link">
              sobre
            </a>
          </li>
          <li
            onClick={() => learnMoreScrolling()}
            style={{ cursor: 'pointer', display: exclude ? 'none' : '' }}
          >
            <div className="link">projetos</div>
          </li>
        </ul>
        <div className="social-midia">
          <a
            href="https://www.linkedin.com/in/wesleyfebarretos/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="linkedin icon" />
          </a>
          <a
            href="https://github.com/Wesleyfbarretos"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github} alt="github icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
