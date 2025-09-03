// API KEY: '826b9a2e'
const moviesWrapper = document.querySelector(".movie-list");
const searchName = document.querySelector(".searchName");
const body = document.querySelector("#movies__body");
const searchInput = document.querySelector(".search__bar--input");
const searchButton = document.querySelector("#searchBtn");
const image = document.querySelector(".movie__night");

let currentMovies = [];

// A single function to get and render movies

async function getAndRenderMovies(searchTerm) {
    // Show the spinner by adding the class to the body
    body.classList.add('show-spinner');
    moviesWrapper.innerHTML = ''; // Clear previous results

    try {
    const response = await fetch(
        `https://omdbapi.com/?s=${searchTerm}&apikey=826b9a2e`
    );
    const data = await response.json();

    if (data.Response === "True") {
        currentMovies = data.Search;
        displayMovies(currentMovies);
    } else {
        moviesWrapper.innerHTML = `<p>No movies foudn for ${searchTerm}".</p>`;
        currentMovies = [];
    }

 } catch (error) {
    console.error("Error fetching movies:", error);
    moviesWrapper.innerHTML = `<p>An error occurred. Please try again later.</p>`;
    currentMovies = [];
  } finally {
    // Hide the spinner regardless of success or failure
    body.classList.remove('show-spinner');
  }
}

function displayMovies(movieList) {
    if (!movieList || movieList.length === 0) {
        moviesWrapper.innerHTML = `<p>No movies to display.</p>`;
        return;
    }

moviesWrapper.innerHTML = movieList
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
    const sortOption = event.target.value;
    let sortedMovies = [...currentMovies];

    if (sortOption === "newest") {
        sortedMovies.sort((a, b) => parseInt(b.Year) - parseInt(a.Year));
    } else if (sortOption === "oldest") {
        sortedMovies.sort((a, b) => parseInt(a.Year) - parseInt(b.Year));
    }

    displayMovies(sortedMovies);
}

// Event listener for the Search button
searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    searchName.innerHTML = searchTerm;
    getAndRenderMovies(searchTerm);
});

// Event listener for the Enter key on the input field
searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const searchTerm = searchInput.value;
        searchName.innerHTML = searchTerm;
        getAndRenderMovies(searchTerm);
    }
});

image.style.display = 'none';