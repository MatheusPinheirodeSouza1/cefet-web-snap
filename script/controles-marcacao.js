const xMarcacao = document.getElementById("x-da-marcacao");
const yMarcacao = document.getElementById("y-da-marcacao");
const larguraMarcacao = document.getElementById("largura-da-marcacao");
const alturaMarcacao = document.getElementById("altura-da-marcacao");
const tituloMarcacao = document.getElementById("titulo-da-marcacao");
const conteudoMarcacao = document.getElementById("conteudo-da-marcacao");
const corMarcacao = document.getElementById("cor-da-marcacao");
const formatoRetangular = document.querySelector(`input[value="formato-retangular"]`);
const formatoOval = document.querySelector(`input[value="formato-oval"]`);

function defineMarcacao() {
  const fotoAnotada = document.querySelector(".foto-anotada");
  const visibilidadeMarcacoes = document.getElementById("visibilidade-das-marcacoes");
  visibilidadeMarcacoes.addEventListener('change', () => {
    fotoAnotada.classList.toggle(visibilidadeMarcacoes.value);
  });
}

function defineValoresControle () {
  const marcacoes = document.querySelectorAll(".marcacao");

  marcacoes.forEach(marcacao => {
    if (marcacao.classList.contains('selecionada')) {
      this.valoresControle(marcacao);
    }

    marcacao.addEventListener('click', () => {
      let marcacaoAtual = marcacao.previousElementSibling.classList.contains('selecionada') ? marcacao.previousElementSibling : marcacao.nextElementSibling;
      marcacaoAtual.classList.toggle('selecionada');

      const selecionada = marcacao.classList.toggle('selecionada');
  
      if (selecionada) {
        this.valoresControle(marcacao);
      }
    });
  });
}

function atualizaMarcacao()
{
  xMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.style.left =  `${xMarcacao.value}px`;
  });

  yMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.style.top = `${yMarcacao.value}px`;
  });

  larguraMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.style.width = `${larguraMarcacao.value}px`;
  });

  alturaMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.style.height = `${alturaMarcacao.value}px`;
  });

  tituloMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.setAttribute('data-titulo', tituloMarcacao.value);
  });

  conteudoMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.setAttribute('data-conteudo', conteudoMarcacao.value);
  });

  corMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.setAttribute('data-cor', corMarcacao.value);
  });

  corMarcacao.addEventListener('change', () => {
    const marcacao = document.querySelector(".marcacao.selecionada");

    marcacao.setAttribute('data-cor', corMarcacao.value);
  });

  formatoRetangular.addEventListener('change', e => {
    const marcacao = document.querySelector(".marcacao.selecionada");
    marcacao.classList.remove('formato-oval');
    marcacao.classList.add('formato-retangular');
  });

  formatoOval.addEventListener('change', e => {
    const marcacao = document.querySelector(".marcacao.selecionada");
    marcacao.classList.remove('formato-retangular');
    marcacao.classList.add('formato-oval');
  });
}

this.defineMarcacao();
this.defineValoresControle();
this.atualizaMarcacao();

function valoresControle (marcacao) {
  xMarcacao.value = parseInt(marcacao.style.left);
  yMarcacao.value = parseInt(marcacao.style.top);
  larguraMarcacao.value = parseInt(marcacao.style.width);
  alturaMarcacao.value = parseInt(marcacao.style.height);

  tituloMarcacao.value = marcacao.getAttribute('data-titulo');
  conteudoMarcacao.value = marcacao.getAttribute('data-conteudo');
  corMarcacao.value = marcacao.getAttribute('data-cor');

  const formato = marcacao.classList.contains('formato-retangular') ? 'formato-retangular' : 'formato-oval';
  document.querySelector(`input[value="${formato}"]`).checked = true;

}