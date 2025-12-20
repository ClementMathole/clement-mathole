import { Link } from "react-router-dom";
import { useState } from "react";
import mailIcon from "../assets/email.png";
import menuIcon from "../assets/menu.png";
import closeIcon from "../assets/close.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className={menuOpen ? "nav open" : "nav"}>
        <a href="mailto:clementmathole003@gmail.com" id="mail">
          clementmathole003@gmail.com <img src={mailIcon} alt="email" width={15} />
        </a>

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>
          <li>
            <Link 
              to="/" 
              onClick={() => {
                setMenuOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
           Home
            </Link>
          </li>
          <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>

          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>

        <div className="mobile">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <img src={menuOpen ? closeIcon : menuIcon} alt="menu" width={20} />
          </button>
        </div>
      </nav>
      <hr />
    </>
  );
};

export default Navbar;
