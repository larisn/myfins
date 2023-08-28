
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../scss-modules/nav.module.scss";

export default function NavItems({isOpen, toggleMode}) {
  const closeNavLinkClick = () => {
    // fecha o menu quando um link é clicado
    toggleMode()
  }
  return (
    <nav
      className={`${styles.navMobileOptions} ${
        isOpen ? styles.navMobileOptionsActive : ""
      }`}
    >
      <ul className={styles.listMobile}>
        <li>
          <Link to="/" onClick={closeNavLinkClick}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/newfins" onClick={closeNavLinkClick}>
            Nova Despesa
          </Link>
        </li>

        <li>
          <Link to="/myfins" onClick={closeNavLinkClick}>
            Despesas
          </Link>
        </li>

        <li>
          <Link onClick={closeNavLinkClick}>
            Ajuda
          </Link>
        </li>
      </ul>
    </nav>
  )
}

NavItems.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired
}
