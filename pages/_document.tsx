import Document, {
  Html,
  DocumentContext,
  Head,
  Main,
  NextScript,
} from 'next/document';

import React from 'react';

// React.useLayoutEffect = React.useEffect;

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
