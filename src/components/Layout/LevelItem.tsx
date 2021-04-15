import Basic, { BasicProps } from "./Basic";
import Generator from "./Generator";

const LevelItem = Generator<BasicProps>({ componentCls: "level-item" })(Basic);

export default LevelItem;
