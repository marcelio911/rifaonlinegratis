import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Layout.module.css";
import LogRocket from "logrocket";
import React, { useEffect, useState } from "react";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider, LightTheme, useStyletron } from "baseui";
import MaHeader from "../Header";
import { Button } from "baseui/button";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
LogRocket.init("ougvmi/rifaonline");

const Layout: NextPage = ({children}) => {
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
    <StyletronProvider value={engine}>
      <BaseProvider theme={{ ...LightTheme, direction: "rtl" }}>
        <div className={styles.container}>
          <MaHeader></MaHeader>

          <main className={styles.main}>
          { children }
          </main>

          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{" "}
              <span className={styles.logo}>
                <Image
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={72}
                  height={16}
                />
              </span>
            </a>
          </footer>
        </div>
      </BaseProvider>
    </StyletronProvider>
  );
};

export default Layout;
