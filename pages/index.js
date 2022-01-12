import { Container } from "../styles/styles";
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Take Note</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <h1>
          Welcome to <span style={{ color: "blue" }}>TakeNote</span>
        </h1>
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tufanbutuner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Tufan Butuner
        </a>
      </footer>
    </div>
  );
}
