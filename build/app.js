"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var backendless_1 = __importDefault(require("backendless"));
var APP_ID = 'YOUR_APP_ID';
var API_KEY = 'YOUR_API_KEY';
backendless_1.default.initApp(APP_ID, API_KEY);
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
        this.age = 12;
    }
    return Person;
}());
function createPerson() {
    var person = new Person('Bob');
    return backendless_1.default.Data.of(Person).save(person);
}
var app = express_1.default();
app.get('/', function (req, res, next) {
    createPerson()
        .then(function (person) { return res.json(person); })
        .catch(next);
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
