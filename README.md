# Store Evolution VideoGames

Tienda web responsiva desarrollada para la asignatura **Frontend I - Semana 6**. En esta entrega se consolida un flujo completo de datos dinámicos: el catálogo, el carrusel de destacados y las fichas individuales se alimentan desde un JSON consumido con Fetch API, se gestionan eventos avanzados y se mantienen validaciones accesibles.

## Tabla de contenidos
- [Descripción](#-descripción)
- [Características principales](#-características-principales)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Tecnologías utilizadas](#-tecnologías-utilizadas)
- [Interactividad implementada](#-interactividad-implementada)
- [Validaciones del formulario](#-validaciones-del-formulario)
- [Cómo ejecutar el proyecto](#-cómo-ejecutar-el-proyecto)
- [Pruebas realizadas](#-pruebas-realizadas)
- [Capturas de referencia](#-capturas-de-referencia)
- [Autoría](#-autoría)

## 🎮 Descripción
Store Evolution VideoGames presenta un catálogo de videojuegos con diseño oscuro, accesible y optimizado para dispositivos móviles. La versión de Semana 6 reemplaza los listados estáticos por una solución dinámica basada en Fetch API y plantillas JavaScript reutilizables. También se revisaron estilos, accesibilidad y consistencia visual en todas las vistas.

## Características principales
- Diseño responsivo con Bootstrap 5.3.8 y estilos personalizados en `assets/css/styles.css`.
- Navbar accesible con control hamburguesa y estados activos en todas las páginas.
- Carrusel de destacados que se construye desde datos dinámicos y respeta `prefers-reduced-motion`.
- Catálogo completo con búsqueda, filtros y carrito flotante gestionado desde `assets/js/main.js`.
- Fichas de productos (`producto-*.html`) convertidas en plantillas que se hidratan automáticamente con los datos cargados vía Fetch.
- Footer unificado con datos de contacto, redes sociales e información de dirección.

## 🗂️ Estructura del proyecto
```
EXP2-S6_LILIANA_TAPIA/
├── index.html                     # Home con carrusel dinámico y secciones promocionales
├── productos.html                 # Catálogo completo (grid generado vía JS)
├── contacto.html                  # Formulario con validaciones personalizadas
├── producto-*.html                # Plantillas dinámicas para cada título (9 en total)
├── gracias.html                   # Mensaje post-envío reutilizando el footer global
├── assets/
│   ├── css/
│   │   └── styles.css             # Estilos globales y overrides de Bootstrap
│   ├── data/
│   │   ├── productos.json         # Fuente principal del catálogo/fichas/carrusel
│   │   └── novedades.json         # Respaldo local para la sección de noticias
│   ├── img/                       # Recursos gráficos (banners, portadas, íconos)
│   └── js/
│       └── main.js                # Lógica principal, eventos, Fetch y render dinámico
└── README.md                      # Este documento
```

## Tecnologías utilizadas
- **HTML5 semántico** para estructura y accesibilidad.
- **CSS3** con variables, Flexbox, Grid y utilidades modernas (`clamp`, `aspect-ratio`).
- **Bootstrap 5.3.8** para componentes base (navbar, carrusel) y sistema de grid.
- **JavaScript (ES6)** para manipulación del DOM, Fetch API, almacenamiento local del carrito y validaciones.

##  Interactividad implementada
- **Fetch + render dinámico del catálogo**: `buildCatalogProducts()` consume `assets/data/productos.json`, genera tarjetas, búsqueda, mensajes vacíos y botones “Agregar al carrito”.
- **Carrusel de destacados**: `setupFeaturedCarousel()` filtra productos marcados como `featured`, genera indicadores, slides y reconfigura Bootstrap Carousel.
- **Fichas de producto**: `renderProductDetail()` hidrata las plantillas basándose en el `data-product-id` de cada página.
- **Carrito flotante**: botones, contador dinámico, panel lateral y persistencia con LocalStorage (`setupCatalogCart()`).
- **Sección de novedades**: `buildNewsSection()` consulta [https://api.sampleapis.com/video-games/games](https://api.sampleapis.com/video-games/games) con fallback local y mensajes de error manejados.
- **Panel promocional y toggle de beneficios**: contenido generado en runtime con animaciones y accesibilidad.

## Validaciones del formulario
En `contacto.html`, la función `setupContactFormValidation()`:
- Exige nombre y apellido (mínimo dos palabras).
- Valida correo electrónico via `checkValidity()` de HTML5.
- Sanitiza el teléfono (opcional) para admitir solo caracteres `0-9`, `+`, `-`, `(`, `)`, espacios y longitud mínima de 7 cuando se ingresa.
- Requiere mensaje con al menos 15 caracteres.
- Personaliza el checkbox de aceptación y bloquea el envío hasta que se acepte.
- Muestra mensajes amigables, remueve estilos de error al corregir y enfoca el primer campo inválido.

##  Cómo ejecutar el proyecto
1. Clona o descarga el repositorio.
2. Abre un servidor local para evitar problemas de CORS y carga de Fetch:
   ```bash
   python -m http.server 5500
   ```
3. Navega a `http://localhost:5500/index.html` (o la ruta equivalente) para probar todas las vistas.

> Nota: abrir los archivos directamente con `file://` impide que Fetch consulte la API externa; en ese escenario, la aplicación usa automáticamente los datos de respaldo.

## Pruebas realizadas
- Funcionalidad revisada en **Chrome**, **Firefox** y simulaciones de dispositivos (iPad mini, iPhone, laptop, samsung s23 ultra, etc). 
- Formularios probados con casos válidos e inválidos, incluyendo uso de lector de pantalla para verificar accesibilidad de focos y mensajes.
- Carrito y persistencia comprobados limpiando/agregando productos múltiples veces.
- Manejo de errores de Fetch verificado en modo offline y con bloqueos de red.

## ✍️ Autoría
Proyecto desarrollado por **Liliana Tapia** para la asignatura **Frontend I - DUOC UC**.

---
*Versión actualizada con catálogo dinámico, fichas generadas por JavaScript y mejoras de accesibilidad – Semana 6 (SUMATIVA).*
