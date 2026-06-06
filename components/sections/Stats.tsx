import Container from "@/components/ui/Container";

const stats = [
  { value: "50+", label: "SEO Tools" },
  { value: "1M+", label: "Analyses Run" },
  { value: "100K+", label: "Monthly Users" },
  { value: "99.9%", label: "Uptime" },
];

export default function Stats() {
  return (
    <section className="py-16 bg-primary-600 dark:bg-primary-800">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">{stat.value}</div>
              <div className="mt-2 text-primary-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
