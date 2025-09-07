"use client";

import { useState, useEffect } from "react";

interface UseImagePreloaderProps {
  images: string[];
  onAllLoaded?: () => void;
}

interface ImageLoadState {
  loaded: number;
  total: number;
  isLoading: boolean;
  progress: number;
}

export const useImagePreloader = ({ images, onAllLoaded }: UseImagePreloaderProps) => {
  const [loadState, setLoadState] = useState<ImageLoadState>({
    loaded: 0,
    total: images.length,
    isLoading: true,
    progress: 0,
  });

  useEffect(() => {
    if (images.length === 0) {
      setLoadState({
        loaded: 0,
        total: 0,
        isLoading: false,
        progress: 100,
      });
      return;
    }

    let loadedCount = 0;
    const totalCount = images.length;

    const preloadImage = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => {
          loadedCount++;
          const progress = Math.round((loadedCount / totalCount) * 100);
          
          setLoadState({
            loaded: loadedCount,
            total: totalCount,
            isLoading: loadedCount < totalCount,
            progress,
          });

          if (loadedCount === totalCount) {
            onAllLoaded?.();
          }
          
          resolve();
        };

        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          loadedCount++;
          const progress = Math.round((loadedCount / totalCount) * 100);
          
          setLoadState({
            loaded: loadedCount,
            total: totalCount,
            isLoading: loadedCount < totalCount,
            progress,
          });

          if (loadedCount === totalCount) {
            onAllLoaded?.();
          }
          
          resolve(); // Still resolve to continue loading other images
        };

        // Add cache busting and optimization parameters
        const optimizedSrc = optimizeImageSrc(src);
        img.src = optimizedSrc;
      });
    };

    // Preload all images
    const preloadAllImages = async () => {
      try {
        await Promise.all(images.map(preloadImage));
      } catch (error) {
        console.error("Error preloading images:", error);
      }
    };

    preloadAllImages();
  }, [images, onAllLoaded]);

  return loadState;
};

// Helper function to optimize image sources
const optimizeImageSrc = (src: string): string => {
  // If it's a local image, add Next.js optimization parameters
  if (src.startsWith('/')) {
    // For Next.js Image component optimization, we'll handle this in the component
    return src;
  }
  
  // For external images, you could add optimization parameters here
  // For example, if using a CDN like Cloudinary or similar
  return src;
};

export default useImagePreloader;
