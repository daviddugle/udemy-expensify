///
/// Object Destructuring
///



// const person = {
//     name: "David",
//     age: 45,
//     location: {
//         city: "Charlotte",
//         temp: 45
//     }
// };

// const  { name: firstName = "Anonymous", age } = person;


// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location

// if (city && temperature){

//     console.log(`It's ${temperature} in ${city}`);
// }


// const book = {
//     title: "Ego is the Enemy",
//     author: "Ryan Holiday",
//     publisher: {
//         name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published"} = book.publisher;

// console.log(publisherName) // Penguin, Self-Published


///
/// Array Destructuring
///

// const address = ["1229 S Juniper Street", "Philadelphia", "Pensylvania", "19147"];

// const [, city, state = "New York"] = address;

// console.log(`You are in ${city} ${state}`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [beverage, ,cost] = item;

console.log(`A medium ${beverage} costs ${cost}`);