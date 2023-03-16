/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
  context: __dirname,
  entry: {
    main: './index.jsx',
  },
  output: {
    // NOTE required only for deployment to GitHub pages.
    publicPath: process.env.NODE_ENV === 'production' ? 'rspack-react-pdf' : '/',
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
