import React, { createContext, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "src/styles/theme";
import { Header } from "src/components/Header";
import { Footer } from "src/components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
};

export default MyApp;
