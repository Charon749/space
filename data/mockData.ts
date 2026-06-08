// 用户信息
export const travelers = {
  me: {
    name: "旅人",
    avatar: "✦",
    title: "星际探索者"
  },
  partner: {
    name: "旅伴",
    avatar: "✧",
    title: "宇宙漫游者"
  },
  journey: {
    days: 438,
    universesExplored: 17,
    memoriesRecorded: 58,
    badges: ["初入宇宙", "星光收集者", "时空旅者", "连续7天", "连续30天"]
  }
};

// 互动类型枚举
export type InteractionType = 
  | 'choice'        // 共同选择
  | 'letter'        // 写信
  | 'memory'        // 记录记忆
  | 'wish'          // 许愿
  | 'gift'          // 赠送礼物
  | 'story'         // 故事接龙
  | 'photo'         // 上传照片
  | 'question';     // 问答

// 稀有度
export type Rarity = 'common' | 'rare' | 'epic' | 'legendary';

// 宇宙类别
export type Category = 'fantasy' | 'scifi' | 'healing' | 'romance' | 'mystery';

// 宇宙类型
export interface Universe {
  id: string;
  name: string;
  rarity: Rarity;
  category: Category;
  title: string;
  description: string;
  background: string;
  backgroundClass: string;
  yourRole: string;
  partnerRole: string;
  yourRoleDescription: string;
  partnerRoleDescription: string;
  interactionType: InteractionType;
  interactionTitle: string;
  interactionDescription: string;
  interactionPrompt: string;
  options?: Option[];
  memorySummary: string;
  keywords: string[];
  icon: string;
}

// 选项
export interface Option {
  id: string;
  text: string;
  icon?: string;
  effect?: string;
}

// 记忆
export interface Memory {
  id: string;
  universeId: string;
  universeName: string;
  title: string;
  description: string;
  image?: string;
  timestamp: string;
  keywords: string[];
  rarity: Rarity;
  yourAnswer?: string;
  partnerAnswer?: string;
}

// 星图数据
export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  universeId: string;
  universeName: string;
  date: string;
  rarity: Rarity;
}

// 成就徽章
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: Rarity;
  condition: string;
  unlocked: boolean;
  unlockedAt?: string;
}

