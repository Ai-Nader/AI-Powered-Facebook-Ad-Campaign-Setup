import React from 'react';
import { Sparkles, Palette } from 'lucide-react';

interface EnhancedImage {
  url: string;
  description: string;
}

interface EnhancedImagesProps {
  images: EnhancedImage[];
}

export default function EnhancedImages({ images }: EnhancedImagesProps) {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Palette className="w-8 h-8 text-blue-600" />
            <h2 className="text-2xl font-semibold">Enhanced Variations</h2>
          </div>
          <p className="text-gray-600">
            AI-optimized versions tailored for different audience segments and ad placements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={image.url}
                  alt={`Enhanced version ${index + 1}`}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Sparkles className="w-6 h-6 text-yellow-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">Version {index + 1}</h3>
                <p className="text-gray-600">{image.description}</p>
                <div className="mt-4 flex items-center text-sm text-blue-600">
                  <span className="font-medium">Best for:</span>
                  <span className="ml-2">
                    {index === 0 ? 'Facebook Feed' : index === 1 ? 'Instagram Stories' : 'Marketplace'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}