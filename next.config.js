/* eslint-disable @typescript-eslint/no-var-requires */
const analyzerConfig = require('./next.config.analyzer.js');
const antdConfig = require('./next.config.antd');

module.exports = {
  ...analyzerConfig,
  ...antdConfig,
};
