import { useEffect } from 'react';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';
import Head from '@/components/Head';
import Script from "next/script";

import '@/styles/globals.css';
import '@/styles/themes.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
    <Layout>
      <Head title={`Josep Pou | ${pageProps.title}`} />

      <Script
        async
        src="https://stats.repou.dev/script.js"
        data-website-id="1e4d17f2-3fc2-4eec-9687-e7311c92015e"
      />
      
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
