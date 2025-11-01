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





// let obj = {
//     id: 101,
// };

// let b = obj;

// b.id = 202;

// console.log('🟢', obj);

// console.log('🟢', b == obj);
// console.log('🟢', b === obj);




// const a = {
//     id: 101,
// };
// const b = {
//     id: 101,
// };

// console.log('🟢', b == a);
// console.log('🟢', b === a);

// console.log('🟢', a > b);
// console.log('🟢', a == 12);

//#endregion


//#region clonning

// ---- Поверхностное клонирование
// const obj = {
//     level: 10,
//     title: 'A',
// };

// // const copy = {};
// // for (let key in obj)
// //     copy[key] = obj[key];

// // console.log('🟢', copy);
// // console.log('🟢', obj == copy);


// // const obj2 = Object.assign(obj, {permission: 'read'});
// // console.log('🟢', obj2);

// const copy = Object.assign({}, obj);
// console.log('🟢', copy);
// console.log('🟢', obj == copy);



// const user = {
//     id: 101,
//     email: 'vasia@mail.com',
//     permisions: {
//         read: true,
//         write: false,
//     },
//     phones: [
//         '+876384762834',
//         '+787643892398'
//     ],
// };

// // ---- Поверхностное клонирование
// // const copy = Object.assign({}, user);
// // copy.permisions.write = true;
// // console.log('🟢', user);


// // ---- Глубокое копирование
// // const copy = structuredClone(user);
// // copy.permisions.write = true;
// // console.log('🟢', user);

// // ---- Глубокое копирование
// const copy = _.cloneDeep(user);
// copy.permisions.write = true;
// console.log('🟢', user);


//#endregion


//#region functions / methods / this

// function render() {
//     console.log('🟢', 'render');
// };

// const unit = {
//     level: 10,
//     title: 'warrior',
//     points: [4, 6, 5, 5],
// };

// unit.render = render;
// console.log('🟢', unit);
// unit.render();





// const unit = {
//     level: 10,
//     title: 'warrior',
//     points: [4, 6, 5, 5],
//     render: function() {
//         console.log('🟢', 'render');
//     },
//     show() {
//         console.log('🟢', 'show');
//     },
//     reset: () => console.log('🟢', 'reset'),

// };

// console.log('🟢', unit);
// unit.render();
// unit.show();
// unit.reset();






// const client = {
//     id: 101,
//     email: 'vasia@mail.com',
//     render: function() {
//         // console.log('🟢', email);
//         console.log('🟢', this.email);
        
//         // console.log('🟢', user.email);      // :-(
//     },
// };

// client.render();

// const f = client.render;
// f();






// function render() {
//     console.log('🟢', this.email);
// }

// // render();

// const a = {email: 'vasia@mail.com'};
// const b = {email: 'petya@mail.com'};

// a.show = render;
// b.print = render;

// console.log('🟢', a);
// console.log('🟢', b);

// a.show();
// b.print();






// const user = {
//     id: 101,
//     render() {
//         const func = () => console.log('🟢', this.id);
//         func();
//     }
// };

// user.render();






// function creator() {
//     // this === undefined
//     return {
//         id: 101,
//         ref: this,
//     };
// }

// const a = creator();
// console.log('🟢', a);



// function creator() {
//     return {
//         id: 101,
//         ref() {
//             return this;
//         }
//     };
// }

// const a = creator();
// console.log('🟢', a);
// console.log('🟢', a.ref().ref().ref().ref().id);





// const counter = {
//     count: 0,
//     increment() {
//         this.count++;
//         return this;
//     },
//     render() {
//         console.log('🟢', `count = ${this.count}`);
//     }
// };

// counter.increment().increment().increment().render();



//#endregion


//#region new

// function f() {
//     console.log('🟢', this);
// }

// const obj = {
//     val: 140,
// };
// obj.f = f;

// f();            // undefined
// obj.f();        // this === obj
// new f();        // this === {}




// 1. Искуственный способ

// function User(id, email) {
//     this.id = id;
//     this.email = email;
// }
// const obj = {};
// obj.func = User;
// obj.func(101, 'vasia@mail.com');
// console.log('🟢', obj);


// 2. Искуственный способ

// function User(id, email) {
//     const obj = {};
//     obj.id = id;
//     obj.email = email;

//     return obj;
// }

// const a = User(101, 'vasia@mail.com');
// console.log('🟢', a);

// 3. :-)))

// function User(id, email) {
//     // this === {};

//     this.id = id;
//     this.email = email;

//     // return this;
// }

// const obj = new User(101, 'vasia@mail.com');
// console.log('🟢', obj);





// function User(id) {
//     this.id = id;

//     // return this;                 // ---> this
//     // return {value: 'test'};      // ---> {value: 'test'}
//     return 123;                     // ---> this

// }

// console.log('🟢', new User(101)); 







// function User(id) {
//     this.id = id;
//     this.role = 'admin';

//     this.render = function() {
//         console.log('🟢', `id: ${this.id}, role: ${this.role}`);
//     }
// }

// const user = new User(101);
// console.log('🟢', user);
// user.render();







// function Counter(init) {
//     this.count = init;
//     this.incr = function() {
//         this.count++;
//         return this;
//     };
//     this.render = function() {
//         console.log('🟢', `count = ${this.count}`);
//     }
// }

// const counterA = new Counter(0);
// counterA.incr().incr().incr().render();

// const counterB = new Counter(100);
// counterB.incr().incr().incr().render();






// const data = {};


// console.log('🟢', data.id);
// const id = data.id ?? 0;
// console.log('🟢', id);

// console.log('🟢', data?.email);


// const data = {
//     id: 101,
//     render() {
//         console.log('🟢', 'render');
//     },
// };

// data.render?.();
// data.show?.();

// const key = 'role';
// console.log('🟢', data?.[key]);

//#endregion

