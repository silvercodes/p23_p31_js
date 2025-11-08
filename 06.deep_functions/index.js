'use strict';

// var a = 10;
// let b = 20;
// console.log('🟢', a + b);

// function func() {
//     var a = 10;
//     let b = 20;
//     console.log('🟢', a + b);
// }

// func();


//#region Global object

// console.log('🟢', window);
// console.log('🟢', global);
// console.log('🟢', globalThis);       // :-)


// console.log('🟢', Math);
// console.log('🟢', window);
// console.log('🟢', window.Math);



// var a = 'Mercury';
// let b = 'Venus';

// // console.log('🟢', window);
// console.log('🟢', window.a);
// console.log('🟢', window.b);


// var a = 10;
// window.b = 20;
// console.log('🟢', window);

// console.log('🟢', a);
// console.log('🟢', b);


// var a = 10;
// window.b = 20;

// delete window.a;        // ERROR
// delete window.b;

// console.log('🟢', window);


// console.log('🟢', window);
// var setTimeout = 'HOHOHOHO';
// let setInterval = 'OKOKOKOK';
// console.log('🟢', window);


//#endregion


// a = 20;
// func();

// var a;
// function func() {
//     console.log('🟢', 'func()');
// }



// a = 20;
// func();

// let a;
// const func = function() {
//     console.log('🟢', 'func()');
// }





const email = 'vasia@mail.com';

function f1(name) {

    function f2() {
        console.log('🟢', `${name}: ${email}`);
    }

    f2();
}

f1('Vasia');




