import { ComponentClass, FunctionComponent } from 'react';

export interface CommonPickerMethods {
  focus: () => void;
  blur: () => void;
}

export interface PickerComponentClass<P = {}, S = unknown> extends ComponentClass<P, S> {
  new (...args: ConstructorParameters<ComponentClass<P, S>>): InstanceType<ComponentClass<P, S>> &
    CommonPickerMethods;
}

// export interface PickerComponentFunc<P = {}, S = unknown> extends FunctionComponent<P, S> {
//   new (...args: ConstructorParameters<ComponentClass<P, S>>): InstanceType<ComponentClass<P, S>> &
//     CommonPickerMethods;
// }
