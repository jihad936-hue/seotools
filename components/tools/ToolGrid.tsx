import { Tool } from "@/types";
import ToolCard from "./ToolCard";

interface ToolGridProps {
  tools: Tool[];
  showCategory?: boolean;
  columns?: 2 | 3 | 4;
}

export default function ToolGrid({ tools, showCategory = false, columns = 3 }: ToolGridProps) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-4`}>
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} showCategory={showCategory} />
      ))}
    </div>
  );
}
