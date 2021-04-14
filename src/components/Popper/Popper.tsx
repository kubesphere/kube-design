import React, { Component, Fragment, cloneElement } from "react";
import ReactDOM from "react-dom";
import { isFunction } from "lodash";
import PopperJS from "popper.js";
import classNames from "classnames";
import { fireEvent } from "../../utils";

const placementMapper: { [index: string]: string } = {
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

export interface PopperProps {
  type: string,
  always: boolean,
  trigger: string,
  placement: PopperJS.Placement,
  visible?: boolean,
  content: React.ReactNode | (() => JSX.Element),
  hideInterval: number,
  showArrow: boolean,
  className?: string,
  closeAfterClick: boolean,
  closeAfterMouseLeave: boolean,
  closeAfterMouseUp: boolean,
  style?: object,
  modifiers?: PopperJS.Modifiers,
  children: React.ReactElement,
  onOpen: () => void,
  onClose: (e?: Event | React.SyntheticEvent) => void,
  onClick: (e: Event) => void,
}

export interface PopperState {
  visible: boolean
}

export default class Popper extends Component<PopperProps, PopperState> {
  static defaultProps = {
    type: "popper",
    always: false,
    hideInterval: 200,
    trigger: "hover",
    placement: "top",
    showArrow: true,
    closeAfterClick: true,
    closeAfterMouseLeave: false,
    closeAfterMouseUp: false,
    modifiers: {},
    onOpen() {},
    onClose() {},
    onClick() {},
  };

  state = { visible: this.props.visible || false }

  timer: Timer | undefined = undefined

  popperInstance: PopperJS | null = null

  reference: Element | null = null

  childRef = React.createRef<HTMLElement>()

  arrowRef = React.createRef<HTMLDivElement>()

  popperRef = React.createRef<HTMLDivElement>()

  isPopperMounted = false

  componentDidMount() {
    const { always, visible } = this.props;
    if (this.childRef.current) {
      this.reference = ReactDOM.findDOMNode(this.childRef.current) as Element;
      (always || visible) && this.runPopper();
      !always && this.bindEvent();
      this.isPopperMounted = true;
    }
  }

  componentDidUpdate(prevProps: PopperProps, prevState: PopperState) {
    const { visible: prevVisible } = prevState;
    const { placement: prevPlacement } = prevProps;
    const { visible: stateVisible } = this.state;
    const { visible, placement, trigger } = this.props;

    if (prevPlacement !== placement) {
      this.destroyPopper();
      this.createPopper(placement);
    }
    if ("visible" in this.props && visible && !prevVisible) {
      this.runPopper();
    } else if (this.popperInstance) {
      this.popperInstance.update();
    }
    if ("visible" in this.props && !visible && prevVisible) {
      this.hidePopper();
    }
    if (stateVisible && trigger === "click") {
      document.addEventListener("click", this.handleDocumentClick);
    } else {
      document.removeEventListener("click", this.handleDocumentClick);
    }
  }

  componentWillUnmount() {
    const { always } = this.props;
    this.timer && clearTimeout(this.timer);
    !always && this.removeEvent();
    this.destroyPopper();
    this.isPopperMounted = false;
  }

  // Show Popper
  showPopper = (e?: Event) => {
    const { onOpen } = this.props;
    const { visible } = this.state;
    e && e.stopPropagation();
    this.timer && clearTimeout(this.timer);
    if (this.isPopperMounted) {
      if (this.popperInstance) {
        this.popperInstance.update();
        this.popperInstance.enableEventListeners();
      }
      if (!visible) {
        this.setState({ visible: true }, () => {
          if (isFunction(onOpen)) onOpen();
        });
      }
    }
  };

  // Hide Popper
  hidePopper = (e?: Event | React.SyntheticEvent) => {
    const { hideInterval } = this.props;
    const { visible } = this.state;
    e?.stopPropagation();
    if (this.isPopperMounted && visible) {
      const { trigger, closeAfterMouseLeave, onClose } = this.props;
      const isHoverTrigger = trigger === "hover" || closeAfterMouseLeave;
      if (!isHoverTrigger) {
        this.setState({ visible: false }, () => {
          if (isFunction(onClose)) onClose(e);
          if (this.popperInstance) this.popperInstance.disableEventListeners();
        });
      } else {
        this.timer = setTimeout(() => {
          this.setState({ visible: false }, () => {
            if (isFunction(onClose)) onClose(e);
            if (this.popperInstance)
              this.popperInstance.disableEventListeners();
          });
        }, hideInterval);
      }
    }
  };

  createPopper = (placement: string) => {
    this.arrowRef.current?.setAttribute("x-arrow", "");

    const options: PopperJS.PopperOptions = {
      placement: (placementMapper[placement] || "bottom") as PopperJS.Placement,
      positionFixed: true,
      modifiers: this.props.modifiers,
    };
    if (this.reference && this.popperRef.current) {
      this.popperInstance = new PopperJS(this.reference, this.popperRef.current, options);
    }
  };

  // Init Poppoer || Update Popper
  runPopper = (e?: Event) => {
    const { placement } = this.props;
    e && e.stopPropagation();

    if (this.popperInstance) {
      this.showPopper();
      return;
    }

    this.createPopper(placement);
    this.showPopper();
  };

  // Destroy Popper
  destroyPopper = () => {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  };

  handleTogglePopper = (e: Event) => {
    const { onClick } = this.props;
    if (e && isFunction(onClick)) onClick(e);
    const { visible } = this.state;
    if (visible) {
      this.hidePopper(e);
    } else {
      fireEvent(document, "click");
      this.runPopper(e);
    }
  };

  handlePopperClick = (e: React.SyntheticEvent) => {
    const { closeAfterClick } = this.props;
    const { visible } = this.state;
    if (!visible) return;
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }
    if (closeAfterClick) {
      this.hidePopper(e);
    }
  };

  handleDocumentClick = (e: Event) => {
    const { visible } = this.state;
    const rootNode = ReactDOM.findDOMNode(this);
    if (!rootNode || !this.reference || !this.popperRef.current || !visible) {
      return;
    }
    this.hidePopper(e);
  };

  bindEvent = () => {
    const { trigger, closeAfterMouseLeave, closeAfterMouseUp } = this.props;
    if (!this.reference || !this.popperRef.current) return;

    if (trigger === "hover" || closeAfterMouseLeave) {
      this.reference.addEventListener("mouseleave", this.hidePopper);
      this.popperRef.current.addEventListener("mouseenter", this.showPopper);
      this.popperRef.current.addEventListener("mouseleave", this.hidePopper);
    }
    if (trigger === "hover") {
      this.reference.addEventListener("mouseenter", this.runPopper);
      if (closeAfterMouseUp) {
        document.addEventListener("mouseup", this.hidePopper);
      }
    }
    if (trigger === "click") {
      this.reference.addEventListener("click", this.handleTogglePopper);
    }
  };

  removeEvent = () => {
    const { trigger, closeAfterMouseLeave, closeAfterMouseUp } = this.props;
    if (trigger === "click") {
      document.removeEventListener("click", this.handleDocumentClick);
    }
    if (trigger === "hover" && closeAfterMouseUp) {
      document.addEventListener("mouseup", this.hidePopper);
    }

    if (!this.reference) return;
    if (trigger === "hover" || closeAfterMouseLeave) {
      this.reference.removeEventListener("mouseleave", this.hidePopper);
    }
    if (trigger === "hover") {
      this.reference.removeEventListener("mouseenter", this.runPopper);
    }
    if (trigger === "click") {
      this.reference.removeEventListener("click", this.handleTogglePopper);
    }
  };

  renderContent() {
    const {
      className: propsClassName,
      type,
      always,
      style,
      content,
      showArrow,
    } = this.props;
    const { visible } = this.state;

    return (
      <div
        className={classNames("popper", propsClassName, {
          "is-active": visible || always,
        })}
        ref={this.popperRef}
        style={style}
        onClick={this.handlePopperClick}
      >
        <div className={`${type}-content`}>
          {isFunction(content) ? content() : content}
        </div>
        {showArrow ? (
          <div
            className="popper-arrow"
            ref={this.arrowRef}
          />
        ) : null}
      </div>
    );
  }

  render() {
    const { children } = this.props;
    const cloneChildren = cloneElement(React.Children.only(children), {
      ref: this.childRef,
    });

    return (
      <Fragment>
        {cloneChildren}
        {this.renderContent()}
      </Fragment>
    );
  }
}
