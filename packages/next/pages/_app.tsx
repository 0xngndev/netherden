import type { AppProps } from "next/app";
import { GlobalStyles } from "../../shared/designSystem/global";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
