const cars = [
   {
        brand: "BMW",
        price: 70000,
        hp: 200,
        color: "white",
        yearOfConstruction: 2020
    },
   {
        brand: "Mazda",
        price: 45000,
        hp: 190,
        color: "silver",
        yearOfConstruction: 2021
    },
    {
        brand: "Volvo",
        price: 55000,
        hp: 190,
        color: "beige",
        yearOfConstruction: 2021
    },
    {
        brand: "Opel",
        price: 38000,
        hp: 155,
        color: "black",
        yearOfConstruction: 2021
    },
    {
        brand: "mazda2",
        price: 22000,
        hp: 90,
        color: "magenta",
        yearOfConstruction: 2021
    },    
    {
        brand: "Fiat",
        price: 19000,
        hp: 110,
        color: "blue",
        yearOfConstruction: 2019

    },
];

filterAfterPrice();

filterAfterHp();

filterAfterYearAndHp();

filterAfterBrandAndHp();

function filterAfterPrice() {
console.log("Price below 60000:")    
    for (i = 0; i < cars.length; i++){
        if (cars[i].price < 60000) {
            console.log(`${cars[i].brand} ${cars[i].price}€ ${cars[i].hp}hp ${cars[i].color} ${cars[i].yearOfConstruction}`)
        };
    
    }
    console.log("\n")
};

function filterAfterHp () {
console.log ("HP more than 150:")    
    for (i = 0; i < cars.length; i++){
        if (cars[i].hp > 150){
            console.log(`${cars[i].brand} ${cars[i].price}€ ${cars[i].hp}hp ${cars[i].color} ${cars[i].yearOfConstruction}`) 
        }

    }
    console.log("\n")
};

function filterAfterYearAndHp () {
console.log("Cars with construction year after 2020 and less then 100hp:")    
    for (i = 0; i < cars.length; i++){
        if (cars[i].yearOfConstruction > 2020 && cars[i].hp < 100){
            console.log(`${cars[i].brand} ${cars[i].price}€ ${cars[i].hp}hp ${cars[i].color} ${cars[i].yearOfConstruction}`) 
        }

    }
    console.log("\n")
};

function filterAfterBrandAndHp () {
console.log("Fiat or less than 150hp:")    
    for (i = 0; i < cars.length; i++){
        if (cars[i].brand == "Fiat" || cars[i].hp < 150){
            console.log(`${cars[i].brand} ${cars[i].price}€ ${cars[i].hp}hp ${cars[i].color} ${cars[i].yearOfConstruction}`) 
        }

    }
    console.log("\n")
};    











