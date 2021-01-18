import {FixedBitArray} from "./fixed-bit-array";

export function testFixedBitArray() {
    const arr = FixedBitArray.create(10);
    for (let i = 0; i < 10; i++) {
        arr.setBitAt(i);
    }
    console.log(arr.toString())
}