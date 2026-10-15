# Changelog - Reproductor Educativo LSC

Historial de versiones del proyecto **ReproductorLSC** (Reproductor educativo de matemáticas con Lengua de Señas Colombiana).

---

## [2.0.0] - 2026-10-15

> Autor: **Diego Javier Mena Amado** (`@ingelectronicadj`)

### Modernización a HTML5 Nativo y Cumplimiento WCAG 2.2 AA / AAA

- **Eliminación de Adobe Edge Animate 5 y jQuery 2.0.3 (`index.html` y `glosario/index.html`)**:
  - Se reemplazó el runtime propietario y descontinuado de Adobe Edge por **HTML5 semántico, CSS3 responsivo y JavaScript ES6 nativo**, sin dependencias externas.
- **Reproductor multicapa sincronizado (`index.html`)**:
  - Sincronización automática de tiempo (`< 0.2s`), reproducción, pausa y velocidad entre el video de la clase (`media/teoria.mp4`), el intérprete en Lengua de Señas Colombiana (`media/interprete.mp4`) y los subtítulos (`media/CC.mp4`).
  - **Modo Vista Lado a Lado (`Side-by-Side`)**: Permite ubicar la pizarra de la clase y el intérprete LSC en dos columnas paralelas sin superposición, además de permitir **cambiar la esquina (`✥ Esquina`)** o **Ampliar / Reducir** en modo flotante.
  - **Repetición de tramo `A → B` en bucle (`🔁 Tramo A-B`)**: Permite fijar un segmento específico de la clase para practicar la seña repetidamente.
  - **Pantalla Completa multicapa (`⛶ Pantalla completa`)**: Conserva visibles al intérprete LSC, los subtítulos y los controles dentro de la vista de pantalla completa.
  - **Panel de consulta rápida de conceptos de la clase**: Chips interactivos para abrir y reproducir cualquiera de los 12 conceptos matemáticos en LSC con un clic (`?termino=...`).
  - Nueva **barra de progreso interactiva (`<input type="range">`)** con indicador de tiempo (`MM:SS / MM:SS`) y navegación con flechas del teclado (`±5s`).
  - Controles accesibles por teclado con atributos `aria-label`, `aria-pressed`, atajos de teclado (`Espacio`/`K`, `I`, `L`, `C`, `M`, `F`, `G`, `←`/`→`) y anuncios de estado en vivo (`role="status"`, `aria-live="polite"`).
- **Glosario Matemático en LSC y Modo Práctica (`glosario/index.html`)**:
  - Rediseño accesible en cuadrícula responsiva para los **12 términos algebraicos** (`video00.mp4` a `video11.mp4`) con **filtros por categoría matemática** (*Ecuaciones*, *Funciones*, *Polinomios y Álgebra*, *Fundamentos*).
  - **Modo Práctica / Autoevaluación LSC (`?modo=practica`)**: Quiz interactivo para identificar qué término matemático representa cada seña en LSC, con contador de aciertos y pistas conceptuales.
  - Solución a la barrera de accesibilidad por teclado (`WCAG 2.1.1`): ahora cada seña puede activarse mediante botón `<button>` con teclado (`Tab` + `Enter`/`Espacio`) o clic, además de `mouseenter`.
  - Incorporación de **buscador en tiempo real** por término o definición y botón de **cámara lenta (`50%`)** para estudiar las señas paso a paso.
  - Textos alternativos matemáticos descriptivos (`alt`) en las imágenes de fórmulas algebraicas (`png/*.png`).
- **Documentación**:
  - Corrección de la imagen rota de TinyPic en `README.md` reemplazándola por el recurso local `./images/Interface-01.svg`.
  - Creación de `CHANGELOG.md` y `.gitignore`.

---

## [1.0.0] - 2017-09-06

- Versión inicial desarrollada para el Hackathon SLUD con soporte de video principal, intérprete LSC, subtítulos, velocidades (25%, 50%, 100%) y glosario matemático en Adobe Edge Animate.
