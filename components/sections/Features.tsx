import { Zap, Shield, BarChart3, Globe, Clock, Users } from "lucide-react";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Get instant results with our optimized tools. No waiting, no delays—just pure speed.",
  },
  {
    icon: Shield,
    title: "100% Free & Secure",
    description: "All tools are completely free to use. Your data is processed securely and never stored.",
  },
  {
    icon: BarChart3,
    title: "Accurate Data",
    description: "Powered by industry-standard APIs and algorithms for reliable, actionable SEO insights.",
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Analyze websites and keywords from any country with multi-region support.",
  },
  {
    icon: Clock,
    title: "Real-Time Analysis",
    description: "Get up-to-the-minute data on rankings, backlinks, and site performance metrics.",
  },
  {
    icon: Users,
    title: "Beginner Friendly",
    description: "Intuitive interfaces designed for both SEO experts and beginners. No learning curve.",
  },
];

export default function Features() {
  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
            Why Choose Our SEO Tools?
          </h2>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
            Professional-grade features without the price tag. Everything you need to dominate search rankings.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-600 dark:text-secondary-400 leading-relaxed">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
