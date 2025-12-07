import React from 'react';
import Section from './Section';
import { Skull, AlertOctagon, Activity } from 'lucide-react';

const RadonAnalysis: React.FC = () => {
  return (
    <Section id="radon" title="地下室通病直击" subtitle="氡气超标 —— 隐形的健康杀手">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#E50112]">
             <div className="flex items-start gap-4">
               <div className="bg-red-50 p-3 rounded-full text-[#E50112]">
                 <AlertOctagon className="w-6 h-6" />
               </div>
               <div>
                 <h3 className="text-xl font-bold mb-2 text-slate-800">什么是氡气危害？</h3>
                 <p className="text-slate-600 leading-relaxed">
                   地下室可能存在氡气浓度超标的情况，这种无色无味的放射性气体对健康有严重威胁。
                 </p>
               </div>
             </div>
          </div>

          <div className="space-y-4">
             <h4 className="text-lg font-bold text-slate-800 flex items-center">
               <Activity className="w-5 h-5 text-[#E50112] mr-2" />
               成因分析
             </h4>
             <ul className="list-disc list-inside space-y-2 text-slate-700 bg-slate-50 p-6 rounded-lg">
                <li>地下土壤中含有氡气，且其密度是大气密度的8倍，更容易在地下室和地下一层积聚。</li>
                <li>与地下土壤接触的地下室更容易被氡气通过基层的缝隙渗入。</li>
                <li><strong className="text-[#E50112]">国家标准：</strong>室内氡含量需低于300Bq/m³（参考GB/T16146-2015）</li>
             </ul>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border border-red-100">
             <h4 className="text-lg font-bold text-[#E50112] mb-2 flex items-center">
                <Skull className="w-5 h-5 mr-2" />
                健康影响
             </h4>
             <p className="text-slate-700">
                长期暴露在氡气超标的环境中，会增加患肺癌等疾病的风险，严重危害居住者的身体健康。
             </p>
          </div>
        </div>

        <div className="space-y-6">
           <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://ypanz.dpdns.org/图片75.png" alt="Radon Gas Hazard Source" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
              <p className="text-xs text-center text-slate-500 py-2 bg-slate-100">来源：哔哩哔哩 @张朝阳的物理课</p>
           </div>
           <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://ypanz.dpdns.org/图片76.png" alt="Radon Gas Infographic" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
           </div>
        </div>
      </div>
    </Section>
  );
};

export default RadonAnalysis;