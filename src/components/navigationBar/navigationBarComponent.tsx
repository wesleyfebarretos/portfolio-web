import './navigationBarComponent.css';

export function NavigationBarComponent() {
  return (
    <nav className="container nav-bar">
      <a href="#" className="logo">
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
    </nav>
  );
}
