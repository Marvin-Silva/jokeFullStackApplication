document.getElementById('btn-joke-random').addEventListener('click', function(){
  fetch('http://localhost:3000/api/v1/blagues/random')
  .then(response => response.json())
  .then(joke => {
    const container = document.getElementById('jokes-container');
  
      const jokeDiv = document.getElementById('jokes-container-div');

      jokeDiv.innerHTML = `
        <h3 id="joke-question">${joke.question}</h3>
        <p id="joke-response">${joke.response}</p>
      `;
      container.appendChild(jokeDiv);
    
  })
  .catch(err => {
    console.error('Erreur fetch:', err);
  });

});