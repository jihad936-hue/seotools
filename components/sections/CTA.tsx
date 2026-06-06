import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="py-20 bg-secondary-50 dark:bg-secondary-900/50">
      <Container className="max-w-4xl">
        <div className="bg-primary-600 dark:bg-primary-800 rounded-2xl p-8 sm:p-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Ready to Improve Your SEO?
          </h2>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Start using our free SEO tools today and see the difference in your search rankings. 
            No credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/tools">
              <Button size="lg" className="w-full sm:w-auto bg-white text-primary-600 hover:bg-primary-50 gap-2">
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="/blog">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-primary-300 text-white hover:bg-primary-700"
              >
                Learn SEO
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
