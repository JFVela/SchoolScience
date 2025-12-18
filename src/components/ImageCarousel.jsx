import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ImageCarousel({
  images = [],
  alt = "Imagen del proyecto",
  autoPlay = true,
  interval = 4000, // ⏱️ 4 segundos
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  /* 🔄 Autoplay controlado */
  useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(timer); // 🧹 Limpieza
  }, [autoPlay, isPaused, images.length, interval]);

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index) => {
    setIsPaused(true);
    setCurrentIndex(index);
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "12px",
        overflow: "hidden",
        backgroundColor: "#211951",
        boxShadow: "0 0 30px rgba(21, 245, 186, 0.3)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Imagen principal */}
      <div
        style={{ position: "relative", width: "100%", aspectRatio: "16 / 9" }}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - imagen ${currentIndex + 1}`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={goToPrevious}
              aria-label="Imagen anterior"
              style={navButtonStyle("left")}
            >
              <ChevronLeft size={28} />
            </button>

            <button
              onClick={goToNext}
              aria-label="Imagen siguiente"
              style={navButtonStyle("right")}
            >
              <ChevronRight size={28} />
            </button>
          </>
        )}

        {/* Indicador */}
        <div
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            padding: "6px 12px",
            borderRadius: "999px",
            fontSize: "14px",
            fontWeight: 600,
            backgroundColor: "rgba(21, 245, 186, 0.9)",
            color: "#211951",
          }}
        >
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Miniaturas */}
      {images.length > 1 && (
        <div
          style={{
            display: "flex",
            gap: "8px",
            padding: "12px",
            overflowX: "auto",
            backgroundColor: "#2d1f6e",
          }}
        >
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                width: 80,
                height: 80,
                flexShrink: 0,
                borderRadius: "10px",
                overflow: "hidden",
                border:
                  currentIndex === index
                    ? "3px solid #15F5BA"
                    : "2px solid #836FFF",
                opacity: currentIndex === index ? 1 : 0.6,
                cursor: "pointer",
              }}
            >
              <img
                src={image}
                alt={`Miniatura ${index + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* 🎨 Botones */
function navButtonStyle(position) {
  return {
    position: "absolute",
    top: "50%",
    [position]: "12px",
    transform: "translateY(-50%)",
    height: 42,
    width: 42,
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    backgroundColor: "rgba(131, 111, 255, 0.85)",
    color: "#F0F3FF",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}
