import {print} from "../../util";

export function oneLiners() {

    // swap two values
    let a = 2;
    let b = 3;
    [a, b] = [b, a]
    console.log('a:',a)
    console.log('b:',b)
}