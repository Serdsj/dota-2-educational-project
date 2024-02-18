import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import react from "@vitejs/plugin-react";
import stylelint from "vite-plugin-stylelint";

export default () => {
  return defineConfig({
    plugins: [
      react(),
      stylelint({
        fix: true,
      }),
      ViteImageOptimizer({
        png: {
          quality: 90,
        },
        svg: {
          svgoConfig: {
            multipass: true,
            plugins: [
              {
                name: "preset-default",
                params: {
                  overrides: {
                    cleanupNumericValues: false,
                    removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                  },
                  cleanupIDs: {
                    minify: false,
                    remove: false,
                  },
                  convertPathData: false,
                },
              },
              "sortAttrs",
              {
                name: "addAttributesToSVGElement",
                params: {
                  attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
                },
              },
            ],
          },
        },
      }),
    ],
  });
};
