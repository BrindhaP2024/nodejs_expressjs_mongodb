//setTimeout , zero delay ,setInterval , clearInterval,recursive setTimeout

setTimeout(() =>{
    console.log("executed in 3000s");
    
},3000);

console.log("timer starts now!!");

setTimeout(() =>{
    console.log("this executed after all the synchronous function or code is done");
    
},0);

console.log("ended here!!!!");

// //setInterval
// // repeatedly executed at a fixed time setInterval
// let c = 0;

// const intervalId = setInterval(() =>{
//     console.log(`Counter: ${++c}`);
//     if(c === 10){
//         clearInterval(intervalId);
//     }
    
// },2000);

// clearInterval 

const intervalId1 = setInterval(() =>{
    console.log("this run every second");
    
},1000);
setTimeout(() => {
    clearInterval(intervalId1);
    console.log("Interval stopped");
  }, 5000);

