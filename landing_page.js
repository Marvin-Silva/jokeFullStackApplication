fetch('http://localhost:3000/api/v1/blagues')
  .then(response => response.json())
  .then(jokes => {
    const container = document.getElementById('jokes-container');
    jokes.forEach(joke => {
      const jokeDiv = document.createElement('div');
      jokeDiv.style.marginBottom = "20px";

      jokeDiv.innerHTML = `
        <h3>${joke.question}</h3>
        <p>${joke.response}</p>
      `;
      container.appendChild(jokeDiv);
    });
  })
  .catch(err => {
    console.error('Erreur fetch:', err);
  });
