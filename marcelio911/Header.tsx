import React, { FC } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles/header.module.css";

import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from "baseui/header-navigation";

interface Props {
  title?: string;
}

const MaHeader: FC<Props> = () => {
  return (
    <div>
      <Head>
        <title>Rifa Online Grátis</title>
        <meta name="description" content="Rifa Online grátis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderNavigation>
        <StyledNavigationList $align={ALIGN.left}>
          <StyledNavigationItem>
            <a href="/#" className={styles.card}>
              <Image
                src="/assets/logo/rifa.png"
                width={60}
                height={70}
                className={styles.logo}
                objectFit="cover"
                quality={80}
                alt={"Logo Rifa ONline"}
              />
            </a>
          </StyledNavigationItem>
        </StyledNavigationList>
        <StyledNavigationList $align={ALIGN.center} />
      </HeaderNavigation>
    </div>
  );
};

export default MaHeader;
