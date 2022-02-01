const obj = {
    name:"Elvis",
    age:22,
    county:"Cuba",
};

let {name, ...all} = obj;
console.log(name,all); 

///////////////////////

const obj1 = {
    name:"Edgar",
};

const objt2 = {
    ...obj1,
    country:"Cuba",
};

console.log(objt2);

//////////////////
const helloWorld = () => {
    return new Promise((resolve,reject)=>{
        (true)
        ? setTimeout(() => resolve("Hello World"),3000)
        : reject(new Error("Error aqui"));
    });
}


helloWorld()
.then(response => console.log(response))
.catch(error => console.log(error))
.finally(() => console.log("Finalizado"))


const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec('2018-05-07');
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year,month,day);