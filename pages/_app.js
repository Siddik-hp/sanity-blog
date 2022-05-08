import "../styles/globals.scss";
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress
        color="#EAB308"
        startPosition={0.3}
        stopDelayMs={200}
        height={4}
        showOnShallow={true}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
