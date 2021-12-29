import React, { createRef, PropsWithChildren } from 'react';
import { useQueue, randomId } from '@kubed/hooks';
import { ModalContext } from './ModalContext';
import { Modal, ModalFuncProps, ModalType } from '../Modal';
import ConfirmDialog from '../ConfirmDialog/ConfirmDialog';

interface Props {}

export function ModalProvider({ children }: PropsWithChildren<Props>) {
  const { state: modalState, update } = useQueue<ModalFuncProps>({
    initialValues: [],
    limit: 5,
  });

  const close = (id: string, ref: React.RefObject<any>) => {
    ref.current.close();
    setTimeout(() => {
      update((modals) => {
        return modals.filter((modal) => {
          return modal.id !== id;
        });
      });
    }, 300);
  };

  const open = (modal: ModalFuncProps, type?: ModalType) => {
    const id = modal.id || randomId();

    update((modals) => {
      if (modal.id && modals.some((n) => n.id === modal.id)) {
        return modals;
      }

      const ref = createRef();

      const onCancel = () => {
        close(id, ref);
      };

      return [...modals, { onCancel, ref, type, ...modal, id, visible: true }];
    });

    return id;
  };

  const confirm = (modal: ModalFuncProps) => {
    return open(modal, 'confirm');
  };

  return (
    <ModalContext.Provider value={{ open, confirm }}>
      {children}
      {modalState.map((modal) => {
        if (!modal.type) {
          return (
            <Modal {...modal} key={modal.id}>
              {modal.content}
            </Modal>
          );
        }
        return <ConfirmDialog {...modal} key={modal.id} />;
      })}
    </ModalContext.Provider>
  );
}
