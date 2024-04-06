// const user = {
//   name: "moustapha",
//   age: 17,
//   lastName : 'Anne',
//   level: "high-level",
//   isRich: false,

// };

const user = {
  name: "Alex",
  address: "15th Park Avenue",
  age: 43,
  department: {
    name: "Sales",
    Shift: "Morning",
    address: {
      city: "Bangalore",
      street: "7th Residency Rd",
      zip: 560001,
    },
  },
};
const keys = Object.keys(user);
console.log(keys.length)
keys.shift()
console.log(keys.length)






