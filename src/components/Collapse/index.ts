import Collapse from "./Collapse";
import CollapseItem from "./CollapseItem";

type CollapseType = typeof Collapse & {CollapseItem: typeof CollapseItem}

(Collapse as CollapseType).CollapseItem = CollapseItem;

export default Collapse;
