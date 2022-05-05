// https://github.com/ant-design/ant-design/blob/master/components/drawer/index.tsx
import React from 'react';
import { tuple } from '../utils/types';
import forwardRef from '../utils/forwardRef';
import { StyledDrawer } from './Drawer.styles';

// type DrawerRef = {
//   push(): void;
//   pull(): void;
// };

// const DrawerContext = React.createContext<DrawerRef | null>(null);

type EventType =
  | React.KeyboardEvent<HTMLDivElement>
  | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;

type getContainerFunc = () => HTMLElement;

type ILevelMove = number | [number, number];

const PlacementTypes = tuple('top', 'right', 'bottom', 'left');
type placementType = typeof PlacementTypes[number];

const SizeTypes = tuple('default', 'large');
type sizeType = typeof SizeTypes[number];

export interface PushState {
  distance: string | number;
}

export interface DrawerProps {
  autoFocus?: boolean;
  // closable?: boolean;
  // closeIcon?: React.ReactNode;
  // destroyOnClose?: boolean;
  // forceRender?: boolean;
  getContainer?: string | HTMLElement | getContainerFunc;
  maskClosable?: boolean;
  mask?: boolean;
  maskStyle?: React.CSSProperties;
  // style?: React.CSSProperties;
  // size?: sizeType;
  /** Wrapper dom node style of header and body */
  // drawerStyle?: React.CSSProperties;
  // headerStyle?: React.CSSProperties;
  // bodyStyle?: React.CSSProperties;
  contentWrapperStyle?: React.CSSProperties;
  // title?: React.ReactNode;
  visible?: boolean;
  width?: number | string;
  height?: number | string;
  // zIndex?: number;
  // push?: boolean | PushState;
  placement?: placementType;
  onClose?: (e: EventType) => void;
  afterVisibleChange?: (visible: boolean) => void;
  className?: string;
  handler?: React.ReactElement | null | false;
  keyboard?: boolean;
  // extra?: React.ReactNode;
  // footer?: React.ReactNode;
  // footerStyle?: React.CSSProperties;
  level?: string | string[] | null | undefined;
  levelMove?: ILevelMove | ((e: { target: HTMLElement; open: boolean }) => ILevelMove);
  children?: React.ReactNode;
}

// const defaultPushState: PushState = { distance: 180 };

const Drawer = forwardRef<DrawerProps, any>((props, ref) => {
  const {
    // width,
    // height,
    // size = 'default',
    // closable = true,
    // placement = 'right' as placementType,
    // maskClosable = true,
    mask = true,
    // level = null,
    // keyboard = true,
    // push = defaultPushState,
    // bodyStyle,
    // drawerStyle,
    // className,
    visible,
    children,
    // zIndex,
    // destroyOnClose,
    // style,
    // title,
    // headerStyle,
    // onClose,
    // footer,
    // footerStyle,
    // extra,
    ...rest
  } = props;

  return (
    <StyledDrawer handler={false} level={null} open={visible} showMask={mask} {...rest} ref={ref}>
      {children}
    </StyledDrawer>
  );
});

Drawer.displayName = '@kubed/components/drawer';

export default Drawer;
