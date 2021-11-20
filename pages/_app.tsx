import { AppProps } from 'next/app';
import { createGlobalStyle, DefaultTheme, GlobalStyleComponent } from 'styled-components';
import { Provider } from 'react-redux';
import Head from 'next/head';
import { store } from 'store/store';
import DefaultLayout from 'components/common/DefaultLayout';

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
`;

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>jebs admin</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </Head>

      <GlobalStyle />
      <Provider store={store}>
        <DefaultLayout>
          <Component {...pageProps} />
        </DefaultLayout>
      </Provider>
    </>
  );
}

export default MyApp;
