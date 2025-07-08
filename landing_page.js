const h3 = document.getElementById('joke-question');
const p = document.getElementById('joke-response');

// Starting data 
fetch('http://localhost:3000/api/v1/blagues/random')
.then(response => response.json()).then((data)=>{
  h3.textContent = data.question;
  p.textContent  = data.response;
});

// Loading data to each click
document.getElementById('btn-joke-random').addEventListener('click', function(){
  
  fetch('http://localhost:3000/api/v1/blagues/random')
  .then(response => response.json())
  .then(joke => {    
      h3.textContent = `${joke.question}`;
      p.textContent = `${joke.response}`;
  })
  .catch(err => {
    console.error('Erreur fetch:', err);
  });

});

