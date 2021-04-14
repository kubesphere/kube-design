import Form from "./Form";
import Item from "./Item";
import Group from "./Group";

type FormType = typeof Form & { Item: typeof Item; Group: typeof Group };

(Form as FormType).Item = Item;
(Form as FormType).Group = Group;

export default Form;
