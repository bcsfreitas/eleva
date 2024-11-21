import React from "react";
import FaviconIco from "../images/favicon.ico";
import FaviconSvg from "../images/favicon.svg";
import AppleIcon from "../images/apple-touch-icon.png";
import OgImage from "../images/og-image@2x.jpg";


const Metadata = () => {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Eleva.</title>
      <meta name="description" content="Eleva." />
      <meta name="author" content="Eleva" />

      <meta property="og:site_name" content="Eleva Inovação" />
      <meta property="og:site" content="www.elevainovacao.com.br" />
      <meta
        property="og:title"
        content="Eleva Inovação - Sua empresa melhor, direto ao ponto."
      />
      <meta
        property="og:description"
        content="Que tal um site leve, um logotipo original ou inovar no que você vende?
            Você pensa, nós fazemos!"
      />
      <meta property="og:image" content={OgImage} />
      <meta property="og:url" content="www.elevainovacao.com.br" />
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" href={FaviconIco} sizes="any" />
      <link rel="icon" href={FaviconSvg} type="image/svg+xml" />
      <link rel="apple-touch-icon" href={AppleIcon} />
      <meta name="theme-color" content="#FFFFFF" />
      </div>
  );
};

export default Metadata;
