const platformFeatures = [
  {
    icon: "🔍",
    name: "High-Resolution Display",
    description:
      "Crystal-clear visuals legible from every seat — making 2D/3D animations effective for every student, not just the front row.",
  },
  {
    icon: "👆",
    name: "Multi-Touch Interaction",
    description:
      "Teachers and students interact directly — annotate, highlight, drag, draw — making every lesson participatory, not passive.",
  },
  {
    icon: "📶",
    name: "Fully Offline Capable",
    description:
      "All TopClass content and Navneet AI features accessible without internet. Connectivity issues never interrupt learning.",
  },
  {
    icon: "✅",
    name: "Pre-Loaded — No IT Setup",
    description:
      "TopClass and Navneet AI are pre-installed on delivery. No configuration, no IT dependence. School is up and running day one.",
  },
  {
    icon: "🔄",
    name: "Automatic Software Updates",
    description:
      "TopClass content and Navneet AI updates are pushed automatically — new syllabus content and features arrive without any action from the school.",
  },
  {
    icon: "🛡️",
    name: "Hardware Warranty Included",
    description:
      "Every panel comes with comprehensive warranty and on-site technical support through our hardware partners. Minimal disruption to teaching.",
  },
];

export default function White24() {
  return (
    <section className="sec sec-white">
      <p className="green-text tag ">How It Works</p>

      <h2 className="heading blue-text mb-3">
        Walk In. Turn On. Teach.
      </h2>

      <p className="subtitle dark-text mb-8">
        The entire setup is self-contained. TopClass and Navneet AI come
        pre-installed. No laptop to connect, no projector to align, no
        internet needed.
      </p>

      <div className="g2">
        {platformFeatures.map((feature) => (
          <div className="fcard" key={feature.name}>
            <div className="ai-card-icon">
              {feature.icon}
            </div>

            <div className="title blue-text mb-3">
              {feature.name}
            </div>

            <div className="subtitle dark-text">
              {feature.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}