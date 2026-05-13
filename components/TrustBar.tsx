const points = [
  { label: "All makes & models", detail: "From Fords to BMWs" },
  { label: "Free diagnostics quote", detail: "No charge to assess" },
  { label: "No work without approval", detail: "You decide what gets done" },
  { label: "Local to Mitcham CR4", detail: "South London's garage" },
];

export default function TrustBar() {
  return (
    <section className="bg-forest">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
          {points.map((p) => (
            <div key={p.label} className="px-6 py-5 first:pl-0 last:pr-0">
              <p className="text-white font-semibold text-[13px] leading-snug">{p.label}</p>
              <p className="text-white/50 text-[12px] mt-0.5">{p.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
