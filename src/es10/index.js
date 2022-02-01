let array = [1,2,3,[1,2,3,[1,2,3]]];

console.log(array.flat(2));


//////////////////////

let array2 = [1,2,3,4,5];
console.log(array2.flatMap(value => [value,value * 2]));


//////////
let hello = "    Hola";

console.log(hello);
console.log(hello.trimStart());

////////////////////

try {

}
catch
{
    error;
}

////////////////////////

let entries = [
    ["name","Elvis"],
    ["age","22"],
];

console.log(entries);
console.log(Object.fromEntries(entries));

let mySymbol = "My Symbol";
let symbol = Symbol(mySymbol);

console.log(symbol.description);