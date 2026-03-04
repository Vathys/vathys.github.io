export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center">
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="font-mono text-4xl mb-6">
          Teaching machines to <span className="text-primary">see</span> the
          unseen.
        </h1>
        <p className="text-muted mb-8">
          Machine Learning Engineer & Data Scientist
        </p>
        {/* <div className="flex justify-center gap-4">
            <button className="px-6 py-2 border hover:text-muted">View Research</button>
            <button className="px-6 py-2 border hover:text-muted">Enter the Lab</button>
        </div> */}
      </div>
    </section>
  );
}
