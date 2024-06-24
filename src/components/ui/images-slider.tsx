import { cn } from "../../../utils/cn";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState, useCallback, useMemo } from "react";
import './ui.css';
import { Link } from "react-router-dom";

export const ImagesSlider = ({
  images,
  name,
  url,
  children,
  overlay = false,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up",
}: {
  images: string[];
  name: string[];
  url: string[];
  children: React.ReactNode;
  overlay?: React.ReactNode;
  overlayClassName?: string;
  className?: string;
  autoplay?: boolean;
  direction?: "up" | "down";
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  }, [images.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  }, [images.length]);

  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      try {
        const loadPromises = images.map((image) => {
          return new Promise<string>((resolve, reject) => {
            const img = new Image();
            img.src = image;
            img.onload = () => resolve(image);
            img.onerror = reject;
          });
        });

        const loadedImages = await Promise.all(loadPromises);
        setLoadedImages(loadedImages);
      } catch (error) {
        console.error("Failed to load images", error);
      } finally {
        setLoading(false);
      }
    };

    loadImages();
  }, [images]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval: NodeJS.Timeout | null = null;
    if (autoplay) {
      interval = setInterval(handleNext, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoplay, handleNext, handlePrevious]);

  const slideVariants = useMemo(
    () => ({
      initial: {
        scale: 0,
        opacity: 0,
        rotateX: 45,
      },
      visible: {
        scale: 1,
        rotateX: 0,
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: [0.645, 0.045, 0.355, 1.0],
        },
      },
      upExit: {
        opacity: 1,
        y: "-150%",
        transition: {
          duration: 1,
        },
      },
      downExit: {
        opacity: 1,
        y: "150%",
        transition: {
          duration: 1,
        },
      },
    }),
    []
  );

  const areImagesLoaded = loadedImages.length > 0;

  return (
    <div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-between bts-image-slider",
        className
      )}
      style={{
        perspective: "1000px",
      }}
    >
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div
          className={cn("absolute inset-0 bg-[#242424]/60 z-40", overlayClassName)}
        />
      )}

      {areImagesLoaded && (
        <AnimatePresence mode="wait">
          <motion.div className="max-w-[400px] sm:max-w-full">
            <motion.h2 className="font-bold text-xl md:text-5xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
              {name[currentIndex]}
            </motion.h2>
            <Link to={url[currentIndex]}>
              <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full mt-4">
                <span>Learn More →</span>
                <div className="absolute inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
              </button>
            </Link>
          </motion.div>
          <motion.img
            key={currentIndex}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full !w-[700px] inset-0 object-cover object-center border"
            loading="lazy"
          />
        </AnimatePresence>
      )}
    </div>
  );
};
