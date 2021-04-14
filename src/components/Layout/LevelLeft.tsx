import Basic, { BasicProps } from "./Basic";
import Generator from "./Generator";

const LevelLeft = Generator<BasicProps>({ componentCls: "level-left" })(Basic);

export default LevelLeft;
