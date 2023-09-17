module.exports = {
    // ... other Jest configuration options ...
    transform: {
      // Add a custom transformer for problematic packages/files
      'node_modules/@adobe/css-tools/dist/index.cjs': 'babel-jest',
    },
  };
  