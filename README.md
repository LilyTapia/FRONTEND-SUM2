# Store Evolution VideoGames

Tienda web responsiva desarrollada para la asignatura **Frontend I - Semana 5**. En esta versión se integran interacciones avanzadas con JavaScript, carga dinámica de datos vía Fetch API y validaciones personalizadas del formulario de contacto.

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
Store Evolution VideoGames presenta un catálogo de videojuegos con diseño oscuro, accesible y optimizado para dispositivos móviles. En la actualización de la Semana 5 se sumaron módulos JavaScript para manipular el DOM, añadir eventos interactivos, consultar datos externos y enriquecer la experiencia del usuario.

## Características principales
- Diseño responsivo con un esquema cromático inspirado en interfaces gamer.
- Navbar accesible, banner animado y tarjetas de productos con efectos hover.
- Sección de beneficios y novedades construidas dinámicamente mediante `createElement` y `appendChild`.
- Carousel Bootstrap configurado con respeto a `prefers-reduced-motion`.
- Fetch API contra un endpoint público de videojuegos, con manejo de errores y fallback local.
- Validaciones personalizadas en el formulario de contacto (nombre, correo, teléfono, mensaje y aceptación de política).

## 🗂️ Estructura del proyecto
```
Exp2_S5_Liliana_Tapia/
├── index.html                     # Home con secciones dinámicas
├── productos.html                 # Catálogo completo
├── contacto.html                  # Formulario con validaciones JS
├── producto-*.html                # Fichas por título (9 en total)
├── assets/
│   ├── css/
│   │   └── styles.css             # Estilos globales
│   ├── data/
│   │   └── novedades.json         # Respaldo local para la sección novedades
│   ├── img/                       # Recursos gráficos
│   └── js/
│       └── main.js                # Lógica principal del sitio
└── README.md                      # Este documento
```

## Tecnologías utilizadas
- **HTML5 semántico** para estructura y accesibilidad.
- **CSS3** con variables, Flexbox, Grid y `clamp()` para tipografía fluida.
- **Bootstrap 5 (bundle)** para el carousel y componentes básicos.
- **JavaScript (ES6)** para manipulación del DOM, eventos, Fetch API y validaciones.

##  Interactividad implementada
- **Panel promocional dinámico**: genera un sidebar con tarjetas de beneficios y promociones rotativas.
- **Toggle de beneficios**: botón accesible que muestra/oculta tarjetas construidas en runtime.
- **Hover del catálogo**: resalta precios y aplica transformaciones al pasar el cursor en `productos.html`.
- **Sección de novedades**:
  - Consulta `https://api.sampleapis.com/video-games/games`.
  - Normaliza los primeros resultados (título, fecha, descripción) y arma tarjetas.
  - Si la API falla, recurre a `assets/data/novedades.json` e informa al usuario que se usó contenido de respaldo.

## Validaciones del formulario
En `contacto.html` el módulo `setupContactFormValidation()`:
- Requiere nombre y apellido con mínimo dos palabras.
- Acepta solo correos válidos según HTML5.
- Limita el teléfono a números y símbolos `+ - ( )` con longitud mínima de 7 caracteres (campo opcional).
- Exige un mensaje de al menos 15 caracteres.
- Personaliza el mensaje del checkbox “Acepto la política de privacidad”.
- Muestra un resumen de errores en un `alert` y enfoca el primer campo inválido.

##  Cómo ejecutar el proyecto
1. Clona o descarga el repositorio.
2. Abre `index.html` en un navegador moderno.
3. Para probar la Fetch API sin restricciones de CORS, es recomendable levantar un servidor local simple, por ejemplo:
   ```bash
   python -m http.server 5500
   ```
   Luego navega a `http://localhost:5500`.

No se requiere instalación de dependencias adicionales.

## Pruebas realizadas
- Navegación y funcionalidades verificados en **Chrome** y **Firefox** en macOS.
- Validaciones del formulario probadas con entradas válidas e inválidas.
- Sección de novedades comprobada tanto con carga desde API como con fallback local (modo offline o `file://`).

## ✍️ Autoría
Proyecto desarrollado por **Liliana Tapia** para la asignatura **Frontend I - DUOC UC**.

---
*Actualizado a Semana 5 con interactividad y consumo de APIs mediante JavaScript.*
