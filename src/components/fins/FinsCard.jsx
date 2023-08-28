
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiEdit, FiTrash2 } from "react-icons/fi";

import styles from "../layout/scss-modules/fins-card.module.scss";


export default function FinsCard({ id, name, value, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault() // para nenhum evento possível ser executado
    handleRemove(id)
  }
  return (
    <div className={styles.containerFins}>
      <div className={styles.contentFins}>
        <h2>{name}</h2>

        <h3>
          <span>Valor:</span> <span>R$ {value}</span>
        </h3>

        <h4 className={styles.categoryText}>
          <span className={`${styles[category]}`}></span> {category}
        </h4>

        <div className={styles.containerIcons}>
          <Link to={`/fins/${id}`}>
            <div>
              <FiEdit />
            </div> Editar
          </Link>

          <button onClick={remove}>
            <div>
              <FiTrash2 />
            </div> Excluir
          </button>
        </div>
      </div>
    </div>
  )
}

FinsCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  category: PropTypes.string,
  handleRemove: PropTypes.func.isRequired
}