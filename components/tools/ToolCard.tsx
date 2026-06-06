import Link from "next/link";
import { Tool } from "@/types";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import { 
  FileText, Settings, Search, Link2, TrendingUp, PenTool,
  Tags, Heading, Image, Code, AlignLeft, Link as LinkIcon, Zap, Smartphone,
  Shield, ArrowRight, FileCheck, FileLock, Lightbulb, BarChart3,
  List, Percent, Eye, HelpCircle, ExternalLink, Unlink, Users, Type,
  Target, MapPin, BarChart, GitCompare, Sparkles, BookOpen, CopyCheck, Calculator
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{className?: string}>> = {
  FileText, Settings, Search, Link2, TrendingUp, PenTool,
  Tags, Heading, Image, Code, AlignLeft,
Link: LinkIcon,
Zap, Smartphone,
  Shield, ArrowRight, FileCheck, FileLock, Lightbulb, BarChart3,
  List, Percent, Eye, HelpCircle, ExternalLink, Unlink, Users, Type,
  Target, MapPin, BarChart, GitCompare, Sparkles, BookOpen, CopyCheck, Calculator
};

interface ToolCardProps {
  tool: Tool;
  showCategory?: boolean;
}

export default function ToolCard({ tool, showCategory = false }: ToolCardProps) {
  const IconComponent = iconMap[tool.icon] || FileText;

  return (
    <Link href={`/tools/${tool.category}/${tool.slug}`}>
      <Card hover className="h-full p-5 group">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center group-hover:bg-primary-100 dark:group-hover:bg-primary-900/50 transition-colors">
            <IconComponent className="w-5 h-5 text-primary-600" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="font-semibold text-secondary-900 dark:text-white group-hover:text-primary-600 transition-colors">
                {tool.name}
              </h3>
              {tool.popular && (
                <Badge variant="primary" size="sm">Popular</Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-secondary-600 dark:text-secondary-400 line-clamp-2">
              {tool.description}
            </p>
            {showCategory && (
              <p className="mt-2 text-xs text-secondary-500 capitalize">
                {tool.category.replace(/-/g, " ")}
              </p>
            )}
          </div>
        </div>
      </Card>
    </Link>
  );
}
