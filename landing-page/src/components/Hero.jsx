function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 bg-slate-950 text-white">
      <div className="text-center max-w-3xl">
        {/* Paragraph 1 */}
        <p className="text-cyan-400 mb-4 tracking-widest uppercase text-sm">
          Learn • Build • Grow
        </p>

        {/* Heading */}
        <h1 className="text-5xl sm:text-6xl font-bold">
          Build Your Future in Tech
        </h1>

        {/* Paragraph 2 */}
        <p className="text-gray-400 mt-6 text-lg">
          Learn modern skills with real projects and industry guidance.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          {/* Explore Programs Button */}
          <button className="bg-cyan-500 text-black px-6 py-3 rounded-lg font-medium hover:cursor-pointer hover:scale-105 transition">
            Explore Programs
          </button>

          {/* Contact Us Button */}
          <button className="border border-white/20 px-6 py-3 rounded-lg hover:cursor-pointer hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
