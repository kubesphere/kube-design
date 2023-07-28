import classNames from "classnames";
import { omit, pick, noop } from "lodash";

const defaultProps = {
  tooltip: {
    className: "tooltip",
    placement: "top",
    maxWidth: 200,
    hideOnClick: false,
    interactive: true,
  },
  dropdown: {
    className: "dropdown",
    animation: "shift-away",
  },
  default: {
    appendTo: "parent",
    placement: "auto",
    className: "popper",
    animation: "shift-toward-subtle",
  },
};

const triggerMapper = {
  hover: "mouseenter focus",
  click: "click",
  focus: "focus",
  contextMenu: "contextmenu",
  manual: "manual",
};

const placementMapper = {
  auto: "auto",
  autoStart: "auto-start",
  autoEnd: "auto-end",
  top: "top",
  left: "left",
  right: "right",
  bottom: "bottom",
  topLeft: "top-start",
  topRight: "top-end",
  leftTop: "left-start",
  leftBottom: "left-end",
  bottomLeft: "bottom-start",
  bottomRight: "bottom-end",
  rightTop: "right-start",
  rightBottom: "right-end",
};

const modifiersMapper = (modifiers = {}) => {
  return Object.entries(modifiers).reduce((acc, [key, value]) => {
    return [
      {
        name: key,
        options: value,
      },
      ...acc,
    ];
  }, []);
};

const mappers = {
  className: (props) => {
    return {
      className: classNames(
        defaultProps.default.className,
        defaultProps[props.type].className,
        props.className
      ),
    };
  },
  placement: (props) => {
    return {
      placement: placementMapper[props.placement],
    };
  },

  trigger: (props) => {
    if (props.always) {
      return {};
    }
    return { trigger: triggerMapper[props.trigger] };
  },
  always: (props) => {
    return {
      visible: props.always ? true : undefined,
    };
  },
  showArrow: (props) => {
    return {
      arrow: props?.arrow ?? props.showArrow ?? true,
    };
  },
  closeAfterClick: (props) => ({
    interactive: props.closeAfterClick ? false : true,
  }),
  closeAfterMouseLeave: () => ({}),
  closeAfterMouseUp: () => ({}),
  onOpen: (props) => {
    return {
      onShow: (e) => {
        if (props.onOpen && props.onOpen !== noop) {
          props.onOpen(e);
        }
      },
    };
  },
  onClose: (props) => {
    return {
      onHide: (e) => {
        if (props.onClose && props.onClose !== noop) {
          props.onClose(e);
        }
      },
    };
  },
  onClick: (props) => {
    return {
      onTrigger: (e) => {
        if (props.onClick && props.onClick !== noop) {
          props.onClick(e);
        }
      },
    };
  },
  popperOptions: (props) => {
    return {
      popperOptions: {
        strategy: props.positionFixed ? "fixed" : "absolute",
        modifiers: modifiersMapper(props.modifiers),
      },
    };
  },
};

const mapperDefault = (props) => {
  if (!props.type) {
    return props;
  }
  console.log(3333, defaultProps[props.type]);
  return {
    ...defaultProps.default,
    ...(defaultProps[props.type] ?? {}),
    ...props,
  };
};
export default function mapper(oldProps) {
  const props = mapperDefault(oldProps);
  return Object.values(mappers).reduce((acc, fn) => {
    if (fn) {
      return {
        ...acc,
        ...fn(props),
      };
    }
    return acc;
  }, omit(props, Object.keys(mappers)));
}
