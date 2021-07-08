import type { AppProps } from "next/app";
import { GlobalStyles } from "../../shared/designSystem/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
