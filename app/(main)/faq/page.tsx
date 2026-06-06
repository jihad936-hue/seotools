import { generateSEO } from "@/lib/seo";
import { faqItems, getAllCategories } from "@/lib/faq";
import Container from "@/components/ui/Container";
import Accordion from "@/components/ui/Accordion";

export const metadata = generateSEO({
  title: "FAQ - Frequently Asked Questions",
  description: "Find answers to common questions about our SEO tools, features, usage, and technical support.",
});

export default function FAQPage() {
  const categories = getAllCategories();

  return (
    <div className="py-12">
      <Container size="md">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-secondary-900 dark:text-white">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
            Find answers to common questions about our SEO tools
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category) => {
            const items = faqItems.filter((item) => item.category === category);
            return (
              <section key={category}>
                <h2 className="text-xl font-bold text-secondary-900 dark:text-white mb-6">
                  {category}
                </h2>
                <Accordion items={items} />
              </section>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center p-8 bg-primary-50 dark:bg-primary-900/20 rounded-2xl">
          <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">
            Still have questions?
          </h3>
          <p className="text-secondary-600 dark:text-secondary-400 mb-4">
            Can't find the answer you're looking for? Feel free to contact our support team.
          </p>
          <a
            href="mailto:support@seotools.pro"
            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-medium rounded-lg hover:bg-primary-700 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </Container>
    </div>
  );
}
