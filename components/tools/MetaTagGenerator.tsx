"use client";

import { useMemo, useState } from "react";

export default function MetaTagGenerator() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [keywords, setKeywords] = useState("");

  const generatedTags = useMemo(() => {
    const lines = [];

    if (title.trim()) {
      lines.push(`<title>${title.trim()}</title>`);
    }

    if (description.trim()) {
      lines.push(
        `<meta name="description" content="${description.trim()}" />`
      );
    }

    if (keywords.trim()) {
      lines.push(
        `<meta name="keywords" content="${keywords.trim()}" />`
      );
    }

    return lines.join("\n");
  }, [title, description, keywords]);

  const copyTags = async () => {
    if (!generatedTags) return;

    await navigator.clipboard.writeText(generatedTags);
  };

  return (
    <div className="space-y-6">
      {/* Inputs */}
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="meta-title"
            className="mb-2 block text-sm font-medium text-secondary-900 dark:text-white"
          >
            Page Title
          </label>

          <input
            id="meta-title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Example: Free SEO Tools for Better Rankings"
            className="w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-sm text-secondary-900 outline-none transition focus:border-primary-500 dark:border-secondary-700 dark:bg-secondary-900 dark:text-white"
          />

          <p className="mt-1 text-xs text-secondary-500">
            {title.length} characters
          </p>
        </div>

        <div>
          <label
            htmlFor="meta-description"
            className="mb-2 block text-sm font-medium text-secondary-900 dark:text-white"
          >
            Meta Description
          </label>

          <textarea
            id="meta-description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Write a clear description of your page..."
            rows={4}
            className="w-full resize-none rounded-lg border border-secondary-300 bg-white px-4 py-3 text-sm text-secondary-900 outline-none transition focus:border-primary-500 dark:border-secondary-700 dark:bg-secondary-900 dark:text-white"
          />

          <p className="mt-1 text-xs text-secondary-500">
            {description.length} characters
          </p>
        </div>

        <div>
          <label
            htmlFor="meta-keywords"
            className="mb-2 block text-sm font-medium text-secondary-900 dark:text-white"
          >
            Keywords
            <span className="ml-1 text-xs text-secondary-500">
              (optional)
            </span>
          </label>

          <input
            id="meta-keywords"
            type="text"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="seo tools, seo checker, keyword research"
            className="w-full rounded-lg border border-secondary-300 bg-white px-4 py-3 text-sm text-secondary-900 outline-none transition focus:border-primary-500 dark:border-secondary-700 dark:bg-secondary-900 dark:text-white"
          />
        </div>
      </div>

      {/* Google Preview */}
      <div>
        <h3 className="mb-3 text-lg font-semibold text-secondary-900 dark:text-white">
          Search Preview
        </h3>

        <div className="rounded-lg border border-secondary-200 bg-white p-5 dark:border-secondary-700 dark:bg-secondary-900">
          <div className="mb-1 text-sm text-green-700 dark:text-green-400">
            example.com › page
          </div>

          <div className="text-lg font-medium text-blue-700 dark:text-blue-400">
            {title || "Your page title will appear here"}
          </div>

          <p className="mt-1 text-sm leading-6 text-secondary-600 dark:text-secondary-400">
            {description ||
              "Your meta description will appear here in search results."}
          </p>
        </div>
      </div>

      {/* Generated HTML */}
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-secondary-900 dark:text-white">
            Generated Meta Tags
          </h3>

          <button
            type="button"
            onClick={copyTags}
            disabled={!generatedTags}
            className="rounded-lg bg-primary-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Copy HTML
          </button>
        </div>

        <pre className="overflow-x-auto rounded-lg border border-secondary-200 bg-secondary-950 p-4 text-sm leading-6 text-secondary-100 dark:border-secondary-700">
          <code>
            {generatedTags ||
              "<!-- Your generated meta tags will appear here -->"}
          </code>
        </pre>
      </div>

      {/* SEO Tips */}
      <div className="rounded-lg border border-primary-200 bg-primary-50 p-5 dark:border-primary-900 dark:bg-primary-950/30">
        <h3 className="mb-3 font-semibold text-secondary-900 dark:text-white">
          Quick SEO Tips
        </h3>

        <ul className="space-y-2 text-sm text-secondary-700 dark:text-secondary-300">
          <li>• Keep your title clear and relevant to the page.</li>
          <li>• Write a useful description that matches the page content.</li>
          <li>• Avoid keyword stuffing.</li>
          <li>• Make every important page unique.</li>
        </ul>
      </div>
    </div>
  );
}