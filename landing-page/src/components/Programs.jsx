function Programs() {
  return (
    <section id="programs" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">Our Programs</h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:cursor-pointer hover:border-white/30 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Web Development</h3>
            <p className="text-gray-400 mt-2">
              HTML, CSS, JavaScript, React basics to advanced.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:cursor-pointer hover:border-white/30 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">UI/UX Design</h3>
            <p className="text-gray-400 mt-2">
              Learn design principles and modern tools.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:cursor-pointer hover:border-white/30 hover:scale-105 transition">
            <h3 className="text-xl font-semibold">Data Science</h3>
            <p className="text-gray-400 mt-2">
              Python, data analysis, and machine learning basics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Programs;
