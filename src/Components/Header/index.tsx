import ThemeSwitch from '../ThemeSwitch';
import './styles.scss';

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        
        <div className="header__brand">
          <div className="header__logo">G</div>

          <div className="header__titles">
            <div className="header__title">Graciki</div>
            <small className="header__subtitle">Encurtador de url</small>
          </div>
        </div>

        <div className="header__right">
          <nav className="header__nav">
            <a href="#">Produto</a>
            <a href="#">Preços</a>
          </nav>

          <ThemeSwitch />
        </div>

      </div>
    </header>
  );
}
