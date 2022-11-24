const x = 80;
let message;
if(x >=  80 && x<= 100){
    message = `Grade A is ${x}`;
}else if(x >= 70 && x < 80){
    message = `Grade B is ${x}`;
}else if (x >= 60 && x<70){
    message = `Ggrade C is ${x}`;
}else if (x >= 50 && x < 60){
    message = `Grade D is ${x}`;
}else if (x >= 0 && x < 50){
    message = `Grade f is ${x}`;
}else{
    message = `Grade ERROR is ${x}`
}
console.log(message)