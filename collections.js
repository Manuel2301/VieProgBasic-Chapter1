function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: Fill in some colors
let colors = ["red", "green", "yellow", "blue", "pink", "orange"]; // you might add more elements if you want

// TODO: Fill in some fruits
let fruits = ["apple", "kiwi", "ananas", "mellon", "peach", "orange",]; // you might add more elements if you want

//Look here we create a nice fruit
let randomColor = getRndInteger(0, colors.length-1); // see how we can get the length of a collections
let randomFruit = getRndInteger(0, fruits.length-1);

console.log("Today I would like to eat a " + colors[randomColor] + " " + fruits[randomFruit]);

// TODO: Log the length of the colors and fruits collection
console.log(colors.length)
console.log(fruits.length)


// TODO: Log all elements of each collection - for this access each element of
// the array by its index
for(let i = 0; i <colors.length; i++) {
    console.log(colors[i]);
}

for(let i = 0; i <fruits.length; i++) {
    console.log(fruits[i]);
}

// TODO: create all combinations and log them (cartesian product)
// Directly access each element in the array through its index
for(let i = 0; i <colors.length; i++) {
    for(let j = 0; j <fruits.length; j++) {
        console.log(colors[i], fruits[j]);
    }
}



