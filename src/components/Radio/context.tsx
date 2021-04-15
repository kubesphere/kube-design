import React from "react";

export interface IRadioGroupContext {
  radioGroup: {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value?: string | number,
    disabled?: boolean,
    name?: string,
    buttonWidth: string | number,
  },
}

export const RadioGroupContext = React.createContext<IRadioGroupContext | undefined>(undefined)
