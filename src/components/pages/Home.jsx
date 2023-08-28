
import styles from "../layout/scss-modules/home.module.scss";
import tree from "../../assets/img/tree.svg";
import womanHome from "../../assets/img/woman-home.svg";
import Button from '../layout/Button';


export default function Home() {
  return (
    <section>
      <div className={styles.containerHome}>
        <img src={womanHome} className={styles.womanHome} />
        <div>
          <img src={tree} className={styles.tree} />
          <h1>
            Bem-vindo ao my fins<span>.</span>
          </h1>

          <div>
            <h2>Controle suas finanças de forma</h2>
            <span>simples e rápida!</span>
          </div>

          <div className={styles.buttonHome}>
            <Button to="/newfins" text="Começar" />
          </div>
        </div>
      </div>
    </section>
  );
}

