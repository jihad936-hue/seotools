'use client';

import { useState } from 'react';
import { analyzeHeaders, HeaderAnalysis } from '@/lib/tools';

export default function HeaderTagAnalyzer() {
  const [htmlInput, setHtmlInput] = useState('');
  const [analysis, setAnalysis] = useState<HeaderAnalysis | null>(null);
  const [error, setError] = useState('');

  const handleAnalyze = () => {
    if (!htmlInput.trim()) {
      setError('Please enter HTML or content to analyze');
      return;
    }
    setError('');
    const result = analyzeHeaders(htmlInput);
    setAnalysis(result);
  };

  const handleClear = () => {
    setHtmlInput('');
    setAnalysis(null);
    setError('');
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">
          Enter HTML code or page content:
        </label>
        <textarea
          value={htmlInput}
          onChange={(e) => setHtmlInput(e.target.value)}
          className="w-full h-64 p-4 border rounded-lg font-mono text-sm bg-white dark:bg-gray-800"
          placeholder="<html>...<h1>Main Title</h1>...<h2>Subtitle</h2>...</html>"
        />
      </div>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="flex gap-3 mb-8">
        <button
          onClick={handleAnalyze}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition"
        >
          Analyze Headers
        </button>
        <button
          onClick={handleClear}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition"
        >
          Clear
        </button>
      </div>

      {analysis && (
        <div className="space-y-6">
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Analysis Summary</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <StatCard label="Total Headers" value={analysis.totalHeaders} />
              <StatCard label="H1" value={analysis.h1Count} highlight={analysis.hasH1 ? 'green' : 'red'} />
              <StatCard label="H2" value={analysis.h2Count} />
              <StatCard label="H3" value={analysis.h3Count} />
              <StatCard label="H4" value={analysis.h4Count} />
              <StatCard label="H5+H6" value={analysis.h5Count + analysis.h6Count} />
            </div>
          </div>

          {analysis.hierarchyIssues.length > 0 && (
            <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg border border-red-200 dark:border-red-800">
              <h2 className="text-xl font-bold mb-4 text-red-700 dark:text-red-400">Detected Issues</h2>
              <ul className="space-y-2">
                {analysis.hierarchyIssues.map((issue, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-red-500 mt-1">⚠️</span>
                    <span>{issue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {analysis.recommendations.length > 0 && (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <h2 className="text-xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">Recommendations</h2>
              <ul className="space-y-2">
                {analysis.recommendations.map((rec, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-1">💡</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {analysis.hierarchyIssues.length === 0 && (
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800">
              <h2 className="text-xl font-bold mb-4 text-green-700 dark:text-green-400">✅ Excellent Results</h2>
              <p>No issues found in your heading structure. Keep up this quality!</p>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border">
            <h2 className="text-xl font-bold mb-4">Heading Structure</h2>
            {analysis.hierarchy.length > 0 ? (
              <div className="space-y-2">
                {analysis.hierarchy.map((header, i) => (
                  <div key={i} className="flex items-start gap-3 border-b pb-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm font-medium min-w-[50px] text-center">
                      H{header.level}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 flex-1">
                      {header.text}
                    </span>
                    <span className="text-xs text-gray-500">#{header.order}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">No headings found in input</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value, highlight }: { label: string; value: number; highlight?: 'green' | 'red' }) {
  const colorClass = highlight === 'green' ? 'text-green-600' : highlight === 'red' ? 'text-red-600' : 'text-blue-600';
  
  return (
    <div className="bg-white dark:bg-gray-700 p-4 rounded-lg text-center">
      <div className={`text-2xl font-bold ${colorClass}`}>{value}</div>
      <div className="text-sm text-gray-600 dark:text-gray-300">{label}</div>
    </div>
  );
}