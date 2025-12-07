import React from 'react';
import Section from './Section';
import { MapPin, Droplets, Ruler, AlertTriangle } from 'lucide-react';

const ProjectOverview: React.FC = () => {
  return (
    <Section id="overview" title="项目概况" subtitle="临湖独栋别墅 · 高难度地下防水挑战">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#E50112] hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-[#E50112]">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">地理环境严峻</h3>
                <p className="text-slate-600 leading-relaxed">
                  项目为临湖独栋别墅，进行了重大的拆改建设。地下水丰富且离湖面非常近，最近距离仅<span className="font-bold text-[#E50112]">17米</span>；地下室平面比湖面低3米。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#E50112] hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-[#E50112]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">现有隐患严重</h3>
                <p className="text-slate-600 leading-relaxed">
                  现场地下室积水深度目测约1.5米。地下室为业主自行扩建，目前未做任何防水措施，薄弱环节多，无法阻止负水压及潮气侵入。
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-[#E50112] hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="bg-red-50 p-3 rounded-full text-[#E50112]">
                <Ruler className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">结构复杂</h3>
                <p className="text-slate-600 leading-relaxed">
                  地下室游泳池、深坑、设备间下沉 <span className="font-bold">1.2米</span>，电梯井、车位下沉 0.2米。梅雨季节地下水位高、水压大。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img src="https://ypanz.dpdns.org/pan/图片1.png" alt="Site View 1" className="rounded-lg shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
          <img src="https://ypanz.dpdns.org/pan/图片2.png" alt="Site View 2" className="rounded-lg shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
          <img src="https://ypanz.dpdns.org/pan/图片3.png" alt="Site View 3" className="rounded-lg shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
          <img src="https://ypanz.dpdns.org/pan/图片4.png" alt="Site View 4" className="rounded-lg shadow-lg w-full h-48 object-cover transform hover:scale-105 transition-transform duration-500" />
        </div>

      </div>
    </Section>
  );
};

export default ProjectOverview;