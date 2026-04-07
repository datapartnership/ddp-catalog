import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";
import "./ddp.css";
import FaviconLink from "./components/FaviconLink";

const openSans = localFont({
  src: [
    { path: "../public/ddp_img/Fonts/Open_Sans/OpenSans-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/ddp_img/Fonts/Open_Sans/OpenSans-Italic.ttf", weight: "400", style: "italic" },
    { path: "../public/ddp_img/Fonts/Open_Sans/OpenSans-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "../public/ddp_img/Fonts/Open_Sans/OpenSans-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-open-sans",
  display: "swap",
});

const asapCondensed = localFont({
  src: [
    { path: "../public/ddp_img/Fonts/AsapCondensed-Regular.ttf", weight: "400", style: "normal" },
    { path: "../public/ddp_img/Fonts/AsapCondensed-Medium.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-asap-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://datapartnership.org'),
  title: {
    default: "DDP Catalog",
    template: "%s | DDP Catalog"
  },
  description: "Discover open source projects, data, and research from the Development Data Partnership.",
  authors: [{ name: "Development Data Partnership" }],
  creator: "Development Data Partnership",
  publisher: "Development Data Partnership",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://datapartnership.org/ddp-catalog',
    siteName: 'DDP Catalog',
    title: 'DDP Catalog',
    description: 'Open source projects and tools from the Development Data Partnership',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DDP Catalog',
    description: 'Open source projects and tools from the Development Data Partnership',
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${asapCondensed.variable}`}>
      <body className="antialiased">
        <FaviconLink />
        <Script id="wbg-data-init" strategy="beforeInteractive" type="text/javascript">
          {`var wbgData = wbgData || {};
wbgData.page = { pageInfo: { isDefaultPageName: "y", pageCategory: "home", contentType: "Homepage", channel: "its oss-catalog ext"}};
wbgData.site = { siteInfo: { siteLanguage: "English", siteType: "opensource", siteEnv: "prod"}, techInfo: { cmsType: "github", bussVPUnit: "its", bussUnit: "itset", bussUserGroup: "external", bussAgency: "ibrd"}};`}
        </Script>
        <Script
          src="//assets.adobedtm.com/223f6e2cf7c9/3eb6c9b72a93/launch-7bc0cdc67098.min.js"
          strategy="beforeInteractive"
        />
        {children}
      </body>
    </html>
  );
}
