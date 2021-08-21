const { ESLINT_MODES } = require("@craco/craco");
const CracoAlias = require("craco-alias");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          _: "./src/lib",
          "_/*": "./src/lib/*",
          "@": "./src/assets",
          "@/*": "./src/assets/*",
          "#": "./src/components",
          "#/*": "./src/components/*",
        },
        tsConfigPath: "./tsconfig.paths.json",
      },
    },
  ],
};
