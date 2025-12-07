import React from 'react';
import Section from './Section';
import { MATERIALS } from '../constants';
import { Star } from 'lucide-react';

const Materials: React.FC = () => {
  return (
    <Section id="materials" title="核心材料" subtitle="绿色环保，欧洲最高标准 EC1 PLUS">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {MATERIALS.map((material, index) => (
          <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row h-full transition-transform hover:-translate-y-1">
            <div className="md:w-1/3 bg-slate-100 flex items-center justify-center p-4">
              <img 
                src={material.imageUrl} 
                alt={material.name} 
                className="max-h-40 object-contain mix-blend-multiply" 
              />
            </div>
            <div className="p-6 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-900 mb-1">{material.name}</h3>
              <p className="text-[#E50112] font-medium text-sm mb-4">{material.description}</p>
              
              <ul className="space-y-1">
                {material.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-center text-sm text-slate-600">
                    <Star className="w-3 h-3 text-amber-400 mr-2 fill-current" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Materials;