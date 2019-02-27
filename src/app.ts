import express from 'express';
import Backendless from 'backendless';

const APP_ID: string = 'YOUR_APP_ID';
const API_KEY: string = 'YOUR_API_KEY';

Backendless.initApp(APP_ID, API_KEY);

class Person {
    name: string;
    age: number;

    constructor(name: string) {
        this.name = name;
        this.age = 12;
    }
}

function createPerson(): Promise<Person> {
    const person = new Person('Bob');

    return Backendless.Data.of(Person).save<Person>(person)
}

const app: express.Application = express();

app.get('/', function (req, res, next) {
    createPerson()
        .then(person => res.json(person))
        .catch(next)
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});