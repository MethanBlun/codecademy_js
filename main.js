// const user = {
//   name: "moustapha",
//   age: 17,
//   lastName : 'Anne',
//   level: "high-level",
//   isRich: false,

// };


const user = { 
  'name': 'Alex',
  'address': '15th Park Avenue',
  'age': 43,
  'department':{
      'name': 'Sales',
      'Shift': 'Morning',
      'address': {
          'city': 'Bangalore',
          'street': '7th Residency Rd',
          'zip': 560001
      }
  }
}


const {department : {address : {city}} } = user
console.log(city)

