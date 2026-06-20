"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface GalleryImage {
  src: string;
  alt?: string;
}

interface ImageGalleryProps {
  title?: string;
  images: GalleryImage[];
}

export default function ImageGallery({
  title,
  images,
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section className="flex flex-col items-center space-y-5">
        {title && (
          <h1 className="text-3xl font-bold text-yellow-700 text-center">
            {title}
          </h1>
        )}

        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setSelectedImage(image.src)}
                className="cursor-pointer focus:outline-none"
              >
                <Image
                  src={image.src}
                  alt={image.alt ?? "Gallery Image"}
                  width={4000}
                  height={4000}
                  className="w-full h-full object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
            onClick={(e) => {
              e.stopPropagation();
              setSelectedImage(null);
            }}
          >
            <X size={24} />
          </button>

          <div
            className="relative w-full max-w-6xl max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Enlarged Image"
              width={4000}
              height={4000}
              className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}