import Script from "next/script";
import "aos/dist/aos.css";
import "./globals.css";
import AosInitializer from "../components/AosInitializer";
import Background from "../components/Background";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import content from "./layout.json";

const analyticsId =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || content.googleAnalyticsId
    : "";

export const metadata = {
  metadataBase: new URL(content.metadataBase),
  title: content.title,
  description: content.description,
  keywords: content.keywords,
  authors: [{ name: content.author }],
  robots: content.robots,
  alternates: { canonical: content.canonical },
  openGraph: {
    title: content.openGraph.title,
    description: content.openGraph.description,
    url: content.openGraph.url,
    type: content.openGraph.type,
    images: [content.openGraph.image],
  },
  twitter: {
    card: content.twitter.card,
    title: content.twitter.title,
    description: content.twitter.description,
    images: [content.twitter.image],
  },
  icons: { icon: content.icon },
  verification: { google: content.googleSiteVerification },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AosInitializer />
        <Background />
        <Header />
        <Sidebar />
        {children}
        <Footer />
        {analyticsId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${analyticsId}`}
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || [];
function gtag(){window.dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', ${JSON.stringify(analyticsId)});`}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
