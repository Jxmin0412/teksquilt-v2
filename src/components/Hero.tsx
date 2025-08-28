const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 to-pink-900 text-white">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-6xl font-extrabold mb-4 leading-tight">Teksquilt: Your Partner in Tech Talent.</h1>
        <p className="text-xl mb-8 text-gray-300">Connecting top IT professionals with leading companies. We specialize in onsite, remote, and dedicated staffing solutions to build your dream team.</p>
        <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-full text-lg">
          Find Talent
        </button>
      </div>
    </section>
  );
};

export default Hero;