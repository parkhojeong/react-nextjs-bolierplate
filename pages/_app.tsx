import { AppProps } from 'next/app';
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { store } from 'store/store';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
`;

function MyApp({ Component, pageProps, router }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <GlobalStyle />
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default MyApp;
