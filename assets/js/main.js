(function () {
  'use strict';

  const currencyFormatter = createCurrencyFormatter();
  const productsSource = 'assets/data/productos.json';
  const productFallbackData = [
    {
      id: 'kingdom-come-deliverance-2',
      title: 'KINGDOM COME: DELIVERANCE 2',
      description: 'RPG de acción ambientado en la Bohemia del siglo XV.',
      image: {
        src: 'assets/img/kingdom_come_deliverance_2.jpg',
        alt: 'Portada del juego Kingdom Come: Deliverance 2',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-kingdom.html#from-productos',
      price: 29990,
      featured: { order: 1, detailUrl: 'producto-kingdom.html#from-index' },
      details: {
        fullTitle: 'Kingdom Come: Deliverance 2',
        summary: 'RPG de acción ambientado en la Bohemia del siglo XV.',
        specs: [
          { label: 'Género', value: 'RPG de acción' },
          { label: 'Plataformas', value: 'PC, PlayStation 5, Xbox Series' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña / Impresiones',
        description: [
          'Secuela que redobla su apuesta por el <strong>realismo histórico</strong>: misiones con múltiples rutas, sistemas de supervivencia (comida, descanso, fatiga) y un <strong>combate cuerpo a cuerpo exigente</strong> donde el equipo y las heridas importan. La narrativa mantiene el foco en lo cotidiano y en las consecuencias de tus actos, premiando la planificación y el juego pausado.'
        ],
        highlights: {
          pros: 'inmersión altísima; decisiones con consecuencias; misiones abiertas; progresión "orgánica".',
          cons: 'curva de aprendizaje dura; combate poco accesible al inicio; ritmo pausado.'
        },
        rating: {
          label: '★★★★☆ (4,5/5)',
          detail: 'Ideal para quienes buscan simulación medieval y roleo profundo.'
        }
      }
    },
    {
      id: 'donkey-kong-bonanza',
      title: 'DONKEY KONG BONANZA',
      description: 'Plataformas y aventuras en 3D con acción.',
      image: {
        src: 'assets/img/Donkey_kong_bananza.png',
        alt: 'Portada del juego Donkey Kong Bonanza',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-donkey.html#from-productos',
      price: 34990,
      featured: { order: 2, detailUrl: 'producto-donkey.html#from-index' },
      details: {
        fullTitle: 'Donkey Kong Bonanza',
        summary: 'Plataformas y aventuras en 3D con acción.',
        specs: [
          { label: 'Género', value: 'Plataformas / Aventura' },
          { label: 'Plataforma', value: 'Nintendo Switch 2' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Una entrega de <strong>plataformas 3D</strong> de ritmo ágil con niveles verticales, muchos secretos y jefes creativos. Los controles se sienten precisos y el diseño invita a <strong>repetir niveles</strong> para completar coleccionables y rutas alternativas. Brilla especialmente en la variedad de biomas y en la creatividad de los desafíos.'
        ],
        highlights: {
          pros: 'control pulido; niveles rejugables; buena variedad de desafíos; jefes memorables.',
          cons: 'cámara caprichosa en zonas cerradas; picos de dificultad; historia muy simple.'
        },
        rating: {
          label: '★★★★☆ (4/5)',
          detail: 'Ideal para fans de plataformas coloridas con alta rejugabilidad.'
        }
      }
    },
    {
      id: 'clair-obscur-expedition-33',
      title: 'CLAIR OBSCUR: EXPEDITION 33',
      description: 'RPG inspirado en la Belle Époque.',
      image: {
        src: 'assets/img/Clair_obscur.jpg',
        alt: 'Portada del juego Clair Obscur: Expedition 33',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-expedition33.html#from-productos',
      price: 24990,
      featured: { order: 3, detailUrl: 'producto-expedition33.html#from-index' },
      details: {
        fullTitle: 'Clair Obscur: Expedition 33',
        summary: 'RPG inspirado en la Belle Époque.',
        specs: [
          { label: 'Género', value: 'RPG' },
          { label: 'Plataformas', value: 'PC, PlayStation 5, Xbox Series' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'RPG con estética <strong>Belle Époque</strong> y un combate por turnos con <strong>acciones en tiempo real</strong> (bloqueos, parries, disparos precisos) que premian el timing. Destacan su dirección de arte onírica, la banda sonora y unos jefes exigentes. La construcción de equipo ofrece <strong>sinergias interesantes</strong> entre habilidades.'
        ],
        highlights: {
          pros: 'identidad visual única; combate con buen ritmo; jefes desafiantes; personalización efectiva.',
          cons: 'curva de aprendizaje en el timing; algunos tramos con backtracking; dificultad irregular.'
        },
        rating: {
          label: '★★★★☆ (4,3/5)',
          detail: 'Ideal para amantes de los RPG tácticos con estilo artístico fuerte.'
        }
      }
    },
    {
      id: 'final-fantasy-vii-rebirth',
      title: 'FINAL FANTASY VII REBIRTH',
      description: 'Acción RPG para PlayStation 5 y PC.',
      image: {
        src: 'assets/img/Final_fantasy_VII_Rebirth.jpg',
        alt: 'Portada del juego Final Fantasy VII Rebirth',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-ff7r.html#from-productos',
      price: 59990,
      details: {
        fullTitle: 'Final Fantasy VII Rebirth',
        summary: 'Acción RPG que continúa la aventura fuera de Midgar.',
        specs: [
          { label: 'Género', value: 'Acción RPG' },
          { label: 'Plataformas', value: 'PlayStation 5, PC' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Amplía el Remake con regiones más abiertas, un sistema de combate que mezcla <strong>acción + ATB</strong> y <strong>sinergias de equipo</strong> muy satisfactorias. Ofrece contenido secundario generoso, grandes set pieces y momentos emocionales potentes con el grupo. La exploración en chocobo y los minijuegos aportan variedad.'
        ],
        highlights: {
          pros: 'combate profundo y vistoso; química del elenco; mundo amplio con muchas actividades.',
          cons: 'algunas secundarias se sienten de relleno; ritmo irregular en el tramo medio; minijuegos no para todos.'
        },
        rating: {
          label: '★★★★ (4,7/5)',
          detail: 'Ideal para quienes disfrutan de RPG de acción con gran narrativa y espectáculo.'
        }
      }
    },
    {
      id: 'elden-ring',
      title: 'ELDEN RING',
      description: 'Acción RPG de mundo abierto.',
      image: {
        src: 'assets/img/Elden_Ring.webp',
        alt: 'Portada del juego Elden Ring',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-eldenring.html#from-productos',
      price: 49990,
      details: {
        fullTitle: 'Elden Ring',
        summary: 'Acción RPG de mundo abierto en las Tierras Intermedias.',
        specs: [
          { label: 'Género', value: 'Acción RPG' },
          { label: 'Plataformas', value: 'PlayStation 5, Xbox Series, PC' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Un mundo abierto <strong>interconectado</strong> que premia la exploración y la curiosidad. Combate exigente, jefes memorables y una libertad enorme para construir tu personaje. La dirección de arte y la música elevan cada región a una experiencia única.'
        ],
        highlights: {
          pros: 'exploración sobresaliente; variedad de builds; jefes épicos; arte impresionante.',
          cons: 'dificultad alta; escasa guía puede abrumar.'
        },
        rating: {
          label: '★★★★½ (4,8/5)'
        }
      }
    },
    {
      id: 'marvels-spider-man-2',
      title: 'MARVEL’S SPIDER-MAN 2',
      description: 'Acción y aventura en Nueva York.',
      image: {
        src: 'assets/img/Marvels_Spider-Man_2.avif',
        alt: 'Portada del juego Marvel’s Spider-Man 2',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-spiderman2.html#from-productos',
      price: 59990,
      details: {
        fullTitle: 'Marvel’s Spider-Man 2',
        summary: 'Acción y aventura con Peter y Miles en Nueva York.',
        specs: [
          { label: 'Género', value: 'Acción / Aventura' },
          { label: 'Plataformas', value: 'PlayStation 5' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Desplazarse por la ciudad es <strong>puro placer</strong>. El combate mantiene el ritmo ágil y las nuevas habilidades añaden variedad. La historia brilla por la química del elenco y varias secuencias espectaculares.'
        ],
        highlights: {
          pros: 'balance entre historia y acción; movimiento exquisito; jefes con personalidad.',
          cons: 'actividades secundarias repetitivas; exclusivo de una plataforma.'
        },
        rating: {
          label: '★★★★☆ (4,6/5)'
        }
      }
    },
    {
      id: 'mario-kart-8-deluxe',
      title: 'MARIO KART 8 DELUXE',
      description: 'Carreras multijugador llenas de ítems.',
      image: {
        src: 'assets/img/Mario_Kart_8_Deluxe.avif',
        alt: 'Portada del juego Mario Kart 8 Deluxe',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-mariokart8.html#from-productos',
      price: 44990,
      details: {
        fullTitle: 'Mario Kart 8 Deluxe',
        summary: 'Carreras familiares con poderosos ítems y muchos circuitos.',
        specs: [
          { label: 'Género', value: 'Carreras' },
          { label: 'Plataformas', value: 'Nintendo Switch' },
          { label: 'Modo', value: 'Multijugador local/online' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Divertido desde la primera carrera. Gran variedad de pistas y karts, multijugador sólido y retos para todos los niveles. Perfecto para reuniones y partidas rápidas.'
        ],
        highlights: {
          pros: 'contenido enorme; multijugador excelente; controles accesibles.',
          cons: 'factor azar de ítems; IA irregular a veces.'
        },
        rating: {
          label: '★★★★☆ (4,5/5)'
        }
      }
    },
    {
      id: 'the-witcher-3-wild-hunt',
      title: 'THE WITCHER 3: WILD HUNT',
      description: 'RPG de mundo abierto con gran narrativa.',
      image: {
        src: 'assets/img/The_Witcher_3_Wild_Hunt.avif',
        alt: 'Portada del juego The Witcher 3: Wild Hunt',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-witcher3.html#from-productos',
      price: 39990,
      details: {
        fullTitle: 'The Witcher 3: Wild Hunt',
        summary: 'RPG de mundo abierto con gran foco narrativo.',
        specs: [
          { label: 'Género', value: 'RPG' },
          { label: 'Plataformas', value: 'PlayStation 5, Xbox Series, Nintendo Switch, PC' },
          { label: 'Modo', value: 'Un jugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Historia envolvente, misiones secundarias memorables y un mundo rico en detalles. La progresión y el desarrollo de personajes permiten distintos estilos de juego.'
        ],
        highlights: {
          pros: 'narrativa excelente; quest secundarias de calidad; mundo inmersivo.',
          cons: 'curva de entrada; sistemas densos para novatos.'
        },
        rating: {
          label: '★★★★☆ (4,7/5)'
        }
      }
    },
    {
      id: 'minecraft',
      title: 'MINECRAFT',
      description: 'Construcción y supervivencia sandbox.',
      image: {
        src: 'assets/img/Minecraft.avif',
        alt: 'Portada del juego Minecraft',
        width: 640,
        height: 360
      },
      detailUrl: 'producto-minecraft.html#from-productos',
      price: 26990,
      details: {
        fullTitle: 'Minecraft',
        summary: 'Construcción, supervivencia y creatividad sin límites.',
        specs: [
          { label: 'Género', value: 'Sandbox / Supervivencia' },
          { label: 'Plataformas', value: 'PlayStation, Xbox, Nintendo Switch, PC' },
          { label: 'Modo', value: 'Un jugador / Multijugador' }
        ],
        reviewTitle: 'Reseña',
        description: [
          'Un lienzo infinito para experimentar y crear. Modo creativo para construir libremente y supervivencia para explorar, craftear y combatir. La comunidad y los mods alargan su vida útil.'
        ],
        highlights: {
          pros: 'libertad total; enorme comunidad; rejugabilidad altísima.',
          cons: 'gráficos simples; requiere proponerse objetivos propios.'
        },
        rating: {
          label: '★★★★☆ (4,4/5)'
        }
      }
    }
  ];
  let productsCache = null;
  let productsPromise = null;

  document.addEventListener('DOMContentLoaded', initSite);

  function initSite() {
    const catalogReady = buildCatalogProducts();
    renderProductDetail();
    setupFeaturedCarousel();

    updateHeaderBanner();
    injectBenefitsSection();
    setupBenefitsToggle();
    setupContactFormValidation();

    Promise.resolve(catalogReady).finally(function () {
      setupProductHoverEffects();
      setupCatalogSearch();
      setupCatalogCart();
    });

    buildNewsSection();
  }

  function formatCurrency(amount) {
    if (!isFinite(amount)) amount = 0;
    const rounded = Math.round(amount);
    try {
      if (currencyFormatter) {
        return currencyFormatter.format(rounded);
      }
    } catch (error) { }
    return '$' + rounded.toLocaleString('es-CL');
  }

  function createCurrencyFormatter() {
    try {
      return new Intl.NumberFormat('es-CL', {
        style: 'currency',
        currency: 'CLP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
      });
    } catch (error) {
      return null;
    }
  }

  function cloneProducts(list) {
    return JSON.parse(JSON.stringify(list || []));
  }

  function loadProductsData() {
    if (productsCache) {
      return Promise.resolve(cloneProducts(productsCache));
    }

    if (productsPromise) {
      return productsPromise.then(cloneProducts);
    }

    if (typeof window.fetch !== 'function') {
      productsCache = cloneProducts(productFallbackData);
      return Promise.resolve(cloneProducts(productsCache));
    }

    productsPromise = fetch(productsSource)
      .then(function (response) {
        if (!response.ok) {
          throw new Error('No se pudo cargar el catálogo: ' + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        if (!Array.isArray(data) || !data.length) {
          throw new Error('Catálogo vacío');
        }
        productsCache = cloneProducts(data);
        return cloneProducts(productsCache);
      })
      .catch(function (error) {
        console.warn('No se pudo cargar el catálogo desde la red, usando respaldo local.', error);
        productsCache = cloneProducts(productFallbackData);
        return cloneProducts(productsCache);
      })
      .finally(function () {
        productsPromise = null;
      });

    return productsPromise;
  }

  // Crea un panel promocional en la vista principal.
  function updateHeaderBanner() {
    let main = document.querySelector('main#contenido');
    let destacados = document.getElementById('destacados');
    if (!main || !destacados || document.getElementById('promo-sidebar')) return;

    let introSection = main.querySelector('.section');
    if (!introSection) return;

    let promos = [
      {
        titulo: 'Semana Gamer',
        detalle: 'Despacho gratis en compras sobre $50.000 CLP'
      },
      {
        titulo: 'Club Evolution',
        detalle: 'Duplica tus puntos al reservar lanzamientos seleccionados'
      },
      {
        titulo: 'Streaming Night',
        detalle: 'Participa en sorteos en vivo cada jueves a las 21:00 hrs'
      }
    ];

    if (!promos.length) return;

    let layout = document.createElement('div');
    layout.className = 'row g-4 align-items-start flex-lg-nowrap';
    layout.id = 'promo-sidebar';

    let asideCol = document.createElement('aside');
    asideCol.className = 'col-12 col-lg-4 d-flex flex-column gap-3';
    asideCol.id = 'promo-sidebar-aside';

    let promoCard = document.createElement('div');
    promoCard.className = 'promo-panel text-white p-4 d-flex flex-column gap-3';
    promoCard.setAttribute('aria-live', 'polite');
    promoCard.setAttribute('role', 'status');

    let promoTitle = document.createElement('span');
    promoTitle.className = 'promo-pill';

    let promoDetail = document.createElement('p');
    promoDetail.className = 'promo-text fw-semibold mb-0';

    promoCard.appendChild(promoTitle);
    promoCard.appendChild(promoDetail);
    asideCol.appendChild(promoCard);

    let prefersReduced = false;
    try {
      prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (error) {}

    let promoIndex = 0;
    let rotateDelay = prefersReduced ? null : 3000;

    function renderPromo() {
      let promo = promos[promoIndex];
      promoTitle.textContent = promo.titulo;
      promoDetail.textContent = promo.detalle;
    }

    renderPromo();

    if (rotateDelay) {
      setInterval(function () {
        promoIndex = (promoIndex + 1) % promos.length;
        renderPromo();
      }, rotateDelay);
    }

    introSection.classList.add('section--compact');
    destacados.classList.add('section--compact');

    let contentCol = document.createElement('div');
    contentCol.className = 'col-12 col-lg-8 d-flex flex-column gap-3';
    contentCol.id = 'promo-sidebar-main';
    contentCol.appendChild(introSection);
    contentCol.appendChild(destacados);

    layout.appendChild(asideCol);
    layout.appendChild(contentCol);

    main.insertBefore(layout, main.firstChild);
  }

  // Construye una sección con beneficios del club solo en la página de inicio.
  function injectBenefitsSection() {
    if (!document.getElementById('destacados')) return;

    let main = document.querySelector('main#contenido');
    if (!main || document.getElementById('beneficios-club')) return;

    let section = document.createElement('section');
    section.className = 'section section--compact';
    section.id = 'beneficios-club';

    let heading = document.createElement('h2');
    heading.textContent = 'Beneficios del Club Evolution';

    let intro = document.createElement('p');
    intro.textContent = 'Regístrate sin costo y recibe recompensas cada vez que compres o participes en eventos.';

    let toggleWrapper = document.createElement('div');
    toggleWrapper.className = 'd-flex flex-column gap-3';

    let toggleButton = document.createElement('button');
    toggleButton.type = 'button';
    toggleButton.className = 'btn btn-outline-primary';
    toggleButton.id = 'beneficios-toggle';
    toggleButton.textContent = 'Mostrar beneficios';
    toggleButton.setAttribute('aria-expanded', 'false');

    let benefitsList = document.createElement('div');
    benefitsList.className = 'benefits-grid flex-grow-1';
    benefitsList.id = 'beneficios-lista';
    benefitsList.hidden = true;
    benefitsList.setAttribute('aria-hidden', 'true');

    let beneficios = [
      {
        titulo: 'Descuentos progresivos',
        descripcion: 'Recibe cupones acumulables según tus compras del mes.'
      },
      {
        titulo: 'Reservas anticipadas',
        descripcion: 'Accede a preventas y demos privadas antes del lanzamiento oficial.'
      },
      {
        titulo: 'Eventos exclusivos',
        descripcion: 'Participa en torneos, charlas y meetups con la comunidad gamer.'
      }
    ];

    beneficios.forEach(function (beneficio) {
      let column = document.createElement('div');
      column.className = 'benefit-item';

      let card = document.createElement('article');
      card.className = 'benefit-card h-100';

      let title = document.createElement('h3');
      title.className = 'h5';
      title.textContent = beneficio.titulo;

      let description = document.createElement('p');
      description.className = 'mb-0';
      description.textContent = beneficio.descripcion;

      card.appendChild(title);
      card.appendChild(description);
      column.appendChild(card);
      benefitsList.appendChild(column);
    });

    toggleWrapper.appendChild(toggleButton);
    toggleWrapper.appendChild(benefitsList);

    section.appendChild(heading);
    section.appendChild(intro);
    section.appendChild(toggleWrapper);

    let promoAside = document.getElementById('promo-sidebar-aside');
    if (promoAside) {
      promoAside.appendChild(section);
    } else {
      main.appendChild(section);
    }
  }

  // Configura el botón para mostrar u ocultar los beneficios creados dinámicamente.
  function setupBenefitsToggle() {
    // Botón accesible que alterna la visibilidad de los beneficios construidos dinámicamente.
    let toggleButton = document.getElementById('beneficios-toggle');
    let benefitsList = document.getElementById('beneficios-lista');
    if (!toggleButton || !benefitsList) return;

    toggleButton.addEventListener('click', function () {
      const shouldShow = benefitsList.hidden;
      benefitsList.hidden = !shouldShow;
      benefitsList.setAttribute('aria-hidden', String(!shouldShow));
      toggleButton.setAttribute('aria-expanded', String(shouldShow));
      toggleButton.textContent = shouldShow ? 'Ocultar beneficios' : 'Mostrar beneficios';
    });
  }

  function setupFeaturedCarousel() {
    const carousel = document.getElementById('carouselDestacados');
    if (!carousel) {
      return Promise.resolve(false);
    }

    const indicators = carousel.querySelector('[data-carousel-indicators]');
    const slides = carousel.querySelector('[data-carousel-slides]');
    const emptyMessage = carousel.querySelector('[data-carousel-empty]');

    if (!indicators || !slides) {
      return Promise.resolve(false);
    }

    indicators.innerHTML = '';
    slides.innerHTML = '';
    if (emptyMessage) emptyMessage.hidden = true;

    return loadProductsData()
      .then(function (products) {
        const featured = products.filter(function (product) {
          if (!product || !product.featured) return false;
          if (typeof product.featured.order === 'number') return true;
          return product.featured.order === 0;
        }).sort(function (a, b) {
          const orderA = a.featured && typeof a.featured.order === 'number' ? a.featured.order : Number.MAX_SAFE_INTEGER;
          const orderB = b.featured && typeof b.featured.order === 'number' ? b.featured.order : Number.MAX_SAFE_INTEGER;
          return orderA - orderB;
        });

        if (!featured.length) {
          if (emptyMessage) {
            emptyMessage.hidden = false;
          }
          return false;
        }

        featured.forEach(function (product, index) {
          const indicator = document.createElement('button');
          indicator.type = 'button';
          indicator.setAttribute('data-bs-target', '#carouselDestacados');
          indicator.setAttribute('data-bs-slide-to', String(index));
          indicator.setAttribute('aria-label', 'Slide ' + (index + 1));
          if (index === 0) {
            indicator.className = 'active';
            indicator.setAttribute('aria-current', 'true');
          }
          indicators.appendChild(indicator);

          const item = document.createElement('div');
          item.className = 'carousel-item' + (index === 0 ? ' active' : '');

          const image = document.createElement('img');
          image.className = 'd-block w-100';
          image.src = product.image && product.image.src ? product.image.src : '';
          const altText = product.image && product.image.alt
            ? product.image.alt
            : (product.details && product.details.fullTitle) || product.title;
          image.alt = altText || '';
          if (product.image && product.image.width) image.width = product.image.width;
          if (product.image && product.image.height) image.height = product.image.height;
          image.loading = index === 0 ? 'eager' : 'lazy';
          item.appendChild(image);

          const caption = document.createElement('div');
          caption.className = 'carousel-caption d-none d-md-block';

          const link = document.createElement('a');
          link.className = 'btn btn-primary btn-sm';
          const linkUrl = product.featured && product.featured.detailUrl
            ? product.featured.detailUrl
            : product.detailUrl;
          link.href = linkUrl || '#';
          link.textContent = 'Ver detalle';
          caption.appendChild(link);

          item.appendChild(caption);
          slides.appendChild(item);
        });

        initializeCarousel(carousel);
        return true;
      })
      .catch(function (error) {
        console.error('No se pudo cargar el carrusel de destacados.', error);
        if (emptyMessage) {
          emptyMessage.hidden = false;
        }
        return false;
      });
  }

  function initializeCarousel(node) {
    if (!node || !window.bootstrap || !bootstrap.Carousel) return;

    const existing = bootstrap.Carousel.getInstance(node);
    if (existing) {
      existing.dispose();
    }

    let prefersReduced = false;
    try {
      prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (error) {}

    const options = prefersReduced
      ? { interval: false, ride: false, pause: true, touch: true, wrap: true }
      : { interval: 3000, ride: 'carousel', pause: 'hover', touch: true, wrap: true };

    bootstrap.Carousel.getOrCreateInstance(node, options);
  }

  function renderProductDetail() {
    const productId = document.body.getAttribute('data-product-id');
    const container = document.querySelector('[data-product-detail]');
    if (!productId || !container) {
      return Promise.resolve(false);
    }

    const imageNode = container.querySelector('[data-product-image]');
    const titleNode = container.querySelector('[data-product-title]');
    const priceNode = container.querySelector('[data-product-price]');
    const summaryNode = container.querySelector('[data-product-summary]');
    const specsList = container.querySelector('[data-product-specs]');
    const reviewTitleNode = container.querySelector('[data-product-review-title]');
    const descriptionNode = container.querySelector('[data-product-description]');
    const highlightsList = container.querySelector('[data-product-highlights]');
    const ratingNode = container.querySelector('[data-product-rating]');

    function renderError(message) {
      container.innerHTML = '';
      const alert = document.createElement('div');
      alert.className = 'alert alert-warning';
      alert.textContent = message;
      container.appendChild(alert);
    }

    return loadProductsData()
      .then(function (products) {
        const product = products.find(function (item) {
          return item && item.id === productId;
        });

        if (!product) {
          renderError('No encontramos la información de este producto.');
          return false;
        }

        const details = product.details || {};
        const detailTitle = details.fullTitle || product.title;

        if (imageNode) {
          if (product.image && product.image.src) {
            imageNode.src = product.image.src;
          }
          imageNode.alt = product.image && product.image.alt ? product.image.alt : (detailTitle || '');
          if (product.image && product.image.width) imageNode.width = product.image.width;
          if (product.image && product.image.height) imageNode.height = product.image.height;
        }

        if (titleNode) {
          titleNode.textContent = detailTitle || 'Producto sin título';
        }

        if (priceNode) {
          const priceText = formatCurrency(product.price || 0) + ' CLP';
          priceNode.textContent = priceText;
          priceNode.setAttribute('aria-label', 'Precio ' + formatCurrency(product.price || 0) + ' pesos chilenos');
        }

        if (summaryNode) {
          summaryNode.textContent = details.summary || product.description || '';
        }

        if (specsList) {
          specsList.innerHTML = '';
          const specs = Array.isArray(details.specs) ? details.specs : [];
          specs.forEach(function (spec) {
            const item = document.createElement('li');
            const label = document.createElement('strong');
            label.textContent = (spec.label || 'Detalle') + ': ';
            item.appendChild(label);
            item.appendChild(document.createTextNode(spec.value || ''));
            specsList.appendChild(item);
          });
        }

        if (reviewTitleNode) {
          reviewTitleNode.textContent = details.reviewTitle || 'Reseña';
        }

        if (descriptionNode) {
          descriptionNode.innerHTML = '';
          const paragraphs = Array.isArray(details.description) ? details.description : [];
          paragraphs.forEach(function (text) {
            const paragraph = document.createElement('p');
            paragraph.innerHTML = text;
            descriptionNode.appendChild(paragraph);
          });
        }

        if (highlightsList) {
          highlightsList.innerHTML = '';
          const highlights = details.highlights || {};
          if (highlights.pros) {
            const li = document.createElement('li');
            li.innerHTML = '<strong>Pros:</strong> ' + highlights.pros;
            highlightsList.appendChild(li);
          }
          if (highlights.cons) {
            const li = document.createElement('li');
            li.innerHTML = '<strong>Contras:</strong> ' + highlights.cons;
            highlightsList.appendChild(li);
          }
        }

        if (ratingNode) {
          const rating = details.rating || {};
          if (rating.label) {
            let html = '<strong>Puntaje:</strong> ' + rating.label;
            if (rating.detail) {
              html += ' · <em>' + rating.detail + '</em>';
            }
            ratingNode.innerHTML = html;
          } else {
            ratingNode.textContent = '';
          }
        }

        if (detailTitle) {
          document.title = detailTitle + ' - Store Evolution VideoGames';
        }

        return true;
      })
      .catch(function (error) {
        console.error('No se pudo mostrar el detalle del producto.', error);
        renderError('No fue posible cargar la información del producto. Intenta nuevamente más tarde.');
        return false;
      });
  }

  function buildCatalogProducts() {
    if (!document.body.classList.contains('productos-page')) {
      return Promise.resolve(false);
    }

    const grid = document.querySelector('[data-product-grid]');
    if (!grid || grid.dataset.productsLoaded === 'true') {
      return Promise.resolve(false);
    }

    const placeholder = grid.querySelector('noscript');
    if (placeholder) {
      placeholder.remove();
    }

    function renderProducts(products) {
      if (!Array.isArray(products) || !products.length) {
        renderFallbackMessage();
        return;
      }

      grid.innerHTML = '';
      const fragment = document.createDocumentFragment();

      products.forEach(function (product) {
        const column = document.createElement('div');
        column.className = 'col-12 col-sm-6 col-lg-4';
        column.setAttribute('data-product-id', product.id || 'producto');

        const card = document.createElement('div');
        card.className = 'card h-100';

        const image = document.createElement('img');
        image.className = 'card-img-top';
        image.loading = 'lazy';
        image.alt = product.image && product.image.alt ? product.image.alt : product.title;
        if (product.image && product.image.src) {
          image.src = product.image.src;
        }
        if (product.image && product.image.width) {
          image.width = product.image.width;
        }
        if (product.image && product.image.height) {
          image.height = product.image.height;
        }
        card.appendChild(image);

        const body = document.createElement('div');
        body.className = 'card-body';

        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = product.title || 'Juego sin título';

        const description = document.createElement('p');
        description.className = 'card-text';
        description.textContent = product.description || '';

        const detailLink = document.createElement('a');
        detailLink.href = product.detailUrl || '#';
        detailLink.className = 'stretched-link';
        detailLink.setAttribute('aria-label', 'Ver detalle de ' + (product.title || 'este juego'));

        body.appendChild(title);
        body.appendChild(description);
        body.appendChild(detailLink);

        card.appendChild(body);

        const footer = document.createElement('div');
        footer.className = 'card-footer';

        const priceNode = document.createElement('data');
        priceNode.className = 'precio';
        priceNode.setAttribute('value', String(product.price || 0));
        const formattedPrice = formatCurrency(product.price || 0) + ' CLP';
        priceNode.textContent = formattedPrice;
        priceNode.setAttribute('aria-label', 'Precio ' + formatCurrency(product.price || 0) + ' pesos chilenos');

        const actions = document.createElement('div');
        actions.className = 'card-footer-actions';

        const cartButton = document.createElement('button');
        cartButton.type = 'button';
        cartButton.className = 'btn btn-add-cart';
        cartButton.textContent = 'Agregar al carrito';

        const reviewLink = document.createElement('a');
        reviewLink.className = 'btn btn-review';
        reviewLink.href = product.detailUrl || '#';
        reviewLink.textContent = 'Ver reseña';
        reviewLink.setAttribute('aria-label', 'Ver reseña de ' + (product.title || 'este juego'));

        actions.appendChild(cartButton);
        actions.appendChild(reviewLink);

        footer.appendChild(priceNode);
        footer.appendChild(actions);

        card.appendChild(footer);
        column.appendChild(card);
        fragment.appendChild(column);
      });

      grid.appendChild(fragment);
      grid.dataset.productsLoaded = 'true';
    }

    function renderFallbackMessage() {
      grid.innerHTML = '';
      const message = document.createElement('p');
      message.textContent = 'No fue posible cargar el catálogo en este momento. Intenta nuevamente más tarde.';
      grid.appendChild(message);
    }

    return loadProductsData()
      .then(function (products) {
        renderProducts(products);
        return true;
      })
      .catch(function (error) {
        console.error('No se pudo construir el catálogo.', error);
        renderFallbackMessage();
        return false;
      });
  }

  // Resalta los productos en la página del catálogo cuando reciben foco.
  function setupProductHoverEffects() {
    if (!document.body.classList.contains('productos-page')) return;

    const cards = document.querySelectorAll('.row.g-4 .card');
    if (!cards.length) return;

    cards.forEach(function (card) {
      function activate() {
        card.classList.add('card-active');
      }

      function deactivate(event) {
        let next = event && event.relatedTarget ? event.relatedTarget : null;
        if (!next || !card.contains(next)) {
          card.classList.remove('card-active');
        }
      }

      card.addEventListener('mouseenter', activate);
      card.addEventListener('mouseleave', deactivate);
      card.addEventListener('focusin', activate);
      card.addEventListener('focusout', deactivate);
    });
  }

  // Maneja el envío del formulario de contacto con validaciones adicionales y mensajes amigables.
  function setupContactFormValidation() {
    if (!document.body.classList.contains('contact-page')) return;

    let form = document.querySelector('form');
    if (!form) return;

    let feedback = document.createElement('div');
    feedback.className = 'alert d-none mt-3';
    feedback.setAttribute('role', 'status');
    form.appendChild(feedback);

    // Normalizamos la entrada del teléfono para evitar letras y otros caracteres no permitidos.
    let telefono = form.querySelector('#telefono');
    if (telefono) {
      telefono.addEventListener('input', function () {
        let filtered = telefono.value.replace(/[^0-9+\-()\s]/g, '');
        if (filtered !== telefono.value) {
          telefono.value = filtered;
        }
        telefono.setCustomValidity('');
        telefono.classList.remove('border-danger', 'border-success');
      });
    }

    let acepto = form.querySelector('#acepto');
    if (acepto) {
      acepto.addEventListener('change', function () {
        let valido = acepto.checked;
        acepto.setCustomValidity(valido ? '' : 'Debes aceptar la política de privacidad para continuar.');
        updateFieldState(acepto, valido);
      });
      acepto.setCustomValidity(acepto.checked ? '' : 'Debes aceptar la política de privacidad para continuar.');
    }

    let autoSubmit = false;

    form.addEventListener('submit', function (event) {
      if (autoSubmit) return;
      event.preventDefault();

      let errors = [];

      let nombre = form.querySelector('#nombre');
      if (nombre) {
        let nombreValido = nombre.value.trim().split(/\s+/).filter(Boolean).length >= 2;
        updateFieldState(nombre, nombreValido);
        if (!nombreValido) {
          errors.push('Ingresa tu nombre y apellido.');
        }
      }

      if (telefono) {
        // El teléfono es opcional; cuando se ingresa contenido, se validan los símbolos permitidos.
        let valorTelefono = telefono.value.trim();
        let telefonoValido = true;
        if (valorTelefono) {
          telefonoValido = /^[0-9+\-()\s]{7,}$/.test(valorTelefono);
        }
        telefono.setCustomValidity(telefonoValido || !valorTelefono ? '' : 'Solo se permiten números y los símbolos + - ( ) con un mínimo de 7 caracteres.');
        if (!valorTelefono) {
          telefono.classList.remove('border-danger', 'border-success');
        } else {
          updateFieldState(telefono, telefonoValido);
        }
        if (!telefonoValido) {
          errors.push('El teléfono acepta solo números y símbolos + - ( ).');
        }
      }

      let mensaje = form.querySelector('#mensaje');
      if (mensaje) {
        let mensajeValido = mensaje.value.trim().length >= 15;
        updateFieldState(mensaje, mensajeValido);
        if (!mensajeValido) {
          errors.push('El mensaje necesita al menos 15 caracteres para comprender tu solicitud.');
        }
      }

      let correo = form.querySelector('#email');
      if (correo) {
        let correoValido = correo.checkValidity();
        updateFieldState(correo, correoValido);
        if (!correoValido) {
          errors.push('Revisa el formato del correo electrónico.');
        }
      }

      if (acepto) {
        let aceptoValido = acepto.checked;
        updateFieldState(acepto, aceptoValido);
        if (!aceptoValido) {
          errors.push('Debes aceptar la política de privacidad antes de continuar.');
        }
      }

      if (errors.length) {
        feedback.className = 'alert alert-danger mt-3';
        feedback.textContent = errors.join(' ');
        feedback.classList.remove('d-none');
        focusFirstInvalid([nombre, telefono, correo, mensaje, acepto]);
        return;
      }

      feedback.className = 'alert alert-success mt-3';
      feedback.textContent = '¡Gracias! Revisaremos tu mensaje y te contactaremos a la brevedad.';
      feedback.classList.remove('d-none');

      autoSubmit = true;
      window.requestAnimationFrame(function () {
        form.submit();
      });
    });
  }

  function updateFieldState(field, isValid) {
    if (!field) return;
    if (field.type === 'checkbox') {
      let label = field.nextElementSibling;
      if (label) {
        label.classList.toggle('text-danger', !isValid);
        label.classList.toggle('text-success', isValid);
      }
    } else {
      field.classList.toggle('border-danger', !isValid);
      field.classList.toggle('border-success', isValid);
    }
  }

  function focusFirstInvalid(fields) {
    fields.some(function (field) {
      if (!field) return false;

      let isInvalid = field.classList.contains('border-danger');
      if (!isInvalid && field.type === 'checkbox') {
        let label = field.nextElementSibling;
        isInvalid = !!(label && label.classList.contains('text-danger'));
      }

      if (isInvalid) {
        field.focus();
        return true;
      }
      return false;
    });
  }

  function setupCatalogSearch() {
    if (!document.body.classList.contains('productos-page')) return;

    let form = document.querySelector('[data-catalog-search]');
    if (!form) return;

    let input = form.querySelector('[data-search-input]');
    if (!input) return;

    let clearButton = form.querySelector('[data-search-clear]');
    let countNode = form.querySelector('[data-search-count]');
    if (countNode) {
      countNode.setAttribute('aria-live', 'polite');
    }

    let grid = document.querySelector('main#contenido .catalog-grid .row');
    if (!grid) return;

    let columns = Array.prototype.filter.call(grid.children, function (node) {
      if (!node || node.nodeType !== 1) return false;
      if (typeof node.matches === 'function') {
        return node.matches('[class*="col-"]');
      }
      return /col-/.test(node.className || '');
    });

    if (!columns.length) return;

    let normalizeText = createNormalizer();
    let items = columns.map(function (column) {
      let card = column.querySelector('.card');
      if (!card) return null;

      let parts = [];

      let title = card.querySelector('.card-title');
      if (title) parts.push(title.textContent);

      let description = card.querySelector('.card-text');
      if (description) parts.push(description.textContent);

      let price = card.querySelector('.precio');
      if (price) {
        parts.push(price.textContent);
        if (price.getAttribute('aria-label')) {
          parts.push(price.getAttribute('aria-label'));
        }
      }

      let review = card.querySelector('.btn-review');
      if (review) parts.push(review.textContent);

      let textValue = normalizeText(parts.join(' '));
      column.setAttribute('data-search-text', textValue);

      return {
        column: column,
        text: textValue
      };
    }).filter(Boolean);

    if (!items.length) return;

    let emptyMessage = grid.parentNode.querySelector('[data-search-empty]');
    if (!emptyMessage) {
      emptyMessage = document.createElement('p');
      emptyMessage.setAttribute('data-search-empty', '');
      emptyMessage.textContent = 'No encontramos juegos que coincidan con tu búsqueda.';
      emptyMessage.hidden = true;
      grid.parentNode.appendChild(emptyMessage);
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      applyFilter();
    });

    input.addEventListener('input', applyFilter);

    if (clearButton) {
      clearButton.addEventListener('click', function () {
        if (!input.value) return;
        input.value = '';
        input.focus();
        applyFilter();
      });
    }

    applyFilter();

    function applyFilter() {
      let rawValue = input.value || '';
      let query = normalizeText(rawValue);
      let tokens = query ? query.split(' ') : [];
      let matches = 0;

      items.forEach(function (item) {
        let hide = false;
        if (tokens.length) {
          hide = !tokens.every(function (token) {
            return item.text.indexOf(token) !== -1;
          });
        }
        item.column.classList.toggle('d-none', hide);
        if (!hide) matches += 1;
      });

      if (countNode) {
        if (!tokens.length) {
          countNode.textContent = 'Mostrando todos los juegos';
        } else if (!matches) {
          countNode.textContent = 'No hay coincidencias para "' + rawValue.trim() + '"';
        } else if (matches === 1) {
          countNode.textContent = '1 juego coincide con tu búsqueda';
        } else {
          countNode.textContent = matches + ' juegos coinciden con tu búsqueda';
        }
      }

      if (emptyMessage) {
        emptyMessage.hidden = matches !== 0;
      }

      if (clearButton) {
        clearButton.hidden = !rawValue.trim();
      }
    }

    function createNormalizer() {
      return function (value) {
        let normalized = String(value || '').toLowerCase();
        try {
          normalized = normalized.normalize('NFD').replace(/[̀-ͯ]/g, '');
        } catch (error) {}
        return normalized.replace(/\s+/g, ' ').trim();
      };
    }
  }

  function setupCatalogCart() {
    if (document.body.classList.contains('cart-disabled') || document.body.hasAttribute('data-cart-disabled')) return;
    if (document.querySelector('.cart-fab')) return;

    let catalog = document.querySelector('main#contenido .catalog-grid .row');
    let cards = catalog ? catalog.querySelectorAll('.card') : [];

    const storageKey = 'store-evolution-cart';
    const storageEnabled = canUseStorage();
    let cartItems = storageEnabled ? loadCartFromStorage() : [];
    if (!Array.isArray(cartItems)) {
      cartItems = [];
    }
    const taxRate = 0.19;
    const floatingButton = createFloatingButton();
    const countBadge = floatingButton.querySelector('[data-cart-count]');
    const backdrop = createBackdrop();
    const panel = createCartPanel();
    const itemsContainer = panel.querySelector('[data-cart-items]');
    const subtotalNode = panel.querySelector('[data-cart-subtotal]');
    const taxNode = panel.querySelector('[data-cart-tax]');
    const totalNode = panel.querySelector('[data-cart-total]');
    const clearButton = panel.querySelector('[data-cart-clear]');
    const closeButtons = panel.querySelectorAll('[data-cart-close]');
    let lastFocus = null;

    document.body.appendChild(backdrop);
    document.body.appendChild(panel);
    document.body.appendChild(floatingButton);

    floatingButton.addEventListener('click', openCart);
    backdrop.addEventListener('click', closeCart);

    closeButtons.forEach(function (btn) {
      btn.addEventListener('click', closeCart);
    });

    clearButton.addEventListener('click', function () {
      if (!cartItems.length) return;
      cartItems = [];
      renderCart();
    });

    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && panel.classList.contains('is-visible')) {
        event.preventDefault();
        closeCart();
      }
    });

    cards.forEach(function (card) {
      let titleNode = card.querySelector('.card-title');
      let priceNode = card.querySelector('.precio');
      if (!titleNode || !priceNode) return;

      let button = card.querySelector('.btn-add-cart');
      if (!button) {
        button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-add-cart';
        button.textContent = 'Agregar al carrito';
        priceNode.parentNode.appendChild(button);
      }

      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();
        addProduct({
          id: createProductId(titleNode.textContent),
          title: titleNode.textContent.trim(),
          price: getPriceFromNode(priceNode)
        });
      });
    });

    renderCart();

    function addProduct(product) {
      if (!product || !product.id) return;
      let existing = cartItems.find(function (item) { return item.id === product.id; });
      if (existing) {
        existing.quantity += 1;
      } else {
        cartItems.push({
          id: product.id,
          title: product.title,
          price: product.price,
          quantity: 1
        });
      }
      renderCart();
    }

    function removeProduct(id) {
      let index = cartItems.findIndex(function (item) { return item.id === id; });
      if (index === -1) return;
      if (cartItems[index].quantity > 1) {
        cartItems[index].quantity -= 1;
      } else {
        cartItems.splice(index, 1);
      }
      renderCart();
    }

    function renderCart() {
      itemsContainer.innerHTML = '';

      if (!cartItems.length) {
        let empty = document.createElement('p');
        empty.className = 'cart-empty';
        empty.textContent = 'Tu carrito esta vacio. Agrega tus juegos favoritos para continuar.';
        itemsContainer.appendChild(empty);
      } else {
        cartItems.forEach(function (item) {
          let row = document.createElement('article');
          row.className = 'cart-item';

          let info = document.createElement('div');

          let title = document.createElement('h3');
          title.textContent = item.quantity > 1
            ? item.title + ' x ' + item.quantity
            : item.title;
          info.appendChild(title);

          let price = document.createElement('p');
          price.className = 'cart-item-price';
          price.textContent = formatCurrency(item.price * item.quantity);
          info.appendChild(price);

          row.appendChild(info);

          let removeBtn = document.createElement('button');
          removeBtn.type = 'button';
          removeBtn.setAttribute('aria-label', 'Quitar ' + item.title + ' del carrito');
          removeBtn.innerHTML = '&#10005;';
          removeBtn.addEventListener('click', function () {
            removeProduct(item.id);
          });

          row.appendChild(removeBtn);
          itemsContainer.appendChild(row);
        });
      }

      let subtotal = cartItems.reduce(function (acc, item) {
        return acc + item.price * item.quantity;
      }, 0);

      let tax = Math.round(subtotal * taxRate);
      let total = subtotal + tax;

      subtotalNode.textContent = formatCurrency(subtotal);
      taxNode.textContent = formatCurrency(tax);
      totalNode.textContent = formatCurrency(total);

      let totalItems = cartItems.reduce(function (acc, item) {
        return acc + item.quantity;
      }, 0);

      countBadge.textContent = totalItems;
      countBadge.hidden = totalItems === 0;

      floatingButton.setAttribute('aria-label', totalItems
        ? 'Abrir carrito. ' + totalItems + ' producto' + (totalItems > 1 ? 's' : '') + ' en el carrito.'
        : 'Abrir carrito. No hay productos en el carrito.');

      floatingButton.setAttribute('data-count', String(totalItems));
      clearButton.disabled = !cartItems.length;
      clearButton.setAttribute('aria-disabled', clearButton.disabled ? 'true' : 'false');

      persistCart();
    }


    function persistCart() {
      if (!storageEnabled) return;
      try {
        localStorage.setItem(storageKey, JSON.stringify(cartItems));
      } catch (error) {
        console.warn('No se pudo guardar el carrito en almacenamiento local.', error);
      }
    }

    function loadCartFromStorage() {
      if (!storageEnabled) return [];
      try {
        let raw = localStorage.getItem(storageKey);
        if (!raw) return [];
        let parsed = JSON.parse(raw);
        if (!Array.isArray(parsed)) return [];
        return parsed
          .map(function (item) {
            if (!item || typeof item !== 'object') return null;
            let id = typeof item.id === 'string' ? item.id : '';
            let title = typeof item.title === 'string' ? item.title : '';
            let price = Number(item.price);
            let quantity = Number(item.quantity);
            if (!id || !title || !isFinite(price) || !isFinite(quantity)) return null;
            price = Math.max(0, Math.round(price));
            quantity = Math.max(1, Math.round(quantity));
            return {
              id: id,
              title: title,
              price: price,
              quantity: quantity
            };
          })
          .filter(Boolean);
      } catch (error) {
        console.warn('No se pudo cargar el carrito desde almacenamiento local.', error);
        return [];
      }
    }

    function canUseStorage() {
      try {
        let key = '__cart-check__' + Date.now();
        localStorage.setItem(key, '1');
        localStorage.removeItem(key);
        return true;
      } catch (error) {
        return false;
      }
    }

    function openCart() {
      if (panel.classList.contains('is-visible')) return;
      lastFocus = document.activeElement;
      panel.classList.add('is-visible');
      backdrop.classList.add('is-visible');
      document.body.classList.add('cart-open');
      floatingButton.setAttribute('aria-expanded', 'true');
      panel.focus();
    }

    function closeCart() {
      if (!panel.classList.contains('is-visible')) return;
      panel.classList.remove('is-visible');
      backdrop.classList.remove('is-visible');
      document.body.classList.remove('cart-open');
      floatingButton.setAttribute('aria-expanded', 'false');
      if (lastFocus && typeof lastFocus.focus === 'function') {
        lastFocus.focus();
      } else {
        floatingButton.focus();
      }
    }

    function createFloatingButton() {
      let button = document.createElement('button');
      button.type = 'button';
      button.className = 'cart-fab';
      button.setAttribute('aria-haspopup', 'dialog');
      button.setAttribute('aria-expanded', 'false');
      button.innerHTML =
        '<span class="visually-hidden">Carrito</span>' +
        '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M6 6h15l-1.5 9h-12z"></path>' +
          '<circle cx="9" cy="20" r="1"></circle>' +
          '<circle cx="18" cy="20" r="1"></circle>' +
          '<path d="M6 6L4 2"></path>' +
        '</svg>' +
        '<span class="cart-fab-count" data-cart-count hidden>0</span>';
      return button;
    }

    function createBackdrop() {
      let overlay = document.createElement('div');
      overlay.className = 'cart-backdrop';
      return overlay;
    }

    function createCartPanel() {
      let aside = document.createElement('aside');
      aside.className = 'cart-panel';
      aside.setAttribute('role', 'dialog');
      aside.setAttribute('aria-modal', 'true');
      aside.setAttribute('aria-label', 'Carrito de compras');
      aside.tabIndex = -1;
      aside.innerHTML =
        '<div class="cart-panel-header">' +
          '<h2 class="cart-panel-title">' +
            '<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' +
              '<path d="M6 6h15l-1.5 9h-12z"></path>' +
              '<circle cx="9" cy="20" r="1"></circle>' +
              '<circle cx="18" cy="20" r="1"></circle>' +
              '<path d="M6 6L4 2"></path>' +
            '</svg>' +
            'Carrito' +
          '</h2>' +
          '<button type="button" class="cart-close" data-cart-close aria-label="Cerrar carrito">' +
            '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
              '<line x1="6" y1="6" x2="18" y2="18"></line>' +
              '<line x1="18" y1="6" x2="6" y2="18"></line>' +
            '</svg>' +
          '</button>' +
        '</div>' +
        '<div class="cart-items" data-cart-items aria-live="polite"></div>' +
        '<div class="cart-summary">' +
          '<div class="cart-summary-row">' +
            '<span>Subtotal</span>' +
            '<span data-cart-subtotal>$0 CLP</span>' +
          '</div>' +
          '<div class="cart-summary-row">' +
            '<span>Impuestos (IVA 19%)</span>' +
            '<span data-cart-tax>$0 CLP</span>' +
          '</div>' +
          '<div class="cart-summary-row cart-total">' +
            '<span>Total</span>' +
            '<span data-cart-total>$0 CLP</span>' +
          '</div>' +
        '</div>' +
        '<div class="cart-actions">' +
          '<button type="button" class="btn btn-clear" data-cart-clear disabled>Vaciar carrito</button>' +
          '<button type="button" class="btn btn-close" data-cart-close>Cerrar</button>' +
        '</div>';
      return aside;
    }

    function createProductId(title) {
      return String(title || '')
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
    }

    function getPriceFromNode(node) {
      let value = 0;
      if (node.hasAttribute('value')) {
        value = Number(node.getAttribute('value')) || 0;
      }
      if (!value) {
        value = parsePrice(node.textContent);
      }
      return value;
    }

    function parsePrice(text) {
      return Number(String(text || '').replace(/[^0-9]/g, '')) || 0;
    }
  }
  // Crea la sección de novedades y carga la información desde un archivo JSON.
  function buildNewsSection() {
    if (!document.getElementById('destacados')) return;

    let main = document.querySelector('main#contenido');
    if (!main) return;

    let section = document.createElement('section');
    section.className = 'section section--compact';
    section.id = 'novedades';

    let heading = document.createElement('h2');
    heading.textContent = 'Novedades de la comunidad';

    let intro = document.createElement('p');
    intro.textContent = 'Estas actividades se actualizan semanalmente para que no te pierdas nada.';

    let list = document.createElement('div');
    list.className = 'row g-3';

    let loading = document.createElement('p');
    loading.textContent = 'Cargando novedades...';
    list.appendChild(loading);

    section.appendChild(heading);
    section.appendChild(intro);
    section.appendChild(list);

    let contentCol = document.getElementById('promo-sidebar-main');
    if (contentCol) {
      contentCol.appendChild(section);
    } else {
      main.appendChild(section);
    }

    // Datos de respaldo usados cuando la API pública no responde o estamos en entorno sin red.
    let fallbackNovedades = [
      {
        titulo: 'Semana de Estrenos RPG',
        fecha: '2025-05-22',
        descripcion: 'Nuevos mundos se abren con descuentos de hasta 40% en sagas de rol.',
        destacado: true
      },
      {
        titulo: 'Competencia de eSports',
        fecha: '2025-05-25',
        descripcion: 'Inscríbete en nuestro torneo online y gana accesorios para tu consola.',
        destacado: false
      },
      {
        titulo: 'Preventa exclusiva',
        fecha: '2025-05-30',
        descripcion: 'Reserva títulos AAA y recibe contenido descargable sin costo adicional.',
        destacado: true
      }
    ];

    // Imprime la lista de novedades y, si corresponde, muestra que provienen del fallback.
    function renderNovedades(novedades, isFallback) {
      list.innerHTML = '';

      if (!Array.isArray(novedades) || !novedades.length) {
        let empty = document.createElement('p');
        empty.textContent = 'Pronto anunciaremos nuevas actividades. Vuelve en unos días.';
        list.appendChild(empty);
        return;
      }

      novedades.forEach(function (item) {
        let column = document.createElement('div');
        column.className = 'col-12 col-md-4';

        let card = document.createElement('article');
        card.className = 'card h-100 border-0 shadow-sm';
        if (item.destacado) {
          card.classList.add('border', 'border-primary');
        }

        card.innerHTML =
          '<div class="card-body">' +
          '<span class="badge badge-novedad">' + escapeHtml(formatDate(item.fecha)) + '</span>' +
          '<h3 class="h5 mt-2">' + escapeHtml(item.titulo) + '</h3>' +
          '<p class="mb-0">' + escapeHtml(item.descripcion) + '</p>' +
          '</div>';

        column.appendChild(card);
        list.appendChild(column);
      });

      if (isFallback) {
        section.setAttribute('data-fallback', 'true');
      }
    }

    function renderError(message) {
      list.innerHTML = '';
      let alertBox = document.createElement('div');
      alertBox.className = 'alert alert-warning';
      alertBox.textContent = message;
      list.appendChild(alertBox);
    }

    // Consumimos una API pública de videojuegos; normalizamos los datos para el diseño y manejamos fallbacks.
    fetch('https://api.sampleapis.com/video-games/games')
      .then(function (response) {
        if (!response.ok) {
          throw new Error('Respuesta inesperada del servidor: ' + response.status);
        }
        return response.json();
      })
      .then(function (novedades) {
        // Seleccionamos los primeros 3 resultados con título y construimos un objeto homogéneo
        // ajustando fecha (número → año), descripción y marcando el primero como destacado.
        let normalizadas = Array.isArray(novedades)
          ? novedades
              .filter(function (item) { return item && item.title; })
              .slice(0, 3)
              .map(function (item, index) {
                let release = item.releaseDate || item.firstReleaseDate || item.releaseYear;
                let fecha = '';
                if (typeof release === 'number') {
                  fecha = release + '-01-01';
                } else if (release) {
                  fecha = release;
                }

                let descripcion = item.description || item.summary || '';
                if (!descripcion && item.genre) {
                  descripcion = 'Género: ' + item.genre;
                }
                if (!descripcion && item.platform) {
                  let platform = Array.isArray(item.platform) ? item.platform.join(', ') : item.platform;
                  descripcion = 'Disponible en: ' + platform;
                }
                if (!descripcion) {
                  descripcion = 'Explora este lanzamiento destacado desde nuestra API aliada.';
                }

                return {
                  titulo: item.title || 'Próximo lanzamiento',
                  fecha: fecha,
                  descripcion: descripcion,
                  destacado: index === 0
                };
              })
          : [];

        if (!normalizadas.length) {
          throw new Error('La API no devolvió información utilizable.');
        }

        renderNovedades(normalizadas, false);
      })
      .catch(function (error) {
        let isLocalFile = window.location.protocol === 'file:';
        let message = '';
        if (error) {
          message = error.message || String(error);
        }

        let shouldUseFallback = isLocalFile;
        if (!shouldUseFallback) {
          shouldUseFallback = error instanceof TypeError;
        }
        if (!shouldUseFallback && message) {
          shouldUseFallback = /Failed to fetch|NetworkError|CORS|ERR_|La API no devolvió/i.test(message);
        }
        if (!shouldUseFallback && message.indexOf('Respuesta inesperada del servidor') === 0) {
          shouldUseFallback = true;
        }

        if (shouldUseFallback) {
          console.warn('No fue posible consultar la API, usando datos de respaldo.', error);
          fetch('assets/data/novedades.json')
            .then(function (response) {
              if (!response.ok) {
                throw new Error('Fallo al cargar el respaldo local: ' + response.status);
              }
              return response.json();
            })
            .then(function (novedadesLocales) {
              let datos = Array.isArray(novedadesLocales) && novedadesLocales.length
                ? novedadesLocales
                : fallbackNovedades;
              renderNovedades(datos, true);
            })
            .catch(function (fallbackError) {
              console.warn('No se pudo usar el respaldo local, mostrando datos estáticos.', fallbackError);
              renderNovedades(fallbackNovedades, true);
            });
          return;
        }

        renderError('No fue posible cargar las novedades. Intenta nuevamente más tarde.');
        console.error('Error al cargar novedades:', error);
      });
  }

  function formatDate(value) {
    if (!value) return 'Próximamente';
    let date = new Date(value);
    if (Number.isNaN(date.getTime())) return value;
    return date.toLocaleDateString('es-CL', {
      year: 'numeric', month: 'short', day: 'numeric'
    });
  }

  function escapeHtml(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
})();



