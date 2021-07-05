const filtroFoto = document.getElementById('filtro-da-foto');

filtroFoto.addEventListener('change', () => {
  const foto = document.querySelector('.foto-anotada > img');
  foto.style.filter = filtroFoto.value;  
});