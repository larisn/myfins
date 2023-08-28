
import PropTypes from "prop-types";
import styles from "../layout/scss-modules/input.module.scss";


export default function Input({ type, text, name, placeholder, handleOnChange, value }) {
  return (
    <div className={styles.formContainer}>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        required title="Por favor, digite o nome da sua despesa."
      />
    </div>
  )
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
}