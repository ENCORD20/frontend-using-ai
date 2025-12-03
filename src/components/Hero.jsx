import { useState, useEffect } from 'react';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-white pt-20 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-green-50 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text Content */}
          <div 
            className={`transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Eyebrow Text */}
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-xs font-bold tracking-widest uppercase mb-6">
              Welcome to TechFlow
            </span>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Business with <span className="text-blue-600">Cutting-Edge</span> Technology
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
              We help forward-thinking companies build modern, scalable, and secure digital solutions that drive growth and innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button 
                onClick={() => console.log('Get Started Clicked')}
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center"
              >
                Get Started Free
              </button>
              
              <button 
                onClick={() => console.log('Watch Demo Clicked')}
                className="group border-2 border-gray-200 hover:border-blue-600 bg-white hover:bg-blue-50 text-gray-700 hover:text-blue-600 font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <svg 
                  className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="border-t border-gray-200 pt-8">
              <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ innovative companies</p>
              <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                {/* Placeholder Logos */}
                <div className="h-8 w-24 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-8 w-24 bg-gray-300 rounded animate-pulse delay-75"></div>
                <div className="h-8 w-24 bg-gray-300 rounded animate-pulse delay-150"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Image */}
          <div 
            className={`relative hidden lg:block transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 group">
              {/* Image Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
              
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Team working on technology" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/20 animate-bounce-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Growth Rate</p>
                    <p className="text-lg font-bold text-gray-900">+128%</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background Pattern behind image */}
            <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-blue-100 rounded-2xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
}
