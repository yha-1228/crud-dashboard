module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
  ],
  plugins: ['stylelint-order'],
  ignoreFiles: ['**/node_modules/**', '**/normalize.css', 'src/**/*.tsx'],
  rules: {
    // rulesへの追加はVSC再起動しないとダメな場合がある
    'property-no-unknown': [
      true,
      {
        ignoreProperties: ['composes'],
      },
    ],
    'string-quotes': 'single',
  },
};
