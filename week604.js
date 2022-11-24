const x = 700;
 let message ;
 switch(x){
    case((x>=80 && x <= 100 ? x :80)):
      console.log(x)
      message = `Grade A is ${x}`;
      break;
    case ((x >= 70 && x < 80 ? x:79)):
        message = `Grade B is ${x}`;
        break;
    case((x >= 60 && x < 70 ? x:69)):
        message =`Grade C is ${x}`;
        break;
    case((x >= 50 && x < 60 ? x:59)):
        message = `Grade D is ${x}`;
        break;
    case((x >= 0 && x < 50 ? x:49)):
        message = `Grade D is ${x}`;
        break;

    default:
        message = `ERROR is ${x}`; 
 }
 console.log(message)