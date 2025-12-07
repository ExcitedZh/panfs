import React from 'react';
import Section from './Section';
import { CheckCircle2, Layers, Shield } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <Section id="solution" title="解决方案" subtitle="德国悍能负压防水防潮系统">
      
      {/* Scope of Work */}
      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-6 text-center text-slate-800">负水压防潮工程范围</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['地面整体做负水压防水防潮', '挡土墙整体全做负压防水', '挡土墙连接顶部内翻至顶板1米'].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-slate-200 flex items-center justify-center text-center font-semibold text-slate-700">
              <CheckCircle2 className="text-green-500 mr-2 w-6 h-6" /> {item}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
            <h4 className="flex items-center text-xl font-bold text-[#E50112] mb-4">
              <Layers className="mr-2" /> 多道设防
            </h4>
            <p className="text-slate-700">
              <strong>5道防水层叠加</strong>，形成超强负压防水和防潮性能。不是单一材料，而是系统性的防护。
            </p>
          </div>
          
          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
             <h4 className="flex items-center text-xl font-bold text-[#E50112] mb-4">
              <Shield className="mr-2" /> 刚柔并济
            </h4>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <span className="font-bold mr-2">刚性:</span> EBG + LF41 环氧树脂，抗压并强力阻隔潮气。
              </li>
              <li className="flex items-start">
                <span className="font-bold mr-2">柔性:</span> EDS 54Z，抗裂性能优异，适应结构微小变形。
              </li>
            </ul>
          </div>

           <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
             <h4 className="text-lg font-bold mb-4 text-center">水汽渗透阻值对比</h4>
             <div className="space-y-4">
                <div>
                   <div className="flex justify-between text-sm mb-1">
                      <span>普通混凝土</span>
                      <span className="text-slate-500">1x10⁸</span>
                   </div>
                   <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div className="bg-slate-400 h-2.5 rounded-full" style={{ width: '10%' }}></div>
                   </div>
                </div>
                <div>
                   <div className="flex justify-between text-sm mb-1">
                      <span className="font-bold text-[#E50112]">悍能LF41环氧树脂</span>
                      <span className="font-bold text-[#E50112]">4.5x10¹⁰ (高100倍)</span>
                   </div>
                   <div className="w-full bg-slate-200 rounded-full h-2.5">
                      <div className="bg-[#E50112] h-2.5 rounded-full" style={{ width: '95%' }}></div>
                   </div>
                </div>
             </div>
             <p className="mt-4 text-xs text-slate-500 italic text-center">
               即使地下室水压高达40米，1平方米涂层每天仅允许约0.01克水汽通过。
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <img src="https://ypanz.dpdns.org/pan/图片8.png" alt="Solution Diagram 1" className="w-full rounded-xl shadow-lg" />
          <img src="https://ypanz.dpdns.org/pan/图片9.png" alt="Solution Diagram 2" className="w-full rounded-xl shadow-lg" />
        </div>
      </div>
    </Section>
  );
};

export default Solution;