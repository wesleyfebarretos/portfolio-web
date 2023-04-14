import { FooterComponent } from '../../components/footer/footerComponent';
import { NavigationBarComponent } from '../../components/navigationBar/navigationBarComponent';
import perfilImg from '../../images/perfil.jpg';
import './about.css';

export function AboutPage() {
  return (
    <>
      <header>
        <NavigationBarComponent />
      </header>

      <main>
        <div className="container about-container">
          <div className="about-img">
            <img src={perfilImg} alt="" />
          </div>

          <div className="about-description">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              voluptate exercitationem dolor eius rerum cupiditate magni, libero
              placeat nisi vero veritatis id natus nihil odio at repellendus
              tempore asperiores enim?
            </p>
          </div>
        </div>
      </main>

      <footer>
        <FooterComponent />
      </footer>
    </>
  );
}
