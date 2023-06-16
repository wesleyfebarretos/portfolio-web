/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FooterComponent } from '../../components/footer/footerComponent';
import { NavigationBarComponent } from '../../components/navigationBar/navigationBarComponent';
import gitHubIcon from '../../images/icons8-github.svg';
import linkedinIcon from '../../images/icons8-linkedin.svg';
import introducingMeImg from '../../images/introducingMe.png';
import perfilImg from '../../images/perfil.jpg';
import './about.css';

export function AboutPage() {
  const { ref: socialRef, inView: socialInView } = useInView({
    triggerOnce: true,
  });
  const { ref: contactRef, inView: contactInview } = useInView({
    triggerOnce: true,
  });
  const [emailConfigs, setEmailConfigs] = useState({
    name: '',
    email: '',
    message: '',
  });

  function changeOpacityNavBarOnScroll() {
    let timer: any;

    window.addEventListener('scroll', () => {
      const navBar = document.querySelector('.nav-bar');
      const scrollPosition = document.documentElement.scrollTop;
      clearTimeout(timer);
      if (scrollPosition > 0) {
        navBar?.classList.add('nav-bar-opac');
      }

      timer = setTimeout(() => {
        navBar?.classList.remove('nav-bar-opac');
      }, 300);
    });
  }

  function treatFormErrors() {
    const treatErrorsArray: Array<keyof typeof emailConfigs> = [
      'message',
      'name',
      'email',
    ];
    const spanError = document.querySelector('.span-error') as HTMLSpanElement;

    treatErrorsArray.forEach((error) => {
      if (emailConfigs[error] === '') {
        spanError!.style.color = 'red';
        spanError!.style.display = 'block';
        spanError!.innerHTML = `fill in the ${error} field`;
      }
    });

    if (
      emailConfigs.email !== '' &&
      emailConfigs.message !== '' &&
      emailConfigs.name !== ''
    ) {
      const MailTemplate = {
        from_name: emailConfigs.name,
        email: emailConfigs.email,
        message: emailConfigs.message,
      };

      emailjs
        .send(
          'service_u58eo4p',
          'template_p3lijd1',
          MailTemplate,
          'tL9r4hnYoRsbJ_VE_'
        )
        .then(
          () => {
            spanError!.style.color = 'lightgreen';
            spanError!.innerHTML = `Email sent successfully`;
            spanError!.style.display = 'block';
            setEmailConfigs({ email: '', message: '', name: '' });
            setTimeout(() => {
              spanError!.style.display = 'none';
            }, 10 * 1000);
          },
          (error) => {
            spanError!.style.color = 'red';
            spanError!.innerHTML = error.message;
            spanError!.style.display = 'block';
          }
        );
    }
  }

  useEffect(() => {
    changeOpacityNavBarOnScroll();
  });

  return (
    <>
      <header className="about-header">
        <NavigationBarComponent />
        <section className="introducing-me container fadeInRight">
          <div className="introducing-me-container">
            <h1 className="introducing-me-title">
              Time to introduce myself a little!
            </h1>
            <img src={introducingMeImg} alt="" className="introducing-me-img" />
            <p className="introducing-me-description">Lets go!</p>
          </div>
        </section>
      </header>

      <main className="about-main">
        <section className="container about-container fadeInLeft">
          <div className="about-img-container">
            <img src={perfilImg} alt="" className="about-img" />
          </div>

          <div className="about-description">
            <h3>
              I&apos;m Wesley, a Software Developer based in Rio de Janeiro.
            </h3>
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
              <h4>Follow Me On Social Media</h4>
              <ul className="social-midias-img-container">
                <li>
                  <a
                    href="https://www.linkedin.com/in/wesleyfebarretos/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img className="social-img" src={linkedinIcon} alt="" />
                  </a>
                </li>
              </ul>
              <h4>Visit My GitHub</h4>
              <a
                href="https://github.com/Wesleyfbarretos"
                target="_blank"
                rel="noreferrer"
              >
                <img className="social-img git-img" src={gitHubIcon} alt="" />
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
              <h4 className="get-in-touch-title">Get in Touch</h4>
              <p className="get-in-touch-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere
                magnam aspernatur obcaecati, velit culpa animi iure magni beatae
                quaerat dolore dolor mollitia reprehenderit minima ipsa! Beatae
                laudantium dolorem esse dolorum.
              </p>
              <form
                action=""
                onSubmit={(e) => {
                  e.preventDefault();
                  treatFormErrors();
                }}
              >
                <div className="form-itens">
                  <label htmlFor="input-email" />
                  <input
                    type="email"
                    placeholder="Email"
                    onChange={(e) =>
                      setEmailConfigs((state) => ({
                        email: e.target.value,
                        name: state.name,
                        message: state.message,
                      }))
                    }
                    value={emailConfigs.email}
                  />
                </div>
                <div className="form-itens">
                  <label htmlFor="input-name" />
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) =>
                      setEmailConfigs((state) => ({
                        email: state.email,
                        name: e.target.value,
                        message: state.message,
                      }))
                    }
                    value={emailConfigs.name}
                  />
                </div>
                <div className="form-itens">
                  <label htmlFor="text-area" />
                  <textarea
                    name=""
                    id="text-area"
                    placeholder="Message"
                    onChange={(e) =>
                      setEmailConfigs((state) => ({
                        email: state.email,
                        name: state.name,
                        message: e.target.value,
                      }))
                    }
                    value={emailConfigs.message}
                  />
                </div>
                <button type="submit" className="form-send-button">
                  send
                </button>
                <span
                  className="span-error"
                  style={{
                    textAlign: 'center',
                    display: 'none',
                    paddingTop: '1rem',
                  }}
                />
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="container">
        <FooterComponent exclude />
      </footer>
    </>
  );
}
