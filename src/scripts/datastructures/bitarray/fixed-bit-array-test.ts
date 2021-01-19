import {FixedBitArray} from "./fixed-bit-array";

export function testFixedBitArray() {
    const arr = FixedBitArray.create(19);
    for (let i = 0; i < 20; i++) {
            arr.setBitAt(i);
    }
    console.log(arr.toString())
    console.log(arr.reverse().toString())
    console.log(arr.isBitSetAt(5))
}