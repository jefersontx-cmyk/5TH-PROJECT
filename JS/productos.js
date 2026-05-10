/* ===========================================
   DATOS DE PRODUCTOS - BASE DE DATOS SIMPLE
   - Información de todos los productos disponibles
   - Estructura para productos dinámicos
   =========================================== */

const productos = { // Diccionario de productos accesibles por ID único
    // Equipación
    'camisola-pro': {
        nombre: 'TX-Camisola Pro',
        precio: 450.00,
        descripcion: 'Camisola profesional de alto rendimiento con tecnología de absorción de sudor y diseño aerodinámico.',
        caracteristicas: [
            'Tejido transpirable de alta calidad',
            'Tecnología anti-humedad',
            'Diseño ergonómico',
            'Logo TX bordado',
            'Disponible en colores negro y rojo'
        ],
        cuidados: 'Lavar a máquina en agua fría, no usar blanqueador, secar al aire.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'shorts-entrenamiento': {
        nombre: 'TX-Shorts Entrenamiento',
        precio: 280.00,
        descripcion: 'Shorts cómodos y ligeros ideales para entrenamientos intensos y partidos.',
        caracteristicas: [
            'Tejido ligero y flexible',
            'Cintura elástica ajustable',
            'Bolsillos internos',
            'Logo TX en la pierna',
            'Color negro con detalles rojos'
        ],
        cuidados: 'Lavar a máquina en agua fría, no usar secadora.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    // Tacos
    'tacos-velocidad': {
        nombre: 'TX-Tacos Velocidad',
        precio: 650.00,
        descripcion: 'Tacos profesionales diseñados para máxima velocidad y control en el campo.',
        caracteristicas: [
            'Suela de alta tracción',
            'Material sintético resistente',
            'Sistema de amortiguación',
            'Diseño ligero',
            'Tecnología anti-deslizante'
        ],
        cuidados: 'Limpiar con agua y jabón neutro, secar completamente antes de guardar.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'tacos-entrenamiento': {
        nombre: 'TX-Tacos Entrenamiento Classic',
        precio: 300.00,
        descripcion: 'Tacos clásicos versátiles perfectos para entrenamientos diarios y partidos recreativos.',
        caracteristicas: [
            'Suela duradera',
            'Material cómodo',
            'Buen agarre en césped',
            'Diseño clásico',
            'Precio accesible'
        ],
        cuidados: 'Limpiar después de cada uso, guardar en lugar fresco y seco.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'tacos-velocidad-dark': {
        nombre: 'TX-Tacos Velocidad Dark',
        precio: 650.00,
        descripcion: 'Tacos profesionales de color oscuro diseñados para máxima velocidad y control en el campo.',
        caracteristicas: [
            'Suela de alta tracción negra',
            'Material sintético resistente',
            'Sistema de amortiguación avanzado',
            'Diseño elegante en negro',
            'Tecnología anti-deslizante premium'
        ],
        cuidados: 'Limpiar con agua y jabón neutro, secar completamente antes de guardar.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'tacos-neon': {
        nombre: 'TX-Tacos Neon',
        precio: 520.00,
        descripcion: 'Tacos llamativos con colores neon que te harán el centro de atención en el campo.',
        caracteristicas: [
            'Colores fluorescentes vibrantes',
            'Suela de alta visibilidad',
            'Material reflectante',
            'Diseño moderno y llamativo',
            'Ideal para partidos nocturnos'
        ],
        cuidados: 'Limpiar con cuidado para mantener los colores vibrantes.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    // Velocity
    'velocity-night': {
        nombre: 'TX-Velocity Night',
        precio: 12000.00,
        descripcion: 'Moto deportiva Velocity Night con diseño oscuro y altas prestaciones.',
        caracteristicas: [
            'Motor potente de 1200cc',
            'Diseño aerodinámico',
            'Suspensión ajustable',
            'Luces LED completas',
            'Asiento deportivo ergonómico'
        ],
        cuidados: 'Mantenimiento técnico cada 5000 km y limpieza con paño húmedo.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'velocity'
    },

    'velocity-fever': {
        nombre: 'TX-Velocity Fever',
        precio: 1200.00,
        descripcion: 'Modelo Velocity Fever para quienes buscan estilo y velocidad urbana.',
        caracteristicas: [
            'Rendimiento ágil',
            'Colores vibrantes',
            'Frenos de disco',
            'Suspensión deportiva',
            'Pantalla digital'
        ],
        cuidados: 'Revisar nivel de aceite y limpiar regularmente.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'velocity'
    },

    // Accesorios
    'mochila-entrenamiento': {
        nombre: 'TX-Mochila Entrenamiento',
        precio: 320.00,
        descripcion: 'Mochila resistente y funcional para llevar todo tu equipo de entrenamiento.',
        caracteristicas: [
            'Múltiples compartimentos',
            'Material impermeable',
            'Correas acolchadas',
            'Logo TX grande',
            'Capacidad de 30L'
        ],
        cuidados: 'Limpiar con paño húmedo, no lavar en máquina.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'botella-agua': {
        nombre: 'TX-Botella Agua Pachón',
        precio: 50.00,
        descripcion: 'Botella ergonómica con diseño TX para mantenerte hidratado durante el entrenamiento.',
        caracteristicas: [
            'Capacidad de 750ml',
            'Material BPA-free',
            'Tapa a prueba de fugas',
            'Diseño ergonómico',
            'Logo TX grabado'
        ],
        cuidados: 'Lavar con agua y jabón, no usar en microondas.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'rodilleras': {
        nombre: 'TX-Rodilleras Pro',
        precio: 99.00,
        descripcion: 'Rodilleras de protección que te dan el flow perfecto para tus movimientos.',
        caracteristicas: [
            'Material acolchado de alta densidad',
            'Ajuste perfecto con velcro',
            'Protección completa de la rodilla',
            'Diseño ergonómico',
            'Transpirable y cómodo'
        ],
        cuidados: 'Lavar a mano con agua fría, secar al aire.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'accesorios'
    },

    'muñequera': {
        nombre: 'TX-Muñequera Deportiva',
        precio: 80.00,
        descripcion: 'Muñequera que potencia tus manos y mejora tu rendimiento en cada movimiento.',
        caracteristicas: [
            'Material elástico resistente',
            'Ajuste perfecto',
            'Absorbe el sudor',
            'Logo TX bordado',
            'Cómoda para uso prolongado'
        ],
        cuidados: 'Lavar a máquina en ciclo delicado.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'pelotas': {
        nombre: 'TX-Pelotas Pro',
        precio: 250.00,
        descripcion: 'Pelotas de entrenamiento y partido para mejorar tu control en cada toque.',
        caracteristicas: [
            'Corte duradero',
            'Buena retención de aire',
            'Recomendado para césped sintético y natural',
            'Diseño profesional',
            'Fácil de manejar'
        ],
        cuidados: 'Inflar a la presión recomendada y limpiar con un paño húmedo.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'equipacion'
    },

    'calcetines': {
        nombre: 'TX-Calcetines Deportivos',
        precio: 300.00,
        descripcion: 'Calcetines de alto rendimiento con soporte cómodo para tus entrenamientos.',
        caracteristicas: [
            'Acolchado estratégico',
            'Material transpirable',
            'Ajuste reforzado en el talón',
            'Diseño moderno',
            'Ideal para uso diario'
        ],
        cuidados: 'Lavar a máquina con colores similares y secar al aire.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['S', 'M', 'L', 'XL'],
        categoria: 'equipacion'
    },

    'tacos-cafes': {
        nombre: 'TX-Tacos Cafés',
        precio: 300.00,
        descripcion: 'Tacos clásicos cafés para destacar tu estilo en cada partido.',
        caracteristicas: [
            'Agarre confiable',
            'Material sintético duradero',
            'Diseño elegante',
            'Cómodos en espacios largos',
            'Buena amortiguación'
        ],
        cuidados: 'Limpiar con un paño húmedo después de cada uso.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['39', '40', '41', '42', '43', '44'],
        categoria: 'tacos'
    },

    'llavero-energetico': {
        nombre: 'TX-Llavero Energético',
        precio: 30.00,
        descripcion: 'Llavero deportivo con estilo TX para llevar contigo toda la energía.',
        caracteristicas: [
            'Diseño pequeño y resistente',
            'Material metálico',
            'Logo TX visible',
            'Ligero y durable',
            'Perfecto para regalar'
        ],
        cuidados: 'Limpiar con un paño seco.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    },

    'reloj-tx': {
        nombre: 'TX-Reloj Deportivo',
        precio: 99.00,
        descripcion: 'Reloj deportivo con estilo moderno para acompañarte en cada entrenamiento.',
        caracteristicas: [
            'Correa ajustable',
            'Esfera resistente',
            'Diseño deportivo',
            'Ligero y cómodo',
            'Fácil de leer'
        ],
        cuidados: 'Limpia con un paño suave y evita el contacto con agua excesiva.',
        imagenes: [
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png',
            '../images/placeholder.png'
        ],
        tallas: ['Única'],
        categoria: 'accesorios'
    }
};

// Función para obtener producto por ID
function obtenerProducto(id) {
    return productos[id] || null; // Retorna producto o null si no existe
}

// Función para obtener productos por categoría
function obtenerProductosPorCategoria(categoria) {
    return Object.values(productos).filter(producto => producto.categoria === categoria); // Filtrar productos por categoría
}

// Función para obtener todos los productos
function obtenerTodosLosProductos() {
    return Object.values(productos); // Retornar todos los productos en un arreglo
}