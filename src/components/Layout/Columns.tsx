import Basic, {BasicProps} from "./Basic";
import Generator from "./Generator";

const Columns = Generator<BasicProps>({ componentCls: "columns" })(Basic);

export default Columns;
