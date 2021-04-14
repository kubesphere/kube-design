import Basic, { BasicProps } from "./Basic";
import Generator from "./Generator";

const Column = Generator<BasicProps>({ componentCls: "column" })(Basic);

export default Column;
