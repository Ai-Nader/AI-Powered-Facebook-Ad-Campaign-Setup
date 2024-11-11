import React from 'react';
import { CheckCircle, RefreshCw } from 'lucide-react';

interface CompletionMessageProps {
  onReset: () => void;
  campaignUrl?: string;
}

export default function CompletionMessage({ onReset, campaignUrl }: CompletionMessageProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl p-8 max-w-md w-full text-center">
        <div className="mb-4">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
        </div>
        <h3 className="text-2xl font-bold mb-2">Campaign Live!</h3>
        <p className="text-gray-600 mb-6">
          Your Facebook ad campaign has been successfully created and launched.
        </p>
        {campaignUrl && (
          <a
            href={campaignUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4 text-blue-600 hover:underline"
          >
            View Campaign →
          </a>
        )}
        <button
          onClick={onReset}
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <RefreshCw className="w-5 h-5 mr-2" />
          Start New Campaign
        </button>
      </div>
    </div>
  );
}