import React from 'react';
import * as ReactDOM from 'react-dom';
import OriginModal, { ModalFuncProps, ModalProps } from './Modal';
import confirm, { withInfo, destroyFns, ModalStaticFunctions } from './confirm';
import { useTheme } from '../theme';

type ConfigUpdate = ModalFuncProps | ((prevConfig: ModalFuncProps) => ModalFuncProps);

type ModalType = typeof OriginModal &
  ModalStaticFunctions & {
    destroyAll: () => void;
  };

const Modal = OriginModal as ModalType;

function open(config: ModalProps) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  // eslint-disable-next-line @typescript-eslint/no-use-before-define
  let currentConfig = { ...config, close, visible: true } as any;

  function destroy(...args: any[]) {
    const unmountResult = ReactDOM.unmountComponentAtNode(div);
    if (unmountResult && div.parentNode) {
      div.parentNode.removeChild(div);
    }
    const triggerCancel = args.some((param) => param && param.triggerCancel);
    if (config.onCancel && triggerCancel) {
      // @ts-ignore
      config.onCancel(...args);
    }
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < destroyFns.length; i++) {
      const fn = destroyFns[i];
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      if (fn === close) {
        destroyFns.splice(i, 1);
        break;
      }
    }
  }

  const theme = useTheme();
  console.log('theme', theme);

  function render(props) {
    setTimeout(() => {
      ReactDOM.render(<Modal {...props} />, div);
    });
  }

  function close(...args: any[]) {
    currentConfig = {
      ...currentConfig,
      visible: false,
      afterClose: () => {
        if (typeof config.afterClose === 'function') {
          config.afterClose();
        }
        destroy.apply(this, args);
      },
    };
    render(currentConfig);
  }

  function update(configUpdate: ConfigUpdate) {
    if (typeof configUpdate === 'function') {
      currentConfig = configUpdate(currentConfig);
    } else {
      currentConfig = {
        ...currentConfig,
        ...configUpdate,
      };
    }
    render(currentConfig);
  }

  render(currentConfig);

  destroyFns.push(close);

  return {
    destroy: close,
    update,
  };
}

Modal.open = open;

Modal.info = function infoFn(props: ModalFuncProps) {
  return confirm(withInfo(props));
};

Modal.destroyAll = function destroyAllFn() {
  while (destroyFns.length) {
    const close = destroyFns.pop();
    if (close) {
      close();
    }
  }
};

export default Modal;
