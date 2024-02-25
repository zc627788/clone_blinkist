import React, { useEffect } from "react";
import Layout from "@/components/UI/Layout";
import type { AppProps } from "next/app";
import "@/style/globals.css";
import { CustomContextProvider } from "@/contexts/CustomContext";
import { useRouter } from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  return (
    <CustomContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CustomContextProvider>
  );
};

export default MyApp;
