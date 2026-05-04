import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Brian Wong",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "google",
      tagId: "G-CRSL2V4ELV",
    },
    locale: "en-US",
    baseUrl: "brianwong.com",
    ignorePatterns: ["private", "Templates", ".obsidian", "copilot", "copilot-custom-prompts", "Attachments"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Roboto",
        body: "Oxygen",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#f4f2eb", //page background
          lightgray: "#c1c0c0", //borders
          gray: "#848484", //graph links
          darkgray: "#212121", //body text
          dark: "#000000", //header text and icons
          secondary: "#9f68fd", // link color, current graph node
          tertiary: "#9b9b9b", // hover states visited graph nodes
          highlight: "rgba(116, 116, 116, 0)", //internal link background, highligted text 
          textHighlight: "#79797900", // markdown higlighted text background
        },
        darkMode: {
          light: "#2f2f2f", // page background
          lightgray: "#e1e1e1", //boarders
          gray: "#646464", //graph links
          darkgray: "#ffffffc6", //body text
          dark: "#ebebec", // header text and icons
          secondary: "#a388d2", //links color, current graph node
          tertiary: "#a7a7a7", // hover states visited graph nodes
          highlight: "rgba(44, 44, 44, 0.17)", // internal link backfround, highlighted text
          textHighlight: "#b3aa0288", // markdown highlighted text background
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      // Plugin.CustomOgImages(),
    ],
  },
}

export default config
