// API KEY: '826b9a2e'
// https://www.omdbapi.com/?i=tt3896198&apikey=826b9a2e

let APIKey = "826b9a2e";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const movies = [
    {
     title: "Guardians of the Galaxy Vol. 2", 
     rating: "7.6/10",
     posterUrl: "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg"
    },
    {
     title: "The Matrix", 
     rating: "8.7/10",
     posterUrl: "https://image.tmdb.org/t/p/original/p96dm7sCMn4VYAStA6siNz30G1r.jpg"
    },
    {title: "Interstellar", 
     rating: "8.7/10",
     posterUrl: "https://image.tmdb.org/t/p/original/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" 
    },
    {title: "The Shawshank Redemption", 
     rating: "9.3/10",
     posterUrl: "https://image.tmdb.org/t/p/original/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg"
    },
];

function displayMovies() {
    const movieContainer = document.getElementById('movieContainer');
   
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        movieDiv.innerHTML = `
        <img src="${movie.posterUrl}" alt="${movie.title} Poster" class="poster">
        <h2>${movie.title}</h2>
        <p>Rating: ${movie.rating}</p>
        `;
        
        movieContainer.appendChild(movieDiv);
    });
}

displayMovies();

function searchMovie() {
    const searchInput = document.getElementById('searchInput').value.toUpperCase();
    const resultsContainer = document.getElementById('movieContainer');
    resultsContainer.innerHTML = "";
}

const filterMovies = movies.filter(movie => movie.title.toUpperCase().includes(searchInput))

if (filterMovies.length > 0) {
    filterMovies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.innerHTML = `<img src="${movie.posterUrl} Poster" class="poster">
        <h2>${movie.title}</h2>
        <p>Rating: ${movie.rating}</p>
        `;
        resultsContainer.appendChild(movieDiv);
    });
}

document.getElementById('searchBtn').addEventListener('click', searchMovie);

console.log("Sorted by Title A to Z:", movies.sort((a,b) => a.title.localeCompare(b.title)));
console.log("Sorted by Title Z to A:", movies.sort((a, b) => b.title.localeCompare(a.title)));
console.log("Sorted by Rating (Lowest to Highest):", movies.sort((a, b) => a.rating - b.rating));
console.log("Sorted by Rating (Highest to Lowest):", movies.sort((a, b) => b.rating - a.rating));
console.log("Sorted by Year (Oldest to Newest):", movies.sort((a, b) => a.year - b.year));
console.log("Sorted by Year (Newest to Oldest):", movies.sort((a, b) => b.year - a.year));