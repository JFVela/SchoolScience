const proyectos = [
    {
        id: "campana-franklin", // Cambié el ID para que coincida con el tema
        titulo: "Campana de Franklin Casera",
        descripcion:
            "Dispositivo demostrativo de electrostática que utiliza la atracción y repulsión de cargas para generar movimiento oscilatorio.",
        integrantes: [
            "Estudiante A",
            "Estudiante B",
            "Estudiante C",
        ],
        materiales: [
            { nombre: "Latas de refresco (aluminio)", cantidad: "2 unidades" },
            { nombre: "Lápiz o palito de madera", cantidad: "1 unidad" },
            { nombre: "Hilo de coser", cantidad: "20 cm" },
            { nombre: "Anillo de lata (chapa) o bola de aluminio", cantidad: "1 unidad" },
            { nombre: "Cables cocodrilo o alambre de cobre", cantidad: "2 unidades" },
            { nombre: "Papel aluminio", cantidad: "1 pliego" },
            { nombre: "Fuente de estática (TV antigua, globo o raqueta)", cantidad: "1 unidad" }
        ],
        costo: "15.00", // Es mucho más barato al usar reciclaje
        imagenes: [
            "/image/campana/campana1.jpeg",
            "/image/campana/campana2.jpeg", // Asumo que tendrás más fotos
        ],
        // He puesto un video real que explica cómo hacerla paso a paso
        videoUrl: "https://www.youtube.com/watch?v=CfaawgMBFkE",
        pdfs: [
            {
                titulo: "Guía de Construcción y Teoría",
                archivo: "/pdfs/campana-franklin-guia.pdf", // Asegúrate de cambiar el nombre de tu archivo real
            },
        ],
        conclusion:
            "Se demostró la existencia de campos eléctricos y fuerzas de atracción/repulsión, logrando transformar energía electrostática en movimiento mecánico (sonido).",
    },
    {
        id: "torre-densidad",
        titulo: "Columna de Densidad: El Espectro Líquido",
        descripcion:
            "Estudio práctico de la mecánica de fluidos que demuestra la estratificación de líquidos inmiscibles basada en sus diferencias de gravedad específica.",
        integrantes: [
            "Investigador Principal",
            "Asistente de Laboratorio",
            "Analista de Datos",
        ],
        materiales: [
            { nombre: "Miel de abeja (ρ ≈ 1.42 g/cm³)", cantidad: "50 ml" },
            { nombre: "Jabón líquido lavavajillas (ρ ≈ 1.03 g/cm³)", cantidad: "50 ml" },
            { nombre: "Agua destilada (coloreada)", cantidad: "50 ml" },
            { nombre: "Aceite vegetal (ρ ≈ 0.92 g/cm³)", cantidad: "50 ml" },
            { nombre: "Alcohol etílico 96° (coloreado)", cantidad: "50 ml" },
            { nombre: "Probeta o recipiente cilíndrico de vidrio", cantidad: "1 unidad" },
            { nombre: "Pipeta o jeringa (para verter suavemente)", cantidad: "1 unidad" }
        ],
        costo: "25.00",
        imagenes: [
            "/image/densidad/densidad1.jpeg",
            "/image/densidad/densidad2.jpeg",
            "/image/densidad/densidad3.jpeg",
        ],
        // Video tutorial académico sobre el procedimiento
        videoUrl: "https://www.youtube.com/watch?v=rOEBxzicDEM",
        pdfs: [
            {
                titulo: "Informe Científico: Principios de Flotabilidad",
                archivo: "/pdfs/informe-densidad-avanzado.pdf",
            },
            {
                titulo: "Tabla de Densidades de Fluidos Comunes",
                archivo: "/pdfs/tabla-densidades reference.pdf",
            },
        ],
        conclusion:
            "Se validó experimentalmente que los fluidos con menor densidad ejercen una fuerza de flotación positiva sobre los más densos, organizándose en capas estables debido a su inmiscibilidad y tensión superficial.",
    },
    {
        id: "brazo-hidraulico",
        titulo: "Brazo Hidráulico Educativo",
        descripcion:
            "Prototipo de articulación mecánica controlado mediante un sistema hidráulico cerrado, demostrando la transmisión de fuerza y multiplicación de potencia a través de fluidos incompresibles.",
        integrantes: [
            "Jefe de Proyecto",
            "Ingeniero de Diseño",
            "Ensamblador Mecánico",
        ],
        materiales: [
            { nombre: "Jeringas de 10ml (Actuadores maestros)", cantidad: "4 unidades" },
            { nombre: "Jeringas de 5ml (Actuadores esclavos)", cantidad: "4 unidades" },
            { nombre: "Mangueras de venoclisis (Transmisión)", cantidad: "1.5 metros" },
            { nombre: "Cartón corrugado reforzado (Estructura)", cantidad: "2 pliegos" },
            { nombre: "Fluido hidráulico (Agua coloreada)", cantidad: "200 ml" },
            { nombre: "Precintos y alambre (Ejes de rotación)", cantidad: "varios" },
            { nombre: "Adhesivo industrial (Silicona caliente)", cantidad: "5 barras" }
        ],
        costo: "35.00",
        imagenes: [
            "/image/brazo/brazo1.jpeg",
            "/image/brazo/brazo2.jpeg",
            "/image/brazo/brazo3.jpeg",
            "/image/brazo/brazo4.jpeg",
            "/image/brazo/brazo5.jpeg",
        ],
        // Este es un excelente tutorial paso a paso muy popular
        videoUrl: "https://www.youtube.com/watch?v=R82cqi4JLV8",
        pdfs: [
            {
                titulo: "Fundamentos Teóricos: Hidrodinámica",
                archivo: "/pdfs/teoria-pascal.pdf",
            }
        ],
        conclusion:
            "El sistema validó el Principio de Pascal ($P = F/A$), logrando 3 grados de libertad (movimiento vertical, horizontal y prensil) mediante la presión hidrostática uniforme ejercida en el sistema cerrado.",
    },
    {
        id: "lampara-lava",
        titulo: "Reactor de Fluidos Bifásicos: Lámpara de Lava",
        descripcion:
            "Visualización de fenómenos de inmiscibilidad y densidad diferencial mediante una reacción efervescente controlada en un medio líquido heterogéneo.",
        integrantes: [
            "Analista Químico",
            "Coordinador Experimental",
            "Técnico de Documentación",
        ],
        materiales: [
            { nombre: "Aceite vegetal (Fase apolar, baja densidad)", cantidad: "200 ml" },
            { nombre: "Agua (Fase polar, alta densidad)", cantidad: "100 ml" },
            { nombre: "Comprimidos efervescentes (Generador de CO₂)", cantidad: "2 unidades" },
            { nombre: "Colorante hidrosoluble", cantidad: "10 gotas" },
            { nombre: "Recipiente cilíndrico de vidrio o PET", cantidad: "1 unidad" },
            { nombre: "Fuente de luz LED (Retroiluminación)", cantidad: "1 unidad" }
        ],
        costo: "18.00",
        imagenes: [
            "/image/lampara/lampara1.jpeg",
            "/image/lampara/lampara2.jpeg",
            "/image/lampara/lampara3.jpeg",
        ],
        // Video tutorial claro y directo
        videoUrl: "https://www.youtube.com/watch?v=m5d4xrCXQMQ",
        pdfs: [
            {
                titulo: "Guía de Laboratorio: Polaridad Química",
                archivo: "/pdfs/guia-lampara-lava.pdf",
            },
            {
                titulo: "Explicación Científica: Reacciones Ácido-Base",
                archivo: "/pdfs/teoria-bifasica.pdf",
            }
        ],
        conclusion:
            "Se demostró que la polaridad molecular impide la mezcla entre agua y aceite (inmiscibilidad), mientras que la liberación de gas ($CO_2$) altera temporalmente la densidad del agua coloreada, generando corrientes de convección vertical.",
    },
];

export default proyectos;