import React, { Component, Fragment, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { noop, isFunction } from 'lodash';
import PopperJS from 'popper.js';
import classNames from 'classnames';
import { fireEvent, getScrollParent } from '../../utils';
import VirtualReference from './VirtualReference';
import Portal from './Portal';

import './styles.scss';

const placementMapper = {
  top: 'top',
  left: 'left',
  right: 'right',
  bottom: 'bottom',
  topLeft: 'top-start',
  topRight: 'top-end',
  leftTop: 'left-start',
  leftBottom: 'left-end',
  bottomLeft: 'bottom-start',
  bottomRight: 'bottom-end',
  rightTop: 'right-start',
  rightBottom: 'right-end',
};

class Popper extends Component {
  static propTypes = {
    type: PropTypes.string,
    always: PropTypes.bool,
    trigger: PropTypes.string,
    placement: PropTypes.string,
    visible: PropTypes.bool,
    content: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.func]),
    hideInterval: PropTypes.number,
    showArrow: PropTypes.bool,
    className: PropTypes.string,
    closeAfterClick: PropTypes.bool,
    closeAfterMouseLeave: PropTypes.bool,
    closeAfterMouseUp: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    type: 'popper',
    always: false,
    hideInterval: 200,
    trigger: 'hover',
    placement: 'top',
    showArrow: true,
    closeAfterClick: true,
    closeAfterMouseLeave: false,
    closeAfterMouseUp: false,
    onOpen: noop,
    onClose: noop,
    onClick: noop,
  };

  constructor(props) {
    super(props);

    this.state = { visible: props.visible || false };
    // timer: 悬停触发，延时关闭的计时器
    this.timer = null;
    // popperInstance: Popper 对象
    this.popperInstance = null;
    // reference & popper: Popper 对象的触发器和内容 DOM 节点
    this.reference = null;
    this.popper = null;
  }

  componentDidMount() {
    const { always, visible } = this.props;
    this.reference = ReactDOM.findDOMNode(this.referenceNode);
    (always || visible) && this.runPopper();
    !always && this.bindEvent();
    this.isPopperMounted = true;
  }

  componentDidUpdate(prevProps, prevState) {
    const { visible: prevVisible } = prevState;
    const { placement: prevPlacement } = prevProps;
    const { visible: stateVisible } = this.state;
    const { visible, placement, trigger } = this.props;

    if (prevPlacement !== placement) {
      this.destroyPopper();
      this.createPopper(placement);
    }
    if ('visible' in this.props && visible && !prevVisible) {
      this.runPopper();
    } else if (this.popperInstance) {
      this.popperInstance.update();
    }
    if ('visible' in this.props && !visible && prevVisible) {
      this.hidePopper();
    }
    if (stateVisible && trigger === 'click') {
      document.addEventListener('click', this.handleDocumentClick);
    } else {
      document.removeEventListener('click', this.handleDocumentClick);
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
  showPopper = e => {
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
          if (onOpen && onOpen !== noop) onOpen();
        });
      }
    }
  };

  // Hide Popper
  hidePopper = e => {
    const { hideInterval } = this.props;
    const { visible } = this.state;
    if (e) e.stopPropagation();
    if (this.isPopperMounted && visible) {
      const { trigger, closeAfterMouseLeave, onClose } = this.props;
      const isHoverTrigger = trigger === 'hover' || closeAfterMouseLeave;
      if (!isHoverTrigger) {
        this.setState({ visible: false }, () => {
          if (onClose && onClose !== noop) onClose(e);
          if (this.popperInstance) this.popperInstance.disableEventListeners();
        });
      } else {
        this.timer = setTimeout(() => {
          this.setState({ visible: false }, () => {
            if (onClose && onClose !== noop) onClose(e);
            if (this.popperInstance) this.popperInstance.disableEventListeners();
          });
        }, hideInterval);
      }
    }
  };

  createPopper = placement => {
    if (this.arrow) {
      this.arrow.setAttribute('x-arrow', '');
    }

    const options = {
      placement: placementMapper[placement] ? placementMapper[placement] : 'bottom',
      positionFixed: true,
      modifiers: {
        hide: { enabled: true },
      },
    };
    this.popperInstance = new PopperJS(this.reference, this.popper, options);
  };

  // Init Poppoer || Update Popper
  runPopper = e => {
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

  handleTogglePopper = e => {
    const { onClick } = this.props;
    if (e && isFunction(onClick) && onClick !== noop) onClick(e);
    const { visible } = this.state;
    if (visible) {
      this.hidePopper(e);
    } else {
      fireEvent(document, 'click');
      this.runPopper(e);
    }
  };

  handlePopperClick = e => {
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

  handleDocumentClick = e => {
    const { visible } = this.state;
    const rootNode = ReactDOM.findDOMNode(this);
    if (!rootNode || !this.reference || !this.popper || !visible) {
      return;
    }
    this.hidePopper(e);
  };

  bindEvent = () => {
    const { trigger, closeAfterMouseLeave, closeAfterMouseUp } = this.props;
    if (!this.reference || !this.popper) return;

    if (trigger === 'hover' || closeAfterMouseLeave) {
      this.reference.addEventListener('mouseleave', this.hidePopper);
      this.popper.addEventListener('mouseenter', this.showPopper);
      this.popper.addEventListener('mouseleave', this.hidePopper);
    }
    if (trigger === 'hover') {
      this.reference.addEventListener('mouseenter', this.runPopper);
      if (closeAfterMouseUp) {
        document.addEventListener('mouseup', this.hidePopper);
      }
    }
    if (trigger === 'click') {
      this.reference.addEventListener('click', this.handleTogglePopper);
    }
  };

  removeEvent = () => {
    const { trigger, closeAfterMouseLeave, closeAfterMouseUp } = this.props;
    if (trigger === 'click') {
      document.removeEventListener('click', this.handleDocumentClick);
    }
    if (trigger === 'hover' && closeAfterMouseUp) {
      document.addEventListener('mouseup', this.hidePopper);
    }

    if (!this.reference) return;
    if (trigger === 'hover' || closeAfterMouseLeave) {
      this.reference.removeEventListener('mouseleave', this.hidePopper);
    }
    if (trigger === 'hover') {
      this.reference.removeEventListener('mouseenter', this.runPopper);
    }
    if (trigger === 'click') {
      this.reference.removeEventListener('click', this.handleTogglePopper);
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
        className={classNames('popper', propsClassName, {
          'is-active': visible || always,
        })}
        ref={ref => {
          this.popper = ref;
        }}
        style={style}
        onClick={this.handlePopperClick}
      >
        <div className={`${type}-content`}>{isFunction(content) ? content() : content}</div>
        {showArrow ? (
          <div
            className="popper-arrow"
            ref={ref => { this.arrow = ref; }}
          />
        ) : null}
      </div>
    );
  }

  render() {
    const { children } = this.props;
    const cloneChildren = cloneElement(React.Children.only(children), {
      ref: ref => {
        this.referenceNode = ref;
      },
    });

    return (
      <Fragment>
        {cloneChildren}
        {this.renderContent()}
      </Fragment>
    );
  }
}

export default Popper;
