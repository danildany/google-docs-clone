import "tailwindcss/tailwind.css";
import "@material-tailwind/react/tailwind.css";
import Head from "next/head";
import { Provider } from "next-auth/client";
import "../styles.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
