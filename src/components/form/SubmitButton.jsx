
import PropTypes from "prop-types";
import styles from "../layout/scss-modules/submitbutton.module.scss";


export default function SubmitButton({ text }) {
  return (
    <div>
      <button className={styles.submitButton}>{text}</button>
    </div>
  )
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired
}