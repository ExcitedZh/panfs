import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
          alt="Luxury Villa Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-800/60"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in-down">
          <img src="https://ypanz.dpdns.org/pan/logo.png" alt="Hahne Logo" className="h-16 bg-white/10 p-2 rounded backdrop-blur-sm" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
          德国悍能<br/>负压防水防潮系统
        </h1>
        
        <div className="w-24 h-1 bg-[#E50112] mx-auto mb-8 rounded-full"></div>

        <p className="text-xl md:text-2xl font-light text-slate-200 mb-2">
          项目名称：梦湖香郡灏17
        </p>
        <p className="text-lg text-red-200 font-medium tracking-widest uppercase mb-12">
          湖北悍能无忧 · 百年卓越品牌 · 德国原装进口
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-[#E50112] hover:bg-[#c4010f] text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-red-500/30"
          >
            开始了解项目 <ArrowRight className="w-5 h-5" />
          </button>
          <div className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg font-medium flex items-center justify-center gap-2">
             <ShieldCheck className="w-5 h-5 text-green-400" /> 100% 德国工艺
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;