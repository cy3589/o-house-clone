import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import store from '@store/index';
import { Provider } from 'react-redux';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const queryClientRef = useRef<QueryClient>();
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: { refetchOnWindowFocus: false, retry: false },
      },
    });
  }
  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

export default MyApp;
