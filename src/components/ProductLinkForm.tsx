import React, { useState } from 'react';
import { ArrowRight, Loader2 } from 'lucide-react';

interface ProductLinkFormProps {
  onSubmit: (link: string) => void;
  isLoading: boolean;
}

export default function ProductLinkForm({ onSubmit, isLoading }: ProductLinkFormProps) {
  const [link, setLink] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (link) onSubmit(link);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="url"
          placeholder="Paste your Shopify product URL here..."
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <Loader2 className="animate-spin mr-2" />
              Processing...
            </>
          ) : (
            <>
              Start Magic
              <ArrowRight className="ml-2" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}