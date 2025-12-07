import React from 'react';
import Section from './Section';
import { CloudRain, Wind, Droplet } from 'lucide-react';

const ProblemAnalysis: React.FC = () => {
  return (
    <Section id="problems" title="地下室潮湿发霉根源" dark className="bg-slate-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16">
        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-[#E50112] transition-colors group">
          <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E50112] transition-colors">
            <Droplet className="w-8 h-8 text-red-200 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">渗漏水</h3>
          <p className="text-slate-400">
            裂缝明水渗漏、毛细孔渗水导致阴湿。水压导致结构薄弱点进水。
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-[#E50112] transition-colors group">
          <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E50112] transition-colors">
            <Wind className="w-8 h-8 text-red-200 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">潮气入侵</h3>
          <p className="text-slate-400">
            土壤中的水汽经混凝土毛细孔进入室内，导致环境湿度居高不下。
          </p>
        </div>

        <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-[#E50112] transition-colors group">
          <div className="bg-slate-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#E50112] transition-colors">
            <CloudRain className="w-8 h-8 text-red-200 group-hover:text-white" />
          </div>
          <h3 className="text-xl font-bold text-white mb-4">冷凝结露</h3>
          <p className="text-slate-400">
            室内外温差大，加上空气中水汽含量高，导致墙壁表面产生结露水。
          </p>
        </div>
      </div>

      <div className="bg-slate-800 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
         <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-[#E50112] pl-4">综合治理策略</h3>
            <ul className="space-y-4">
              <li className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#E50112] rounded-full mr-3"></span>
                <span><strong className="text-white">防水：</strong> 明水渗漏治理 + 毛细孔渗水治理</span>
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#E50112] rounded-full mr-3"></span>
                <span><strong className="text-white">防潮：</strong> 阻隔土壤中潮气进入室内</span>
              </li>
              <li className="flex items-center text-slate-300">
                <span className="w-2 h-2 bg-[#E50112] rounded-full mr-3"></span>
                <span><strong className="text-white">防结露：</strong> 保温系统 + 设备除湿</span>
              </li>
            </ul>
         </div>
         <div className="md:w-1/2 relative min-h-[300px]">
            <img src="https://ypanz.dpdns.org/pan/图片5.png" alt="Moisture problems" className="absolute inset-0 w-full h-full object-cover" />
         </div>
      </div>
    </Section>
  );
};

export default ProblemAnalysis;