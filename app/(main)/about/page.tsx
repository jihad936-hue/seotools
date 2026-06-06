import { generateSEO } from "@/lib/seo";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Target, Users, Zap, Heart } from "lucide-react";

export const metadata = generateSEO({
  title: "About Us",
  description: "Learn about SEO Tools Pro, our mission to democratize SEO tools, and the team behind the platform.",
});

export default function AboutPage() {
  return (
    <div className="py-12">
      <Container size="md">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">
            About SEO Tools Pro
          </h1>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Democratizing professional SEO tools for everyone. We believe powerful SEO 
            software should be accessible to all businesses, regardless of size or budget.
          </p>
        </div>

        {/* Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8">
            <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
              Our Mission
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
              To provide professional-grade SEO tools completely free of charge. We believe 
              that every website owner, blogger, and business deserves access to the same 
              powerful optimization tools that large enterprises use.
            </p>
          </Card>

          <Card className="p-8">
            <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-primary-600" />
            </div>
            <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-3">
              Our Values
            </h2>
            <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
              Transparency, accessibility, and continuous improvement drive everything we do. 
              We are committed to open data practices, user privacy, and building tools that 
              genuinely help people succeed online.
            </p>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: Zap, label: "Tools", value: "50+" },
            { icon: Users, label: "Users", value: "100K+" },
            { icon: Heart, label: "Satisfaction", value: "99%" },
            { icon: Target, label: "Uptime", value: "99.9%" },
          ].map((stat, index) => (
            <Card key={index} className="p-6 text-center">
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
              <div className="text-2xl font-bold text-secondary-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-sm text-secondary-500 mt-1">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Story */}
        <div className="prose dark:prose-invert max-w-none">
          <h2 className="text-2xl font-bold text-secondary-900 dark:text-white mb-4">
            Our Story
          </h2>
          <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
            SEO Tools Pro was founded in 2023 by a team of SEO professionals and developers who 
            were frustrated with the high cost of professional SEO software. We noticed that small 
            businesses, startups, and individual bloggers were being priced out of the tools they 
            needed to compete online.
          </p>
          <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed mt-4">
            Starting with just 5 tools, we've grown to a comprehensive suite of 50+ SEO tools 
            used by over 100,000 professionals monthly. Our platform continues to evolve based on 
            user feedback and the latest SEO best practices.
          </p>
        </div>
      </Container>
    </div>
  );
}
