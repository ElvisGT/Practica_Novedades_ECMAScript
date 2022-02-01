
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