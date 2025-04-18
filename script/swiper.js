
// Verifica o tamanho da tela atual
function checkScreenSize() {
  const larguraDaTela = window.innerWidth;

  // SWIPE CARD DE FILMES
  if (larguraDaTela <= 991) {
    // Execute código específico para tablet
    new Swiper('.swiper', {
      mousewheel: {
          forceToAxis: true,
        },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      breakpoints: {
          0: {
              slidesPerView: 3,
          },
      }
    });

    
  } else {

    // Execute código específico para desktop
    new Swiper('.swiper', {
      mousewheel: {
          forceToAxis: true,
        },
    
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      breakpoints: {
          0: {
              slidesPerView: 5,
          },
      }
    });
  }
}

// Verifica o tamanho da tela inicialmente
checkScreenSize();

// Adiciona um listener para o evento de redimensionamento da janela
window.addEventListener('resize', checkScreenSize);