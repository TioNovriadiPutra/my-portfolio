module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        require.resolve("babel-plugin-module-resolver"),
        {
          root: ["./src"],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@containers": "./src/containers",
            "@hooks": "./src/hooks",
            "@navigation": "./src/navigation",
            "@routes": "./src/routes",
            "@screen": "./src/screen",
            "@store": "./src/store",
            "@themes": "./src/themes",
            "@utils": "./src/utils",
          },
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
