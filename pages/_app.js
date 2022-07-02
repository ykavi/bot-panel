import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import theme from '@theme';
import { MainLayout } from '@layout';
import { wrapper } from '../redux/store';
import '../styles/antdstyles.less';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>BOT</title>;
      <meta name="description" content={'description'} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
    </Head>

    <ThemeProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ThemeProvider>
  </>
);

export default wrapper.withRedux(MyApp);
