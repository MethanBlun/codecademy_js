



const starter = ()=>{
  const timeOut = setTimeout( () => {alert('helllo i works')},3000);
} 

const stoper = () => {
  clearTimeout(this.timeOut)
  console.log('cleared')
}