// 30个预设宇宙数据
export const universeTemplates: Universe[] = [
  // 奇幻类
  {
    id: "cloud-train",
    name: "云上列车",
    rarity: "common",
    category: "fantasy",
    title: "云端列车之旅",
    description: "在这个世界里，所有列车都行驶在云海之上。每一列火车都承载着不同的故事，从一个云端驿站驶向另一个未知的目的地。",
    background: "cloud-train",
    backgroundClass: "bg-gradient-to-b from-amber-900/80 via-orange-800/60 to-slate-900/80",
    yourRole: "轨道工程师",
    partnerRole: "神秘旅客",
    yourRoleDescription: "负责维护云端轨道的安全，确保列车平稳运行",
    partnerRoleDescription: "带着秘密登上列车的神秘旅人",
    interactionType: "choice",
    interactionTitle: "选择下一站",
    interactionDescription: "列车即将到达一个分叉路口，你们需要共同决定前往哪个方向。",
    interactionPrompt: "前方有三个神秘站点，你们决定前往：",
    options: [
      { id: "station-1", text: "月光港", icon: "🌙", effect: "传说那里的夜晚永远不会结束" },
      { id: "station-2", text: "星尘驿站", icon: "⭐", effect: "可能会遇到星星商人" },
      { id: "station-3", text: "迷雾镇", icon: "🌫️", effect: "充满未知的神秘之地" }
    ],
    memorySummary: "在云上列车的旅途中，你们共同选择了前往{station}，开启了一段神秘的云端冒险。",
    keywords: ["云端", "列车", "冒险"],
    icon: "🚂"
  },
  {
    id: "dragon-kingdom",
    name: "龙眠王国",
    rarity: "legendary",
    category: "fantasy",
    title: "巨龙之梦",
    description: "传说中，古老的巨龙沉睡在这片土地之下。它们的梦境构成了整个王国的现实。当巨龙翻身时，山脉会移动；当它们呼吸时，会带来四季的变化。",
    background: "dragon-kingdom",
    backgroundClass: "bg-gradient-to-b from-red-900/80 via-purple-900/60 to-slate-900/80",
    yourRole: "流浪骑士",
    partnerRole: "龙语学者",
    yourRoleDescription: "勇敢的骑士，寻找传说中的巨龙",
    partnerRoleDescription: "能够听懂龙语的神秘学者",
    interactionType: "story",
    interactionTitle: "唤醒巨龙",
    interactionDescription: "你们发现了沉睡的远古巨龙，需要共同决定如何唤醒它。",
    interactionPrompt: "巨龙的眼睛微微颤动，你们决定...",
    memorySummary: "在龙眠王国，你们共同创造了一段传奇：骑士与学者携手唤醒了沉睡千年的巨龙，获得了永恒的祝福。",
    keywords: ["巨龙", "传奇", "勇气"],
    icon: "🐉"
  },
  {
    id: "star-library",
    name: "星辰图书馆",
    rarity: "epic",
    category: "fantasy",
    title: "星图之藏",
    description: "这里收藏着宇宙中所有的故事。每一本书都是一颗星星的记忆，书页之间流淌着星河。读者可以进入书中的世界，亲身经历那些故事。",
    background: "star-library",
    backgroundClass: "bg-gradient-to-b from-indigo-900/80 via-purple-800/60 to-slate-900/80",
    yourRole: "藏书管理员",
    partnerRole: "故事收集者",
    yourRoleDescription: "守护图书馆知识的守护者",
    partnerRoleDescription: "寻找珍贵故事的旅人",
    interactionType: "memory",
    interactionTitle: "分享回忆",
    interactionDescription: "在星辰图书馆中，分享一个只属于你们的珍贵回忆。",
    interactionPrompt: "写下一段只属于你们的回忆：",
    memorySummary: "在星辰图书馆，你们共同记录了一段珍贵的回忆，这本书将永远珍藏在星空中。",
    keywords: ["书籍", "回忆", "星空"],
    icon: "📚"
  },
  {
    id: "time-garden",
    name: "时间花园",
    rarity: "rare",
    category: "fantasy",
    title: "永恒之花",
    description: "这里的每一朵花都是一个时间的片段。当花朵绽放时，可以看到过去或未来的景象。园丁们精心照料这些时间之花，让珍贵的记忆永远绽放。",
    background: "time-garden",
    backgroundClass: "bg-gradient-to-b from-green-900/80 via-teal-700/60 to-slate-900/80",
    yourRole: "园丁",
    partnerRole: "时间旅客",
    yourRoleDescription: "培育时间之花的守护者",
    partnerRoleDescription: "穿越时空的神秘旅人",
    interactionType: "memory",
    interactionTitle: "记录瞬间",
    interactionDescription: "记录今天最值得保存的瞬间，让它成为永恒的记忆。",
    interactionPrompt: "写下今天最值得保存的瞬间：",
    memorySummary: "在时间花园里，你们共同培育了一朵记忆之花，记录了今天最美好的时刻。",
    keywords: ["时间", "花朵", "瞬间"],
    icon: "🌸"
  },
  {
    id: "misty-forest",
    name: "迷雾森林",
    rarity: "rare",
    category: "fantasy",
    title: "迷雾奇遇",
    description: "这片森林被永恒的迷雾笼罩，里面住着各种神秘的生物。每一次进入都会遇到不同的奇遇，没有人能两次走同一条路。",
    background: "misty-forest",
    backgroundClass: "bg-gradient-to-b from-green-800/80 via-emerald-700/60 to-slate-900/80",
    yourRole: "森林游侠",
    partnerRole: "精灵语者",
    yourRoleDescription: "熟悉森林每一条路径的守护者",
    partnerRoleDescription: "能够与森林精灵沟通的使者",
    interactionType: "choice",
    interactionTitle: "森林奇遇",
    interactionDescription: "在迷雾中探索，遇到神秘的选择。",
    interactionPrompt: "你们在迷雾中发现了三条小路，选择哪一条？",
    options: [
      { id: "path-1", text: "发光的蘑菇小径", icon: "🍄", effect: "可能会遇到友好的精灵" },
      { id: "path-2", text: "古老的藤蔓桥", icon: "🌿", effect: "通向神秘的古树" },
      { id: "path-3", text: "发光的萤火虫群", icon: "✨", effect: "跟随它们会发现什么" }
    ],
    memorySummary: "在迷雾森林中，你们选择了{path}，遇到了一段难忘的奇遇。",
    keywords: ["森林", "迷雾", "奇遇"],
    icon: "🌲"
  },
  {
    id: "crystal-cave",
    name: "水晶洞穴",
    rarity: "legendary",
    category: "fantasy",
    title: "水晶之心",
    description: "深藏于地底的神秘洞穴，布满了闪闪发光的水晶。每一颗水晶都蕴含着古老的魔法力量。",
    background: "crystal-cave",
    backgroundClass: "bg-gradient-to-b from-cyan-900/80 via-blue-800/60 to-slate-900/80",
    yourRole: "水晶矿工",
    partnerRole: "宝石鉴定师",
    yourRoleDescription: "寻找珍贵水晶的探险家",
    partnerRoleDescription: "能够辨别宝石价值的专家",
    interactionType: "gift",
    interactionTitle: "水晶礼物",
    interactionDescription: "选择一颗水晶作为礼物送给对方。",
    interactionPrompt: "选择一颗水晶送给对方：",
    options: [
      { id: "crystal-1", text: "紫水晶", icon: "💜", effect: "代表智慧与神秘" },
      { id: "crystal-2", text: "粉水晶", icon: "💖", effect: "代表爱意与温柔" },
      { id: "crystal-3", text: "蓝水晶", icon: "💎", effect: "代表宁静与勇气" }
    ],
    memorySummary: "在水晶洞穴中，你们互相赠送了{crystal}，这份礼物将永远珍藏在彼此心中。",
    keywords: ["水晶", "礼物", "魔法"],
    icon: "💎"
  },
  {
    id: "aurora-forest",
    name: "极光森林",
    rarity: "epic",
    category: "fantasy",
    title: "极光之舞",
    description: "这片森林的上空永远闪耀着美丽的极光。传说极光中住着光之精灵，它们会在极光最美丽的时候出现。",
    background: "aurora-forest",
    backgroundClass: "bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-slate-900/80",
    yourRole: "极光守望者",
    partnerRole: "精灵使者",
    yourRoleDescription: "守护极光的守护者",
    partnerRoleDescription: "能够与光之精灵沟通的使者",
    interactionType: "wish",
    interactionTitle: "极光许愿",
    interactionDescription: "在极光下许下一个愿望，让精灵们听到你们的心声。",
    interactionPrompt: "在极光下许下今天的愿望：",
    memorySummary: "在极光森林中，你们共同许下了美好的愿望，极光精灵们听到了你们的心声。",
    keywords: ["极光", "愿望", "精灵"],
    icon: "🌌"
  },
  // 科幻类
  {
    id: "galaxy-post",
    name: "银河邮局",
    rarity: "common",
    category: "scifi",
    title: "星际信笺",
    description: "这是连接所有宇宙的邮政系统。邮差们骑着流星穿梭于星际之间，将思念和祝福送到每一个角落。",
    background: "galaxy-post",
    backgroundClass: "bg-gradient-to-b from-slate-900/80 via-indigo-800/60 to-black/80",
    yourRole: "星际邮差",
    partnerRole: "未来收信人",
    yourRoleDescription: "负责投递星际邮件的信使",
    partnerRoleDescription: "等待来自未来信件的神秘人",
    interactionType: "letter",
    interactionTitle: "跨越时空的信",
    interactionDescription: "互相写一封跨越时空的信，让银河邮局传递你们的心意。",
    interactionPrompt: "写一封信给对方：",
    memorySummary: "在银河邮局，你们互相写下了跨越时空的信件，让星星传递你们的心意。",
    keywords: ["信件", "时空", "星星"],
    icon: "✉️"
  },
  {
    id: "space-port",
    name: "太空港",
    rarity: "legendary",
    category: "scifi",
    title: "星际启航",
    description: "这是宇宙中最繁忙的太空港口，来自各个星球的飞船在这里停靠。这里是冒险者的聚集地。",
    background: "space-port",
    backgroundClass: "bg-gradient-to-b from-blue-900/80 via-cyan-800/60 to-black/80",
    yourRole: "飞船船长",
    partnerRole: "导航员",
    yourRoleDescription: "指挥飞船航行的勇敢船长",
    partnerRoleDescription: "绘制星际航线的导航专家",
    interactionType: "choice",
    interactionTitle: "选择目的地",
    interactionDescription: "选择下一个探索的星球。",
    interactionPrompt: "选择下一个探索的星球：",
    options: [
      { id: "planet-1", text: "翡翠星", icon: "🌍", effect: "绿色的丛林星球" },
      { id: "planet-2", text: "水晶星", icon: "💠", effect: "全是水晶的神秘星球" },
      { id: "planet-3", text: "音乐星", icon: "🎵", effect: "充满音乐的星球" }
    ],
    memorySummary: "在太空港，你们选择前往{planet}，开启了新的星际冒险。",
    keywords: ["太空", "冒险", "星球"],
    icon: "🚀"
  },
  {
    id: "time-station",
    name: "时间站",
    rarity: "epic",
    category: "scifi",
    title: "时空枢纽",
    description: "这是连接不同时间线的枢纽，在这里可以看到过去、现在和未来的交汇。",
    background: "time-station",
    backgroundClass: "bg-gradient-to-b from-amber-900/80 via-yellow-700/60 to-slate-900/80",
    yourRole: "时间守护者",
    partnerRole: "时空旅行者",
    yourRoleDescription: "维护时间线稳定的守护者",
    partnerRoleDescription: "穿梭于不同时空的旅行者",
    interactionType: "story",
    interactionTitle: "时间故事",
    interactionDescription: "共同创作一个关于时间的故事。",
    interactionPrompt: "你们站在时间的十字路口，决定...",
    memorySummary: "在时间站，你们共同创作了一段穿越时空的故事，成为了时间的传说。",
    keywords: ["时间", "穿越", "传说"],
    icon: "⏳"
  },
  {
    id: "quantum-lab",
    name: "量子实验室",
    rarity: "rare",
    category: "scifi",
    title: "量子纠缠",
    description: "在这个实验室里，科学家们研究量子纠缠现象。在这里，两个粒子无论相距多远都会相互影响。",
    background: "quantum-lab",
    backgroundClass: "bg-gradient-to-b from-emerald-900/80 via-teal-700/60 to-slate-900/80",
    yourRole: "量子物理学家",
    partnerRole: "实验助手",
    yourRoleDescription: "研究量子现象的科学家",
    partnerRoleDescription: "协助实验的助手",
    interactionType: "memory",
    interactionTitle: "量子记忆",
    interactionDescription: "记录一个只有你们知道的量子时刻。",
    interactionPrompt: "写下你们的量子时刻：",
    memorySummary: "在量子实验室中，你们记录了一个特殊的量子时刻，让这份记忆永远纠缠在一起。",
    keywords: ["量子", "科学", "记忆"],
    icon: "⚛️"
  },
  {
    id: "digital-world",
    name: "数字世界",
    rarity: "rare",
    category: "scifi",
    title: "代码之境",
    description: "这是一个由代码构成的虚拟世界，每一个程序都是一个生命，每一行代码都是一段故事。",
    background: "digital-world",
    backgroundClass: "bg-gradient-to-b from-green-900/80 via-emerald-700/60 to-black/80",
    yourRole: "程序员",
    partnerRole: "数字精灵",
    yourRoleDescription: "编写代码创造世界的工程师",
    partnerRoleDescription: "生活在代码中的数字精灵",
    interactionType: "story",
    interactionTitle: "代码故事",
    interactionDescription: "用代码创造一个属于你们的故事。",
    interactionPrompt: "你们决定编写一段代码，创造...",
    memorySummary: "在数字世界中，你们用代码共同创造了一个独特的故事，成为了数字世界的传说。",
    keywords: ["代码", "数字", "创造"],
    icon: "💻"
  },
  // 治愈类
  {
    id: "dawn-island",
    name: "晨曦岛",
    rarity: "common",
    category: "healing",
    title: "晨光之岛",
    description: "这座岛屿永远处于黎明时分。太阳刚刚升起，金色的光芒洒在宁静的海面上。",
    background: "dawn-island",
    backgroundClass: "bg-gradient-to-b from-orange-900/80 via-amber-700/60 to-slate-900/80",
    yourRole: "灯塔守望者",
    partnerRole: "海鸟研究员",
    yourRoleDescription: "守护灯塔的守护者",
    partnerRoleDescription: "研究海鸟的学者",
    interactionType: "photo",
    interactionTitle: "分享晨光",
    interactionDescription: "分享今天最想分享的一件小事。",
    interactionPrompt: "分享今天最想告诉对方的一件小事：",
    memorySummary: "在晨曦岛上，你们分享了今天最温暖的小事，让晨光见证了你们的心意。",
    keywords: ["晨曦", "温暖", "分享"],
    icon: "🌅"
  },
  {
    id: "moon-lake",
    name: "月光湖",
    rarity: "rare",
    category: "healing",
    title: "月光倒影",
    description: "这片湖泊在夜晚会倒映出最美丽的月光。传说在这里许愿，月亮会听到你们的心声。",
    background: "moon-lake",
    backgroundClass: "bg-gradient-to-b from-indigo-900/80 via-purple-800/60 to-slate-900/80",
    yourRole: "月光守护者",
    partnerRole: "湖边诗人",
    yourRoleDescription: "守护月光湖的守护者",
    partnerRoleDescription: "在湖边创作诗歌的诗人",
    interactionType: "wish",
    interactionTitle: "月光许愿",
    interactionDescription: "在月光下许下一个愿望。",
    interactionPrompt: "在月光下许下今天的愿望：",
    memorySummary: "在月光湖边，你们共同许下了美好的愿望，让月光见证了你们的心意。",
    keywords: ["月光", "愿望", "宁静"],
    icon: "🌙"
  },
  {
    id: "wind-valley",
    name: "风之谷",
    rarity: "common",
    category: "healing",
    title: "风的歌声",
    description: "这是一个被风守护的山谷，风声会带来远方的消息。在这里，时间仿佛静止。",
    background: "wind-valley",
    backgroundClass: "bg-gradient-to-b from-emerald-900/80 via-green-700/60 to-slate-900/80",
    yourRole: "风语者",
    partnerRole: "旅行者",
    yourRoleDescription: "能够听懂风声的人",
    partnerRoleDescription: "追寻风的脚步的旅人",
    interactionType: "letter",
    interactionTitle: "风中的信",
    interactionDescription: "写一封信让风带给对方。",
    interactionPrompt: "写一封信让风带给对方：",
    memorySummary: "在风之谷中，你们让风传递了彼此的心意，让这份思念随风飘散。",
    keywords: ["风", "思念", "自由"],
    icon: "🌬️"
  },
  {
    id: "flower-field",
    name: "花田",
    rarity: "epic",
    category: "healing",
    title: "花海之约",
    description: "这片花田永远盛开着各种美丽的花朵。每一朵花都是一个祝福，每一片花瓣都是一句情话。",
    background: "flower-field",
    backgroundClass: "bg-gradient-to-b from-pink-900/80 via-rose-700/60 to-slate-900/80",
    yourRole: "花农",
    partnerRole: "花仙子",
    yourRoleDescription: "照料花海的花农",
    partnerRoleDescription: "守护花朵的仙子",
    interactionType: "gift",
    interactionTitle: "花语礼物",
    interactionDescription: "选择一朵花送给对方，每朵花都有不同的花语。",
    interactionPrompt: "选择一朵花送给对方：",
    options: [
      { id: "flower-1", text: "玫瑰", icon: "🌹", effect: "代表我爱你" },
      { id: "flower-2", text: "向日葵", icon: "🌻", effect: "代表忠诚" },
      { id: "flower-3", text: "薰衣草", icon: "💜", effect: "代表等待" },
      { id: "flower-4", text: "樱花", icon: "🌸", effect: "代表美好" }
    ],
    memorySummary: "在花田中，你们互相赠送了{flower}，让花语传递了你们的心意。",
    keywords: ["花朵", "花语", "浪漫"],
    icon: "🌺"
  },
  {
    id: "snow-mountain",
    name: "雪山",
    rarity: "rare",
    category: "healing",
    title: "雪峰之巅",
    description: "这座雪山高耸入云，山顶永远覆盖着白雪。在这里，一切烦恼都会被冰雪净化。",
    background: "snow-mountain",
    backgroundClass: "bg-gradient-to-b from-slate-300/80 via-blue-400/60 to-slate-900/80",
    yourRole: "登山者",
    partnerRole: "雪精灵",
    yourRoleDescription: "征服雪山的勇敢登山者",
    partnerRoleDescription: "守护雪山的精灵",
    interactionType: "memory",
    interactionTitle: "雪山记忆",
    interactionDescription: "在雪山之巅记录你们的记忆。",
    interactionPrompt: "写下你们在雪山之巅的感受：",
    memorySummary: "在雪山之巅，你们共同记录了这段难忘的时刻，让白雪见证了你们的坚强。",
    keywords: ["雪山", "坚强", "纯净"],
    icon: "⛰️"
  },
  // 浪漫类
  {
    id: "rainbow-bridge",
    name: "彩虹桥",
    rarity: "epic",
    category: "romance",
    title: "彩虹之约",
    description: "这是一座由彩虹构成的桥，连接着两个世界。传说相爱的人走过这座桥，他们的爱情会得到彩虹的祝福。",
    background: "rainbow-bridge",
    backgroundClass: "bg-gradient-to-b from-red-900/40 via-orange-700/40 via-yellow-500/40 via-green-600/40 via-blue-700/40 to-purple-800/60",
    yourRole: "守护者",
    partnerRole: "寻梦人",
    yourRoleDescription: "守护彩虹桥的守护者",
    partnerRoleDescription: "寻找真爱的寻梦人",
    interactionType: "gift",
    interactionTitle: "彩虹礼物",
    interactionDescription: "在彩虹桥上互相赠送礼物。",
    interactionPrompt: "选择一份彩虹礼物送给对方：",
    options: [
      { id: "gift-1", text: "彩虹水晶", icon: "🌈", effect: "代表永恒的爱情" },
      { id: "gift-2", text: "星光吊坠", icon: "⭐", effect: "代表永恒的承诺" },
      { id: "gift-3", text: "玫瑰花瓣", icon: "🌹", effect: "代表浪漫的心意" }
    ],
    memorySummary: "在彩虹桥上，你们互相赠送了{gift}，让彩虹见证了你们的爱情。",
    keywords: ["彩虹", "爱情", "承诺"],
    icon: "🌈"
  },
  {
    id: "love-letter",
    name: "情书驿站",
    rarity: "rare",
    category: "romance",
    title: "情书之约",
    description: "这是一个专门传递情书的驿站。在这里，每一封情书都会被精心包装，送到爱人手中。",
    background: "love-letter",
    backgroundClass: "bg-gradient-to-b from-pink-900/80 via-red-700/60 to-slate-900/80",
    yourRole: "情书传递者",
    partnerRole: "收信人",
    yourRoleDescription: "传递情书的信使",
    partnerRoleDescription: "等待情书的爱人",
    interactionType: "letter",
    interactionTitle: "写一封情书",
    interactionDescription: "写一封情书送给对方。",
    interactionPrompt: "写一封情书：",
    memorySummary: "在情书驿站，你们互相写下了深情的情书，让爱意传递到彼此心中。",
    keywords: ["情书", "爱意", "浪漫"],
    icon: "💌"
  },
  {
    id: "starlight-dance",
    name: "星光舞会",
    rarity: "legendary",
    category: "romance",
    title: "星夜之舞",
    description: "在这个宇宙中，星星会在夜晚降临，与人们共舞。每一颗星星都是一位舞者，每一段舞蹈都是一首爱情诗。",
    background: "starlight-dance",
    backgroundClass: "bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-slate-900/80",
    yourRole: "星舞者",
    partnerRole: "月光伴舞",
    yourRoleDescription: "与星星共舞的舞者",
    partnerRoleDescription: "伴随月光起舞的伴侣",
    interactionType: "story",
    interactionTitle: "星光故事",
    interactionDescription: "共同创作一个关于星星和舞蹈的浪漫故事。",
    interactionPrompt: "在星光下，你们决定...",
    memorySummary: "在星光舞会中，你们共同创作了一段浪漫的星夜之舞，成为了永恒的传说。",
    keywords: ["星光", "舞蹈", "浪漫"],
    icon: "💫"
  },
  {
    id: "sunset-beach",
    name: "日落海滩",
    rarity: "common",
    category: "romance",
    title: "黄昏之约",
    description: "这片海滩每天都会上演最美的日落。在这里，时间仿佛变慢，让人们能够尽情享受彼此的陪伴。",
    background: "sunset-beach",
    backgroundClass: "bg-gradient-to-b from-orange-900/80 via-red-700/60 to-slate-900/80",
    yourRole: "日落守望者",
    partnerRole: "沙滩漫步者",
    yourRoleDescription: "守护日落的守护者",
    partnerRoleDescription: "在沙滩漫步的旅人",
    interactionType: "memory",
    interactionTitle: "日落记忆",
    interactionDescription: "记录在日落海滩的美好时光。",
    interactionPrompt: "写下你们在日落海滩的感受：",
    memorySummary: "在日落海滩，你们共同记录了这段美好的时光，让夕阳见证了你们的爱情。",
    keywords: ["日落", "海滩", "爱情"],
    icon: "🌅"
  },
  {
    id: "chocolate-factory",
    name: "巧克力工厂",
    rarity: "rare",
    category: "romance",
    title: "甜蜜工坊",
    description: "这是一个由巧克力建造的工厂，空气中弥漫着甜蜜的香气。在这里，每一块巧克力都是爱的象征。",
    background: "chocolate-factory",
    backgroundClass: "bg-gradient-to-b from-amber-900/80 via-yellow-700/60 to-slate-900/80",
    yourRole: "巧克力师",
    partnerRole: "品尝师",
    yourRoleDescription: "制作巧克力的大师",
    partnerRoleDescription: "品尝美味的专家",
    interactionType: "gift",
    interactionTitle: "甜蜜礼物",
    interactionDescription: "制作一份巧克力礼物送给对方。",
    interactionPrompt: "选择一种巧克力送给对方：",
    options: [
      { id: "choco-1", text: "黑巧克力", icon: "🍫", effect: "代表深沉的爱" },
      { id: "choco-2", text: "牛奶巧克力", icon: "🥛", effect: "代表温柔的爱" },
      { id: "choco-3", text: "白巧克力", icon: "🤍", effect: "代表纯洁的爱" }
    ],
    memorySummary: "在巧克力工厂，你们互相赠送了{chocolate}，让甜蜜充满了彼此的心。",
    keywords: ["巧克力", "甜蜜", "爱情"],
    icon: "🍫"
  },
  // 神秘类
  {
    id: "mystery-shop",
    name: "神秘商店",
    rarity: "epic",
    category: "mystery",
    title: "命运之店",
    description: "这家商店只在午夜开放，出售各种神秘的物品。每一件物品都有它的故事和命运。",
    background: "mystery-shop",
    backgroundClass: "bg-gradient-to-b from-indigo-900/80 via-purple-800/60 to-slate-900/80",
    yourRole: "店主",
    partnerRole: "顾客",
    yourRoleDescription: "神秘商店的店主",
    partnerRoleDescription: "寻找命运物品的顾客",
    interactionType: "choice",
    interactionTitle: "选择命运物品",
    interactionDescription: "在神秘商店中选择一件物品，它将影响你们的命运。",
    interactionPrompt: "选择一件神秘物品：",
    options: [
      { id: "item-1", text: "时光沙漏", icon: "⏳", effect: "可以看到过去或未来" },
      { id: "item-2", text: "命运水晶", icon: "🔮", effect: "可以预知未来" },
      { id: "item-3", text: "记忆之书", icon: "📖", effect: "可以阅读他人的记忆" }
    ],
    memorySummary: "在神秘商店，你们选择了{item}，开启了一段神秘的命运之旅。",
    keywords: ["神秘", "命运", "魔法"],
    icon: "🏪"
  },
  {
    id: "shadow-realm",
    name: "暗影王国",
    rarity: "legendary",
    category: "mystery",
    title: "暗影之谜",
    description: "这是一个由影子构成的王国，在这里，影子拥有自己的意识和生命。",
    background: "shadow-realm",
    backgroundClass: "bg-gradient-to-b from-slate-900/80 via-gray-800/60 to-black/80",
    yourRole: "影子战士",
    partnerRole: "暗影法师",
    yourRoleDescription: "与影子战斗的战士",
    partnerRoleDescription: "能够操控影子的法师",
    interactionType: "story",
    interactionTitle: "暗影故事",
    interactionDescription: "共同创作一个关于影子的神秘故事。",
    interactionPrompt: "在暗影王国中，你们发现...",
    memorySummary: "在暗影王国，你们共同创作了一段神秘的暗影故事，揭开了影子的秘密。",
    keywords: ["暗影", "神秘", "秘密"],
    icon: "🌑"
  },
  {
    id: "dream-catcher",
    name: "捕梦网",
    rarity: "rare",
    category: "mystery",
    title: "梦境编织",
    description: "这是一个由捕梦网构成的世界，每一张网都在捕捉人们的梦境。在这里，可以进入他人的梦境。",
    background: "dream-catcher",
    backgroundClass: "bg-gradient-to-b from-purple-900/80 via-pink-800/60 to-slate-900/80",
    yourRole: "捕梦人",
    partnerRole: "造梦者",
    yourRoleDescription: "捕捉梦境的人",
    partnerRoleDescription: "创造梦境的人",
    interactionType: "wish",
    interactionTitle: "梦境许愿",
    interactionDescription: "在捕梦网前许下一个愿望，让它进入你们的梦境。",
    interactionPrompt: "许下一个希望在梦中实现的愿望：",
    memorySummary: "在捕梦网前，你们共同许下了美好的愿望，让梦境成为了现实。",
    keywords: ["梦境", "愿望", "捕梦网"],
    icon: "🕸️"
  },
  {
    id: "ancient-temple",
    name: "古老神殿",
    rarity: "epic",
    category: "mystery",
    title: "神殿之谜",
    description: "这座神殿建于远古时期，里面藏着许多未解之谜。每一面墙壁都刻着神秘的符文。",
    background: "ancient-temple",
    backgroundClass: "bg-gradient-to-b from-amber-900/80 via-orange-800/60 to-slate-900/80",
    yourRole: "考古学家",
    partnerRole: "符文解读师",
    yourRoleDescription: "探索古迹的考古学家",
    partnerRoleDescription: "解读神秘符文的专家",
    interactionType: "story",
    interactionTitle: "神殿探险",
    interactionDescription: "共同探索古老神殿的秘密。",
    interactionPrompt: "在神殿中，你们发现了一扇神秘的门，上面刻着...",
    memorySummary: "在古老神殿中，你们共同解开了神秘符文的秘密，发现了远古的宝藏。",
    keywords: ["神殿", "神秘", "宝藏"],
    icon: "🏛️"
  },
  {
    id: "mirror-world",
    name: "镜像世界",
    rarity: "rare",
    category: "mystery",
    title: "镜中奇遇",
    description: "这个世界由无数面镜子构成，每一面镜子都映出不同的世界。在这里，你可以看到平行宇宙中的自己。",
    background: "mirror-world",
    backgroundClass: "bg-gradient-to-b from-cyan-900/80 via-blue-800/60 to-slate-900/80",
    yourRole: "镜行者",
    partnerRole: "镜像观察者",
    yourRoleDescription: "能够在镜中行走的人",
    partnerRoleDescription: "观察镜像世界的人",
    interactionType: "memory",
    interactionTitle: "镜像记忆",
    interactionDescription: "记录在镜像世界中看到的另一个自己。",
    interactionPrompt: "写下你在镜像中看到的另一个自己：",
    memorySummary: "在镜像世界中，你们共同记录了看到的另一个自己，让这段奇遇成为永恒的记忆。",
    keywords: ["镜像", "平行宇宙", "奇遇"],
    icon: "🪞"
  },
  // 更多宇宙...
  {
    id: "cloud-castle",
    name: "云端城堡",
    rarity: "epic",
    category: "fantasy",
    title: "天空之城",
    description: "这座城堡漂浮在云端之上，由云朵和魔法构成。传说只有心灵纯洁的人才能看到它。",
    background: "cloud-castle",
    backgroundClass: "bg-gradient-to-b from-blue-900/80 via-cyan-700/60 to-slate-900/80",
    yourRole: "城堡守卫",
    partnerRole: "云端公主",
    yourRoleDescription: "守护云端城堡的骑士",
    partnerRoleDescription: "居住在城堡中的公主",
    interactionType: "choice",
    interactionTitle: "城堡庆典",
    interactionDescription: "选择城堡庆典的主题。",
    interactionPrompt: "选择庆典的主题：",
    options: [
      { id: "theme-1", text: "星光晚宴", icon: "⭐", effect: "在星空下共进晚餐" },
      { id: "theme-2", text: "云端舞会", icon: "💃", effect: "在云端翩翩起舞" },
      { id: "theme-3", text: "月光茶会", icon: "🌙", effect: "在月光下品茶" }
    ],
    memorySummary: "在云端城堡，你们选择了{theme}，度过了一个难忘的夜晚。",
    keywords: ["城堡", "云端", "庆典"],
    icon: "🏰"
  },
  {
    id: "star-observatory",
    name: "星辰观测台",
    rarity: "rare",
    category: "scifi",
    title: "星海遥望",
    description: "这座观测台位于宇宙的边缘，可以看到所有星系。在这里，可以看到宇宙的诞生和毁灭。",
    background: "star-observatory",
    backgroundClass: "bg-gradient-to-b from-slate-900/80 via-indigo-800/60 to-black/80",
    yourRole: "天文学家",
    partnerRole: "星象师",
    yourRoleDescription: "研究星空的科学家",
    partnerRoleDescription: "解读星象的智者",
    interactionType: "memory",
    interactionTitle: "星辰记忆",
    interactionDescription: "记录你们在观测台看到的最美的星星。",
    interactionPrompt: "写下你们看到的最美的星星：",
    memorySummary: "在星辰观测台，你们共同记录了看到的最美星星，让这份记忆永远闪耀。",
    keywords: ["星空", "观测", "记忆"],
    icon: "🔭"
  },
  {
    id: "butterfly-garden",
    name: "蝴蝶花园",
    rarity: "common",
    category: "healing",
    title: "蝴蝶之梦",
    description: "这座花园里住着各种美丽的蝴蝶，每一只蝴蝶都是一个灵魂的化身。在这里，心灵可以得到净化。",
    background: "butterfly-garden",
    backgroundClass: "bg-gradient-to-b from-green-900/80 via-emerald-700/60 to-slate-900/80",
    yourRole: "花园守护者",
    partnerRole: "蝴蝶使者",
    yourRoleDescription: "守护蝴蝶花园的人",
    partnerRoleDescription: "能够与蝴蝶沟通的使者",
    interactionType: "wish",
    interactionTitle: "蝴蝶许愿",
    interactionDescription: "让蝴蝶带走你们的愿望。",
    interactionPrompt: "许下一个让蝴蝶带走的愿望：",
    memorySummary: "在蝴蝶花园，你们让蝴蝶带走了美好的愿望，让梦想飞向远方。",
    keywords: ["蝴蝶", "愿望", "自由"],
    icon: "🦋"
  },
  {
    id: "candy-world",
    name: "糖果世界",
    rarity: "rare",
    category: "romance",
    title: "甜蜜国度",
    description: "这个世界由糖果和甜点构成，河流是巧克力，山脉是蛋糕。在这里，每一天都是甜蜜的。",
    background: "candy-world",
    backgroundClass: "bg-gradient-to-b from-pink-900/80 via-purple-700/60 to-slate-900/80",
    yourRole: "糖果师",
    partnerRole: "甜点品尝家",
    yourRoleDescription: "制作糖果的大师",
    partnerRoleDescription: "品尝甜点的专家",
    interactionType: "gift",
    interactionTitle: "甜蜜礼物",
    interactionDescription: "制作一份糖果礼物送给对方。",
    interactionPrompt: "选择一种糖果送给对方：",
    options: [
      { id: "candy-1", text: "棒棒糖", icon: "🍭", effect: "代表甜蜜的爱情" },
      { id: "candy-2", text: "棉花糖", icon: "🍬", effect: "代表柔软的心" },
      { id: "candy-3", text: "巧克力", icon: "🍫", effect: "代表浓情蜜意" }
    ],
    memorySummary: "在糖果世界，你们互相赠送了{candy}，让甜蜜充满了每一天。",
    keywords: ["糖果", "甜蜜", "爱情"],
    icon: "🍬"
  },
  {
    id: "ghost-ship",
    name: "幽灵船",
    rarity: "legendary",
    category: "mystery",
    title: "幽灵之旅",
    description: "这艘船在海上漂泊了数百年，载着逝去的灵魂寻找归宿。传说登上这艘船的人可以与逝者对话。",
    background: "ghost-ship",
    backgroundClass: "bg-gradient-to-b from-slate-900/80 via-gray-800/60 to-black/80",
    yourRole: "船长",
    partnerRole: "灵魂使者",
    yourRoleDescription: "幽灵船的船长",
    partnerRoleDescription: "引导灵魂的使者",
    interactionType: "story",
    interactionTitle: "幽灵故事",
    interactionDescription: "共同创作一个关于幽灵船的神秘故事。",
    interactionPrompt: "在幽灵船上，你们遇到了...",
    memorySummary: "在幽灵船上，你们共同创作了一段神秘的故事，帮助灵魂找到了归宿。",
    keywords: ["幽灵", "神秘", "救赎"],
    icon: "⛵"
  }
];

