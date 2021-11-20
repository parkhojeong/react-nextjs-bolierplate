/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
module.exports = withBundleAnalyzer({
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
