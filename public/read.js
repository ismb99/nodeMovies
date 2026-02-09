try {
  const response = await fetch("/api");
  const data = await response.json();
  renderCards(data);
} catch (error) {
  console.log(error);
}

function renderCards(cardsData) {
  const container = document.getElementById("movie-list");
  let cardsHTML = "";

  cardsData.forEach((card, i) => {
    cardsHTML += `
      <article class="movie-card" aria-labelledby="movie-title-${i}">
        <h2 id="movie-title-${i}" class="movie-title">${card.title}</h2>
        <p class="movie-genre">Genre: ${card.genre}</p>
        <p class="movie-description">${card.description}</p>
        <p class="movie-year">Year: ${card.year}</p>
      </article>
    `;
  });

  container.innerHTML = cardsHTML;
}
