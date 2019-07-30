// Converts a number a string.

var num = 20;

 var toString = function(num) {
    return num.toString();
 }

 console.log(typeof toString(num));


// Adds one to a given number.

// var addOne = function(a) {
//     return a + 1;
//  }

//  console.log(addOne(5));


let addOne = (a) => {return a+1};
console.log(addOne(6))


// Subtracts one from a given number.

// var subtractsOne = function(a) {
//     return a - 1;
//  }

//  console.log(subtractsOne(4));

let subtractsOne = (a) => {return a-1};
console.log(subtractsOne(6))


//  Adds two numbers.

// var sum = function(a,b) {
//     return a+b;
// }

// console.log(sum(6,8));

let sum = (a,b) => {return a+b};
console.log(sum(6,8));

 
//  Subtracts the second number from the first.

let subtracts = (a,b) => {return a-b};
console.log(subtracts(6,8));


//  Multiplies two numbers.

let multiplies = (a,b) => {return a*b};
console.log(multiplies(6,8));


// Divides the first number by the second.

let divides = (a,b) => {return a/b};
console.log(divides(8,2));


//  Multiplies a number by itself.

let square = (a) => {return a*a};
console.log(square(6));


//  Performs a mathematical operation on two numbers.

 
 var mathOperation = function(x, y, operation) {
if (operation == "add") {
    return x+y;
}
    else if (operation == "subtract") {
        return x-y;
    }
    else if (operation == "multiply" ) {
        return x*y;
    }
    else if (operation == "divide") {
        return x/y;
    }
}
 
console.log(mathOperation(10,2, "add"));
console.log(mathOperation(10,2, "multiply"));
console.log(mathOperation(10,2, "divide"));
console.log(mathOperation(10,2, "subtract"));


//  Returns true if `a` is greater than `b`.


 var largerNum = function(a,b) {
if (a > b) {
    return `${a} jest wieksze od ${b}`;
} else {
    return `${a} jest mniejsze od ${b}`;
}

 }

 console.log(largerNum(7, 2));

/**
 * 
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

 var smaller = function(a,b) {
     if (a < b) {
        console.log(`${a} jest mniejsze od ${b}`)
         return true;
     }
     else 
     {return false;
 }
}

console.log(smaller(1, 2));


// Returns true if `a` and `b` are equal.


 var equal = function(x,y) {
     if (x === y) {
         console.log(`hey, we are equal!`)
         return true;
     }
     else {
        console.log(`hey, we are not equal:(!`)
        return false;
     }
 }

 console.log(equal(7, 7));


// Returns the smallest value of two numbers.


var smallestVal = function(a,b) {
    if ( a > b) {
        return b;
    } else {
        return a;
    }
}

console.log(smallestVal(7, 5));


/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

let largestVal = (a,b) => {
    if (a>b) {
        return a;
    } else {
        return b;
    }
}

console.log(largestVal(5, 2));


// Returns true if `n` is even.


let evenNum = (a) => {
    if (a % 2 === 0) {
        console.log("I am even!")
        return true;
    } else {
        console.log("I am not even!")
        return false;
    }
}

console.log(evenNum(6));
console.log(evenNum(5));



// Returns true if `n` is odd.


let oddNum = (a) => {
    if (a % 2 !== 0) {
        console.log("I am odd!")
        return true;
    } else {
        console.log("I am not odd!")
        return false;
    }
}

console.log(oddNum(6));
console.log(oddNum(5));


// returns a letter grade.


var grade = function(score, total) {
    if (score <= total && score >= 90) {
        return "A";
    } else if (score >= 80 && score <= 89) {
        return "B";
    } else if (score >= 70 && score <=79) {
        return "C";
    } else if (score >= 60 && score <=69)  {
        return "D";
    } else if (score <= 59) {
        return "F"
    }
}

console.log(grade(60,100));
console.log(grade(50,100));


// Checks if a `restaurant` object has a `reviews` property.


let restaurant = {
    reviews : "5",
    name: "bella"
}

console.log(restaurant.name);

let property = function(object) {
    if (object.hasOwnProperty('reviews')) {
        object.reviews ++;
        console.log(`I am ${restaurant.name} restaurant and I have ${restaurant.reviews} reviews!`)
        return object;
    }
    else {
        console.log(`I do not have reviews property! :(`)
        return false;
    }
}

console.log(property(restaurant));



// Joins two strings with a space.


 var joinStrings = function(word1, word2) {
     var word3 = word1.concat(` ${word2}`)
     return word3;
 }

 console.log(joinStrings("Paula", "superstar"))



// Returns a circle object with the properties `circumference` and `area`.


 var mycircle = function(radius) {
     var circle = {};
     var circumference = 2 * Math.PI * radius;
     console.log(circumference);

     var area = Math.PI * (radius*radius);
     console.log(area);

     circle.circumference = circumference;
     circle.area = area;

     console.log(`I am circle, my circumference is ${circumference} and my area is ${area}`)
     return circle;
 }


 console.log(mycircle(5));
 console.log(mycircle(2));