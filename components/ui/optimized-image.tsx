"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  onLoad?: () => void;
  onError?: () => void;
}

export const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  quality = 75,
  onLoad,
  onError,
}: OptimizedImageProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => {
    setIsLoading(false);
    onLoad?.();
  }, [onLoad]);

  const handleError = useCallback(() => {
    setIsLoading(false);
    setHasError(true);
    onError?.();
  }, [onError]);

  // Optimize the image source for better performance
  const getOptimizedSrc = (originalSrc: string) => {
    // For local images, Next.js will handle optimization automatically
    if (originalSrc.startsWith('/')) {
      return originalSrc;
    }
    
    // For external images, you could add optimization parameters here
    // For example, if using a CDN like Cloudinary:
    // return `https://res.cloudinary.com/your-cloud/image/fetch/w_${width},h_${height},q_${quality},f_auto/${encodeURIComponent(originalSrc)}`;
    
    return originalSrc;
  };

  if (hasError) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg",
          className
        )}
        style={{ width, height }}
      >
        <div className="text-center text-gray-500 dark:text-gray-400">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm">Image unavailable</div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg animate-pulse"
          style={{ width, height }}
        >
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        src={getOptimizedSrc(src)}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100"
        )}
        priority={priority}
        quality={quality}
        onLoad={handleLoad}
        onError={handleError}
        sizes={`(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw`}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
      />
    </div>
  );
};

export default OptimizedImage;
