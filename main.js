const users = [
  { 
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  { 
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  { 
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

console.log(users)

const updated = [...users, users[1].name ='alix']
console.log(updated)