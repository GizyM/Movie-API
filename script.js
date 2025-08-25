// API KEY: '826b9a2e'
// https://www.omdbapi.com/?i=tt3896198&apikey=826b9a2e
const movieListEl = document.querySelector(".movie-list");

let APIKey = "826b9a2e";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let movieList = document.querySelector(".movie-list");

async function main() {
    const movies = await fetch("https://www.omdbapi.com/?s=fast&apikey=826b9a2e");
    const moviesData = await movies.json();
    
    console.log(moviesData);
    movieListEl.innerHTML = moviesData.map((movie) => movieHTML(movie)).join("");
}

main();

function showMovieDetails(id) {
    localStorage.setItem("id", id);
    window.location.href = `${window.location.origin}/movie.html`
}

function movieHTML(movie) {
    return `<div class="movie-card" onclick="showMovieDetails(${movie.id})">
        <div class="movie-card__container">
         <h3>${movie.title}</h3>
            <p><b>Year</b> ${movie.year}</p>
            <p><b>Genre</b> ${movie.genre}</p>
            <p><b>Info Link:</b><a href="https://${movie.poster}" target="_blank"
            ${movie.poster}
            </a></p>
         </div>
    </div>`;
}

function displayMovies() {
    const movieContainer = document.getElementById('movieContainer');
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.className = 'movie';

        movieDiv.innerHTML = `
        <img src="${Poster}" alt="${movie.title} Poster" class="poster">
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
