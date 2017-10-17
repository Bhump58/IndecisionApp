const square = function(x) {
  return x * x;
};

// const squareArrow = (x) => {
//   return x * x;
// };

// const squareArrow = (x) => x * x;
//
//
//
// console.log(squareArrow(10));
//
// // const getFirstName = function(name) {
// //   return name.split(' ')[0];
// // };
// const getFirstName = (name) => {
//   return name.split(' ')[0];
// }
// //const getFirstName = (name) => name.split(' ')[0];
//
// console.log(getFirstName("Brian Humphrey"));

// arguments object -no longer bound with arrow functions
const add = (a, b) => {
  return a + b;
};

//this keywork no longer bound
const user = {
  name: 'Brian',
  cities: ['Boston', 'Lexington', 'Columbia'],
  printPlacesLived() {
    const cityMessages = this.cities.map((city) => city + "!");

    // this.cities.forEach((city) => {
    //   console.log(this.name + ' has lived in ' + city);
    // });
  }
};

user.printPlacesLived();
