import React from "react";

interface IGenerator {
  <T>(props: Partial<T>): (component: React.FC<T>) => React.FC<T>
}

const Generator: IGenerator = (props) => (BasicComponent) => {
  return (innerProps) => (<BasicComponent {...props} {...innerProps} />)
}

export default Generator;
