import React, { createContext, useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "src/styles/theme";
import { Header } from "src/components/Header";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;
