module.exports = {
  purge: {
    content: ['./src/**/*.html', './src/**/*.scss', './src/**/*.ts'],
  },
  theme: {},
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
};
