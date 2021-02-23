import React, { FC } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "src/styles/theme";
import { Header } from "src/components/Header";
import { AppProps } from "next/app";
import { Footer } from "src/components/Footer";
import "../../styles/globals.css";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
