function CTA() {
  return (
    <section id="contact" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold">Ready to Build Your Career?</h2>

        {/* Paragraph */}
        <p className="text-gray-400 mt-4 text-lg">
          Start learning with industry-focused programs and real projects.
        </p>

        {/* Apply Now Button */}
        <button className="mt-8 bg-cyan-500 text-black px-8 py-3 rounded-lg font-medium hover:cursor-pointer hover:scale-105 transition">
          Apply Now
        </button>
      </div>
    </section>
  );
}

export default CTA;
