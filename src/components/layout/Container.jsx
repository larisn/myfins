
import PropTypes from "prop-types";
import styles from "./scss-modules/container.module.scss"


export default function Container(props) {
  return <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  customClass: PropTypes.node
}