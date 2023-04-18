import { useInView } from 'react-intersection-observer';
import { FooterComponent } from '../../components/footer/footerComponent';
import { NavigationBarComponent } from '../../components/navigationBar/navigationBarComponent';
import gitHubIcon from '../../images/icons8-github.svg';
import instagramIcon from '../../images/icons8-instagram.svg';
import linkedinIcon from '../../images/icons8-linkedin.svg';
import perfilImg from '../../images/perfil.jpg';
import './about.css';

export function AboutPage() {
  const { ref: socialRef, inView: socialInView } = useInView();
  const { ref: contactRef, inView: contactInview } = useInView();

  return (
    <>
      <header>
        <NavigationBarComponent />
      </header>

      <main className="about-main">
        <section className="container about-container fadeInLeft">
          <div className="about-img">
            <img src={perfilImg} alt="" />
          </div>

          <div className="about-description">
            <h1>
              I&apos;m Wesley, a Software Developer based in Rio de Janeiro.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              voluptate exercitationem dolor eius rerum cupiditate magni, libero
              placeat nisi vero veritatis id natus nihil odio at repellendus
              tempore asperiores enim?Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Nostrum nihil tempore, minima nulla doloribus
              inventore illum suscipit ex eum nobis reiciendis eos beatae porro
              placeat corrupti expedita molestias! Vero, autem.
            </p>
          </div>
        </section>

        <section className="contact container">
          <div className="social-midias-container">
            <div
              className={`social-midias ${socialInView ? 'fadeInLeft' : ''}`}
              ref={socialRef}
            >
              <h2>Follow Me On Social Media</h2>
              <ul className="social-midias-img-container">
                <li>
                  <a href="">
                    <img className="social-img" src={instagramIcon} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img className="social-img" src={linkedinIcon} alt="" />
                  </a>
                </li>
              </ul>
              <h3>Visit My GitHub</h3>
              <a href="">
                <img className="social-img" src={gitHubIcon} alt="" />
              </a>
            </div>
          </div>

          <div
            className={`get-in-touch-container ${
              contactInview ? 'fadeInRight' : ''
            }`}
            ref={contactRef}
          >
            <div className="get-in-touch">
              <h2 className="get-in-touch-title">Get in Touch</h2>
              <p className="get-in-touch-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                magnam aspernatur obcaecati, velit culpa animi iure magni beatae
                quaerat dolore dolor mollitia reprehenderit minima ipsa! Beatae
                laudantium dolorem esse dolorum.
              </p>
              <form action="">
                <div className="form-itens">
                  <label htmlFor="input-email" />
                  <input type="text" placeholder="Email" />
                </div>
                <div className="form-itens">
                  <label htmlFor="input-name" />
                  <input type="text" placeholder="Name" />
                </div>
                <div className="form-itens">
                  <label htmlFor="text-area" />
                  <textarea name="" id="text-area" placeholder="Message" />
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
