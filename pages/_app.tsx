import "../styles.css";
import "@perceptui/ui/percept-ui.css";
import { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component darkMode {...pageProps} />;
}
