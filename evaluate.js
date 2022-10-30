// This function returns you a random number
// between the min value (inclusive) and the
// max value (inclusive)
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let percentage = getRndInteger(0, 100);

// Here your code starts
// TODO: if the percentage >=50 --> console.log.....

if(percentage>=90) {
    console.log(`you got ${percentage} % right, your mark is 1`)
}
else if(percentage>=80) {
    console.log(`you got ${percentage} % right, your mark is 2`)
}
else if(percentage>=65) {
    console.log(`you got ${percentage} % right, your mark is 3`)
}
else if(percentage>=50) {
    console.log(`you got ${percentage} % right, your mark is 4`)
}
else {
    console.log(`you got ${percentage} % right, your mark is 5`)
}

if (percentage >= 50) {
    console.log("Congratulations you passed the exam!");
}
else {
        console.log("Unfortunately you didn't passed the exam!");
    } 