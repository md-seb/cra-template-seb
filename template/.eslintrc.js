// see https://github.com/facebook/create-react-app/tree/master/packages/eslint-config-react-app
module.exports = {
  root: true,
  extends: [
    'react-app',
    'prettier', // eslint-plugin-prettier
    'prettier/react', // support eslint-plugin-react
  ],
  plugins: ['prettier', 'jest', 'react'],
  rules: {
    // Place to specify ESLint rules.
    // Can be used to overwrite rules specified from the extended configs
    'react/boolean-prop-naming': ['warn'],
    'react/no-access-state-in-setstate': 'error',
    'react/no-deprecated': 'warn',
    'react/no-array-index-key': 'warn',
    'react/no-unused-prop-types': 'warn',
    'react/no-unused-state': 'warn',
    'react/sort-comp': 'warn',
    'react/sort-prop-types': 'warn',
    'prettier/prettier': 'warn',
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  },
};
