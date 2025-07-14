import { NavLink } from "react-router-dom";
const Header = () => (
  <header className="bg-dark text-light">
    <div className="container py-4">
      <h1 className="display-3">My Vacation Stays Website</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/">
              Overview
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/stays">
              Stays
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={"nav-link"} to="/About">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
