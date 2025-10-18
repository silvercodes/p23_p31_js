
//
/*

*/

console.log('🟢', 45);

var a = 45;
let b = 56;
const c = 12;

let message = 'Hello Vasia';        // ''  ""   ``
const output = `Message: ${message}`;

alert(output);

if (true) {
    console.log('🟢', 'This is true');
}

for (let i = 0, j = 100; i < 5; ++i) {
    console.log('🟢', i);
}


render(message);

function render(message) {
    console.log('🟢', message);
}

console.log('🟢', render(message));

// render(message);

