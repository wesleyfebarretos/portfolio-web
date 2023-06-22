/* eslint-disable no-plusplus */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FooterComponent } from '../../components/footer/footerComponent';
import { NavigationBarComponent } from '../../components/navigationBar/navigationBarComponent';
import darkIntroducingMeImg from '../../images/bedtime.png';
import gitHubIcon from '../../images/icons8-github.svg';
import linkedinIcon from '../../images/icons8-linkedin.svg';
import introducingMeImg from '../../images/introducingMe.png';
import perfilImg from '../../images/perfil200.png';
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

  const [introducingMeImgOpacity, setIntroducingMeImgOpacity] = useState({
    dark: 0,
    normal: 1,
  });

  function updateOpacityOfAboutIntroImage(condition: boolean) {
    if (condition) {
      return setIntroducingMeImgOpacity({
        dark: 1,
        normal: 0,
      });
    }

    return setIntroducingMeImgOpacity({
      dark: 0,
      normal: 1,
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
    addEventOnFormInputs();
  });

  return (
    <>
      <header className="about-header">
        <NavigationBarComponent
          // eslint-disable-next-line react/jsx-no-bind
          updateOpacityOfAboutIntroImage={updateOpacityOfAboutIntroImage}
        />
        <section className="introducing-me container fadeInRight">
          <div className="introducing-me-container">
            <h1 className="introducing-me-title">
              Hora de me apresentar um pouco!
            </h1>
            <div className="introducing-me-img-container">
              <img
                src={darkIntroducingMeImg}
                alt=""
                className="introducing-me-img dark-introducing-me-img"
                style={{ opacity: introducingMeImgOpacity.dark }}
              />
              <img
                src={introducingMeImg}
                alt=""
                className="introducing-me-img"
                style={{ opacity: introducingMeImgOpacity.normal }}
              />
            </div>

            <p className="introducing-me-description">Vamos lá!</p>
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
              Me chamo Wesley, um desenvolvedor de software do Rio de Janeiro.
            </h3>
            <p>
              Olá! Meu nome é <strong>Wesley Ferreira</strong> e sou um
              desenvolvedor de software apaixonado pela criação de soluções
              inovadoras. Com 24 anos de idade, sou natural do Rio de Janeiro,
              onde mergulhei no mundo da tecnologia há cerca de 2 anos. Minha
              jornada como desenvolvedor começou nesse espaço de tempo, quando
              descobri minha paixão pela programação. Desde então, tenho buscado
              constantemente aprimorar minhas habilidades e conhecimentos na
              área. Minha motivação vem da oportunidade de transformar ideias em
              realidade por meio do código. Ao longo do tempo, desenvolvi
              projetos pessoais, deixei alguns deles disponíveis na página
              principal. Construi esse portfólio web para transmitir minha
              experiência, habilidades e projetos anteriores de forma eficaz aos
              recrutadores e potenciais clientes.
            </p>
          </div>
        </section>

        <section className="contact container">
          <div className="social-midias-container">
            <div
              className={`social-midias ${socialInView ? 'fadeInLeft' : ''}`}
              ref={socialRef}
            >
              <h4>Deem uma olhada no meu Linkedin !</h4>
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
              <h4>Visitem meu GitHub !</h4>
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
              <h4 className="get-in-touch-title">Entre em Contato</h4>
              <p className="get-in-touch-description">
                Está aqui um campo reservado para que você possa entrar em
                contato direto pelo email, basta informar o remetente do email,
                nome e sua mensagem, para que eu possa retornar.
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
                    placeholder="Digite seu Email..."
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
                    Preencha o campo de email
                  </span>
                </div>
                <div className="form-itens">
                  <label htmlFor="input-name" />
                  <input
                    className="listener-class"
                    type="text"
                    placeholder="Digite seu nome..."
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
                    Preencha o campo de nome
                  </span>
                </div>
                <div className="form-itens">
                  <label htmlFor="text-area" />
                  <textarea
                    className="listener-class"
                    name=""
                    id="text-area"
                    placeholder="Escreva sua mensagem..."
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
                    Preencha o campo de mensagem
                  </span>
                </div>
                <button type="submit" className="form-send-button">
                  enviar
                </button>
                <span className="span-send-email">
                  Email enviado com sucesso !
                </span>
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
