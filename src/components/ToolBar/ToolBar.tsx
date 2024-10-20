import { NavLink } from "react-router-dom";
import "./Toolbar.css";

const ToolBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark p-4">
        <div className="container px-4">
          <NavLink className="name" to="/">
            <span className=" navbar-brand mb-0 text-white fs-2 ">
              Aleksandra Melnikova
            </span>
          </NavLink>
          <div className="ms-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/AboutMe">
                  About me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/Contacts">
                  Contacts
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/Portfolio">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ToolBar;
