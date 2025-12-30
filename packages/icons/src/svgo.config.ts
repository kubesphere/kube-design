export default {
  plugins: [
    'cleanupAttrs',
    'removeDoctype',
    'removeXMLProcInst',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    'removeUselessDefs',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeHiddenElems',
    'removeEmptyText',
    'removeEmptyContainers',
    {
      name: 'removeViewBox',
      active: false,
    },
    'cleanupEnableBackground',
    'convertStyleToAttrs',
    'convertColors',
    'convertPathData',
    'convertTransform',
    'removeUnknownsAndDefaults',
    'removeNonInheritableGroupAttrs',
    'removeUselessStrokeAndFill',
    'removeUnusedNS',
    'cleanupIds',
    {
      name: 'cleanupNumericValues',
      params: {
        floatPrecision: 1,
      },
    },
    'moveElemsAttrsToGroup',
    'moveGroupAttrsToElems',
    'collapseGroups',
    {
      name: 'removeRasterImages',
      active: false,
    },
    'mergePaths',
    'convertShapeToPath',
    'sortAttrs',
    'removeDimensions',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['svg:width', 'svg:height', 'svg:style', 'svg:color', '(stroke)'],
      },
    },
    {
      name: 'removeAttributesBySelector',
      params: {
        selectors: [
          { selector: "[fill = 'none']", attributes: 'fill' },
          { selector: "[fill = '#B6C2CD']", attributes: 'fill' },
        ],
      },
    },
  ],
};
