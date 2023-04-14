//1.Callback Functions

/* A callback function is a function passed as an argument to another function
in order to be called from inside that function.
Usually this callback function provides additional functionality to the enclosing or parent function
*/


//2. Creating and Using callback Functions

// function caller(callback) {
//     callback("I got called");
// }

// function called(msg){
//     console.log(msg)
// }

// caller(called)

// caller((msg) => console.log(msg) )

// caller(function(msg){
//     return console.log(msg);
// })


//3. Passing arguments to callback Function

// function theParent(item, callback) {
//     callback(item)
// }

// function theCallback(n) {
//     let sum = 2 + n;
//     console.log(sum)
// }

// theParent(4, theCallback)

//4. Asynchronous callbacks

/**
 * execution of asynchronous  callback is usually deferred to a later time.
 * javascript executes code from top to bottom usually in what is called a synchronous way, one action executes after another.
 * 
 * but in asynchronous the order of execution tend to be different, a top action can end up been executed later. and when callbacks are used in this scenario, they become asynchronous callbacks
 * 
 * A typical example is with event listener when hooked to a dom object,
 * because the code logic doesnt execute immediately unless an action is registered, it becomes asynchronous
 */

//Examples: dom manipulation
document.getElementById('click-me').addEventListener('click', () => {
    document.getElementById('content').textContent = "I just got called"
})



//simulating asynchronous callbacks

function theParent(item, callback) {
    if (callback) {
        setTimeout(() => callback(item), 2000)
    }


    console.log(`The item is ${item}`)
}

function theCallBack(n) {
    let sum;
    if (n) {
        sum = 2 + n;
        console.log(`The Total is = ${sum} `)
    }
}

theParent(2, theCallBack)

//without asynchronous
// function theParent(item, callback) {
//     callback(item)

//     console.log(`The item is ${item}`)
// }

// function theCallBack(n) {
//     let sum;
//     if (n) {
//         sum = 2 + n;
//         console.log(`The Total is = ${sum} `)
//     }
// }

// theParent(2, theCallBack)

//resolution for asynchronous


