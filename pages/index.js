import styles from "../styles/Home.module.css";
import Head from "next/head"; 
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Head>
      <title>Página Principal</title>
      <meta name="keywords" content="Roupas, Calçados, Boné"></meta>
      <meta name="description" content="Encontre a melhor roupa para voCê"></meta>
    </Head>
    <div>
      <h1 className={ styles.title }>página inicial</h1>
      <Image src="/images/city.jpg" width="300" height="400" alt="Cidade a noite" />
    </div>
    </>
  )
}
