import Head from "next/head";
import Image from "next/image";
import Header from "./Header";
import Footer from "./Footer";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  pageTitle,
  pageDescription,
  banner,
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content={
            pageDescription ||
            "Learn how to build a personal website using Next.js"
          }
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{pageTitle || "NEO"}</title>
      </Head>
      <Header />
      {banner ? (
        <>
          <div className="banner">
            <h5>{banner}</h5>
          </div>
        </>
      ) : null}
      {children}
      <Footer />
    </>
  );
}
