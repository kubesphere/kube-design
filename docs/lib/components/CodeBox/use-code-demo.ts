import { get, cloneDeep } from 'lodash';

const importRegex = /^(import)\s(?!type(of\s|\s)(?!from)).*?$/gm;
const exportDefaultRegex = /export\s+default\s+function\s+\w+\s*\(\s*\)\s*\{/;

export const transformCode = (code: string, imports = {}, compName = 'App') => {
  let cleanedCode = code
    .replace(importRegex, (match) => {
      // get component name from the match ex. "import { Table } from '@nextui-org/react'"

      let componentName = match.match(/\w+/g)?.[1] || '';
      // replace as
      componentName = componentName === 'as' ? match.match(/\w+/g)?.[2] || '' : componentName;

      const matchingImport = get(imports, componentName);

      if (matchingImport) {
        // remove the matching import
        return '';
      }

      // if match includes './' or '../' then remove it
      if (match.includes('./') || match.includes('../')) {
        return '';
      }

      return match;
    })
    .replace(exportDefaultRegex, () => {
      // replace match with const Name = () => (
      return `const ${compName} = () => {`;
    })
    .replace('export', '');

  // add render(<App/>) to cleanedCode if has const App = () => {
  if (cleanedCode.includes(`const App = () => {`)) {
    cleanedCode = `${cleanedCode}\nrender(<${compName}/>);`;
  }
  // delete comments from the code
  cleanedCode = cleanedCode.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '');

  return cleanedCode;
};

export const useCodeDemo = ({ scope, code: inputCode }) => {
  let code = cloneDeep(inputCode?.trim());
  let noInline = false;

  const scopeKeys = Object.keys(scope);
  const scopeValues = scopeKeys.map((key) => {
    return { [key]: `${key}` };
  });

  // add 'React' to scopeValues
  scopeValues.push({ React: 'React' });
  // convert scopeValues to object
  const imports = Object.assign({}, ...scopeValues);
  code = transformCode(code, imports);
  noInline = code.includes('render');
  return {
    code,
    noInline,
  };
};
