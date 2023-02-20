import { createContext, useContext } from 'react';
import { ModalFuncProps } from '../Modal';

export interface IModalContext {
  open(config: ModalFuncProps, type?: string): string;
  close(id: string): void;
  confirm(config: ModalFuncProps): void;
}

export const ModalContext = createContext<IModalContext>({
  open: () => null,
  close: () => null,
  confirm: () => null,
});

export const useModal = (): IModalContext => useContext<IModalContext>(ModalContext);
