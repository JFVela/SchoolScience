const proyectos = [
    {
        id: "volcan-quimico",
        titulo: "Volcán Químico",
        descripcion:
            "Reacción química exotérmica que demuestra el proceso de catálisis utilizando peróxido de hidrógeno.",
        integrantes: [
            "Estudiante A",
            "Estudiante B",
            "Estudiante C",
        ],
        materiales: [
            { nombre: "Peróxido de hidrógeno (H₂O₂)", cantidad: "100ml" },
            { nombre: "Yoduro de potasio (KI)", cantidad: "10g" },
            { nombre: "Jabón líquido", cantidad: "30ml" },
            { nombre: "Colorante alimenticio", cantidad: "5ml" },
            { nombre: "Botella plástica", cantidad: "1 unidad" }
        ],
        costo: "450.00",
        imagenes: [
            "/image/campana/campana1.JPG",
            "/image/campana/campana1.JPG",
            "/image/campana/campana1.JPG",
        ],
        videoUrl: "https://www.youtube.com/watch?v=BLYoyTDH6uQ",
        pdfs: [
            {
                titulo: "Guía del Experimento",
                archivo: "/pdfs/volcan-guia.pdf",
            },
        ],
        conclusion:
            "El experimento permitió comprender la catálisis y reacciones exotérmicas de manera visual.",
    },
];

export default proyectos;