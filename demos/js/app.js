// const doIt = () => {
//     console.log('did it!');
// };

// // const add = function(a, b) {
// //     return a + b;
// // };

// const add = (a, b) => a + b;

// console.log(add(1,2));

// const square = a => a ** 2;
// console.log(square(3));

// var o = {
//     name: 'Our cool object!',
//     config: function() {

//         console.log('1', this.name);

//         //var that = this;

//         document
//             .querySelector('button')
//             .addEventListener('click', () => console.log('2', this.name));

//     }
// };

// o.config();


function doIt() {

    console.log(this);
}

doIt();
window.doIt();