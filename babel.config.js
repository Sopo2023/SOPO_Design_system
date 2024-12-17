const config = {
    babelHelpers: 'runtime',
    exclude: 'node_modules/**',
    presets: [
      "@babel/preset-env",
      "@babel/preset-react",
      "@babel/preset-typescript",
    ],
  };
  
  module.exports = config;