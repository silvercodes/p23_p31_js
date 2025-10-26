'use strict'

//#region intro

// const a = {};
// // >>> EQUALS <<<
// const b = new Object();


// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'role': 'admin',
//     'permission': 'write',
//     'max level': 10,
    
// };

// console.log('🟢', user.email);
// user.email = 'petya@mail.com';

// console.log('🟢', user['id']);
// console.log('🟢', user.id);
// console.log('🟢', user['max level']);

// console.log('🟢', user);

// const key = 'role';
// console.log('🟢', user[key]);






// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
// };

// user.age = 23;
// console.log('🟢', user);

// const key = 'permissions';
// user[key] = ['read', 'write'];
// console.log('🟢', user);

// user.avatars = {
//     little: true,
//     middle: false,
//     large: true,
// };

// console.log('🟢', user);





// function createObject(id, email, age) {
//     // return {
//     //     id: id,
//     //     email: email,
//     //     age: age,
//     // };
//     // >>> EQUALS <<<
//     return {
//         id,
//         email,
//         age,
//     };
// }






// function createObject(id, email, age, key, value) {
//     return {
//         id,
//         email,
//         age,
//         [key]: value,
//         key: value
//     };
// }

// const obj = createObject(101, 'vasia@mail.com', 23, 'role', 'admin');
// console.log('🟢', obj);





// const obj = {
//     return: 76,
//     'const': 'PI',
//     function: 'func',
//     'function() {console.log("Hello");}': 12,
// };
// console.log('🟢', obj);





// const point = {
//     x: 12,
//     y: 140,
// };
// function exists(obj, propertyName) {
//     // return obj[propertyName] !== undefined;

//     return propertyName in obj;
// }

// console.log('🟢', exists(point, 'x'));





// const point = {
//     x: 12,
//     y: 140,
// };
// point.title = 'A';
// console.log('🟢', point);
// delete point.x;
// console.log('🟢', point);





// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permissions': ['read', 'write'],
// };

// for (let key in user)
//     console.log('🟢', `key: ${key}, val: ${user[key]}`);





// const obj = {
//     id: 101,
//     email: 'vasia@mail.com',
//     'main permissions': ['read', 'write'],
//     12: 'test',
//     8: 'test_2',
//     3.14: 'PI'
// };
// for (let key in obj)
//     console.log('🟢', `key: ${key}, val: ${obj[key]}`);





// const codes = {
//     '+34': 'country_A',
//     '+12': 'country_B',
//     '+10': 'country_C'
// };
// for (let key in codes)
//     console.log('🟢', `key: ${key}, val: ${codes[key]}`);




//#endregion



