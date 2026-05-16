function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-6 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">What Students Say</h2>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:cursor-pointer hover:border-cyan-400">
            <p className="text-gray-300 italic">
              “Great learning experience. The projects helped me understand
              everything.”
            </p>
            <h4 className="mt-4 font-semibold">Rahul Sharma</h4>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:cursor-pointer hover:border-cyan-400">
            <p className="text-gray-300 italic">
              “Very practical course structure and supportive mentors.”
            </p>
            <h4 className="mt-4 font-semibold">Priya Patel</h4>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:cursor-pointer hover:border-cyan-400">
            <p className="text-gray-300 italic">
              “Helped me get my first internship in web development.”
            </p>
            <h4 className="mt-4 font-semibold">Aman Verma</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
