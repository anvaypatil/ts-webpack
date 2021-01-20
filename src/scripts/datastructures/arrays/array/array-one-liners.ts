export namespace ArrayOneLiner {
    // Check if an array is empty
    export const isEmpty = <Type>(arr:Array<Type>) => !Array.isArray(arr) || arr.length === 0;

    // Clone an array
    export const clone_1 = <Type>(arr:Array<Type>) => arr.slice(0);
    export const clone_2 = <Type>(arr:Array<Type>) => [...arr];
    export const clone_3 = <Type>(arr:Array<Type>) => Array.from(arr);
    export const clone_4 = <Type>(arr:Array<Type>) => arr.map(x => x);
    export const clone_5 = <Type>(arr:Array<Type>) => JSON.parse(JSON.stringify(arr));
    export const clone_6 = <Type>(arr:Array<Type>) => arr.concat([]);

    // Compare two arrays
    export const isEqual = <Type>(a:Array<Type>, b:Array<Type>) => a.length === b.length && a.every((v, i) => v === b[i]);

    // Convert an array of strings to numbers
    export const toNumbers = (arr: Array<Number>) => arr.map(Number);

    // Convert an array of numbers to strings
    export const toStrings = (arr: Array<String>) => arr.map(String);

    // Count by the properties of an array of objects
    /**
     countBy([
     { branch: 'audi', model: 'q8', year: '2019' },
     { branch: 'audi', model: 'rs7', year: '2020' },
     { branch: 'ford', model: 'mustang', year: '2019' },
     { branch: 'ford', model: 'explorer', year: '2020' },
     { branch: 'bmw', model: 'x7', year: '2020' },
     ], 'branch');
     output: { 'audi': 2, 'ford': 2, 'bmw': 1 }
     **/
    // @ts-ignore
    export const countBy = <Type>(arr: Array<Type>, prop: string) => arr.reduce((prev, curr) => (prev[curr[prop]] = ++prev[curr[prop]] || 1, prev), {});

    // Count the occurrences of a value in an array
    /**
     countOccurrences([2, 1, 3, 3, 2, 3], 2);                // 2
     countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a');  // 3
     */
    export const countOccurrencesOf = (arr: Array<number>, val: number) => arr.reduce((a:number, v: number) => (v === val ? a + 1 : a), 0);

    // Count the occurrences of array elements
    /**
     countOccurrences([2, 1, 3, 3, 2, 3]);               // { '1': 1, '2': 2, '3': 3 }
     countOccurrences(['a', 'b', 'a', 'c', 'a', 'b']);   // { 'a': 3, 'b': 2, 'c': 1 }
     **/
    // @ts-ignore
    export const countOccurrences = arr => arr.reduce((prev, curr) => (prev[curr] = ++prev[curr] || 1, prev), {});

    // array of numbers in given range
    // @ts-ignore
    export const range_1 = (min, max) => [...Array(max - min + 1).keys()].map(i => i + min);
    // @ts-ignore
    export const range_2 = (min, max) => Array(max - min + 1).fill(0).map((_, i) => min + i);
    // @ts-ignore
    export const range_3 = (min, max) => Array.from({length: max - min + 1}, (_, i) => min + i);

    // Empty an array
    // @ts-ignore
    export const empty = arr => arr.length = 0;

    // Find the number from `arr` which is closest to `n`
    // closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50);   // 33
    // @ts-ignore
    export const closest_1 = (arr, n) => arr.reduce((prev, curr) => Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);
    // @ts-ignore
    export const closest_2 = (arr, n) => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];

    // Maximum item from an array
    // @ts-ignore
    export const max = arr => Math.max(...arr);

    // Minimum item from an array
    // @ts-ignore
    export const min = arr => Math.min(...arr);

    // Flatten an array
    // @ts-ignore
    export const flat_1 = arr => [].concat.apply([], arr.map(a => Array.isArray(a) ? flat_1(a) : a));
    // @ts-ignore
    export const flat_2 = arr => arr.reduce((a, b) => Array.isArray(b) ? [...a, ...flat_2(b)] : [...a, b], []);

    // Intersection of arrays
    // @ts-ignore
    export const intersection = <Type>(a: Array<Type>, ...arr: Array<Array<Type>>) => [...new Set(a)].filter((v: Type) => arr.every(<Type>(b: Array<Type>) => b.includes(v)))

    // GroupBy a key
    /**
     groupBy([
         { branch: 'audi', model: 'q8', year: '2019' },
         { branch: 'audi', model: 'rs7', year: '2020' },
         { branch: 'ford', model: 'mustang', year: '2019' },
         { branch: 'ford', model: 'explorer', year: '2020' },
         { branch: 'bmw', model: 'x7', year: '2020' },
     ], 'branch');

     /*
     {
        audi: [
            { branch: 'audi', model: 'q8', year: '2019' },
            { branch: 'audi', model: 'rs7', year: '2020' }
        ],
        bmw: [
            { branch: 'bmw', model: 'x7', year: '2020' }
        ],
        ford: [
            { branch: 'ford', model: 'mustang', year: '2019' },
            { branch: 'ford', model: 'explorer', year: '2020' }
        ],
     }
     **/
    // @ts-ignore
    export const groupBy = (arr, key) => arr.reduce((acc, item) => ((acc[item[key]] = [...(acc[item[key]] || []), item]), acc), {});

    // Partition an array based on a condition
    /**
      partition([1, 2, 3, 4, 5], n => n % 2);     // [[2, 4], [1, 3, 5]]
     **/
    // @ts-ignore
    export const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);


    // Zip multiple arrays
    /**
     zip(['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]);   // [['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]
     **/
    // @ts-ignore
    export const zip = (...arr) => Array.from({length: Math.max(...arr.map(a => a.length))}, (_, i) => arr.map(a => a[i]));

    // Unzip an array of arrays
    /**
     unzip([['a', 1], ['b', 2], ['c', 3], ['d', 4], ['e', 5]]);  // [['a', 'b', 'c', 'd', 'e'], [1, 2, 3, 4, 5]]
     **/
    // @ts-ignore
    export const unzip = arr => arr.reduce((acc, c) => (c.forEach((v, i) => acc[i].push(v)), acc), Array.from({length: Math.max(...arr.map(a => a.length))}, (_) => []));

}