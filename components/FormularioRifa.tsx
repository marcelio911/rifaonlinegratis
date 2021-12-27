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

const FormRifa: FC<Props> = () => {
  return (
    <div>
      <span>Titulo da Rifa</span>
      <span>Categoria</span>
      <span>Quantidade de numeros</span>
      <span>Valor</span>
      <span>Contato</span>
      <span>Data do concurso de sorte</span>
    </div>
  );
};

export default FormRifa;
