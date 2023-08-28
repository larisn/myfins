
import PropTypes from "prop-types";
import { FiTrash2 } from "react-icons/fi";
import styles from "../layout/scss-modules/fins-card.module.scss";

export default function PriorityCard({ id, name, cost, description, handleRemove }) {
  const remove = (e) => {
    e.preventDefault() // para nenhum evento possível ser executado
    handleRemove(id, cost)
  }

  return (
    <div className={styles.containerFins}>
      <div className={styles.contentFins}>
        <h2>{name}</h2>
        <h3>
          <span>Valor total:</span> <span>R$ {cost}</span>
        </h3>

        <h4>
          <span>Descrição:
            <span> {description}</span>
          </span>
        </h4>

        <div className={styles.containerIcons}>
          <button onClick={remove}>
            <div>
              <FiTrash2 />
            </div>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}

PriorityCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  cost: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  handleRemove: PropTypes.func.isRequired
}
