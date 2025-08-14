// pages/_app.tsx

import Layout from "@/components/layouts/Layout";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import "@/styles/globals.css";



export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CountProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CountProvider>
  );
}
