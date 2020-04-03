import Basic from './Basic';
import Generator from '../../utils/Generator';

const Columns = Generator({ componentCls: 'columns' })(Basic);
const Column = Generator({ componentCls: 'column' })(Basic);
const Level = Generator({ componentCls: 'level' })(Basic);
const LevelLeft = Generator({ componentCls: 'level-left' })(Basic);
const LevelRight = Generator({ componentCls: 'level-right' })(Basic);
const LevelItem = Generator({ componentCls: 'level-item' })(Basic);

export {
  Columns,
  Column,
  Level,
  LevelLeft,
  LevelRight,
  LevelItem,
};
