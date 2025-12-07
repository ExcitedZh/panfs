import React from 'react';
import Section from './Section';
import { PROCESS_STEPS } from '../constants';

const Process: React.FC = () => {
  return (
    <Section id="process" title="标准化施工工艺" subtitle="18道德国标准工艺，细节决定成败">
      
      <div className="mb-10 p-6 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
         <h4 className="font-bold text-amber-800 mb-2">施工前准备</h4>
         <p className="text-amber-700 text-sm">
           为了保证效果，悍能防水系统对基面要求极其严格。基面处理耗时通常占整个工期的60%。包含工业除湿、侦查漏水点、打磨至混凝土层、消除空鼓、去除钢筋头等。
         </p>
      </div>

      <div className="relative border-l-2 border-red-200 ml-4 md:ml-8 space-y-12">
        {PROCESS_STEPS.map((step, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-[#E50112] rounded-full border-4 border-white shadow-sm"></div>
            
            <div className="flex flex-col gap-4">
              <div>
                <span className="text-xs font-bold tracking-wider text-[#E50112] uppercase">Step {index + 1}</span>
                <h3 className="text-xl font-bold text-slate-800">{step.title}</h3>
                <p className="text-slate-600 mt-2 max-w-3xl">{step.description}</p>
              </div>

              {/* Step Images Gallery */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
                {step.images.map((img, imgIdx) => (
                  <div key={imgIdx} className="overflow-hidden rounded-lg shadow-sm bg-slate-100 aspect-video group">
                    <img 
                      src={img} 
                      alt={`${step.title} ${imgIdx + 1}`} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Process;