"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Card from "@/components/ui/Card";

interface ToolInterfaceProps {
  title: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  inputType?: "text" | "url" | "textarea";
  onSubmit: (input: string) => Promise<any>;
  renderResult: (result: any) => React.ReactNode;
}

export default function ToolInterface({
  title,
  description,
  inputLabel,
  inputPlaceholder,
  inputType = "text",
  onSubmit,
  renderResult,
}: ToolInterfaceProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const data = await onSubmit(input);
      setResult(data);
    } catch (err) {
      setError("An error occurred while processing your request. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white">{title}</h1>
        <p className="mt-2 text-secondary-600 dark:text-secondary-400">{description}</p>
      </div>

      <Card className="p-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          {inputType === "textarea" ? (
            <div>
              <label className="block text-sm font-medium text-secondary-700 dark:text-secondary-300 mb-1">
                {inputLabel}
              </label>
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={inputPlaceholder}
                rows={6}
                className="w-full px-4 py-3 rounded-lg border border-secondary-300 dark:border-secondary-700 bg-white dark:bg-secondary-900 text-secondary-900 dark:text-white placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-y"
              />
            </div>
          ) : (
            <Input
              label={inputLabel}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={inputPlaceholder}
              type={inputType}
            />
          )}

          <div className="flex items-center gap-3">
            <Button type="submit" isLoading={loading} size="lg" className="w-full sm:w-auto">
              {loading ? "Processing..." : "Analyze"}
            </Button>
            {input && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => {
                  setInput("");
                  setResult(null);
                  setError("");
                }}
              >
                Clear
              </Button>
            )}
          </div>
        </form>

        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
          </div>
        )}
      </Card>

      {result && (
        <div className="animate-fade-in">
          {renderResult(result)}
        </div>
      )}
    </div>
  );
}
