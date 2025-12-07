import React from 'react';
import Section from './Section';
import { POOL_IMAGES } from '../constants';

const PoolSolution: React.FC = () => {
  return (
    <Section id="pool" title="泳池防水方案" subtitle="专用于泳池、深坑等下沉区域的高效防护" className="bg-red-50">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
           <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-[#E50112]">标准施工流程</h3>
              <ol className="relative border-l border-red-200 ml-3 space-y-6">
                {[
                  "打磨基面，局部破损使用MFM 2K修复砂浆修补平整",
                  "涂刷TG 10D界面剂加固基层",
                  "批刮两遍EDS防水材料，湿挂方式粘贴GWS网格布",
                  "特殊管口使用聚酯布裁剪服帖形状，做加强处理",
                  "干燥24小时后做闭水试验",
                  "闭水试验合格后，铺贴饰面砖"
                ].map((step, idx) => (
                  <li key={idx} className="pl-6 relative">
                    <span className="absolute -left-1.5 top-1.5 w-3 h-3 bg-[#E50112] rounded-full"></span>
                    <p className="text-slate-700 font-medium">{step}</p>
                  </li>
                ))}
              </ol>
           </div>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 gap-4">
           <div className="bg-white p-4 rounded-xl shadow-md">
             <h4 className="font-bold text-center mb-4 text-slate-500">施工效果展示</h4>
             <div className="grid grid-cols-2 gap-2">
                {POOL_IMAGES.map((img, idx) => (
                  <div key={idx} className={`rounded-lg overflow-hidden ${idx === 2 ? 'col-span-2' : ''}`}>
                    <img src={img} alt="Pool Construction" className="w-full h-40 object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
             </div>
           </div>
        </div>
      </div>
    </Section>
  );
};

export default PoolSolution;