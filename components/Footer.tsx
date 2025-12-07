import React from 'react';
import { Phone, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="mb-8 flex flex-col items-center gap-2">
            <img src="https://ypanz.dpdns.org/pan/logo.png" alt="Hahne Logo" className="h-12 w-auto bg-white/10 p-1 rounded" />
            <h2 className="text-2xl font-bold">湖北悍能无忧</h2>
            <p className="text-slate-400">百年卓越品牌，德国原装进口</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-8 text-sm">
          <div className="flex items-center gap-2 text-lg font-semibold">
            <Phone className="w-5 h-5 text-[#E50112]" />
            <span>联系电话：19972110188</span>
          </div>
        </div>

        <div className="text-slate-600 text-sm">
          <p>© 2024 Hubei Hahne Worry-Free. All rights reserved.</p>
          <p className="mt-2 text-xs">梦湖香郡灏17项目专用提案</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;