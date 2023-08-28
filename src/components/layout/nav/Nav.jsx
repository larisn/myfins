
import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "../scss-modules/nav.module.scss";
import Container from "../Container";
import NavItems from "./NavItems";
import NavIcon from "./NavIcon";
import brand from "../../../assets/img/logo.svg";


export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMode = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className={styles.nav}>
      <Container>
        <div className={styles.containerNav}>
          <Link to="/">
            <img src={brand} alt="myfins." />
          </Link>
          <ul className={styles.list}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/newfins">Criar lista</Link>
            </li>
            <li>
              <Link to="/myfins">Despesas</Link>
            </li>
            <li>
              <Link>Ajuda</Link>
            </li>
          </ul>
          <NavIcon isOpen={isOpen} toggleMode={toggleMode} />
        </div>
        <NavItems isOpen={isOpen} toggleMode={toggleMode} />
      </Container>
    </nav>
  );
}

/* O useState é utilizado para gerenciar o estado de um componente, ele deve ser utilizado no componente onde o estado é necessário.

No caso do "Nav", a ideia é que ele seja responsável por gerenciar o estado da navegação (isOpen ou !isOpen), e por isso foi colocado o useState neste componente. Já os componentes "NavIcon" e "NavItems" são filhos do Nav, recebendo como props o estado gerenciado pelo Nav.

Dessa forma, o "NavIcon" e o "NavItems" não precisam gerenciar o estado da navegação, apenas receber o estado e as funções como props para poderem renderizar corretamente.
*/