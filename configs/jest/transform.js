const { transform } = require('sucrase');

module.exports = {
  process(source, filename) {
    const { code, sourceMap } = transform(source, {
      transforms: ['typescript', 'imports', 'jest', ...(filename.endsWith('.tsx') ? ['jsx'] : [])],
      jsxRuntime: 'automatic',
      filePath: filename,
      sourceMapOptions: { compiledFilename: filename },
    });
    return { code, map: sourceMap };
  },
};
