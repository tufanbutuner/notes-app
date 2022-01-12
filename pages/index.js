import { Box, Button, Grommet, Heading } from "grommet";

import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  const theme = {
    global: {
      font: {
        family: "Inter",
        size: "14px",
        height: "20px",
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <Head>
        <title>Take Note</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box direction="column" pad="xlarge" justify="center" align="center">
        <Heading level="3" margin="none">
          Welcome to <span style={{ color: "blue" }}>TakeNote</span>
        </Heading>

        <h3>Enter task here</h3>
        <input type="text" placeholder="Enter"></input>
        <Button primary label="label" />
      </Box>

      <footer className={styles.footer}>
        <a
          href="https://github.com/tufanbutuner"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Tufan Butuner
        </a>
      </footer>
    </Grommet>
  );
}
