//////////////////////////////////////////
/*OLD*/
function newfunction(name,age,country)
{
    var name = name || 'Elvis';
    var age = age || 22;
    var country = country || 'Cuba';
    console.log(name,age,country);
}

/*ECMAScript 6 */

function newfunction2(name="Elvis",age=22,country="Cuba")
{
    console.log(name,age,country);
}

newfunction2();
newfunction2("Edgar",14,"Cuba");
//////////////////////////////////////////

/*OLD*/
let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);

/*ECMAScript 6 */
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//////////////////////////////////////////

/*OLD*/

let lorem = "Wuix FDtggrtd quixm mertyf plijn \n"
+ "esto es una frase epica";

console.log(lorem);

/*ECMAScript 6 */
let lorem2 = `Esto es una mejor forma de 
hacer un salto de linea
`;

console.log(lorem2);

//////////////////////////////////////////

/*OLD*/

let person = {
    name:"Elvis",
    age:22,
    country:"Cuba"
};

console.log(person.name,person.age,person.country);

/*ECMAScript 6 */

let {name,age,country} = person;

console.log(name,age,country);

//////////////////////////////////////////

/*OLD*/

let team1 = ["Elvis","Edgar","Kathy"];
let team2 = ["Anaiza","Pedro","Felipe"];

let edu = ["David","Elvis","Edgar","Kathy","Anaiza","Pedro","Felipe"];
console.log(edu);

/*ECMAScript 6 */
let edu2 = ["David",...team1,...team2];

console.log(edu2);



//////////////////////////////////////////

{
    var globalVar = "Global Var";
}

{
    let globalLet = "Global Let";
    console.log(globalLet);
}

console.log(globalVar);

//////////////////////////////////////////
const a = "b";
a = "b";  /*Esto da error porque a es una constante*/ 

//////////////////////////////////////////

/*OLD*/

let name = "Elvis";
let age = 22;

obj = {name:name,age:age};

console.log(obj);

/*ECMAScript 6 */

obj2 = {name,age};

//////////////////////////////////////////

/*OLD*/

let names = [
    {name:"Elvis",age:22},
    {name:"Edgar",age:14}
]

let listOfObject = names.map(function(item){
    console.log(item.name);
})

/*ECMAScript 6 */

let listOfObject2 = names.map(item => {
    console.log(item.name);
})


//////////////////
const helloPromise = () => {
    return new Promise ((resolve,reject) => {
        if(true)
        {
            resolve("Hey!");
        }
        else
        {
            reject("Ups!");
        }
    });

}

helloPromise()
.then(resolve => console.log(resolve))
.catch(reject => console.log(reject));



///////////////////
class calculator {
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }

    sumar (valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();
console.log(calc.sumar(2,2));

///////////////
import  {hello}  from './module';

hello();

//////////////

function* helloWorld()
{
    if(true)
    {
        yield 'Hello, ';
    }
    if(true)
    {
        yield 'World';
    }
}

const generator = helloWorld();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value); 