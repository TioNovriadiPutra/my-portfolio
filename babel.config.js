module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            src: "./src",
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@containers": "./src/constants",
            "@hooks": "./src/helpers",
            "@navigation": "./src/hooks",
            "@routes": "./src/models",
            "@screen": "./src/navigation",
            "@store": "./src/redux",
            "@themes": "./src/screens",
            "@utils": "./src/services",
          },
        },
      ],
    ],
  };
};
