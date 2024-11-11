import React, { useState } from 'react';
import Header from './components/Header';
import ProductLinkForm from './components/ProductLinkForm';
import ImageGallery from './components/ImageGallery';
import SelectedImage from './components/SelectedImage';
import ProgressTracker from './components/ProgressTracker';
import EnhancedImages from './components/EnhancedImages';

// Mock data for demonstration
const MOCK_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956',
    score: 98,
    isSelected: true,
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    score: 85,
    isSelected: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    score: 76,
    isSelected: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b',
    score: 72,
    isSelected: false,
  },
  {
    url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae',
    score: 65,
    isSelected: false,
  },
];

const MOCK_SCORE_BREAKDOWN = {
  engagement: 96,
  relevance: 94,
  quality: 98,
  audience: 92,
};

const MOCK_ENHANCED_IMAGES = [
  {
    url: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956',
    description: 'Enhanced for young, fashion-forward audience with lifestyle context',
  },
  {
    url: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    description: 'Studio version optimized for e-commerce platforms',
  },
  {
    url: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    description: 'Social media optimized with urban backdrop',
  },
];

const COMPLETED_STEPS = [
  { id: 'images', label: 'Image Analysis', status: 'completed' },
  { id: 'hash', label: 'Hash Creation', status: 'completed' },
  { id: 'adset', label: 'Ad Set Setup', status: 'completed' },
  { id: 'launch', label: 'Campaign Launch', status: 'completed' },
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(4);
  const [showImages, setShowImages] = useState(true);
  const [showEnhanced, setShowEnhanced] = useState(true);
  const [isComplete, setIsComplete] = useState(true);
  const [steps, setSteps] = useState(COMPLETED_STEPS);

  const handleSubmit = async (link: string) => {
    setIsLoading(true);
    setShowImages(false);
    setShowEnhanced(false);
    setIsComplete(false);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    setShowImages(true);
    updateStep(0, 'completed');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    setShowEnhanced(true);
    updateStep(1, 'completed');
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    updateStep(2, 'completed');
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    updateStep(3, 'completed');
    setIsComplete(true);
    setIsLoading(false);
  };

  const updateStep = (index: number, status: 'pending' | 'processing' | 'completed') => {
    setSteps(prev => prev.map((step, i) => 
      i === index ? { ...step, status } : step
    ));
    setCurrentStep(index + 1);
  };

  const selectedImage = MOCK_IMAGES.find(img => img.isSelected);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="space-y-8">
        <ProductLinkForm onSubmit={handleSubmit} isLoading={isLoading} />
        
        <ProgressTracker
          steps={steps}
          currentProgress={currentStep * 25}
        />
        
        {showImages && (
          <>
            <ImageGallery images={MOCK_IMAGES} />
            {selectedImage && (
              <SelectedImage
                imageUrl={selectedImage.url}
                totalScore={selectedImage.score}
                breakdown={MOCK_SCORE_BREAKDOWN}
              />
            )}
          </>
        )}
        
        {showEnhanced && (
          <EnhancedImages images={MOCK_ENHANCED_IMAGES} />
        )}
        
        {isComplete && (
          <div className="py-8 bg-gradient-to-r from-green-500 to-emerald-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h3 className="text-3xl font-bold mb-4">Campaign Successfully Launched! 🚀</h3>
              <p className="text-green-50 mb-6 text-lg">Your Facebook ad campaign is now live and running</p>
              <a
                href="https://facebook.com/ads/manager"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-emerald-600 rounded-lg hover:bg-green-50 transition-colors font-semibold"
              >
                View Campaign →
              </a>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;