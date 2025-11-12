import Head from "next/head";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Kumquat partners | Excellent services, satisfied clients!</title>
        <meta
          name="description"
          content="Kumquat partners offers top-tier legal services across multiple practice areas including Corporate Law, Real Estate, and Litigation. Tailored legal solutions for your business and personal needs."
        />

        {/* Open Graph Meta Tags for Social Media */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Kumquat partners |  Excellent services, satisfied clients!"
        />
        <meta
          property="og:description"
          content="Kumquat partners offers expert legal services across Corporate Law, Real Estate, Litigation, and more. Get tailored legal solutions today."
        />
        <meta
          property="og:image"
          content="https://www.kumquat-partners.vercel.app/hero.png"
        />
        <meta
          property="og:url"
          content="https://www.kumquat-partners.vercel.app"
        />
        <meta property="og:site_name" content="Kumquat partners" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Kumquat partners |  Excellent services, satisfied clients!"
        />
        <meta
          name="twitter:description"
          content="Kumquat partners offers expert legal services in various fields, providing clients with solutions tailored to their needs."
        />
        <meta
          name="twitter:image"
          content="https://www.kumquat-partners.vercel.app/hero.png"
        />
        <meta name="twitter:site" content="@kumquat-partners" />

        {/* Favicon */}
        <link rel="icon" href="/logo.png" />

        {/* Robots Meta Tag */}
        <meta name="robots" content="index, follow" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap"
          rel="stylesheet"
        />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: "Kumquat partners",
              url: "https://www.kumquat-partners.vercel.app",
              logo: "https://www.kumquat-partners.com/logo.png",
              description: "Excellent services, satisfied clients!",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lagos",
                addressCountry: "Nigeria",
                postalCode: "101001"
              },
              sameAs: [
                "https://twitter.com/kumquat-partners",
                "https://www.linkedin.com/company/kumquat-partners",
                "https://www.facebook.com/kumquat-partners"
              ]
            })
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
