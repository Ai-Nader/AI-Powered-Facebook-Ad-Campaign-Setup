import React from 'react';
import { Wand2 } from 'lucide-react';

export default function Header() {
  return (
    <header className="text-center py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center mb-4">
          <Wand2 className="w-10 h-10 mr-2" />
          <h1 className="text-4xl font-bold">AI-Powered Facebook Ad Campaign Setup</h1>
        </div>
        <p className="text-xl text-blue-100 mb-6">
          Automating Product Image Analysis and Ad Creation from Start to Finish
        </p>
        <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <p className="text-blue-50">
            Enter your Shopify product link below to begin the automated campaign setup process
          </p>
        </div>
      </div>
    </header>
  );
}