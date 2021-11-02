// Exercise 1

const testNum = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10){
            resolve()
        } else {
            reject('err: Not bigger than 10')
        }
    });
}

testNum(11).then(()=>console.log("You did it")).catch(err => console.log(err));
testNum(5).then(()=>console.log("You did it")).catch(err => console.log(err));

// Exercise 2

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

let checkArray = (array) => {
    return array.every(i => (typeof i === "string"))
}

let makeAllCaps = (array) => {
        return array.map((name => name.toUpperCase()));
};  

let sortWords = (array) => {
    return array.sort()
};

function promiseArray(array){
    return new Promise((resolve, reject) => {
            if(checkArray(array)) {
                resolve(array);
            } else {
                reject('Error: Not all array values are strings');
            }
        }, 2000);
}

promiseArray(arrayOfWords)
.then(result => makeAllCaps(result))
.then(result => console.log(sortWords(result)))
.catch(err => console.log(err));

promiseArray(complicatedArray)
.then(result => makeAllCaps(result))
.then(result => console.log(sortWords(result)))
.catch(err => console.log(err));