// 获取今日宇宙
export const getTodayUniverse = (): Universe => {
  const today = new Date();
  const index = today.getDate() % universeTemplates.length;
  return universeTemplates[index];
};

// 根据日期获取宇宙
export const getUniverseByDate = (date: string): Universe => {
  const d = new Date(date);
  const index = d.getDate() % universeTemplates.length;
  return universeTemplates[index];
};

// 获取所有宇宙
export const getAllUniverses = (): Universe[] => {
  return universeTemplates;
};

// 根据类别获取宇宙
export const getUniversesByCategory = (category: Category): Universe[] => {
  return universeTemplates.filter(u => u.category === category);
};

// 根据稀有度获取宇宙
export const getUniversesByRarity = (rarity: Rarity): Universe[] => {
  return universeTemplates.filter(u => u.rarity === rarity);
};

// 星图数据
export const stars: Star[] = [
  { id: 1, x: 15, y: 20, size: 3, brightness: 0.9, universeId: "cloud-train", universeName: "云上列车", date: "2024-01-15", rarity: 'common' },
  { id: 2, x: 45, y: 35, size: 5, brightness: 0.95, universeId: "dragon-kingdom", universeName: "龙眠王国", date: "2024-01-14", rarity: 'legendary' },
  { id: 3, x: 75, y: 15, size: 4, brightness: 0.92, universeId: "star-library", universeName: "星辰图书馆", date: "2024-01-13", rarity: 'epic' },
  { id: 4, x: 25, y: 60, size: 3, brightness: 0.85, universeId: "galaxy-post", universeName: "银河邮局", date: "2024-01-12", rarity: 'common' },
  { id: 5, x: 60, y: 70, size: 4, brightness: 0.9, universeId: "time-garden", universeName: "时间花园", date: "2024-01-11", rarity: 'rare' },
  { id: 6, x: 85, y: 45, size: 3, brightness: 0.88, universeId: "dawn-island", universeName: "晨曦岛", date: "2024-01-10", rarity: 'common' },
  { id: 7, x: 35, y: 85, size: 4, brightness: 0.92, universeId: "misty-forest", universeName: "迷雾森林", date: "2024-01-09", rarity: 'rare' },
  { id: 8, x: 70, y: 90, size: 5, brightness: 0.94, universeId: "space-port", universeName: "太空港", date: "2024-01-08", rarity: 'legendary' },
  { id: 9, x: 10, y: 50, size: 3, brightness: 0.85, universeId: "aurora-forest", universeName: "极光森林", date: "2024-01-07", rarity: 'epic' },
  { id: 10, x: 50, y: 10, size: 5, brightness: 0.95, universeId: "crystal-cave", universeName: "水晶洞穴", date: "2024-01-06", rarity: 'legendary' },
  { id: 11, x: 90, y: 75, size: 3, brightness: 0.88, universeId: "wind-valley", universeName: "风之谷", date: "2024-01-05", rarity: 'common' },
  { id: 12, x: 40, y: 45, size: 4, brightness: 0.9, universeId: "rainbow-bridge", universeName: "彩虹桥", date: "2024-01-04", rarity: 'epic' },
  { id: 13, x: 20, y: 30, size: 3, brightness: 0.86, universeId: "moon-lake", universeName: "月光湖", date: "2024-01-03", rarity: 'rare' },
  { id: 14, x: 65, y: 55, size: 4, brightness: 0.92, universeId: "star-observatory", universeName: "星辰观测台", date: "2024-01-02", rarity: 'rare' },
  { id: 15, x: 80, y: 25, size: 3, brightness: 0.89, universeId: "sunset-beach", universeName: "日落海滩", date: "2024-01-01", rarity: 'common' },
  { id: 16, x: 55, y: 80, size: 5, brightness: 0.94, universeId: "ghost-ship", universeName: "幽灵船", date: "2023-12-31", rarity: 'legendary' },
  { id: 17, x: 30, y: 70, size: 4, brightness: 0.91, universeId: "cloud-castle", universeName: "云端城堡", date: "2023-12-30", rarity: 'epic' }
];

