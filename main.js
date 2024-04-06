const user = {
  name: "moustapha",
  age: 17,
  lastName : 'Anne',
  level: "high-level",
  isRich: false,

};


const {name, lastName , fullName=`${name }${lastName}` } = user
console.log(fullName)