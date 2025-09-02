// API KEY: '826b9a2e'
// https://www.omdbapi.com/?i=tt3896198&apikey=826b9a2e
const moviesWrapper = document.querySelector(".movie-list");
const searchName = document.querySelector(".searchName");

let currentMovies = []

function searchChange(event) {
    renderMovies(event.target.value)
    searchName.innerHTML = event.target.value
}

async function renderMovies(searchTerm) {
    const response = await fetch(
        `https://omdbapi.com/?s=${searchTerm}&apikey=826b9a2e`
    );
    const data = await response.json();
    currentMovies = data.Search
    displayMovies(currentMovies)
}

function displayMovies(movieList) {
return moviesWrapper.innerHTML = movieList
    .map((movie) => {
        return `
        <div class="movie">
        <img src=${movie.Poster} alt=""/>
        <h2>${movie.Title}</h2>
        <h4>${movie.Year}</h4>
        <button>Learn More</button>
        </div>
        `;
    })
    .join("");
}

function sortChange(event) {
    const sortOption = event.target.value

    let sortedMovies = [...currentMovies]

    if (sortOption === "newest") {
        sortedMovies.sort((a, b) => b.Year - a.Year)
    } else if (sortOption === "oldest") {
        sortedMovies.sort((a, b) => a.Year - b.Year)
    }

    displayMovies(sortedMovies);
}

async function renderMovies(movieSort) {
    const moviesWrapper = document.querySelector(".movies");

    document.classList += ' movies__loading'

    if (!movies) {
    const currentMovies = await getMovies();
    }
    
    document.body.classList.remove('movies__loading')
}


setTimeout(() => {
    renderMovies();
});