// 记忆数据
export const memories: Memory[] = [
  {
    id: "mem-1",
    universeId: "cloud-train",
    universeName: "云上列车",
    title: "云端列车之旅",
    description: "在云上列车的旅途中，你们共同选择了前往月光港，开启了一段神秘的云端冒险。列车在云海中穿行，窗外是金色的夕阳和飞翔的鸟儿。",
    timestamp: "2024-01-15",
    keywords: ["云端", "列车", "冒险"],
    rarity: 'common',
    yourAnswer: "我选择月光港，因为我想看看永不结束的夜晚是什么样子。",
    partnerAnswer: "我也选择月光港，想和你一起看永恒的月亮。"
  },
  {
    id: "mem-2",
    universeId: "dragon-kingdom",
    universeName: "龙眠王国",
    title: "巨龙之梦",
    description: "在龙眠王国，你们共同创造了一段传奇：骑士与学者携手唤醒了沉睡千年的巨龙，获得了永恒的祝福。巨龙的眼睛闪烁着金色的光芒。",
    timestamp: "2024-01-14",
    keywords: ["巨龙", "传奇", "勇气"],
    rarity: 'legendary',
    yourAnswer: "我轻轻抚摸巨龙的鳞片，念出唤醒的咒语...",
    partnerAnswer: "巨龙睁开了眼睛，发出震耳欲聋的咆哮..."
  },
  {
    id: "mem-3",
    universeId: "star-library",
    universeName: "星辰图书馆",
    title: "星图之藏",
    description: "在星辰图书馆，你们共同记录了一段珍贵的回忆，这本书将永远珍藏在星空中。书页上闪烁着星光，记录着你们第一次相遇的故事。",
    timestamp: "2024-01-13",
    keywords: ["书籍", "回忆", "星空"],
    rarity: 'epic',
    yourAnswer: "我记得第一次在咖啡馆见到你的时候，你穿着蓝色的连衣裙...",
    partnerAnswer: "我记得你紧张地打翻了咖啡，满脸通红的样子..."
  },
  {
    id: "mem-4",
    universeId: "galaxy-post",
    universeName: "银河邮局",
    title: "星际信笺",
    description: "在银河邮局，你们互相写下了跨越时空的信件，让星星传递你们的心意。信件被装入星星信封，飞向远方。",
    timestamp: "2024-01-12",
    keywords: ["信件", "时空", "星星"],
    rarity: 'common',
    yourAnswer: "亲爱的，无论未来发生什么，我都会一直在你身边。",
    partnerAnswer: "亲爱的，谢谢你一直以来的陪伴，我爱你。"
  },
  {
    id: "mem-5",
    universeId: "time-garden",
    universeName: "时间花园",
    title: "永恒之花",
    description: "在时间花园里，你们共同培育了一朵记忆之花，记录了今天最美好的时刻。花朵绽放出淡紫色的光芒。",
    timestamp: "2024-01-11",
    keywords: ["时间", "花朵", "瞬间"],
    rarity: 'rare',
    yourAnswer: "今天最美好的时刻是和你一起看日落。",
    partnerAnswer: "今天最美好的时刻是听到你说'我爱你'。"
  },
  {
    id: "mem-6",
    universeId: "dawn-island",
    universeName: "晨曦岛",
    title: "晨光之岛",
    description: "在晨曦岛上，你们分享了今天最温暖的小事，让晨光见证了你们的心意。金色的阳光洒在你们的脸上。",
    timestamp: "2024-01-10",
    keywords: ["晨曦", "温暖", "分享"],
    rarity: 'common',
    yourAnswer: "今天我看到一只小鸟在窗台上唱歌，特别想告诉你。",
    partnerAnswer: "今天我路过我们第一次约会的咖啡馆，想起了很多美好的回忆。"
  },
  {
    id: "mem-7",
    universeId: "misty-forest",
    universeName: "迷雾森林",
    title: "迷雾奇遇",
    description: "在迷雾森林中，你们选择了发光的蘑菇小径，遇到了一段难忘的奇遇。友好的精灵送给你们一颗发光的水晶。",
    timestamp: "2024-01-09",
    keywords: ["森林", "迷雾", "奇遇"],
    rarity: 'rare',
    yourAnswer: "我选择蘑菇小径，看起来很有趣！",
    partnerAnswer: "我也选这个，希望能遇到可爱的精灵。"
  },
  {
    id: "mem-8",
    universeId: "space-port",
    universeName: "太空港",
    title: "星际启航",
    description: "在太空港，你们选择前往翡翠星，开启了新的星际冒险。飞船在星空中穿梭，前方是未知的世界。",
    timestamp: "2024-01-08",
    keywords: ["太空", "冒险", "星球"],
    rarity: 'legendary',
    yourAnswer: "让我们去翡翠星看看吧，听起来很美！",
    partnerAnswer: "好！一起去探索新的世界！"
  }
];

