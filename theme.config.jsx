import { useRouter } from "next/router";
import Footer from "./components/footer";
export default {
  logo: (
    <div className="flex items-center justify-center gap-2">
      <span className="my-0 font-bold text-2xl">Percept UI</span>
    </div>
  ),
  docsRepositoryBase: "https://github.com/perceptui/docs/tree/main/",
  project: {
    link: "https://github.com/perceptui/ui",
  },
  head: () => {
    const router = useRouter();
    const path = router.pathname.split("/");
    let title = path[path.length === 1 ? path : path.length - 1];
    function capitalizeFirstLetter(string) {
      return string[0].toUpperCase() + string.slice(1);
    }
    title = capitalizeFirstLetter(title);
    return (
      <>
        <link rel="shortcut icon" href="./assets/favicon.ico" />
        <title>{title} - Percept UI</title>
      </>
    );
  },
  toc: {
    backToTop: true,
  },
  footer: {
    content: <Footer />,
  },
  darkMode: {
    default: false,
  },
  themeSwitch: {
    useOptions() {
      return {
        light: "Light",
        dark: "Dark",
        system: "System",
      };
    },
  },
  navigation: true,
};
