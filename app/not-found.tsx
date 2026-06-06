import Link from "next/link";
import { SearchX, ArrowLeft } from "lucide-react";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-950">
      <div className="text-center px-4">
        <div className="w-20 h-20 rounded-2xl bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-6">
          <SearchX className="w-10 h-10 text-primary-600" />
        </div>
        <h1 className="text-6xl font-bold text-secondary-900 dark:text-white mb-4">
          404
        </h1>
        <h2 className="text-2xl font-semibold text-secondary-700 dark:text-secondary-300 mb-4">
          Page Not Found
        </h2>
        <p className="text-secondary-600 dark:text-secondary-400 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. 
          Check the URL or browse our tools below.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link href="/tools">
            <Button variant="outline">Browse Tools</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
