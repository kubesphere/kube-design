import React, { Component } from "react";
import ReactDOM from "react-dom";
import classnames from "classnames";
import { generateUUID, createChainedFunction } from "./utils";
import Notice from "./Notice";

export interface NotifyManagerProps {
  style: object,
  className?: string,
  wrapperCls: string,
  prefixCls: string,
}

export interface NoticeOption {
  key: string,
  title?: string,
  type?: string,
  content: JSX.Element,
  btns?: JSX.Element,
  onClose?: () => void,
}

export interface NotifyManagerState {
  notices: NoticeOption[]
}

type NotifyManagerInstance = InstanceType<typeof NotifyManager>

export interface NotifyCallback {
  createNotice: (props: NoticeOption) => void,
  removeNotice: (key: string) => void,
  destroy: () => void,
  component: NotifyManagerInstance,
}

class NotifyManager extends Component<NotifyManagerProps, NotifyManagerState> {
  static defaultProps = {
    style: {
      top: 65,
      left: "50%",
    },
    prefixCls: "notify",
    wrapperCls: '',
  };

  static newInstance = (properties: Partial<NotifyManagerProps>, callback: CallbackWrapper<NotifyCallback>) => {
    const props = properties || {};
    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", `${props.wrapperCls || "notify"}-wrapper`);
    document.body.appendChild(wrapper);

    let called = false;

    const ref = (notify: NotifyManagerInstance) => {
      if (called) {
        return;
      }
      called = true;
      callback({
        createNotice(noticeProps) {
          notify.add(noticeProps);
        },
        removeNotice(key: string) {
          notify.remove(key);
        },
        component: notify,
        destroy() {
          ReactDOM.unmountComponentAtNode(wrapper);
          wrapper?.parentNode?.removeChild(wrapper);
        },
      });
    };

    ReactDOM.render(
      <NotifyManager
        key={generateUUID("notify-manager")}
        {...props}
        ref={ref}
      />,
      wrapper
    );
  };

  state = {
    notices: [] as NoticeOption[],
  };

  add = (notice: NoticeOption) => {
    const key = notice.key || generateUUID("notice");

    this.setState(({ notices }) => {
      const newNotices = [...notices]
      if (!newNotices.filter((v) => v.key === key).length) {
        if (newNotices.length >= 3) {
          newNotices.shift();
        }
        newNotices.push({ ...notice, key })
      }
      return { notices: newNotices };
    });
  };

  remove = (key: string) => {
    this.setState((previousState) => ({
      notices: previousState.notices.filter((notice) => notice.key !== key),
    }));
  };

  render() {
    const { className, style, prefixCls } = this.props;
    const { notices } = this.state;
    const noticeNodes = notices.map((notice) => {
      const onClose = createChainedFunction(
        this.remove.bind(this, notice.key),
        notice.onClose
      );
      return (
        <Notice
          {...notice}
          onClose={onClose}
        >
          {notice.content}
        </Notice>
      );
    });

    return (
      <div
        className={classnames(prefixCls, className)}
        style={style}
      >
        {noticeNodes}
      </div>
    );
  }
}

export default NotifyManager;
