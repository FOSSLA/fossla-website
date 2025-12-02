import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";

export default defineConfig({
  srcDir: "src",
  integrations: [tailwind({ applyBaseStyles: false }), astroIcon()],
  aliases: {
    "@": "./src"
  }
});
