import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";

const jokerMan = localFont({
  src: [
    {
      path: "../../public/fonts/Jokerman.otf",
      weight: "400",
    },
  ],
  variable: "--font-jokerman",
});

const luciaCalligraphy = localFont({
  src: [
    {
      path: "../../public/fonts/Lucida Calligraphy Font.ttf",
      weight: "400",
    },
  ],
  variable: "--font-lucia-calligraphy",
});

// const elephant = localFont({
//   src: [
//     {
//       path: "../../public/fonts/ELEPHNT.TTF",
//       weight: "400",
//     },
//   ],
//   variable: "--font-elephant",
// });

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
