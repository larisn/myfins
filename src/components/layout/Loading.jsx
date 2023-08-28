
import styles from "./scss-modules/loading.module.scss";
import loading from "../../assets/img/loader.svg";

export default function Loading() {
  return (
    <div className={styles.loading}>
      <img src={loading} />
    </div>
  )
}