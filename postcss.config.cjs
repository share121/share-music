module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss/nesting': 'postcss-nesting',
    tailwindcss: {},
    autoprefixer: {},
    'postcss-preset-env': {
      stage: 4,
      minimumVendorImplementations: 3,
      features: { 'nesting-rules': false }
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  }
}
