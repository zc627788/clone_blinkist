import React from 'react';
import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '@/style/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default MyApp;