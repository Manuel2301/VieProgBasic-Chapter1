// In node.js: install a prompt library by running: `npm install prompt-sync` in the current folder
const prompt = require("prompt-sync")({sigint: true});

const FIGURES = [];

FIGURES.push({figName: 'bugs bunny', color: 'grey', size: 'medium'});
FIGURES.push({figName: 'dumbo', color: 'grey', size: 'large'});
FIGURES.push({figName: 'mickey', color: 'black', size: 'small'});

console.log("Please think about one of the following figures:");

for(const figure of FIGURES)
{
    console.log(figure.figName);
}

let isBlack = prompt("Is your figure black?");

while(isBlack!=="yes"&&isBlack!=="no") {
    isBlack=prompt("Please answer with yes or no! ");
    }
    
    if(isBlack==="yes") {
    isblack=prompt(`Are you thinking about ${FIGURES[2].figName}?`);
    }
        if(isBlack==="yes"){
            console.log("YOU WIN")
        }

    else {

    let largeSize = prompt("Is your figure heavy?");

    while(largeSize!=="yes"&&largeSize!=="no"){
        largeSize=prompt("Please answer with yes or no! ");
    }

    if(largeSize==="yes"){
        largeSize=prompt(`Are you thinking about ${FIGURES[1].figName}?`);
        
        if(largeSize ==="yes"){
            console.log("YOU WIN");
        }

    }  else{
        largeSize=prompt(`Are you thinking about ${FIGURES[0].figName}?`);
        
        if (largeSize ==="yes") {
            console.log("YOU WIN")
        }
    }
}

// Start your code here and ask the user what he thinks about
// E.g. does your figure have big ears? Is it grey? ...
//let name = prompt("Does your figure have big ears? ");