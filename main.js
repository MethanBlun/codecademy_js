const testArray = ["moon", 123, true, ["nested", "array"], "earth", 456, false,[],1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000];

function classifyElements() {
  const arrays = [];
  const nonArrays = [];

  testArray.forEach((element) => {
    if (Array.isArray(element)) {
      arrays.push(element);
    } else {
      nonArrays.push(element);
    }
  });

  console.log("Les éléments du tableau classés par type :");
  console.log("Arrays:", arrays);
  console.log("Non-Arrays:", nonArrays);
}

classifyElements();




// const testArray = ["moon", "star", "black houle", "meteor", "earth"];

// function checkit() {
//   if (testArray.filter((t) => t !== Array)) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// }
// checkit()
