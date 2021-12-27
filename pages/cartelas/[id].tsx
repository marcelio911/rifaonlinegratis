import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Cartelas.module.css";
import LogRocket from "logrocket";
import React, { useEffect, useState } from "react";
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";
import MaHeader from "../../marcelio911/Header";
import Layout from "../../marcelio911/Layout";
import Link from "next/link";
import { Button } from "baseui/button";
LogRocket.init("ougvmi/rifaonline");

const Cartelas: NextPage = () => {
  const [engine, setEngine] = useState<any>(null);
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

  if (!engine) return null;

  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.sidebar}></section>

        <div className={styles.content_center}>
            <Link href={`/`}>
              <Button onClick={() => {}}>Voltar</Button>
            </Link>
        </div>
      </main>
    </Layout>
  );
};

export default Cartelas;
