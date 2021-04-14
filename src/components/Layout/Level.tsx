import Basic, { BasicProps } from "./Basic";
import Generator from "./Generator";

const Level = Generator<BasicProps>({ componentCls: "level" })(Basic);

export default Level;
