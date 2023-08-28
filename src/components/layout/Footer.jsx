
import styles from "./scss-modules/footer.module.scss";
import wave from "../../assets/img/wave.svg";

export default function Footer() {
  return (
    <footer>
      <img src={wave} className={styles.wave} />
      <div className={styles.containerFooter}>
        <div>
          <p>
            Copyright © 2023 <span> myfins.</span> Todos os direitos reservados.
          </p>
        </div>

        <div>
          <p>
            Powered by <span>larisn</span>
          </p>
        </div>
      </div>
    </footer>
  )
}