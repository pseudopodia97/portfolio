import Container from "./Container";

const stats = [
  { value: "7+", label: "years building frontend products" },
  { value: "57%", label: "smaller initial bundle (19.5 MB to 8.3 MB)" },
  { value: "3h → <1h", label: "weekly regression run with parallel Playwright" },
  { value: "50,000+", label: "users across AU, US and EU" },
];

const Impact = () => (
  <div className="bg-neutral-900">
    <Container>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
        {stats.map((s) => (
          <div key={s.label} className="border-s-4 border-yellow-400 ps-4">
            <p className="text-3xl sm:text-4xl font-bold text-yellow-400">{s.value}</p>
            <p className="text-gray-300 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </Container>
  </div>
);

export default Impact;
