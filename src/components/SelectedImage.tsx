import React from 'react';
import { Trophy, Star, Users, Target, Zap } from 'lucide-react';

interface ScoreBreakdown {
  engagement: number;
  relevance: number;
  quality: number;
  audience: number;
}

interface SelectedImageProps {
  imageUrl: string;
  totalScore: number;
  breakdown: ScoreBreakdown;
}

export default function SelectedImage({ imageUrl, totalScore, breakdown }: SelectedImageProps) {
  const scoreMetrics = [
    { icon: Users, label: 'Audience Match', score: breakdown.audience },
    { icon: Zap, label: 'Engagement Potential', score: breakdown.engagement },
    { icon: Target, label: 'Relevance', score: breakdown.relevance },
    { icon: Star, label: 'Image Quality', score: breakdown.quality },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Trophy className="w-8 h-8 text-yellow-500" />
              <h2 className="text-2xl font-semibold">Top Performing Image</h2>
            </div>
            <p className="text-gray-600">
              This image scored highest across our AI analysis metrics
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={imageUrl}
                alt="Selected product image"
                className="w-full aspect-square object-cover"
              />
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-semibold">
                {totalScore}% Match
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-6">Score Breakdown</h3>
              <div className="space-y-6">
                {scoreMetrics.map((metric) => (
                  <div key={metric.label} className="relative">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <metric.icon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{metric.label}</span>
                      </div>
                      <span className="font-semibold">{metric.score}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}