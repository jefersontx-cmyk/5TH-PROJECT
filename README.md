# TX – Proyecto Estudiantil

## ⚠️ Aviso Importante
Este proyecto ha sido desarrollado únicamente con fines educativos por estudiantes.  
No representa una marca oficial ni tiene ninguna relación comercial con empresas reales como Nike u otras marcas deportivas.

El contenido visual, conceptos y diseños presentados han sido modificados y adaptados dentro del contexto de un trabajo académico, con el objetivo de aprender sobre diseño web, branding y desarrollo de interfaces.

No se busca infringir derechos de autor, marcas registradas ni generar conflictos legales.  
Todo el material utilizado es parte de un entorno de práctica y aprendizaje.

---

## 📌 Descripción del Proyecto

TX es una propuesta de marca deportiva enfocada en el alto rendimiento, la disciplina y la superación personal.  
El concepto principal gira alrededor del movimiento, la velocidad y la mentalidad competitiva, combinando un estilo visual moderno con un enfoque elegante y minimalista.

La página web presenta una experiencia visual inspirada en marcas deportivas profesionales, pero con identidad propia, utilizando una paleta de colores sobria (negro, blanco y gris) acompañada de acentos en rojo para transmitir energía y determinación.

---

## 🚀 **Nuevas Funcionalidades Implementadas**

### 🛒 **Sistema de Carrito de Compras Completo**
- **Carrito flotante**: Ícono animado que aparece en todas las páginas
- **Almacenamiento local**: Los productos se guardan en el navegador (localStorage)
- **Modal interactivo**: Vista completa del carrito con opciones para eliminar items
- **Contador en tiempo real**: Muestra la cantidad de productos en el carrito
- **JavaScript modular**: Código compartido en archivos separados

### 📄 **Página de Producto Dinámica**
- **Carga automática**: Los productos se cargan desde base de datos JavaScript
- **Parámetros URL**: Cada producto tiene su propia URL única
- **Galería de imágenes**: Vista principal + miniaturas clickeables
- **Selector de tallas**: Interfaz intuitiva para elegir talla
- **Información completa**: Descripción detallada, características y cuidados
- **Productos relacionados**: Sugerencias automáticas de otros productos

### 🏷️ **Catálogos con Navegación Completa**
- **Botones "Ver Producto"**: Todos los productos ahora tienen enlaces funcionales
- **Productos mapeados**: Cada botón enlaza al producto correcto
- **Base de datos completa**: 6 productos únicos con información detallada
- **Categorías organizadas**: Equipación, Tacos y Accesorios

### 📞 **Formulario de Contacto Mejorado**
- **Validación en tiempo real**: Campos obligatorios y formato de email
- **Información de contacto**: Dirección, teléfono, horario de atención
- **Mensaje de éxito**: Confirmación visual al enviar el formulario
- **Diseño responsive**: Funciona perfectamente en móviles y desktop

### ✨ **Animaciones y Efectos Visuales**
- **Animación de entrada**: Fade-in suave al cargar la página
- **Efectos hover**: Transiciones suaves en botones e imágenes
- **Carrito bounce**: Animación llamativa para el ícono del carrito
- **Transiciones CSS**: Efectos suaves en todos los elementos interactivos

### 🎨 **Arquitectura CSS Modular**
- **`estiloprincipal.css`**: Estilos globales, navegación, carrito y animaciones
- **`estilosapartados.css`**: Estilos para páginas de catálogo
- **`estilos-producto.css`**: Estilos específicos de página producto
- **`estilos-contacto.css`**: Estilos del formulario de contacto
- **Comentarios detallados**: Cada regla CSS está documentada

### 🔧 **JavaScript Modular**
- **`productos.js`**: Base de datos de productos y funciones de acceso
- **`carrito.js`**: Lógica completa del carrito de compras
- **Código compartido**: Eliminada duplicación entre páginas
- **Funciones reutilizables**: Módulos independientes y mantenibles

---

## 🎨 **Organización de Estilos CSS**

### Arquitectura Modular
- **`estiloprincipal.css`**: Estilos globales, navegación, carrito flotante, animaciones
- **`estilosapartados.css`**: Estilos específicos para páginas de catálogo
- **`estilos-producto.css`**: Estilos exclusivos de la página de producto detallada
- **`estilos-contacto.css`**: Estilos específicos del formulario de contacto

### Beneficios de la Separación
- ✅ **Mantenibilidad**: Cada archivo tiene una responsabilidad clara
- ✅ **Reutilización**: Estilos globales separados de específicos
- ✅ **Performance**: Carga selectiva de estilos por página
- ✅ **Colaboración**: Fácil identificación de dónde modificar estilos

---

## 🛠 **Tecnologías Utilizadas**

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Animaciones, Grid, Flexbox y diseño responsive
- **JavaScript**: Interactividad, localStorage y manipulación del DOM
- **LocalStorage**: Persistencia de datos del carrito
- **CSS Animations**: Efectos visuales sin librerías externas

---

