
import PropTypes from "prop-types";
import styles from "../scss-modules/nav.module.scss";


export default function NavIcon({isOpen, toggleMode}) {
  return (
    <div
      className={`${styles.navMobile} ${isOpen ? styles.navMobileActive : ""}`}
      onClick={toggleMode}>
      <div className={styles.div1}></div>
      <div className={styles.div2}></div>
      <div className={styles.div3}></div>
    </div>
  )
}

NavIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleMode: PropTypes.func.isRequired
}


/* Por que utilizei props?
As props são uma forma de passar dados de um componente para outro componente em uma hierarquia de componentes. 

Nesse caso, quis passar as props "isOpen" e "toggleMode" do componente "Nav" para o componente "NavIcon", para que ele tenha acesso às informações sobre o estado do menu (isOpen ou !isOpen) e possa atualizar o estado quando o usuário clicar no ícone do menu. 

Com isso, o componente "NavIcon" poderá utilizar essas informações para renderizar o ícone de acordo com o estado atual do menu e também atualizar o estado quando o usuário clicar no ícone
*/