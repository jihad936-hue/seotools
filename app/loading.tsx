export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-secondary-950">
      <div className="text-center">
        <div className="relative w-12 h-12 mx-auto mb-4">
          <div className="absolute inset-0 border-4 border-primary-200 dark:border-primary-800 rounded-full" />
          <div className="absolute inset-0 border-4 border-primary-600 rounded-full border-t-transparent animate-spin" />
        </div>
        <p className="text-secondary-600 dark:text-secondary-400 text-sm">Loading...</p>
      </div>
    </div>
  );
}
