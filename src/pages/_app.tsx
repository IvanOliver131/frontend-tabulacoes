import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext";
import { DarkmodeProvider } from "../contexts/DarkmodeContext";
import { dark } from "../styles";
import { makeServer } from "../services/mirage";
import { QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from 'react-query/devtools';
import { queryClient } from "../services/queryClient";
import { ImportProvider } from "../contexts/ImportContext";
// import { AuthProvider } from '../contexts/AuthContext';

if (process.env.NODE_ENV === "development") {
  makeServer();
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <AuthProvider>
    <QueryClientProvider client={queryClient}>
      <DarkmodeProvider>
        <ImportProvider>
          <ChakraProvider theme={dark}>
            <SidebarDrawerProvider>
              <Component {...pageProps} />
            </SidebarDrawerProvider>
          </ChakraProvider>
        </ImportProvider>
      </DarkmodeProvider>
    </QueryClientProvider>
    // </AuthProvider>
  );
}

export default MyApp;
