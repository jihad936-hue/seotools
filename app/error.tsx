"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw } from "lucide-react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-950">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-red-50 dark:bg-red-900/30 flex items-center justify-center mx-auto mb-6">
          <AlertTriangle className="w-10 h-10 text-red-600" />
        </div>
        <h1 className="text-3xl font-bold text-secondary-900 dark:text-white mb-4">
          Something Went Wrong
        </h1>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-md mx-auto mb-8">
          We encountered an unexpected error. Please try again or contact support if the problem persists.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button onClick={reset} className="gap-2">
            <RefreshCw className="w-4 h-4" />
            Try Again
          </Button>
          <Link href="/">
            <Button variant="outline">Back to Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
