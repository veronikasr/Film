const APIkey = "511bee3d97901acd6df247cc9fa3d6d7";
const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIkey}&language=uk-UA&page=1`;

fetch(url)
.then(response => response.json())
.then(data => {
    const moviesConteiner = document.getElementById("movies");
    data.results.forEach(movie => {
        const poster = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
        const card = document.createElement("a");
        card.href = "https://www.themoviedb.org/movie/" + movie.id;
        card.target = "_blank";

        card.innerHTML = `
        <div class="movie-card">
            <img src="${poster}">
            <p>${movie.title}</p>
        </div>`;
        moviesConteiner.appendChild(card)
    });
});
