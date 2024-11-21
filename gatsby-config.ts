import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Eleva Inovação - Sua empresa melhor, direto ao ponto.`,
    siteUrl: `https://www.elevainovacao.com.br`,
    siteName: `Eleva Inovação`,
    siteDescription: `Que tal um site leve, um logotipo original ou inovar no que você vende?
        Você pensa, nós fazemos!`,
    siteImage: `./src/images/og-image@2x.jpg`,
    favIconIco: `./src/images/favicon.ico`,
    favIconSvg: `./src/images/favicon.svg`,
    siteWebmanifest: `./src/images/site.webmanifest`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};

export default config;
