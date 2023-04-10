import { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FooterComponent } from '../../components/footer/footerComponent';
import { NavigationBarComponent } from '../../components/navigationBar/navigationBarComponent';
import perfilImg from '../../images/GitHub-Mark.png';
import dexImg from '../../images/dex.jpg';
import cypressIcon from '../../images/skill-icons/cypress.svg';
import cssIcon from '../../images/skill-icons/icons8-css3.svg';
import dockerIcon from '../../images/skill-icons/icons8-docker.svg';
import gitIcon from '../../images/skill-icons/icons8-git.svg';
import gitHubIcon from '../../images/skill-icons/icons8-github.svg';
import htmlIcon from '../../images/skill-icons/icons8-html-5.svg';
import javascriptIcon from '../../images/skill-icons/icons8-javascript.svg';
import mySqlIcon from '../../images/skill-icons/icons8-mysql-logo.svg';
import nodeJsIcon from '../../images/skill-icons/icons8-nodejs.svg';
import postgreIcon from '../../images/skill-icons/icons8-postgresql.svg';
import prismaIcon from '../../images/skill-icons/icons8-prisma-orm.svg';
import reactIcon from '../../images/skill-icons/icons8-react-native.svg';
import typescriptIcon from '../../images/skill-icons/icons8-typescript.svg';
import jestIcon from '../../images/skill-icons/jest-js-icon.svg';
import nestJsIcon from '../../images/skill-icons/nestjs-icon.svg';
import typeOrmIcon from '../../images/skill-icons/typeorm-seeklogo.com.svg';

import './home.css';

interface RadioLabel {
  radio1: string;
  radio3: string;
  radio2: string;
}

export function HomePage() {
  const [radioBackground, setRadioBackground] = useState<RadioLabel>({
    radio1: '#33c1ff',
    radio2: '',
    radio3: '',
  });

  const [display, setDisplay] = useState('none');

  const [fadeInLeft, setFadeInLeft] = useState('');

  const { ref: skillRef, inView: skillInView } = useInView();

  function changeRadioBackground(index: number) {
    if (index === 2) {
      return setRadioBackground(() => ({
        radio1: '',
        radio2: '#33c1ff',
        radio3: '',
      }));
    }

    if (index === 3) {
      return setRadioBackground(() => ({
        radio1: '',
        radio2: '',
        radio3: '#33c1ff',
      }));
    }

    return setRadioBackground(() => ({
      radio1: '#33c1ff',
      radio2: '',
      radio3: '',
    }));
  }

  function learnMoreScrolling() {
    const element = document.querySelector('main .title');
    element?.scrollIntoView({ behavior: 'smooth' });
  }

  function changeDisplay() {
    setDisplay('block');
  }

  return (
    <>
      <header className="">
        <NavigationBarComponent />
        <div className="container learn-more-header">
          <div
            className="learn-more-text-container"
            role="button"
            tabIndex={0}
            onKeyDown={() => {}}
            onClick={() => {
              changeDisplay();
              setTimeout(() => {
                learnMoreScrolling();
                setFadeInLeft('fadeInLeft');
              }, 10);
            }}
          >
            <p className="learn-more-text">Learn more about my work</p>
            <span className="material-symbols-rounded learn-more-expand">
              expand_more
            </span>
          </div>
        </div>
      </header>

      <main style={{ display }} className={fadeInLeft}>
        <section className="container projects">
          <div className="projects-container">
            <img src={dexImg} alt="" className="img-dex" />
            <h1 className="title">Projects</h1>
            <p className="name">Pokedex</p>
            <img className="perfil-image" src={perfilImg} alt="" />
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              eius eveniet qui unde dicta voluptatibus consequatur magnam ex
              modi consectetur praesentium, voluptatum voluptatem ipsa
              aspernatur. Consequatur fugit totam doloremque nihil.
            </p>
            <input
              className="radio"
              type="radio"
              name="projects-options"
              id="option-1"
              checked
            />
            <input
              className="radio"
              type="radio"
              name="projects-options"
              id="option-2"
            />
            <input
              className="radio"
              type="radio"
              name="projects-options"
              id="option-3"
            />
            <div className="input-container">
              <label
                htmlFor="option-1"
                className="radio-label"
                style={{ background: radioBackground.radio1 }}
                onClick={() => {
                  changeRadioBackground(1);
                }}
              />
              <label
                htmlFor="option-2"
                className="radio-label"
                style={{ background: radioBackground.radio2 }}
                onClick={() => {
                  changeRadioBackground(2);
                }}
              />
              <label
                htmlFor="option-3"
                className="radio-label"
                style={{ background: radioBackground.radio3 }}
                onClick={() => {
                  changeRadioBackground(3);
                }}
              />
            </div>
          </div>
        </section>

        <section className="container skills">
          <div className="skills-inside-container">
            <h2 className="skills-title">Skills</h2>
            <ul
              ref={skillRef}
              className={`skills-container ${skillInView ? 'fadeInRight' : ''}`}
            >
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">html</p>
                  <img src={htmlIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">css</p>
                  <img src={cssIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">javascript</p>
                  <img src={javascriptIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">typescript</p>
                  <img src={typescriptIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">nodejs</p>
                  <img src={nodeJsIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">typeorm</p>
                  <img src={typeOrmIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">jest</p>
                  <img src={jestIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">docker</p>
                  <img src={dockerIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">react</p>
                  <img src={reactIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">cypress</p>
                  <img src={cypressIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">nestjs</p>
                  <img src={nestJsIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">postgresql</p>
                  <img src={postgreIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">mysql</p>
                  <img src={mySqlIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">prisma</p>
                  <img src={prismaIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">git</p>
                  <img src={gitIcon} alt="" className="skill-img" />
                </div>
              </li>
              <li className="skill-card">
                <div className="card">
                  <p className="skill-name">github</p>
                  <img src={gitHubIcon} alt="" className="skill-img" />
                </div>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="container" style={{ display }}>
        <FooterComponent />
      </footer>
    </>
  );
}
