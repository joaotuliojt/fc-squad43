const swiper = new Swiper('.swiper', {
   // Quantidade de slides por casa vizualizacao
  slidesPerView: 1,
  
  // Botoes de navegacao
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

  // Ativa a rolagem do mouse
    mousewheel: true,

  // Ativa setas do teclado
    keyboard: true,
})