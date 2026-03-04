import Card from "@/components/card";

const projects = [
  {
    title: "Local Feature Detection with Descriptors",
    description:
      "Master's Thesis at ETH Zurich. Extending end-to-end feature detection using reinforcement learning (DISK framework) with a focus on unsupervised learning.",
  },
  {
    title: "Refined MegaDepth",
    description:
      "Extended MegaDepth dataset for improved image registration and depth coverage. Achieved 7th place out of 150+ teams in Kaggle Image Matching Challenge 2023 using findings.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-20">
      <h2 className="font-mono text-2xl mb-8">Selected Work</h2>
      <div className="grid grid-flow-col grid-cols-3 gap-4">
        {projects.map((proj, idx) => (
          <Card key={idx} title={proj.title} description={proj.description} />
        ))}
      </div>
    </section>
  );
}
