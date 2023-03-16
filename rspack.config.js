/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './index.jsx',
  },
  builtins: {
    html: [
      {
        template: './index.html',
      },
    ],
  },
  // Open the page in the browser while developing.
  devServer: {
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        type: 'asset',
      },
      {
        test: /\.png$/,
        type: 'asset',
      },
      {
        test: /\.ttf$/,
        type: 'asset',
      },
    ],
  },
}
