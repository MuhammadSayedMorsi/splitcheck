import Head from "next/head";
import styles from "../styles/Home.module.css";
// grab bootstrap__library
import "bootstrap/dist/css/bootstrap.min.css";

// error-meassage
import Error from "../components/Error/Error";
import Header from "../components/Header/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>SplitCheck-Cms</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="container">
        <Error />
      </main>
    </div>
  );
}
