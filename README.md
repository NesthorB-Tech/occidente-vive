# 🏔 Occidente Vive — Alojamientos Turísticos

Landing page interactiva desarrollada como proyecto evaluado del Bootcamp de Desarrollo Frontend en Kodigo.

## 🌐 Demo en vivo

🔗 [Ver sitio publicado](https://tu-usuario.github.io/nombre-del-repo)

---

## 📋 Descripción

**Occidente Vive** es una landing page de una sola página para una agencia de alojamientos turísticos en el occidente de El Salvador, cubriendo los departamentos de Sonsonate, Santa Ana y Ahuachapán. El sitio permite a los viajeros explorar opciones de hospedaje y realizar reservaciones en línea.

---

## 🗂 Secciones

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | **Hero** | Imagen de fondo, título, subtítulo y botones CTA |
| 2 | **Navbar** | Fija con efecto scroll, anclas y menú hamburguesa |
| 3 | **Nosotros** | Historia y valores de la empresa |
| 4 | **Servicios** | Tarjetas con CSS Grid (cabañas, hoteles, glamping, etc.) |
| 5 | **Alojamientos** | Cards filtrables por departamento |
| 6 | **Formulario** | Reservación con validación completa en JavaScript |
| 7 | **Footer** | Redes sociales, enlaces y créditos |

---

## ⚙️ Funcionalidades JavaScript

- **Navbar con efecto scroll**: cambia de transparente a verde oscuro al hacer scroll
- **Menú hamburguesa**: abre y cierra el menú en dispositivos móviles
- **Enlace activo**: resalta automáticamente la sección visible en el navbar
- **Filtros de alojamientos**: filtra las tarjetas por departamento (Sonsonate, Santa Ana, Ahuachapán)
- **Validación de formulario**:
  - Nombre (solo letras, mínimo 3 caracteres)
  - Email con expresión regular
  - Teléfono con formato válido
  - Fechas (llegada no en el pasado, salida posterior a llegada)
  - Destino y tipo de alojamiento requeridos
  - Número de huéspedes (1–20)
  - Mensajes de error específicos por campo
  - Limpieza de errores al corregir
  - Mensaje de éxito personalizado

---

## 🛠 Tecnologías utilizadas

- HTML5 semántico
- CSS3 (Flexbox, CSS Grid, Media Queries, Variables CSS)
- JavaScript Vanilla (DOM, eventos, expresiones regulares)
- Google Fonts — Poppins
- GitHub Pages (despliegue)

---

## 📁 Estructura del proyecto

```
occidente-vive/
├── index.html
├── styles.css
├── script.js
├── README.md
└── images/
    ├── cerroverde.jpg
    ├── coatepeque.jpg
    ├── losausoles.jpg
    ├── loschorros.jpg
    ├── casasantaana.jpg
    └── elcafetal.jpg
```

---

## 📱 Responsive Design

El sitio es responsivo en tres tamaños:

- 🖥 **Desktop** — mayor a 900px
- 📱 **Tablet** — hasta 900px
- 📲 **Móvil** — hasta 600px

---

## 👨‍💻 Autor

**Néstor Neftaly Blanco Lúe**  
Kodigo Bootcamp — Desarrollo Frontend  
📧 nestor.neftaly.blanco@clases.edu.sv

---

© 2026 Occidente Vive — Todos los derechos reservados