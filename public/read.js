const container = document.getElementById("movie-list");

try {
  const response = await fetch("/api");

  const data = await response.json;
} catch (error) {
  console.log(error);
}

// fetcha url
// plocka ut datan
// datan är en array med filmer
// Rendera array som som en div, title, year, description, genre
