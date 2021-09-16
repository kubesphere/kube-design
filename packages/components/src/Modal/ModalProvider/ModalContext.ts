import { createContext, useContext } from 'react';
import { ModalFuncProps } from '../Modal';

export interface IModalContext {
  open?(config: ModalFuncProps, type?: string): void;
  confirm?(config: ModalFuncProps): void;
}

export const ModalContext = createContext<IModalContext>({});

export const useModal = (): IModalContext => useContext<IModalContext>(ModalContext);
