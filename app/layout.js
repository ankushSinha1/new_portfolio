import Script from "next/script";
import "aos/dist/aos.css";
import "./globals.css";
import AosInitializer from "../components/AosInitializer";
import Background from "../components/Background";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

const analyticsId =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || "G-5MGTQMM8M5"
    : "";

export const metadata = {
  metadataBase: new URL("https://darshanbhuva.vercel.app"),
  title: "Ankush Sinha | Software Developer",
  description:
    "Ankush Sinha is a software developer specializing in creating dynamic, scalable, and user-centric web applications using modern technologies.",
  keywords: [
    "Ankush Sinha",
    "portfolio",
    "web developer",
    "Next.js developer",
    "frontend development",
    "JavaScript",
    "responsive design",
  ],
  authors: [{ name: "Ankush Sinha" }],
  robots: "index, follow",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Ankush Sinha",
    description:
      "Ankush Sinha is a software developer specializing in creating dynamic, scalable, and user-centric web applications using modern technologies.",
    url: "/",
    type: "website",
    images: ["/assets/logo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankush Sinha",
    description:
      "Ankush Sinha is a software developer specializing in creating dynamic, scalable, and user-centric web applications using modern technologies.",
    images: ["/assets/logo.jpg"],
  },
  icons: { icon: "/assets/favicon.ico" },
  verification: {
    google: "vzGKQl03I1GxMn-jvI64FLQin8zbx_0OeTc-_WzD9B0",
  },
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
