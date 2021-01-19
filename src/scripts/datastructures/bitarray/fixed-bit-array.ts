/****
 *  FixedBitArray(sizeOfBits)
 *
 * supported operations
 *  - basic operations
 *      - 'setBitAt' bit by index
 *      - 'isBitSetAt' bit by index
 *      - 'byteLength'
 *      - 'size'
 *      - 'iterator'
 *      - 'clone'
 *      - 'leftShift'
 *      - 'rightShift'
 *      - 'countSetBits'
 *      - 'setAllBits'
 *      - 'toString'
 *
 *  - other operations
 *      - 'or' operation
 *      - 'xor' operation
 *      - 'and' operation
 *      - 'not' operation
 */


export class FixedBitArray {
    protected internalValues: Uint8Array;
    protected bitLength: number;

    static from(other: FixedBitArray): FixedBitArray {
        return new FixedBitArray(other.bitLength, other.internalValues);
    }

    static create(bitLength: number): FixedBitArray {
        return new FixedBitArray(bitLength);
    }

    private constructor(bitLength: number, values?: Uint8Array) {
        this.bitLength = bitLength;
        const noOfBytes = this.getRequiredBytes(bitLength);
        if (values) {
            this.internalValues = new Uint8Array(values);
        } else {
            this.internalValues = new Uint8Array(noOfBytes);
            this.internalValues.fill(0);
        }
    }

    public setBitAt(index: number): void {
        if (index < this.bitLength) {
            const byteIndex = this.getByteIndex(index);
            const offSet = this.getBitOffSet(index);
            this.internalValues[byteIndex] |= 1 << offSet;
        }
    }

    public isBitSetAt(index: number): boolean {
        const byteIndex = this.getByteIndex(index);
        const offSet = this.getBitOffSet(index);
        return (this.internalValues[byteIndex] >> offSet & 1) === 1;
    }

    public byteLength(): number {
        return this.internalValues.length;
    }

    public size(): number {
        return this.bitLength;
    }

    // <<
    public leftShift(by: number): FixedBitArray {
        const resultBitArray = new FixedBitArray(by + this.bitLength);
        const byteIndex = this.getByteIndex(by);
        const offset = this.getBitOffSet(by);
        const resultValues = resultBitArray.internalValues;
        let carryToLeft = 0, origIndex = 0;
        for (let i = byteIndex; i < resultValues.length; i++) {
            resultValues[i] = this.internalValues[origIndex];
            resultValues[i] <<= offset;
            if (i > byteIndex) {
                resultValues[i] |= carryToLeft;
            }
            carryToLeft = (this.internalValues[origIndex] & (255 << (8 - offset) & 255)) >> (8 - offset);
            origIndex++;
        }
        return resultBitArray;
    }

    // >>
    public rightShift(by: number): FixedBitArray {
        if (this.bitLength <= by) {
            return new FixedBitArray(0);
        } else {
            const resultBitArray = new FixedBitArray(this.bitLength - by);
            const byteIndex = this.getByteIndex(by);
            const offset = this.getBitOffSet(by);
            const resultValues = resultBitArray.internalValues;
            let carryRight = 0, origIndex = this.internalValues.length - 1;
            for (let i = resultValues.length - 1; i > -1; i--) {
                resultValues[i] = this.internalValues[origIndex];
                resultValues[i] >>= offset;
                if (i !== resultValues.length - 1) {
                    resultValues[i] |= carryRight;
                }
                carryRight = (this.internalValues[origIndex] & (255 >> (8 - offset))) << (8 - offset);
                origIndex--;
            }
            return resultBitArray;
        }
    }

    public countSetBits(): number {
        let bits = 0;
        for (let i = 0; i < this.internalValues.length; i++) {
            bits += this.hammingWeight(this.internalValues[i]);
        }
        return bits;
    }

    public setAllBits(): void {
        this.internalValues.fill(255);
    }

    public clearAllBits(): void {
        this.internalValues.fill(0);
    }

    public clone(): FixedBitArray {
        return FixedBitArray.from(this);
    }

    public toString(): string {
        let acc: string = '';
        let val: string = '';
        this.internalValues.slice().reverse().forEach((st) => {
            if (st > 0) {
                val = Number(st).toString(2);
                acc += ('00000000'.substr(val.length) + val) + ' ';
            } else {
                acc += '00000000 ';
            }
        });
        return acc;
    }

    public bitwiseOr(with_: FixedBitArray): FixedBitArray {
        return this.bitwiseOperation(with_, (a, b) => a | b);
    }

    public bitwiseAnd(with_: FixedBitArray): FixedBitArray {
        return this.bitwiseOperation(with_, (a, b) => a & b);
    }

    public bitwiseXor(with_: FixedBitArray): FixedBitArray {
        return this.bitwiseOperation(with_, (a, b) => a ^ b);
    }

    public reverse(): FixedBitArray {
        const resultArray = new FixedBitArray(this.bitLength);
        for (let i = 0; i < this.internalValues.length; i++) {
            resultArray.internalValues[i] = this.reverseBits(this.internalValues[i]);
        }
        resultArray.internalValues.reverse();
        const offset = this.getBitOffSet(this.bitLength);
        console.log('off', offset);
        console.log('rev', resultArray.toString());
        return resultArray.rightShift(3);
    }

    public bitwiseNot(): FixedBitArray {
        const resultArray = new FixedBitArray(this.bitLength);
        for (let i = 0; i < resultArray.internalValues.length; i++) {
            resultArray.internalValues[i] = ~this.internalValues[i];
        }
        return resultArray;
    }

    private reverseBits(b: number): number {
        b = (b & 0xF0) >> 4 | (b & 0x0F) << 4;
        b = (b & 0xCC) >> 2 | (b & 0x33) << 2;
        b = (b & 0xAA) >> 1 | (b & 0x55) << 1;
        return b;
    }

    private bitwiseOperation(with_: FixedBitArray, operation: (a: number, b: number) => number) {
        const resultBitLen = Math.max(this.bitLength, with_.bitLength);
        const resultArray = new FixedBitArray(resultBitLen);
        let byteLen = this.getRequiredBytes(this.bitLength);
        let byteLen_ = this.getRequiredBytes(with_.bitLength);
        let resultByteLen = this.getRequiredBytes(resultBitLen);
        while (byteLen !== 0 && byteLen_ !== 0) {
            resultArray.internalValues[--resultByteLen] =
                operation(this.internalValues[--byteLen], with_.internalValues[--byteLen_]);
        }
        while (byteLen_ !== 0) {
            resultArray.internalValues[--resultByteLen] = with_.internalValues[--byteLen_];
        }
        while (byteLen !== 0) {
            resultArray.internalValues[--resultByteLen] = this.internalValues[--byteLen];
        }
        return resultArray;
    }

    private hammingWeight(num: number): number {
        let bits = 0;
        let mask = 1;
        for (let i = 0; i < 8; i++) {
            if ((num & mask) != 0) {
                bits++;
            }
            mask <<= 1;
        }
        return bits;

    }

    private getBitOffSet(index: number) {
        return index % 8;
    }

    private getByteIndex(index: number) {
        return Math.floor(index / 8);
    }

    private getRequiredBytes(size: number) {
        return Math.ceil(size / 8);
    }


}