/* eslint-disable node/global-require */

module.exports = {
  configs: {
    react: require('./lib/configs/react.js'),
  },
  rules: {
    'react-descriptive-effect': require('./lib/rules/react-descriptive-effect'),
  },
};
