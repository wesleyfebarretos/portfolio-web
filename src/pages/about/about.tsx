/* eslint-disable no-plusplus */
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

  function addEventOnFormInputs() {
    setTimeout(() => {
      const fieldsToListener = document.querySelectorAll('.listener-class');
      const spanErrors = document.querySelectorAll('.span-error');

      for (let i = 0; i < fieldsToListener.length; i++) {
        const field = fieldsToListener[i];
        field.addEventListener('blur', () => {
          const span = spanErrors[i] as HTMLSpanElement;
          span.style.display = 'none';
        });
      }
    }, 200);
  }

  function treatFormErrors() {
    const treatErrorsArray: Array<keyof typeof emailConfigs> = [
      'message',
      'name',
      'email',
    ];

    treatErrorsArray.forEach((error) => {
      const spanError = document.querySelector(
        `.span-${error}`
      ) as HTMLSpanElement;
      if (emailConfigs[error] === '') {
        spanError!.style.display = 'block';
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
      const sentEmailSpan = document.querySelector(
        '.span-send-email'
      ) as HTMLSpanElement;

      emailjs
        .send(
          'service_u58eo4p',
          'template_p3lijd1',
          MailTemplate,
          'tL9r4hnYoRsbJ_VE_'
        )
        .then(
          () => {
            sentEmailSpan!.style.display = 'block';
            setEmailConfigs({ email: '', message: '', name: '' });
            setTimeout(() => {
              sentEmailSpan!.style.display = 'none';
            }, 10 * 1000);
          },
          (error) => {
            sentEmailSpan!.style.color = 'red';
            sentEmailSpan!.innerHTML = error.message;
            sentEmailSpan!.style.display = 'block';
          }
        );
    }
  }

  useEffect(() => {
    changeOpacityNavBarOnScroll();
    addEventOnFormInputs();
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
                    className="listener-class"
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
                  <span className="span-error span-email">
                    Fill in the email field
                  </span>
                </div>
                <div className="form-itens">
                  <label htmlFor="input-name" />
                  <input
                    className="listener-class"
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
                  <span className="span-error span-name">
                    Fill in the name field{' '}
                  </span>
                </div>
                <div className="form-itens">
                  <label htmlFor="text-area" />
                  <textarea
                    className="listener-class"
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
                  <span className="span-error span-message">
                    Fill in the message field
                  </span>
                </div>
                <button type="submit" className="form-send-button">
                  send
                </button>
                <span className="span-send-email">Email sent successfully</span>
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
