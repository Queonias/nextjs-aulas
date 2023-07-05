import Link from "next/link";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
    return (
        <div className={ styles.notFound }>
        <h1>404</h1>
        <p>Parece que esta página não existe</p>
        <Link href={`/`}>Voltar</Link>
        </div>
    )
}