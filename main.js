// 1
const counter = function () {
    let n = 0;

    function increase(number) {
        if (typeof number === 'number') {
            n = number;
            return n++;
        }

        return n++;
    }

    return increase;
}

let customCounter = counter();

console.log(customCounter()) // 0
console.log(customCounter()) // 1
console.log(customCounter(100)) // 100
console.log(customCounter()) // 101
console.log(customCounter()) // 102
console.log(customCounter(500)) // 500
console.log(customCounter()) // 501
console.log(customCounter()) // 502
console.log(customCounter(0)) // 0
console.log(customCounter()) // 0
console.log(customCounter()) // 1

// 2
const counterFactory = function () {
    let n = 0;
    return {
        value: function (number) {
            if (typeof number === 'number') {
                n = number;
                return n;
            }
            return n;
        },
        increment: function () {
            return n++;
        },
        decrement: function () {
            return n--;
        }
    }

}

let counterByOne = counterFactory()

console.log(counterByOne.value()) // 0
counterByOne.increment()
counterByOne.increment()
counterByOne.increment()
console.log(counterByOne.value()) // 3
counterByOne.decrement()
counterByOne.decrement()
console.log(counterByOne.value()) // 1
console.log(counterByOne.value(100)) // 100
counterByOne.decrement()
console.log(counterByOne.value()) // 99
console.log(counterByOne.value(200)) // 200
counterByOne.increment()
console.log(counterByOne.value()) // 201


// 3
const myPow = function(a, b, myPrint) {
    if (a === 1) {
        return 1;
    }

    return myPrint(a, b, a**b);
}

const myPrint = function(a, b, res) {
    return `${a}^${b}=${res}`;
}

console.log(myPow(3, 4, myPrint)) // 3^4=81
console.log(myPow(2, 3, myPrint)) // 2^3=8
console.log(myPow(2, 0, myPrint)) // 2^0=1
console.log(myPow(2, -2, myPrint)) // 2^-2=0.25


// 4
const myMax = function (arr) {
    return Math.max.apply(null, arr);
}

const list = [12, 23, 100, 34, 56, 9, 233];

console.log(myMax(list)); //233


// 5
const GetMyMultiply = function (a, b) {
    return a * b;
}
const getMyDouble = function (n) {
    return GetMyMultiply(2, n);
}

console.log(getMyDouble(3)) // = myMul(2, 3) = 6
console.log(getMyDouble(4)) // = myMul(2, 4) = 8
console.log(getMyDouble(5)) // = myMul(2, 5) = 10

const getMyTriple = function(n) {
    return GetMyMultiply(3, n);
}
console.log(getMyTriple(3)) // = myMul(3, 3) = 9
console.log(getMyTriple(4)) // = myMul(3, 4) = 12
console.log(getMyTriple(5)) // = myMul(3, 5) = 15