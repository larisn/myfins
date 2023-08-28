
import PropTypes from "prop-types";
import styles from "../layout/scss-modules/select.module.scss";


export default function Select({ text, name, options, handleOnChange, value, }) {

  return (
    <div className={styles.formContainer}>
      <label htmlFor={name}>{text}</label>
      <select
        name={name}
        id={name}
        onChange={handleOnChange}
        value={value || ""}
        required
      >
        <option>Selecione a categoria:</option>
        {options.map((option) => (
          <option
            value={option.id}
            key={option.id}>{option.name}
          </option>
        ))}
      </select>
    </div>
  )
}

Select.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func.isRequired
}