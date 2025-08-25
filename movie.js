const movieListEl = document.querySelector('.movie-list');
const id = localStorage.getItem("id")

async function onSearchChange(event) {
    const id = event.target.value;
    renderMovies(id);
}

async function renderMovies(id) {
    const movies = await fetch(`https://www.omdbapi.com/?i=tt0232500&apikey=826b9a2e=${id}`)
    const moviesData = await movies.json();
    movieListEl.innerHTML = moviesData.map(movie => movieHTML(movie)).join('');
}

function movieHTML(movie) {
   return `
        <div class="movie">
            <div class="movie__title">
                ${movie.title}
            </div>
            <p class="movie__body">
                ${movie.body}
            </p>
        </div>
    `
}

renderMovies(id);