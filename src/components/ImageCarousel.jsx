import styled from "styled-components";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MiContenedorFlotante = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  z-index: 10;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;

export default function ImageCarousel({
  images = [],
  alt = "Imagen del proyecto",
  autoPlay = true,
  interval = 4000,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!autoPlay || isPaused || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, isPaused, images.length, interval]);

  const goToPrevious = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      style={{
        position: "relative",
        borderRadius: "2rem",
        overflow: "hidden",
        backgroundColor: "#0a0a0a",
        boxShadow: "0 0 30px rgba(21, 245, 186, 0.3)",
        aspectRatio: "16 / 9",
        width: "100%",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${images[currentIndex]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(20px) brightness(0.5)",
          transform: "scale(1.1)",
          zIndex: 1,
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          zIndex: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={images[currentIndex]}
          alt={`${alt} - ${currentIndex + 1}`}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            boxShadow: "0 0 20px rgba(0,0,0,0.5)",
          }}
          loading={currentIndex === 0 ? "eager" : "lazy"}
        />
      </div>

      {images.length > 1 && (
        <>
          <button
            onClick={goToPrevious}
            style={{ ...navButtonStyle("left"), zIndex: 10 }}
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={goToNext}
            style={{ ...navButtonStyle("right"), zIndex: 10 }}
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

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
          zIndex: 10,
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {images.length > 1 && (
        <MiContenedorFlotante>
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => {
                setIsPaused(true);
                setCurrentIndex(index);
              }}
              style={{
                width: 50,
                height: 50,
                borderRadius: "8px",
                overflow: "hidden",
                border:
                  currentIndex === index
                    ? "2px solid #15F5BA"
                    : "1px solid rgba(255,255,255,0.5)",
                cursor: "pointer",
                padding: 0,
                background: "transparent",
              }}
            >
              <img
                src={image}
                alt="thumb"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </button>
          ))}
        </MiContenedorFlotante>
      )}
    </div>
  );
}

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
