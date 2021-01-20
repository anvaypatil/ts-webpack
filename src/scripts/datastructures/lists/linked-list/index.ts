import {print, printObject} from "../../../util";

export {LinkedList} from "./linked-list";
import {LinkedList} from "./linked-list";

export function test() {
    const list = new LinkedList<string>();
    list.add("abbc");
    list.add("pqr");
    list.add("later");
    list.add("legal");
    list.addToFront("super");
    list.printList((st: string) => print(st));
    printObject(list.getIterator().next().value)
}