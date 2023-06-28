import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  project: {
    link: "https://github.com/colevandersWands/colevandersWands.github.io",
  },
  docsRepositoryBase:
    "https://github.com/colevandersWands/colevandersWands.github.io",
  footer: {
    text: "You can save any page as a PDF by opening it, ctr-p, then opening the document instead of printing it.",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  logo: (
    <>
      <img src="/thing.excalidraw.svg" width="100em" height="100em" />

      <span style={{ marginLeft: "-.4em", fontWeight: 800 }}>Evan Cole</span>
    </>
  ),
  search: {
    placeholder: "search this page",
  },
  primaryHue: {
    dark: 310,
    light: 252,
  },
};

export default config;
