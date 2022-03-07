/** Async operations and promise*/
console.log("*******Async*******");

// const fetchData = callback => {
//     setTimeout( () => {
//         callback('Secret Text!!!');
//     }, 5000);
// };

// setTimeout( () => {
//     console.log('Timer is done!');
//     fetchData( text => {
//         console.log(text);
//     });
// }, 2000);
  
// console.log("Hello");
// console.log("Hii");

console.log("*******Promise*******");

const getData = ()=> {
    const promise = new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve('Secret Text!!!');
        }, 1000);
    });
    return promise;
};

setTimeout( () => {
    console.log('Timer is done!');
    getData()
    .then( text => {
        console.log(text);
        return getData();
    })
    .then( text2 => {
        console.log(text2);
    })
}, 2000);

console.log("Hello");
console.log("Hii");
