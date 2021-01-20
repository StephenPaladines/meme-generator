import Head from "next/head";
import Dashboard from "../components/dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meme Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Dashboard></Dashboard>
      </main>
    </div>
  );
}
