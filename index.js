require('es6-promise').polyfill();
require('isomorphic-fetch');



`
        ____      __
       /  _/___  / /__________
       / // __ \/ __/ ___/ __ \
     _/ // / / / /_/ /  / /_/ /
    /___/_/ /_/\__/_/   \____/


    "In computer science, future, promise, delay, and deferred refer to constructs 
     used for synchronizing program execution in some concurrent programming languages. "
            -- Wiki PEDIA

Promises : 

    - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
    - https://promisesaplus.com
    - https://github.com/stefanpenner/es6-promise
    - https://en.wikipedia.org/wiki/Futures_and_promises
    - https://medium.com/@kangzeroo/quick-story-about-javascript-promises-31b4e76ed0cd

History : 

    - Fight the "callback-hell" syndrom 
        - https://cdn-images-1.medium.com/max/800/1*UN325lO3m7E30D-KdpiKAw.png
        - http://callbackhell.com
        - http://thecodebarbarian.com/2015/03/20/callback-hell-is-a-myth
    - The term "promise" was proposed in 1976 by Daniel P. Friedman and David Wise
    - 2011 : JQuery Deferred Object (A promise-like)
    - The idea : https://mdn.mozillademos.org/files/15911/promises.png
    - "Pure" JS implementation first. Why native promises ? => Better error reporting, better warnings
    - Where's promises fails ? Replay -> async reactive programming
    - Async / Await syntax

`

var ajax = function (url) {
    return fetch(url).then(function (res) {
        return res.json();
    });
};

// setTimeout(function () {

//     console.log('terminé');

// }, 1000); // 1sec

// ajax("https://httpbin.org/get").then(function (response) {
//     return response.json();
// }).then(function (json) {
//     console.log(json);
//     return json.headers;
// }).then(function (result) {
//     console.log(result);
// });
/*

Promise.all([
    fetch("https://httpbin.org/get?foo=1"),
    fetch("https://httpbin.org/get?foo=2"),
    fetch("https://httpbin.org/get?foo=3"),
]).then(function (results) {

    return Promise.all(results.map(function (response) { 
        return response.json(); 
    }));
   

}).then(function (results) {

    console.log(results);

}) */

/*

Promise.resolve(1);
Promise.resolve(ajax("https://httpbin.org/get"));
Promise.resolve(Promise.reject("arghhhh"));

*/

/*
        __________  ____  ____  ____     __  _____    _   ______  __    _____   ________
       / ____/ __ \/ __ \/ __ \/ __ \   / / / /   |  / | / / __ \/ /   /  _/ | / / ____/
      / __/ / /_/ / /_/ / / / / /_/ /  / /_/ / /| | /  |/ / / / / /    / //  |/ / / __
     / /___/ _, _/ _, _/ /_/ / _, _/  / __  / ___ |/ /|  / /_/ / /____/ // /|  / /_/ /
    /_____/_/ |_/_/ |_|\____/_/ |_|  /_/ /_/_/  |_/_/ |_/_____/_____/___/_/ |_/\____/

 */

Promise.all([
    ajax("https://httpbin.org/get"),
    ajax("https://httpbin.org/status/500"),
    // ajax("https://httpbin.org/status/500").catch(function (error) { return {}; }),
]).then(function (results) {
    console.log(results);
});

/*
    Promise.all()
    Promise.prototype.then()
    Promise.prototype.catch()
    Promise.prototype.finally()
    Promise.race()
    Promise.reject()
    Promise.resolve()

    async / await
*/