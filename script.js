// API KEY: '826b9a2e'
// https://www.omdbapi.com/?i=tt3896198&apikey=826b9a2e

let APIKey = "826b9a2e";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=826b9a2e");
    const moviesData = await movies.json();
    `<div class="movie
    </div>`
}

main();

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
