import { NavItem, MaterialData, ProcessStep } from './types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'overview', label: '项目概况' },
  { id: 'problems', label: '核心问题' },
  { id: 'radon', label: '氡气危害' },
  { id: 'solution', label: '解决方案' },
  { id: 'materials', label: '核心材料' },
  { id: 'process', label: '施工工艺' },
  { id: 'pool', label: '泳池方案' },
];

export const MATERIALS: MaterialData[] = [
  {
    name: 'IMBERAL® EDS 54Z',
    description: '双组份高柔性防水涂料',
    features: ['防开裂', '不透水', '普遍使用', '可被填塞', '低温下也具有弹性'],
    imageUrl: 'https://ypanz.dpdns.org/pan/图片33.png'
  },
  {
    name: 'HADALAN® LF41 12E',
    description: '水性透气生态环氧树脂',
    features: ['快速固化', '不含VOC', '可用在潮湿基底', '耐化学腐蚀', '极高抗潮阻值'],
    imageUrl: 'https://ypanz.dpdns.org/pan/图片31.png'
  },
  {
    name: 'HADALAN® EBG 13E',
    description: '无溶剂地下室防潮环氧树脂',
    features: ['防水防潮', '可机械及化学承载性', '无挥发性有机物', '无溶剂'],
    imageUrl: 'https://ypanz.dpdns.org/pan/图片32.png'
  },
  {
    name: '渗透结晶防水砂浆',
    description: '深入渗透堵塞空隙',
    features: ['裂缝自愈合功能', '粘结强度高', '增强结构强度', '与建筑物同寿命', '绿色环保'],
    imageUrl: 'https://ypanz.dpdns.org/pan/图片30.png'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    title: '结构修复 (结构注浆)',
    description: '使用红外热成像仪检测，标记裂缝。采用悍能专利结构材料，从低向高“间歇注浆”，修复区域48h无渗漏。',
    images: ['https://ypanz.dpdns.org/pan/图片35.png', 'https://ypanz.dpdns.org/pan/图片36.png', 'https://ypanz.dpdns.org/pan/图片37.png']
  },
  {
    title: '基面打磨',
    description: '将地下室施工面进行全面打磨，去除附着物（如不牢固的水泥砂浆），保证防水层粘结强度。',
    images: ['https://ypanz.dpdns.org/pan/图片38.png', 'https://ypanz.dpdns.org/pan/图片39.png', 'https://ypanz.dpdns.org/pan/图片40.png']
  },
  {
    title: '穿墙水螺栓处理',
    description: '切割机切除筋头，防锈处理，使用修补砂浆（MDS）进行专业修补。',
    images: ['https://ypanz.dpdns.org/pan/图片41.png', 'https://ypanz.dpdns.org/pan/图片42.png', 'https://ypanz.dpdns.org/pan/图片43.png', 'https://ypanz.dpdns.org/pan/图片44.png']
  },
  {
    title: '墙面空鼓与裂缝修复',
    description: '空鼓锤检查，破损墙面用MFM 2K防水抹面砂浆挂网批刮修复。',
    images: ['https://ypanz.dpdns.org/pan/图片45.png', 'https://ypanz.dpdns.org/pan/图片46.png', 'https://ypanz.dpdns.org/pan/图片47.png']
  },
  {
    title: '阴角防水增强',
    description: '阴角快速砂浆修补，贴FDB柔性密封胶带，涂刷EDS柔性防水砂浆。',
    images: ['https://ypanz.dpdns.org/pan/图片48.png', 'https://ypanz.dpdns.org/pan/图片49.png', 'https://ypanz.dpdns.org/pan/图片50.png', 'https://ypanz.dpdns.org/pan/图片51.png']
  },
  {
    title: '地面基层处理',
    description: '电动打磨机清理表面浮浆，吸尘器除尘，修复后呈现坚实基层。',
    images: ['https://ypanz.dpdns.org/pan/图片52.png', 'https://ypanz.dpdns.org/pan/图片53.png', 'https://ypanz.dpdns.org/pan/图片54.png', 'https://ypanz.dpdns.org/pan/图片55.png']
  },
  {
    title: '后期开孔修复',
    description: '完工后如需打孔，需使用吹尘枪清理，蘸取负压防水材料安装，并涂刷防水。',
    images: ['https://ypanz.dpdns.org/pan/图片56.png', 'https://ypanz.dpdns.org/pan/图片57.png']
  }
];

export const POOL_IMAGES = [
  'https://ypanz.dpdns.org/pan/图片72.png',
  'https://ypanz.dpdns.org/pan/图片73.png',
  'https://ypanz.dpdns.org/pan/图片74.png'
];