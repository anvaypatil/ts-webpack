export function array_functions() {
    // https://www.w3schools.com/jsref/jsref_obj_array.asp
    const arr1 = [1, 2, 3, 4, 5];
    const arr2 = [6, 7, 8, 9];

    // concat(): Joins two or more arrays, and returns a copy of the joined arrays
    // array1.concat(array2, array3, ..., arrayX)
    const result = arr1.concat(arr2);

    // copyWithin(): Copies array elements within the array, to and from specified positions
    // array.copyWithin(target, start, end)
    // @ts-ignore
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.copyWithin(2, 0); // Mutable operation
    // ["Banana", "Orange", "Banana", "Orange"]

    // entries(): Returns a key/value pair Array Iteration Object
    // @ts-ignore
    for (obj of fruits.entries()) {
        // @ts-ignore
        console.log(obj);
    }
    // (2) [0, "Banana"]
    // (2) [1, "Orange"]
    // (2) [2, "Banana"]
    // (2) [3, "Orange"]

    // every(): Checks if every element in an array pass a test
    const ages = [32, 33, 16, 40];
    const adults: boolean = ages.every((age) => age >= 18);

    // fill(): Fill all the array elements with a static value:
    // @ts-ignore
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    fruits.fill("Kiwi");
    // ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]

    // filter(): Creates a new array with every element in an array that pass a test
    // @ts-ignore
    const adultsAges: Array = ages.filter((age) => age >= 18);

    // find(): Returns the value of the first element in an array that pass a test
    const firstAdult = ages.find((age) => age >= 18);

    // findIndex(): Returns the index of the first element in an array that pass a test
    const firstAdultIndex = ages.findIndex((age) => age >= 18);

    // forEach(): Calls a function for each array element
    fruits.forEach((fruit) => console.log(fruit));

    // from(): Creates an array from an object
    const alphabets = Array.from("ABCDEFG");

    // flat an array
    // @ts-ignore
    const flatArray = [1, 2, 3, 4, [6, 7, 8] [8, 9]].flat();

    // includes(): Check if an array contains the specified element
    const hasMango = fruits.includes("Mango"); // true

    // indexOf(): Search the array for an element and returns its position
    const appleIndex = fruits.indexOf("Apple");

    // isArray(): Checks whether an object is an array
    const arrayCheck = Array.isArray(fruits);

    // join(): Joins all elements of an array into a string
    const fruitsString = fruits.join(" | ");

    // keys(): Returns a Array Iteration Object, containing the keys of the original array
    const fk = fruits.keys();

    // convert an Array Iterator object to Array
    const keysArray = [...fk];

    // lastIndexOf(): Search the array for an element, starting at the end, and returns its position
    // array.lastIndexOf(item, start)
    fruits.lastIndexOf("Apple");

    // map(): Creates a new array with the result of calling a function for each array element
    const numbers = [4, 9, 16, 25];
    const square_roots = numbers.map(Math.sqrt);

    // pop(): Removes the last element of an array, and returns that element
    const fruit = fruits.pop();

    // push(): Adds new elements to the end of an array, and returns the new length
    fruits.push(fruit);

    // reduce(): Reduce the values of an array to a single value (going left-to-right)
    numbers.reduce((acc, num) => acc - num);

    // reduceRight(): Reduce the values of an array to a single value (going right-to-left)
    numbers.reduceRight((acc, num) => acc - num);

    // reverse(): Reverses the order of the elements in an array
    numbers.reverse();

    // shift(): Removes the first element of an array, and returns that element
    numbers.shift();

    // slice(): Selects a part of an array, and returns the new array
    fruits.slice(1, 3);

    // some(): Checks if any of the elements in an array pass a test
    const anyAdults: boolean = ages.some((age) => age >= 18);

    // sort(): Sorts the elements of an array
    const points = [40, 100, 1, 5, 25, 10];
    points.sort((a, b) => a - b);

    // splice(): Adds/Removes elements from an array
    // array.splice(index, howmany, item1, ....., itemX)
    fruits.splice(2, 0, "Lemon", "Kiwi"); // Mutable operation

    // unshift(): Add new items to the beginning of an array
    fruits.unshift("Lemon", "Pineapple"); // Mutable operation
}