## 📁 **Estructura del Proyecto**

```
5TH-PROJECT/
├── index.html                 # Página principal
├── HTML/
│   ├── Equipacion.html        # Catálogo de equipación
│   ├── Tacos.html            # Catálogo de tacos
│   ├── Accesorios.html       # Catálogo de accesorios
│   ├── Velocity.html         # Sección Velocity
│   ├── Contacto.html         # Página de contacto con formulario
│   └── producto.html         # Página de producto detallada (dinámica)
├── CSS/
│   ├── estiloprincipal.css   # Estilos globales, navegación, carrito y animaciones
│   ├── estilosapartados.css  # Estilos de catálogos
│   ├── estilos-producto.css  # Estilos específicos de página producto
│   └── estilos-contacto.css  # Estilos específicos de formulario contacto
├── JS/
│   ├── productos.js          # Base de datos de productos
│   └── carrito.js            # Lógica del carrito de compras
├── images/                   # Imágenes del proyecto
└── README.md                 # Este archivo
```

---

## 🔧 **Problemas Solucionados**

### ✅ "Ver Producto" para Todos los Productos
- **Problema**: Los botones "Ver Producto" solo funcionaban para un producto estático
- **Solución**: Sistema dinámico con base de datos centralizada y navegación por URL parameters
- **Resultado**: Todos los productos ahora tienen navegación funcional a páginas detalladas únicas

### ✅ Carrito con Fallas
- **Problema**: Código JavaScript duplicado en múltiples archivos, difícil mantenimiento
- **Solución**: Archivo compartido `carrito.js` con funciones centralizadas
- **Resultado**: Carrito consistente en todas las páginas, fácil de mantener y actualizar

### ✅ Arquitectura Modular
- **Antes**: Código inline mezclado con HTML
- **Después**: JavaScript modular, reutilizable y mantenible
- **Beneficio**: Cambios globales requieren modificar solo un archivo

---

## 🎯 **Características Principales**

### Diseño
- **Paleta de colores**: Negro (#2b2626), blanco (#FFFFFF), rojo (#E60000)
- **Tipografía**: Arial Black para títulos, Arial para cuerpo
- **Layout**: Grid y Flexbox para layouts modernos
- **Responsive**: Móvil-first con breakpoints estratégicos

### Funcionalidad
- **Menú hamburguesa**: Navegación móvil optimizada
- **Carrito inteligente**: Gestión completa de compras
- **Formularios funcionales**: Validación y feedback
- **Animaciones sutiles**: UX mejorada sin ser abrumadora

### Rendimiento
- **Código optimizado**: Sin dependencias externas pesadas
- **localStorage**: Funcionalidad offline básica
- **CSS eficiente**: Animaciones hardware-accelerated
- **Imágenes optimizadas**: Uso de placeholders y formatos web

---

## 🔧 **Cómo Usar**

1. **Navegación**: Usa el menú superior o hamburguesa para moverte entre secciones
2. **Compras**: Haz clic en "Ver Producto" → selecciona talla → agrega al carrito
3. **Carrito**: El ícono flotante muestra tus productos, haz clic para ver detalles
4. **Contacto**: Completa el formulario para enviar mensajes

---

## 📈 **Próximas Mejoras Planificadas**

- [ ] **Sistema de usuarios**: Login/registro con perfiles personales
- [ ] **Pasarela de pagos**: Integración con métodos de pago reales
- [ ] **Inventario dinámico**: Gestión de stock en tiempo real
- [ ] **Reviews de productos**: Sistema de calificaciones y comentarios
- [ ] **Búsqueda avanzada**: Filtros por precio, talla, categoría
- [ ] **Newsletter**: Suscripción a ofertas y novedades
- [ ] **App PWA**: Versión instalable como aplicación móvil

---

## 👥 **Equipo de Desarrollo**

- **Jeferson Ramírez**: Desarrollo frontend y diseño UX/UI
- **Carlos Contreras**: Desarrollo backend y lógica de negocio

*Proyecto académico - Instituto Técnico de Capacitación y Productividad (IPC)*

---

## ⚽ Enfoque Principal

El elemento central del proyecto son los zapatos de fútbol, representados como el producto más importante de la marca TX.  
Estos simbolizan:

- Velocidad  
- Precisión  
- Control  
- Agarre en el campo  

Los diseños han sido adaptados y modificados para evitar similitudes directas con productos reales, manteniendo únicamente la inspiración general del sector deportivo.

---

## 🎯 Objetivo

El objetivo de este proyecto es:

- Aplicar conocimientos de desarrollo web  
- Practicar diseño de interfaces (UI/UX)  
- Crear una identidad de marca ficticia  
- Desarrollar una propuesta visual atractiva y profesional  

---

## 🚀 Conclusión

TX no es solo una marca ficticia, sino una representación del esfuerzo, la disciplina y la mentalidad de superación que caracteriza al deporte.

Este proyecto refleja creatividad, aprendizaje y la intención de construir algo visualmente impactante dentro de un entorno educativo.