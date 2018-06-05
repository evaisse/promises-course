require('es6-promise').polyfill();
require('isomorphic-fetch');


// setTimeout(function () {

//     console.log('terminé');

// }, 1000); // 1sec

// fetch("https://httpbin.org/get").then(function (response) {
//     return response.json();
// }).then(function (json) {
//     console.log(json);
//     return json.headers;
// }).then(function (result) {
//     console.log(result);
// });


Promise.all([
    fetch("https://httpbin.org/get?foo=1"),
    fetch("https://httpbin.org/get?foo=2"),
    fetch("https://httpbin.org/get?foo=3"),
]).then(function (results) {

    return Promiseresults.map(function (response) { 
        return response.json(); 
    });

    

}).then(function (results) {

    console.log(results);

})



Promise.resolve(1);
Promise.resolve(fetch("https://httpbin.org/get"));
Promise.resolve(Promise.reject("arghhhh"));


/*
    Promise.all()
    Promise.prototype.then()
    Promise.prototype.catch()
    Promise.prototype.finally()
    Promise.race()
    Promise.reject()
    Promise.resolve()
*/