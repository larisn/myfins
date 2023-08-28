
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./scss-modules/button.module.scss";


export default function Button({ to, text, img }) {
  return (
    <Link to={to}>
      <button className={styles.button}>
        <img src={img} />
        <div className={styles.buttonText}>{text}</div>
      </button>
    </Link>
  )
}

Button.propTypes = {
  img: PropTypes.string,
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}
