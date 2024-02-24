const robotFactory =function(model,mobile){
  return {
    model : model,
    mobile : mobile,
    beep : function (){
      console.log('Beep Boop')
    }
  }
}
const tinCan = robotFactory('P-500',true)
tinCan.beep()