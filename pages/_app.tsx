import '../styles/_app.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps as NextAppProps } from "next/app";
import React from "react";

type AppProps<P = any> = {
  pageProps: P;
} & Omit<NextAppProps<P>, "pageProps">;


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});



function App({ Component, pageProps, err }: AppProps & { err: any }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component />
    </QueryClientProvider>
  );
}

export default App;
