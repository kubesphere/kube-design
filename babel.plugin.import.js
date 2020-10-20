const GROUPS = {
  Checkbox: "Checkbox",
  CheckboxGroup: "Checkbox",
  Input: "Input",
  InputSearch: "Input",
  InputPassword: "Input",
  Columns: "Layout",
  Column: "Layout",
  Level: "Layout",
  LevelLeft: "Layout",
  LevelRight: "Layout",
  LevelItem: "Layout",
  Radio: "Radio",
  RadioGroup: "Radio",
  RadioButton: "Radio",
};

const NO_STYLES = ["LocaleProvider"];

module.exports = ({ moduleType = "esm" } = {}) => {
  const packageName = "@kube-design/components";
  return {
    libraryName: packageName,
    camel2DashComponentName: false,
    customName: (name) => {
      if (GROUPS[name]) {
        return `${packageName}/${moduleType}/components/${GROUPS[name]}/${name}`;
      }
      return `${packageName}/${moduleType}/components/${name}`;
    },
    style: (name) => {
      const endName = name.split("/").pop();
      if (NO_STYLES.includes(endName)) {
        return false;
      }
      if (GROUPS[endName]) {
        return `${packageName}/${moduleType}/components/${GROUPS[endName]}/styles.scss`;
      }

      return `${name}/styles.scss`;
    },
  };
};
