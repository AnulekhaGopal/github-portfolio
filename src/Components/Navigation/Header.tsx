import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div id="main-container">
        <h1>Anulekha Karangatte</h1>
        <header id="main-header">
          <nav>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
              <li>
                <NavLink to="/education">Education</NavLink>
              </li>
              <li>
                <NavLink to="/experience">Experience</NavLink>
              </li>
              <li>
                <NavLink to="/skills">Skills</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}

export default Header;
