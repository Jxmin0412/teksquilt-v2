const Features = () => {
  return (
    <section id="services" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Staffing Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Onsite Staffing</h3>
            <p>Placing top-tier tech professionals directly at your workplace for seamless integration.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Remote Talent</h3>
            <p>Access a global pool of expert developers, engineers, and IT specialists working remotely.</p>
          </div>
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-pink-500">Dedicated Teams</h3>
            <p>Building a dedicated team of tech experts to accelerate your projects.</p>
          </div>
        </div>
        <div id="jobs" className="mt-20">
          <h2 className="text-4xl font-bold text-center mb-12">Current Openings</h2>
          <div className="flex flex-wrap justify-center gap-4 text-center">
            <div className="bg-pink-600 text-white font-bold py-3 px-6 rounded-full">
              <h3>DevOps Engineer</h3>
            </div>
            <div className="bg-pink-600 text-white font-bold py-3 px-6 rounded-full">
              <h3>Site Reliability Engineer</h3>
            </div>
            <div className="bg-pink-600 text-white font-bold py-3 px-6 rounded-full">
              <h3>Full-Stack Developer</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;