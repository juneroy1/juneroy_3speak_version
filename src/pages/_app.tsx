import "../styles/globals.scss";

import "../styles/styles.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { useRouter } from "next/router";
import { Box, Sidebar } from "src/components";
import styled from "styled-components";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.css";

import { ChakraProvider } from "@chakra-ui/react";

import { ApolloProvider } from "@apollo/client";
import client from "../lib/apolloClient";
config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();
  const isAuth = pathname.includes("/auth");

  return (
    <Provider store={store}>
      <StyledGrid>
        <Box>{!isAuth && <Sidebar />}</Box>
        <Box width={"100%"} backgroundColor="#EFF4F6">
          <ChakraProvider>
            <ApolloProvider client={client}>
              <Component {...pageProps} />
            </ApolloProvider>
          </ChakraProvider>
        </Box>
      </StyledGrid>
    </Provider>
  );
}

const StyledGrid = styled(Box)`
  display: flex;
  grid-template-columns: 0.5fr 3fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

export default MyApp;
