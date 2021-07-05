var balaozinho = document.getElementById("balaozinho");
var marcacoes = document.querySelectorAll(".marcacao");

marcacoes.forEach(marcacao => {
  marcacao.addEventListener('mouseover', () => {
    let el =`
    <h2>${marcacao.getAttribute('data-titulo')}</h2>
    <p>${marcacao.getAttribute('data-conteudo')}</p>`;

    balaozinho.innerHTML = el;
    balaozinho.style.color = marcacao.getAttribute('data-cor');
  });

  marcacao.addEventListener('mouseout', e => {
    balaozinho.innerHTML = '';
  });

  marcacao.addEventListener('mousemove', function(e) {
    balaozinho.style.left = `${e.pageX}px`;
    balaozinho.style.top = `${e.pageY}px`;
  });
});

