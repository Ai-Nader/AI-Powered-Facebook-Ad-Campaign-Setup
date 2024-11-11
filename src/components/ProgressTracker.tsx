import React from 'react';
import { CheckCircle2, Circle, Loader2 } from 'lucide-react';

interface Step {
  id: string;
  label: string;
  status: 'pending' | 'processing' | 'completed';
}

interface ProgressTrackerProps {
  steps: Step[];
  currentProgress: number;
}

export default function ProgressTracker({ steps, currentProgress }: ProgressTrackerProps) {
  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold mb-8 text-center">Campaign Setup Progress</h2>
          
          <div className="relative">
            {/* Progress Bar */}
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-blue-600 rounded-full transition-all duration-500"
                style={{ width: `${currentProgress}%` }}
              />
            </div>

            {/* Steps */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center text-center">
                  <div className="mb-2">
                    {step.status === 'completed' && (
                      <CheckCircle2 className="w-8 h-8 text-green-500" />
                    )}
                    {step.status === 'processing' && (
                      <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
                    )}
                    {step.status === 'pending' && (
                      <Circle className="w-8 h-8 text-gray-300" />
                    )}
                  </div>
                  <p className="font-medium text-sm text-gray-700">{step.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}