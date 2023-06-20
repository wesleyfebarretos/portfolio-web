/* eslint-disable react/require-default-props */
import './navigationBarComponent.css';

interface INavBarProps {
  updateOpacityOfIntroImage?: (condition: boolean) => void;
  updateOpacityOfAboutIntroImage?: (condition: boolean) => void;
}

export function NavigationBarComponent({
  updateOpacityOfIntroImage,
  updateOpacityOfAboutIntroImage,
}: INavBarProps) {
  return (
    <nav className="container nav-bar">
      <a href="/" className="logo">
        <p className="logo-name">wesley ferreira</p>
        <span className="logo-description">software developer</span>
      </a>
      <ul className="nav-items-container">
        <li className="nav-items">
          <a href="/" className="link-nav">
            home
          </a>
        </li>
        <li className="nav-items">
          <a href="/about" className="link-nav">
            about
          </a>
        </li>
      </ul>
      <div className="checkbox-container">
        <input
          type="checkbox"
          id="checkbox"
          onChange={(e) => {
            const ball = document.querySelector(
              '.label-ball'
            ) as HTMLDivElement;
            const label = document.querySelector(
              '.label-checkbox'
            ) as HTMLLabelElement;
            const root = document.querySelector('html') as HTMLElement;

            if (e.target.checked) {
              ball.style.transform = `translateX(${label.offsetWidth - 26}px)`;
              if (updateOpacityOfIntroImage) {
                updateOpacityOfIntroImage(true);
              }
              if (updateOpacityOfAboutIntroImage) {
                updateOpacityOfAboutIntroImage(true);
              }
            } else {
              ball.style.transform = 'translateX(0)';
              if (updateOpacityOfIntroImage) {
                updateOpacityOfIntroImage(false);
              }
              if (updateOpacityOfAboutIntroImage) {
                updateOpacityOfAboutIntroImage(false);
              }
            }

            root?.classList.toggle('dark-mode');
          }}
        />
        <label htmlFor="checkbox" className="label-checkbox">
          <i className="fa-solid fa-moon" />
          <i className="fa-solid fa-sun" />
          <div className="label-ball" />
        </label>
      </div>
    </nav>
  );
}
