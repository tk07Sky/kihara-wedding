module.exports = {
  root: true,
  env: {
    node: true,
    jest: true,
  },
  extends: ['next/core-web-vitals', 'prettier'],
  rules: {
    '@next/next/no-img-element': 'off',
  },
};
