import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LogRocket from "logrocket";
import React, { useEffect, useState } from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme, useStyletron } from "baseui";
import MaHeader from "../marcelio911/Header";
import { Button } from "baseui/button";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import Layout from "../marcelio911/Layout";
LogRocket.init("ougvmi/rifaonline");

const Home: NextPage = () => {
  const [engine, setEngine] = useState<any>(null);
  const [css, theme] = useStyletron();
  const [id, setId] = useState<any>(null);

  useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import("styletron-engine-atomic").then((styletron) => {
      const clientEngine = new styletron.Client();
      setEngine(clientEngine);
    });
  }, []);

  useEffect(() => {
    console.log("uuid.v4():: ", uuidv4());
    setId(uuidv4());
  }, [uuidv4]);

  if (!engine) return null;

  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Organize sua RIFA ONLINE de forma simples e fácil
        </h1>

        <p className={styles.description}></p>

        <div className={styles.grid}>
          <Link href={`/cartelas/${id}`}>
            <Button onClick={() => {}}>Gerador de cartela</Button>
          </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
