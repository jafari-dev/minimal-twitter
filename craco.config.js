const CracoAlias = require("craco-alias");

module.exports = {
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: "options",
        baseUrl: "./",
        aliases: {
          "_": "./src/lib",
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