import './navbar.css';

export default function Navbar() {
  return (
    <nav className="nav-topo">
      <div id="id-logo">NEWSTECH</div>
      <input id="menu-responsivo" type="checkbox" />
      <label className="menu-btn-container">
        <div className="menu-btn"></div>
      </label>
      <ul className="menu">
        <li className="menu-item">
          <a href="#">Sobre</a>
        </li>
        <li className="menu-item">
          <a href="#">Projetos</a>
        </li>
        <li className="menu-item">
          <a href="#">Junte-se a nós</a>
        </li>
        <li className="menu-item">
          <a href="#">Contato</a>
        </li>
      </ul>
    </nav>
  );
}
