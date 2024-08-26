/*const person = {
    name: 'Rick',
    age: 77,
    country: 'US',
} */

const clone1 = structuredClone(person)
const clone2 = structuredClone(person)
const samePerson = person

person.age = 78
person.country = 'FR'
