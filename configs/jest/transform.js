const { createHash } = require('crypto');
const { readFileSync } = require('fs');
const { transform } = require('sucrase');
const { version: sucraseVersion } = require('sucrase/package.json');

const transformerSource = readFileSync(__filename);

module.exports = {
  getCacheKey(source, filename, configString, { instrument }) {
    return createHash('md5')
      .update(transformerSource)
      .update(sucraseVersion)
      .update(JSON.stringify([source, filename, configString, instrument]))
      .digest('hex');
  },
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
