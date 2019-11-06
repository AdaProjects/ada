module.exports = {
  presets: [['@babel/preset-env', {
      "useBuiltIns": "entry"
    }], '@babel/preset-react'],
  env: {
    test: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      plugins:  ["@babel/plugin-transform-modules-commonjs"],
    },
  },
  babelrcRoots: [
    ".",
    "packages/*",
  ]
};
