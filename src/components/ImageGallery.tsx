import React from 'react';
import { Trophy, ImageIcon } from 'lucide-react';

interface Image {
  url: string;
  score: number;
  isSelected: boolean;
}

interface ImageGalleryProps {
  images: Image[];
}

export default function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="w-8 h-8 text-blue-600" />
            <h2 className="text-3xl font-semibold">Product Images Analysis</h2>
          </div>
          <p className="text-gray-600 text-lg">
            Our AI has analyzed your product images and ranked them based on performance potential
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden shadow-xl transition-all duration-300 ${
                image.isSelected 
                  ? 'ring-4 ring-yellow-500 scale-105 z-10' 
                  : 'hover:scale-105'
              }`}
            >
              <div className="aspect-[3/4]">
                <img
                  src={image.url}
                  alt={`Product image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              {image.isSelected && (
                <div className="absolute top-4 right-4">
                  <Trophy className="w-8 h-8 text-yellow-400" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-lg">Match Score</span>
                  <span className="text-2xl font-bold">{image.score}%</span>
                </div>
                {image.isSelected && (
                  <div className="text-sm text-yellow-300 font-medium">
                    ★ Best Performer
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}