import styled from 'styled-components';
import RcDrawer from 'rc-drawer';

export const StyledDrawer = styled(RcDrawer)`
  position: fixed;
  z-index: 999;
  //overflow: hidden;

  &.drawer-left {
    left: 0;
  }

  &.drawer-right {
    right: 0;
    .drawer-content-wrapper {
      right: 0;
    }
  }

  &.drawer-left,
  &.drawer-right {
    top: 0;
    width: 0;
    height: 100%;
  }

  .drawer-mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 998;
    height: 0;
    background-color: rgba(35, 45, 65, 0.7);
    opacity: 0;
    transition: opacity 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
  }

  .drawer-content-wrapper {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #fff;
    inset: unset;
    transition: transform 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    overflow: hidden;
  }

  &.drawer-open {
    width: 100%;
    .drawer-mask {
      opacity: 1;
      height: 100%;
    }

    &.drawer-left {
      .drawer-content-wrapper {
        height: 100%;
      }
    }

    &.drawer-right .drawer-content-wrapper {
      height: 100%;
    }
  }
`;
