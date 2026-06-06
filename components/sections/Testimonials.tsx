import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "SEO Manager",
    company: "TechFlow Inc.",
    content: "These tools have completely transformed our SEO workflow. The keyword research tool alone saved us hours of manual work. Highly recommended for any serious SEO professional.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Digital Marketing Director",
    company: "GrowthLabs",
    content: "I've tried dozens of SEO tool suites, but this one stands out for its accuracy and ease of use. The site audit tool caught issues that expensive paid tools missed.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Freelance SEO Consultant",
    company: "Self-employed",
    content: "As a freelancer, I need reliable tools that don't break the bank. This platform delivers enterprise-level features for free. My clients are impressed with the reports I generate.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white dark:bg-secondary-950">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-900 dark:text-white">
            Trusted by SEO Professionals
          </h2>
          <p className="mt-4 text-lg text-secondary-600 dark:text-secondary-400">
            See what industry experts say about our tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 relative">
              <Quote className="w-8 h-8 text-primary-200 dark:text-primary-800 absolute top-4 right-4" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-secondary-700 dark:text-secondary-300 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-sm font-bold text-primary-600">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-secondary-900 dark:text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-secondary-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
