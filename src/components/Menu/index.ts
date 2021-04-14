import Menu from "./Menu";
import MenuItem from "./MenuItem";

type MenuType = typeof Menu & {MenuItem: typeof MenuItem}

(Menu as MenuType).MenuItem = MenuItem;

export default Menu;
