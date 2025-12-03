import { useState } from 'react';

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      title: 'Web Development',
      description: 'Build scalable, high-performance web applications with modern technologies and best practices.',
      link: '#'
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      title: 'Cloud Solutions',
      description: 'Secure and scalable cloud infrastructure setup, migration, and management services.',
      link: '#'
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
        </svg>
      ),
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your audience and increase conversion rates.',
      link: '#'
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Data Analytics',
      description: 'Turn your data into actionable insights with our advanced analytics and reporting tools.',
      link: '#'
    },
    {
      id: 5,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile application development for iOS and Android.',
      link: '#'
    },
    {
      id: 6,
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'Consulting',
      description: 'Expert technology consulting to help you make informed decisions for your business.',
      link: '#'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-blue-600 mb-2 block">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Solutions for Modern Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide end-to-end services to help you scale, innovate, and stay ahead of the competition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article 
              key={service.id}
              className="bg-white p-8 rounded-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer group relative overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              {/* Icon */}
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 relative z-10">
                <div className="transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a 
                  href={service.link} 
                  className="inline-flex items-center text-blue-600 font-semibold text-sm group-hover:translate-x-2 transition-transform duration-300"
                >
                  Learn More 
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <button 
            onClick={() => {
              const element = document.getElementById('services');
              if (element) {
                const offsetTop = element.offsetTop - 80; // Adjust for navbar height
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            }}
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            View All Services
          </button>
        </div>

      </div>
    </section>
  );
}