// 成就徽章数据
export const badges: Badge[] = [
  {
    id: "first-journey",
    name: "初次旅行",
    description: "完成第一次宇宙冒险",
    icon: "🚀",
    rarity: "common",
    condition: "完成1个宇宙",
    unlocked: true,
    unlockedAt: "2023-12-15"
  },
  {
    id: "10-universes",
    name: "星际探索者",
    description: "探索10个不同的宇宙",
    icon: "🌟",
    rarity: "rare",
    condition: "完成10个宇宙",
    unlocked: true,
    unlockedAt: "2024-01-05"
  },
  {
    id: "50-universes",
    name: "宇宙行者",
    description: "探索50个不同的宇宙",
    icon: "🌌",
    rarity: "epic",
    condition: "完成50个宇宙",
    unlocked: false
  },
  {
    id: "first-legendary",
    name: "传说发现者",
    description: "首次完成传说级宇宙",
    icon: "👑",
    rarity: "legendary",
    condition: "完成1个传说级宇宙",
    unlocked: true,
    unlockedAt: "2023-12-31"
  },
  {
    id: "7-days",
    name: "连续旅行者",
    description: "连续7天进行宇宙冒险",
    icon: "🔥",
    rarity: "rare",
    condition: "连续7天完成冒险",
    unlocked: true,
    unlockedAt: "2024-01-07"
  },
  {
    id: "30-days",
    name: "银河守护者",
    description: "连续30天进行宇宙冒险",
    icon: "⚡",
    rarity: "epic",
    condition: "连续30天完成冒险",
    unlocked: true,
    unlockedAt: "2024-01-14"
  },
  {
    id: "all-categories",
    name: "全类别探索",
    description: "探索所有类别的宇宙",
    icon: "🌈",
    rarity: "rare",
    condition: "完成所有5个类别的宇宙",
    unlocked: true,
    unlockedAt: "2024-01-10"
  },
  {
    id: "100-memories",
    name: "记忆收藏家",
    description: "记录100个共同记忆",
    icon: "📚",
    rarity: "legendary",
    condition: "记录100个记忆",
    unlocked: false
  }
];

// 获取解锁的徽章
export const getUnlockedBadges = (): Badge[] => {
  return badges.filter(b => b.unlocked);
};

// 获取未解锁的徽章
export const getLockedBadges = (): Badge[] => {
  return badges.filter(b => !b.unlocked);
};