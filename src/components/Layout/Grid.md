## Grid 栅格

基于 Flexbox 的 12 栅格系统

### 基础用法

:::demo

#### 基础的 Gird 用法

- `Columns` 组件和 `Column` 组件是对 Bulma Gird 简单封装

```jsx
import { Columns, Column } from './index.js';

const describe = children => <p className="notification is-dark has-text-centered">{children}</p>;

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns>
      <Column>{describe(1)}</Column>
      <Column>{describe(2)}</Column>
      <Column>{describe(3)}</Column>
      <Column>{describe(4)}</Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### Column 大小

:::demo

#### Column 大小设置

- 通过给 `Column` 组件添加相应的 `className` ，可以控制 `Column` 的大小

```jsx
import { Columns, Column } from './index.js';

const describe = args => (
  <p className={`notification has-text-centered ${args ? 'is-dark' : 'is-light'}`}>
    {args || 'Auto'}
  </p>
);

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns>
      <Column className="is-1">{describe('is-1')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-2">{describe('is-2')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-3">{describe('is-3')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-4">{describe('is-4')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-5">{describe('is-5')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-6">{describe('is-6')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-7">{describe('is-7')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-8">{describe('is-8')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-9">{describe('is-9')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-10">{describe('is-10')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-11">{describe('is-11')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-four-fifths">{describe('is-four-fifths')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-three-quarters">{describe('is-three-quarters')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-two-thirds">{describe('is-two-thirds')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-three-fifths">{describe('is-three-fifths')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-half">{describe('is-half')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-two-fifths">{describe('is-two-fifths')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-one-third">{describe('is-one-third')}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-one-quarter">{describe('is-one-quarter')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>

    <Columns>
      <Column className="is-one-fifth">{describe('is-one-fifth')}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
      <Column>{describe()}</Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### Offset 偏移

:::demo

#### 设置 `Column` 的偏移

- 通过给 `Column` 组件添加相应的 `className` ，可以控制 `Column` 的偏移

```jsx
import { Columns, Column, Notification } from './index.js';

const describe = (arg1, arg2) => (
  <Notification className="is-dark has-text-centered">
    {arg1}
    <br />
    {arg2}
  </Notification>
);

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns>
      <Column className="is-half is-offset-one-quarter">
        {describe('is-half', 'is-offset-one-quarter')}
      </Column>
    </Columns>

    <Columns>
      <Column className="is-three-fifths is-offset-one-fifth">
        {describe('is-three-fifths', 'is-offset-one-fifth')}
      </Column>
    </Columns>

    <Columns>
      <Column className="is-4 is-offset-8">{describe('is-4', 'is-offset-8')}</Column>
    </Columns>

    <Columns>
      <Column className="is-11 is-offset-1">{describe('is-11', 'is-offset-1')}</Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### 固定宽度

:::demo

#### `Column` 固定宽度用法

- 通过给 `Column` 组件添加 `is-narrow` 的 className，就可以实现本栏固定宽度，常用于边栏菜单

```jsx
import { Columns, Column } from './index.js';

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns>
      <Column className="is-narrow">
        <div className="notification is-dark" style={{ width: 200 }}>
          <p className="title is-5">固定宽度</p>
          <p>这一栏固定宽度 200px </p>
        </div>
      </Column>
      <Column>
        <div className="notification is-light">
          <p className="title is-5">自适应宽度</p>
          <p>这里占用剩余的可用空间</p>
        </div>
      </Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### Columns 嵌套

:::demo

#### Columns 嵌套用法

- Columns 可以嵌套使用，但必须遵循以下结构
  ```
  <Columns>
    <Column>
      <Columns>
        <Column>
          ...
  ```

```jsx
import { Columns, Column, Notification } from './index.js';

const describe = children => (
  <Notification className="is-light has-text-centered">{children}</Notification>
);

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns>
      <Column className="is-narrow">
        <Notification className="is-dark" style={{ width: 200 }}>
          固定宽度
        </Notification>
      </Column>
      <Column>
        <Columns>
          <Column>{describe(1)}</Column>
          <Column>{describe(2)}</Column>
          <Column>{describe(3)}</Column>
          <Column>{describe(4)}</Column>
          <Column>{describe(5)}</Column>
          <Column>{describe(6)}</Column>
          <Column>{describe(7)}</Column>
          <Column>{describe(8)}</Column>
          <Column>{describe(9)}</Column>
          <Column>{describe(10)}</Column>
          <Column>{describe(11)}</Column>
          <Column>{describe(12)}</Column>
        </Columns>
      </Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### Column 水平居中

:::demo

#### Column 的水平居中

- 通过给父级 `Columns` 添加 className `is-centered`，使 `Column` 水平居中

```jsx
import { Columns, Column, Notification } from './index.js';

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns className="is-centered" style={{ background: '#f5f5f5' }}>
      <Column className="is-4">
        <Notification className="is-dark has-text-centered">is-4</Notification>
      </Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### Column 垂直居中

:::demo

#### Column 的垂直居中

- 通过给父级 `Columns` 添加 className `is-vcentered`，使 `Column` 垂直居中

```jsx
import { Columns, Column, Notification } from './index.js';

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns className="is-vcentered" style={{ height: 400, background: '#f5f5f5' }}>
      <Column className="is-4">
        <Notification className="is-dark has-text-centered">is-4</Notification>
      </Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### Column 水平垂直居中

:::demo

#### Column 水平垂直居中

- 通过给父级 `Columns` 添加 className `is-vcentered`，`is-centered`，使 `Column` 水平垂直中

```jsx
import { Columns, Column, Notification } from './index.js';

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns className="is-vcentered is-centered" style={{ height: 400, background: '#f5f5f5' }}>
      <Column className="is-4">
        <Notification className="is-dark has-text-centered">is-4</Notification>
      </Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### 多行

:::demo

#### Column 多行用法

- 通过给父级 `Columns` 添加 className `is-multiline`，即可实现多行

```jsx
import { Columns, Column, Notification } from './index.js';

const describe = children => (
  <Notification className="is-light has-text-centered">{children}</Notification>
);

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns className="is-multiline">
      <Column className="is-6">{describe('is-6')}</Column>
      <Column className="is-4">{describe('is-4')}</Column>
      <Column className="is-4">{describe('is-4')}</Column>
      <Column className="is-4">{describe('is-4')}</Column>
      <Column>{describe('Auto')}</Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### 无边距

:::demo

#### 设置 `Columns` 为无边距

- 通过给父级 `Columns` 添加 className `is-gapless`，即可实现无边距

```jsx
import { Columns, Column, Notification } from './index.js';

const GridDemo = () => (
  <div className="demo-wrapper gird-demo">
    <Columns className="is-gapless">
      <Column>
        <Notification className="is-dark has-text-centered">没有边距</Notification>
      </Column>
      <Column>
        <Notification className="is-info has-text-centered">没有边距</Notification>
      </Column>
      <Column>
        <Notification className="is-success has-text-centered">没有边距</Notification>
      </Column>
      <Column>
        <Notification className="is-warning has-text-centered">没有边距</Notification>
      </Column>
    </Columns>
  </div>
);

<GridDemo />;
```

:::

### 设置边距

:::demo

#### 设置 Column 的边距

- 通过给父级 `Columns` 添加 className `is-variable` 和相应的大小 `is-0` - `is-8`， 即可调整 `Column` 之间的边距

```jsx
import {
  Columns,
  Column,
  Button,
  Notification,
  Level,
  LevelLeft,
  LevelRight,
} from './index.js';

const describe = children => (
  <Notification className="is-light has-text-centered">{children}</Notification>
);

class GridDemo extends React.Component {
  state = { gapSize: '24px', gapCls: 'is-3' };

  btns = () => Array.from(new Array(9), (val, index) => index).map(item => (
    <Button key={item} onMouseEnter={this.handleChange(item)}>
      {`is-${item}`}
    </Button>
  ));

  handleChange = n => () => {
    this.setState({ gapCls: `is-${n}` }, this.handleGetGapSize);
  };

  handleGetGapSize = () => {
    const columnEl = ReactDOM.findDOMNode(this.column);
    const gapSize = getComputedStyle(columnEl).getPropertyValue('padding-right');
    this.setState({ gapSize: `${parseFloat(gapSize) * 2}px` });
  };

  render() {
    const { gapSize, gapCls } = this.state;
    return (
      <div className="demo-wrapper gird-demo">
        <Level>
          <LevelLeft>
            边距:
            {gapSize}
          </LevelLeft>
          <LevelRight className="buttons">{this.btns()}</LevelRight>
        </Level>
        <Columns className={`is-variable ${gapCls}`}>
          <Column
            ref={n => {
              this.column = n;
            }}
          >
            {describe(1)}
          </Column>
          <Column>{describe(2)}</Column>
          <Column>{describe(3)}</Column>
          <Column>{describe(4)}</Column>
          <Column>{describe(5)}</Column>
          <Column>{describe(6)}</Column>
          <Column>{describe(7)}</Column>
          <Column>{describe(8)}</Column>
          <Column>{describe(9)}</Column>
          <Column>{describe(10)}</Column>
          <Column>{describe(11)}</Column>
          <Column>{describe(12)}</Column>
        </Columns>
      </div>
    );
  }
}

<GridDemo />;
```

:::

### Grid API

| 成员      | 说明                      | 类型   | 默认值 |
| --------- | ------------------------- | ------ | ------ |
| className | 设置组件的 `ClassName`    | String |        |
| style     | 设置组件的样式            | Object |        |
| as        | 设置组件要渲染的 DOM 类型 | String | div    |

---

** FE: Elvis; Designer: lzy **
