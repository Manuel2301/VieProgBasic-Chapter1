const myFavBook = {
    title:  "Gone Girl",
    author: "Gillian Flynn",
    year: 2012,
    description: "On their fifth wedding anniversary, Nick's wife Amy has disappeared. Nick is a liar and maybe not the best Husband - but is he the Killer?"
};

const myFavMovie = {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    description: "Interstellar is about Earth's last chance to find a habitable planet before a lack of resources causes the human race to go extinct.",
    actors: [
            {actorName: "Matthew McConaughey", roleName: "Joseph Cooper"},
            {actorName: "Jessica Chastain", roleName: "Murphy Cooper"},
            {actorName: "Anne Hathaway", roleName: "Dr. Emelia Brand"},
            {actorName: "Matt Damon", roleName: "Dr.Mann"},
            {actorName: "Timothée Chalamet", roleName: "Tom Cooper"}
    ]
    
};

const myFavSeries = {
    title: "Suits",
    directors: [
        {director1: "Gene Klein"},
        {director2: "Gabriel Macht"},
        {director3: "Patrick J.Adams"},
],

    seasons: {
        season1: {episodes: 12, startYear: 2011, endYear: 2012},
        season2: {episodes: 16, startYear: 2012, endYear: 2013},
        season3: {episodes: 16, startYear: 2014, endYear: 2015},
        season4: {episodes: 16, startYear: 2015, endYear: 2016},
        season5: {episodes: 16, startYear: 2015, endYear: 2016},
        season6: {episodes: 16, startYear: 2016, endYear: 2017},
        season7: {episodes: 16, startYear: 2017, endYear: 2018},
        season8: {episodes: 16, startYear: 2018, endYear: 2019},
        season9: {episodes: 10, startYear: 2019, endYear: 2019},
    },
    description: "Set at a fictional New York City law firm, it follows Mike Ross (Patrick J. Adams), who uses his eidetic memory to talk his way into a job as an associate working for successful closer Harvey Specter (Gabriel Macht), despite being a college dropout who never attended law school.",
    
    actors: [{
        actor: {actorName: "Gabriel Macht", roleName: "Harvey Specter"},
        actor: {actorName: "Patrick J. Adams", roleName: "Mike Ross"},
        actor: {actorName: "Meghan Markle", roleName: "Rachel Zane"},
        actor: {actorName: "Rick Hoffman", roleName: "Louis Litt"},
        actor: {actorName: "Sarah Rafferty", roleName:"Donna Paulsen"},
        actor: {actorName: "Gina Torres", roleName:"Jessica Pearson"},
        actor: {actorName: "Sarah Rafferty", roleName:"Donna Paulsen"}
    }]
};

const myFavs = {
    book: `${myFavBook}`,
    movie: `${myFavMovie}`,
    series: `${myFavSeries}`,
};

console.log(`My favourite book's author is ${myFavBook.author}`);
console.log("\n");

console.log(`My favourite movie first actors rolename is ${myFavMovie.actors[0].roleName}`)
console.log("\n")

console.log(`Episodes of the last Season`)
for (i = 1; i <= myFavSeries.seasons.season9.episodes; i++) {
    console.log(i);
    
}
console.log("\n")



if (myFavSeries.directors.length > 1){
        console.log(`${myFavSeries.directors[0].director1}`);
        console.log(`${myFavSeries.directors[1].director2}`);
        console.log(`${myFavSeries.directors[2].director3}`);
    };







