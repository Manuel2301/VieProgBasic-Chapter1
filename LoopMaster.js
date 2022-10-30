let i = 0
do {
i+=1;
console.log(i)

} while (i<10)
console.log("\n")

let sum = 0;
for (let i = 0; i < 11; i++) {
    sum = sum+i  
}
console.log(sum);
console.log("\n")


for (let i = 1; i <= 20; i++) {
    if ( i %2 == 1) 
    {
        console.log(i)
    }
}
console.log("\n")

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++)
    console.log(i*j);
}

let product = 1;
for (let i = 1; i <= 10; i++) {
    product = product*i;

}
console.log(product);
console.log("\n")

for (i = 1111; i > 1; i){
    if (i%2 == 0) {
        i = i/2
    }
    else {
        i = (i*3)+1
    }
    console.log(i)
}
