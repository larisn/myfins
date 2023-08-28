
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "./scss-modules/message.module.scss";

export default function Message({ type, msg }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!msg) {
      setVisible(false)
      return;
    }
    
    setVisible(true)

    const timer = setTimeout(() => {
      setVisible(false)
    }, 1000)
    return () => clearTimeout(timer)
  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  )
}

Message.propTypes = {
  type: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired
}

