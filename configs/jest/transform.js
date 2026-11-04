const { transform } = require('sucrase');

module.exports = {
  process(source, filename) {
    const transforms = ['typescript', 'imports', 'jest'];
    if (filename.endsWith('.tsx')) transforms.push('jsx');

    const { code, sourceMap } = transform(source, {
      transforms,
      jsxRuntime: 'automatic',
      filePath: filename,
      sourceMapOptions: { compiledFilename: filename },
    });

    return { code, map: sourceMap };
  },
};
