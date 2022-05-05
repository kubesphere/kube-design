import path from 'path';
import fs from 'fs-extra';
import { ComponentDoc, withCustomConfig, PropItem } from 'react-docgen-typescript';

interface DeclarationPath {
  path: string;
  type: 'package' | 'file';
}

const EXTRA_FILES_PATHS = [
  '../packages/components/src/Grid/Row.tsx',
  '../packages/components/src/Grid/Col.tsx',
];

const EXCLUDE_PROPS = ['className', 'classNames', 'styles', 'key', 'ref', 'style', 'themeOverride'];

const replace = {
  KubedNumberSize: 'number | "xs" | "sm" | "md" | "lg" | "xl"',
  KubedSize: '"xs" | "sm" | "md" | "lg" | "xl"',
  GroupPosition: '"right" | "center" | "left" | "apart"',
  ReactText: 'string | number',
  'ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)>':
    'ReactElement',
  'string | number | boolean | {} | ReactElement<any, string | ((props: any) => ReactElement<any, any>) | (new (props: any) => Component<any, any, any>)> | ReactNodeArray | ReactPortal | ((value: number) => ReactNode)':
    'ReactNode | (value: number) => ReactNode',
};

const PATHS: DeclarationPath[] = [
  { type: 'package', path: path.join(__dirname, '../packages/components/src') },
  ...EXTRA_FILES_PATHS.map((filePath) => ({
    type: 'file' as const,
    path: path.join(__dirname, filePath),
  })),
];

function getPackagePaths(packageFolder: string) {
  return fs
    .readdirSync(packageFolder)
    .filter((p) => fs.pathExistsSync(path.join(packageFolder, p, `${p}.tsx`)))
    .map((p) => path.join(packageFolder, p, `${p}.tsx`));
}

function getDeclarationsList(paths: DeclarationPath[]): string[] {
  return paths.reduce((acc, info) => {
    if (info.type === 'package') {
      const items = getPackagePaths(info.path);
      return [...acc, ...items];
    }

    if (info.type === 'file') {
      return [...acc, info.path];
    }

    return acc;
  }, []);
}

function prepareDeclaration(declaration: ComponentDoc) {
  const data = { ...declaration };
  // console.log('declaration-111', declaration);
  delete data.tags;
  delete data.methods;

  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
    delete data.description;

    if (data.props[prop].type.name in replace) {
      data.props[prop].type.name = replace[data.props[prop].type.name];
    }
  });

  // This sorts the props object in ascending order
  const ordered = Object.keys(data.props)
    .sort()
    .reduce((obj, key) => {
      // eslint-disable-next-line no-param-reassign
      obj[key] = data.props[key];
      return obj;
    }, {});

  data.props = ordered;

  return data;
}

const docgenParser = withCustomConfig(path.join(__dirname, '../tsconfig.json'), {
  savePropValueAsString: true,
  propFilter: (prop: PropItem) => {
    if (EXCLUDE_PROPS.includes(prop.name)) {
      return false;
    }

    if (prop.declarations !== undefined && prop.declarations.length > 0) {
      return Boolean(
        prop.declarations.find((declaration) => !declaration.fileName.includes('node_modules'))
      );
    }

    return true;
  },
});

function generateDeclarations(paths: DeclarationPath[]) {
  const declarations = getDeclarationsList(paths);
  console.log('declarations', declarations);
  return docgenParser.parse(declarations).reduce((acc, declaration) => {
    const componentName = declaration.displayName.replace(/@kubed\/([^\s]+)\//, '');
    acc[componentName] = prepareDeclaration(declaration);
    console.log('acc', acc);
    return acc;
  }, {});
}

fs.ensureDirSync(path.join(__dirname, '../docs/.docgen'));

fs.writeJSONSync(path.join(__dirname, '../docs/.docgen/docgen.json'), generateDeclarations(PATHS), {
  spaces: 2,
});
