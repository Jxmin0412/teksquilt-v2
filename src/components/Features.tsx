 import React from 'react';

const Features = () => {
  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
      {/* Background blur effects for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 backdrop-blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Main heading with enhanced typography */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
            Our Staffing Solutions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Services grid with enhanced cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">O</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-pink-400 transition-colors duration-300">
                Onsite Staffing
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Placing top-tier tech professionals directly at your workplace for seamless integration and collaborative excellence.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">R</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors duration-300">
                Remote Talent
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Access a global pool of expert developers, engineers, and IT specialists working remotely with proven expertise.
            </p>
          </div>

          <div className="group bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                Dedicated Teams
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Building dedicated teams of tech experts to accelerate your projects and drive innovation forward.
            </p>
          </div>
        </div>

        {/* Current openings section with enhanced styling */}
        <div id="jobs" className="text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Current Openings
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="group bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold py-4 px-8 rounded-full border border-pink-400/30 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <h3 className="text-lg group-hover:text-pink-100 transition-colors duration-200">
                DevOps Engineer
              </h3>
            </div>
            
            <div className="group bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold py-4 px-8 rounded-full border border-purple-400/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <h3 className="text-lg group-hover:text-purple-100 transition-colors duration-200">
                Site Reliability Engineer
              </h3>
            </div>
            
            <div className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold py-4 px-8 rounded-full border border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:transform hover:scale-105 cursor-pointer">
              <h3 className="text-lg group-hover:text-blue-100 transition-colors duration-200">
                Full-Stack Developer
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;