import Head from "next/head";
// import styles from "../styles/Home.module.css";
// grab bootstrap__library
import "bootstrap/dist/css/bootstrap.min.css";
import BHeader from "../components/Header/BusinessHeader";
import Error from "../components/error/Error";
// import styled from "styled-components"

export default function Home() {
  return (
    <div>
      <Head>
        <title>SplitCheck-Cms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BHeader />
      <main className="container">
        <Error />
      </main>
    </div>
  );
}
