import "../styles/globals.css";
import Header from "./Header";
import Providers from "./Providers";
import { fetchSocialIcons } from "../utils/fetchSocials";
import Head from "./head";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const socialIcons = await fetchSocialIcons();
  return (
    <html>
      <Head />

      <body className="overflow-x-hidden bg-violet-50 text-zinc-800 dark:bg-zinc-900 dark:text-white overflow-y-scroll scrollbar-hide">
        <Providers>
          <Header socialIcons={socialIcons} />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
