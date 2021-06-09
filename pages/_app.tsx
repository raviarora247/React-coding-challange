import '../styles/_app.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { AppProps as NextAppProps } from "next/app";

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
      {/* <div className='heading container' {...pageProps} err={err} >
          <a href='/' ><h1>Splash Images.</h1></a>
      </div> */}
      <Component />
    </QueryClientProvider>
  );
}

export default App;
