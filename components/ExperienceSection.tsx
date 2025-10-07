import React from 'react';
import { EXPERIENCES } from '../constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experiencias" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 gradient-text">
          Experiências
        </h2>
        <div className="relative">
          {/* Vertical Line - Hidden on mobile, visible on medium screens and up */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 gradient-bg hidden md:block"></div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={exp.id} className="relative flex flex-col items-center md:flex-row md:justify-between w-full">
                {/* Content */}
                <div className={`w-full md:w-5/12 text-center ${index % 2 === 0 ? 'md:order-1 md:text-right' : 'md:order-3 md:text-left'}`}>
                  <p className="font-bold text-lg">{exp.company}</p>
                  <p className="text-gray-400 my-1">{exp.description}</p>
                </div>

                {/* Dot */}
                <div className="order-2 w-8 h-8 rounded-full bg-black border-2 border-[#00CFFF] flex-shrink-0 flex items-center justify-center my-4 md:my-0">
                    <div className="w-3 h-3 rounded-full gradient-bg"></div>
                </div>

                {/* Spacer (only for desktop layout) */}
                <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'md:order-3' : 'md:order-1'}`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;