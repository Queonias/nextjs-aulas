import Link from "next/link";
import styles from '../styles/Navbar.module.css'

export default function NavBar() {
    return (
        <>
          <ul className={ styles.navbar }>
            <li>
                <Link href="/">Página Inicial</Link>
            </li>
            <li>
                <Link href="/video">Vídeo</Link>
            </li>
            <li>
                <Link href="/todos">Todos</Link>
            </li>
            <li>
                <Link href="/products">Produtos</Link>
            </li>
            <li>
               <Link href="/contact">Contato</Link>
            </li >
            <li>
                <Link href="/about">Sobre nós</Link>
            </li>
          </ul>
        </>
    )
}