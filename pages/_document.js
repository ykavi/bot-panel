import { Html, Head, Main, NextScript } from 'next/document';
import normalizeCSS from '../styles/normalize';
import globalCSS from '../styles/global';

const Document = () => {
  return (
    <Html lang="en">
      <Head>
        <style
          dangerouslySetInnerHTML={{
            __html: `
                ${normalizeCSS}
                ${globalCSS}
              `,
          }}
        />
        <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
