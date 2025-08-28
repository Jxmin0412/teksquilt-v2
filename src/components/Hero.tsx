import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background blur effects and overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/10 to-blue-500/20 backdrop-blur-3xl"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

      <div className="relative max-w-5xl mx-auto px-6 z-10">
        {/* Enhanced main heading */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-4xl lg:text-4xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Teksquilt:
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Tune-in to create
            </span>
            <br />
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Tech Symphony.
            </span>
          </h1>
          
          {/* Decorative line */}
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mx-auto rounded-full mb-8"></div>
        </div>

        {/* Enhanced description */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Connecting top IT professionals with leading companies. We specialize in onsite, remote, and dedicated staffing solutions to build your dream team.
          </p>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="group bg-white/5 backdrop-blur-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-pink-600 text-white font-semibold py-4 px-8 border border-white/20 hover:border-pink-500/50 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/30">
            <span className="flex items-center justify-center gap-2">
              <span className="text-lg">For Professionals</span>
              <div className="w-2 h-2 bg-pink-400 rounded-full group-hover:bg-white transition-colors duration-300"></div>
            </span>
          </button>
          
          <button className="group bg-white/5 backdrop-blur-md hover:bg-gradient-to-r hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-4 px-8 border border-white/20 hover:border-purple-500/50 rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30">
            <span className="flex items-center justify-center gap-2">
              <span className="text-lg">For Clients</span>
              <div className="w-2 h-2 bg-purple-400 rounded-full group-hover:bg-white transition-colors duration-300"></div>
            </span>
          </button>
        </div>

        {/* Additional visual elements */}
        <div className="mt-16 flex justify-center space-x-8 opacity-60">
        </div>
      </div>
    </section>
  );
};

export default Hero;