'use strict'

// #region Function declaretion

    // test();
    // test();

    // function test() {
    //     console.log('🟢', 'test');
    // }

    // test();
    // test();


    // function test() {
    //     const value = 12;
    //     console.log('🟢', value);
    // }
    // test();


    // const value = 12;
    // function test() {
    //     console.log('🟢', value);
    // }
    // test();


    // let value = 25;
    // function test() {
    //     let value = 101;
    //     console.log('🟢', value);
    // }
    // test();
    // console.log('🟢', value);


    // function render(message) {
    //     console.log('🟢', message);
    // }
    // function render2(message = 'no_message')
    // {
    //     console.log('🟢', message);
    // }

    // render(5);
    // render('vassia');
    // render({id: 101});
    // render();
    // render(4, 6, 7, 8);
    // console.log('🟢', '------------');
    // render2(5);
    // render2('vassia');
    // render2({id: 101});
    // render2();
    // render2(4, 6, 7, 8);


    // function getDefaultValue() {
    //     console.log('🟢', 'getDefaultValue()');
    //     return 101;
    // }

    // function render(message = getDefaultValue()) {
    //     console.log('🟢', message);
    // }

    // render(5);
    // render();

    
    // function a() {
    //     console.log('🟢', 'a');
    // }
    // function a(val) {
    //     console.log('🟢', val);
    // }

    // a();

    // #endregion

// #region Function expression

// const render = function() {
//     console.log('🟢', 'render');
// };

// render();


// f();
// function f() {
//     console.log('🟢', 'f');
// }

// // func();             // ERROR
// const func = f;
// func();



// function validate(val, succesHandler, errorHandler) {
//     if (val > 0)
//         succesHandler();
//     else
//         errorHandler();
// }

// function success() {
//     console.log('🟢', 'success');
// }
// function error() {
//     console.log('🟢', 'error');
// }

// validate(-12, success, error);

// validate(
//     101, 
//     function() {console.log('🟢', 'OK')}, 
//     function() {console.log('ERR')}
// );






// #endregion

// #region Arrow function

// const f = () => console.log('🟢', 'test');
// f();

// const k = (a, b) => a + b;
// // >>> EQUALS <<<
// const n = (a, b) => {
//     return a + b;
// };
// console.log('🟢', k(3, 4));


// function validate(val, succesHandler, errorHandler) {
//     if (val > 0)
//         succesHandler();
//     else
//         errorHandler();
// }

// validate(
//     12,
//     () => console.log('🟢', 'OK'),
//     () => console.log('🟢', 'ERR')
// );


//#endregion
