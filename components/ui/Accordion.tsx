"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "border border-secondary-200 dark:border-secondary-800 rounded-lg",
            "bg-white dark:bg-secondary-900 overflow-hidden"
          )}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={cn(
              "w-full flex items-center justify-between p-4 text-left",
              "hover:bg-secondary-50 dark:hover:bg-secondary-800/50 transition-colors"
            )}
            aria-expanded={openIndex === index}
          >
            <span className="font-medium text-secondary-900 dark:text-white pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={cn(
                "w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform duration-200",
                openIndex === index && "rotate-180"
              )}
            />
          </button>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300 ease-in-out",
              openIndex === index ? "max-h-96" : "max-h-0"
            )}
          >
            <div className="p-4 pt-0 text-secondary-600 dark:text-secondary-400 leading-relaxed">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
