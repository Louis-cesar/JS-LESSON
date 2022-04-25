// console.log("hello");
// console.warn("hello");
// console.error("hello");

// Variables has 3 methods var,let, const

// var Name ="louis";
// let age =22;
// const pi =3.14;
// console.log(" ako nga pala si"  + Name +  "ang age ko nga pala ay" + age);

// Data types
// String, Number, Boolean, Null, Undefined, Symbol

// const Name ="louis";
// const age =22;
// // const x = 3.5;
// // const y = true;
// // const unknow = null;
// // const undef = undefined;

// //how to concatinate

// // let String = `ang pangalan ko ay ${Name} ang age ko ay ${age}`;  
// console.log(Name.length);
// console.log(Name.toLocaleLowerCase(Name));
// console.log(Name.toLocaleUpperCase(Name));


// Arrays
// const Fruit = ["Apple", "Orange", "Banana", "Mango"];
// // Fruit.push("mango");
// // Fruit.unshift("Lemon");
// // Fruit.pop();
// // Fruit.shift();

// // console.log(Array.isArray(Fruit));
// // console.log(Fruit.indexOf("Banana"));
// // Fruit.splice(2,2);
// // console.log(Fruit);


// objects literals
// const person = {
//     firstName: "Louis",
//     lastName: "Cesar",
//     Age: 24,
//     Favorite: ["Basketball", "Playing Dota2", "Watching Movies"],

//     familyMember: {
//         Brohter: "Miko",
//         Mother: "Myrna",
//         MyIdol: "Lebrom James",

//     }
// }
// console.log(person.firstName,person.lastName);


// Array and objects
// const Contact  = [
//     {
//         id: 1,
//         fullName: "Louis Cesar",
//         isSave: "Phone"

//     },

//     {
//         id: 2,
//         fullName: "Miko Cesar",
//         isSave: "USB"

//     },

//     {
//         id: 3,
//         fullName: "Mark Cesar",
//         isSave: "SD"

//     },

// ];

// console.log(Contact[0].fullName);




//Loops
// const Contacts  = [
//     {
//         id: 1,
//         fullName: "Louis Cesar",
//         isSave: "Phone"

//     },

//     {
//         id: 2,
//         fullName: "Miko Cesar",
//         isSave: "Phone"

//     },

//     {
//         id: 3,
//         fullName: "Mark Cesar",
//         isSave: "SD"

//     },

// ]

//For loop
// for(contact of Contacts){
//     console.log(contact.fullName, contact.isSave);
// }
 
//MAP
// const ContactFullname = Contacts.map(contact => contact.fullName);
// console.log(ContactFullname);

// FILTER
// const ContactPhone = Contacts.filter(contact => contact.isSave === "Phone");
// console.log(ContactPhone);


//FILTER AND MAP

// const ContactPhone = Contacts.filter(contact => contact.isSave === "Phone").map(contact => contact.fullName);
// console.log(ContactPhone);




//Conditionals
// const x = 300;    

// if( x === 100){
//     console.log("its 100");
// }

// // else if(x > 200){
// //     console.log("its greater than 200");
// // }
// else{
//     console.log("its not 100");
// }



//Function Types
// const Getsum = (x,y) => x + y ; {
// }
// console.log(Getsum(500,1000));

// const louis = (x,y) =>{
//     return (x + y);
// }
// console.log(louis(500,200));



//OOP 
// Class
// class Person{

//     constructor(firstname, lastname, mi) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.mi = mi;
//      }
//     getFullName() {
//     return `${this.firstname} ${this.lastname} ${this.mi}`;
//     }
    
// }
//         //intaniate object
//     const person1 = new Person("louis","cesar","B");
//     const person2 = new Person("miko","cesar","B");
    

// console.log(person1.firstname);


// contructor function

// function Person(firstname, lastname, mi) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     this.mi = mi;
     
//      this.getFullName = () =>{
//     return `${this.firstname} ${this.lastname} ${this.mi}`;
    
//         }
//     }
//     const person1 = new Person("louis","cesar","B");
//     const person2 = new Person("miko","cesar","B");
    

//     console.log(person1.getFullName());
//     console.log(person2.firstname);