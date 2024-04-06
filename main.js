const user = {
  name: "moustapha",
  age: 17,
  level: "high-level",
  isRich: false,
  isPoor : 100
};


const {name , age , isPoor=20000 } = user
console.log(age,name,isPoor)