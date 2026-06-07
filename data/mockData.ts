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
    badges: ["初入宇宙", "星光收集者", "时空旅者"]
  }
};

// 互动类型枚举
export type InteractionType = 
  | 'choice'        // 选择
  | 'co-create'     // 共创
  | 'story-chain'   // 故事接龙
  | 'image-upload'  // 上传图片
  | 'emoji'         // Emoji互动
  | 'limited-chat'  // 限制交流
  | 'time-capsule'  // 时空胶囊
  | 'decision'      // 共同决策
  | 'collection'    // 收集玩法
  | 'random-event'; // 随机事件

// 宇宙类型
export interface Universe {
  id: number;
  name: string;
  worldView: string;
  description: string;
  type: string;
  icon: string;
  rarity: 'common' | 'rare' | 'legendary';
  roles: Role[];
  interaction: Interaction;
  date: string;
  completed: boolean;
  memory?: Memory;
  collectibles?: Collectible[];
}

// 角色定义
export interface Role {
  id: string;
  name: string;
  description: string;
  icon: string;
}

// 互动定义
export interface Interaction {
  type: InteractionType;
  title: string;
  description: string;
  prompt: string;
  options?: Option[];
  rules?: string[];
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
  title: string;
  description: string;
  image?: string;
  timestamp: string;
  keywords: string[];
}

// 收藏品
export interface Collectible {
  id: string;
  name: string;
  description: string;
  icon: string;
  rarity: 'common' | 'rare' | 'legendary';
}

// 宇宙模板库
export const universeTemplates: Universe[] = [
  {
    id: 1,
    name: "云上列车",
    worldView: "在这个世界里，所有列车都行驶在云海之上。每一列火车都承载着不同的故事，从一个云端驿站驶向另一个未知的目的地。人们相信，离别会化作云，重逢会化作雨。",
    description: "你们登上了一列神秘的云端列车，窗外是无尽的云海和偶尔掠过的飞鸟。列车长告诉你们，这趟旅程会经过许多神奇的站点。",
    type: "奇幻",
    icon: "🚂",
    rarity: "common",
    roles: [
      { id: "engineer", name: "轨道工程师", description: "负责维护云端轨道的安全", icon: "🔧" },
      { id: "photographer", name: "云海摄影师", description: "记录沿途的美丽风景", icon: "📷" },
      { id: "conductor", name: "列车长", description: "指引列车的方向", icon: "🎩" },
      { id: "passenger", name: "神秘旅客", description: "带着秘密登上列车", icon: "🧳" }
    ],
    interaction: {
      type: "decision",
      title: "选择下一站",
      description: "列车即将到达一个分叉路口，你们需要共同决定前往哪个方向。",
      prompt: "前方有三个神秘站点，你们决定前往：",
      options: [
        { id: "station-1", text: "星尘驿站", icon: "⭐", effect: "可能会遇到星星商人" },
        { id: "station-2", text: "月光港", icon: "🌙", effect: "传说那里的夜晚永远不会结束" },
        { id: "station-3", text: "迷雾镇", icon: "🌫️", effect: "充满未知的神秘之地" }
      ],
      rules: ["双方选择相同方向即可出发", "如果选择不同，需要进行一次简短的讨论"]
    },
    date: "2024-01-15",
    completed: false
  },
  {
    id: 2,
    name: "时间花园",
    worldView: "这里的每一朵花都是一个时间的片段。当花朵绽放时，可以看到过去或未来的景象。园丁们精心照料这些时间之花，让珍贵的记忆永远绽放。",
    description: "你们来到了一座被时间魔法笼罩的花园。每一朵花都在讲述着不同的故事，花瓣上闪烁着记忆的光芒。",
    type: "奇幻",
    icon: "🌸",
    rarity: "rare",
    roles: [
      { id: "gardener", name: "时间园丁", description: "培育和照料时间之花", icon: "🌱" },
      { id: "interpreter", name: "花语解读师", description: "能够读懂花朵的语言", icon: "🔮" },
      { id: "guardian", name: "花园守护者", description: "保护花园免受时间侵蚀", icon: "🛡️" },
      { id: "collector", name: "记忆收藏家", description: "收集散落在花园中的记忆碎片", icon: "📚" }
    ],
    interaction: {
      type: "co-create",
      title: "共同培育记忆之花",
      description: "在花园中心有一颗种子，你们需要共同为它注入记忆和情感，让它绽放。",
      prompt: "写下一件你们共同的美好回忆，让这朵花永远铭记：",
      rules: ["每人写下一段回忆", "系统会将两段回忆融合成一朵独特的花", "这朵花将成为你们的共同记忆"]
    },
    date: "2024-01-14",
    completed: true,
    memory: {
      id: "mem-1",
      title: "记忆之花",
      description: "在时间花园里，你们共同培育了一朵淡紫色的记忆之花。花瓣上记录着你们第一次视频通话到凌晨三点的故事，以及去年冬天互相陪伴度过的温暖时光。",
      timestamp: "2024-01-14",
      keywords: ["第一次", "深夜", "陪伴"]
    },
    collectibles: [{ id: "flower-1", name: "紫晶记忆花", description: "永不凋谢的记忆之花", icon: "💜", rarity: "rare" }]
  },
  {
    id: 3,
    name: "龙眠王国",
    worldView: "传说中，古老的巨龙沉睡在这片土地之下。它们的梦境构成了整个王国的现实。当巨龙翻身时，山脉会移动；当它们呼吸时，会带来四季的变化。",
    description: "你们来到了一个由巨龙梦境创造的王国。天空中漂浮着水晶城堡，地面上流淌着发光的河流。",
    type: "奇幻",
    icon: "🐉",
    rarity: "legendary",
    roles: [
      { id: "rider", name: "龙骑士", description: "能够与巨龙沟通", icon: "⚔️" },
      { id: "dreamer", name: "造梦师", description: "可以进入巨龙的梦境", icon: "💤" },
      { id: "healer", name: "龙语医者", description: "治愈受伤的巨龙", icon: "✨" },
      { id: "explorer", name: "秘境探索者", description: "寻找失落的龙宝藏", icon: "🗺️" }
    ],
    interaction: {
      type: "story-chain",
      title: "龙梦故事",
      description: "你们进入了巨龙的梦境，需要共同创造一个冒险故事。",
      prompt: "巨龙的梦境中出现了一个神秘的入口，你们决定...",
      rules: ["轮流续写故事", "每人最多写三句话", "最后系统会将故事整理成完整的冒险"]
    },
    date: "2024-01-13",
    completed: true,
    memory: {
      id: "mem-2",
      title: "龙梦传说",
      description: "在巨龙的梦境中，你们共同创造了一段传奇：骑士与造梦师携手穿越水晶迷宫，最终唤醒了沉睡千年的远古巨龙，获得了永恒的友谊祝福。",
      timestamp: "2024-01-13",
      keywords: ["冒险", "勇气", "友谊"]
    },
    collectibles: [{ id: "crystal-1", name: "龙梦水晶", description: "蕴含巨龙梦境力量的水晶", icon: "💎", rarity: "legendary" }]
  },
  {
    id: 4,
    name: "银河邮局",
    worldView: "这是连接所有宇宙的邮政系统。邮差们骑着流星穿梭于星际之间，将思念和祝福送到每一个角落。每一封信都承载着跨越时空的情感。",
    description: "你们成为了银河邮局的临时邮差，需要将一封封来自不同星球的信件送到目的地。",
    type: "科幻",
    icon: "✉️",
    rarity: "common",
    roles: [
      { id: "postman", name: "星际邮差", description: "负责投递星际邮件", icon: "📮" },
      { id: "sorter", name: "信件分拣员", description: "整理来自各个星球的信件", icon: "📋" },
      { id: "cartographer", name: "星图绘制师", description: "绘制准确的星际航线", icon: "🌟" },
      { id: "writer", name: "代笔信使", description: "帮助不会写字的生物写信", icon: "✒️" }
    ],
    interaction: {
      type: "time-capsule",
      title: "写给未来的信",
      description: "写一封信给一年后的对方，银河邮局会在指定时间送达。",
      prompt: "写下你想对一年后的对方说的话：",
      rules: ["每人写一封不超过500字的信", "信件会被密封保存", "一年后自动开启"]
    },
    date: "2024-01-12",
    completed: true,
    memory: {
      id: "mem-3",
      title: "时空信笺",
      description: "你们在银河邮局留下了两封写给未来的信。信中充满了对未来的期许和对彼此的祝福，等待着一年后开启的那一刻。",
      timestamp: "2024-01-12",
      keywords: ["未来", "期许", "祝福"]
    }
  },
  {
    id: 5,
    name: "星辰图书馆",
    worldView: "这里收藏着宇宙中所有的故事。每一本书都是一颗星星的记忆，书页之间流淌着星河。读者可以进入书中的世界，亲身经历那些故事。",
    description: "你们来到了一座漂浮在星空中的图书馆。书架延伸至无尽的宇宙，每一本书都散发着温暖的光芒。",
    type: "奇幻",
    icon: "📚",
    rarity: "rare",
    roles: [
      { id: "librarian", name: "星图管理员", description: "守护图书馆的知识", icon: "🔖" },
      { id: "storyteller", name: "故事编织者", description: "将新书加入图书馆", icon: "📖" },
      { id: "explorer", name: "书海探索者", description: "发现隐藏的珍贵书籍", icon: "🔍" },
      { id: "keeper", name: "记忆守护者", description: "保护书中的故事不被遗忘", icon: "🗝️" }
    ],
    interaction: {
      type: "emoji",
      title: "情绪书签",
      description: "选择一个Emoji代表你们今天的故事，放在这本书的书签上。",
      prompt: "用一个Emoji表达你们今天在星辰图书馆的心情：",
      options: [
        { id: "joy", text: "喜悦", icon: "😊" },
        { id: "wonder", text: "惊奇", icon: "😲" },
        { id: "peace", text: "平静", icon: "😌" },
        { id: "love", text: "爱意", icon: "🥰" },
        { id: "adventure", text: "冒险", icon: "🤩" },
        { id: "nostalgia", text: "怀念", icon: "😢" }
      ],
      rules: ["每人选择一个Emoji", "系统会将两个Emoji融合成一个独特的书签"]
    },
    date: "2024-01-11",
    completed: true,
    memory: {
      id: "mem-4",
      title: "星辰书签",
      description: "你们在星辰图书馆留下了一枚独特的书签，融合了😊和🥰两种情绪，象征着你们共同度过的充满喜悦和爱意的时光。",
      timestamp: "2024-01-11",
      keywords: ["喜悦", "爱意", "时光"]
    },
    collectibles: [{ id: "book-1", name: "星辰之书", description: "记录着你们故事的魔法书", icon: "📖", rarity: "rare" }]
  },
  {
    id: 6,
    name: "晨曦岛",
    worldView: "这座岛屿永远处于黎明时分。太阳刚刚升起，金色的光芒洒在宁静的海面上。岛上的居民相信，每一个新的黎明都是一个新的开始。",
    description: "你们来到了一座永远沐浴在晨光中的岛屿。海浪轻轻拍打着沙滩，远处传来悠扬的歌声。",
    type: "治愈",
    icon: "🌅",
    rarity: "common",
    roles: [
      { id: "fisherman", name: "晨光渔夫", description: "在清晨的海面上捕鱼", icon: "🎣" },
      { id: "artist", name: "日出画家", description: "捕捉每一个美丽的瞬间", icon: "🎨" },
      { id: "guide", name: "岛屿向导", description: "带领游客探索岛屿", icon: "🧭" },
      { id: "healer", name: "心灵疗愈师", description: "用晨曦的力量治愈心灵", icon: "🌞" }
    ],
    interaction: {
      type: "image-upload",
      title: "分享晨光",
      description: "用一张照片记录你们心中的晨曦时刻。",
      prompt: "上传一张能代表你们心中'晨曦'的照片：",
      rules: ["每人上传一张照片", "系统会将两张照片融合成一幅晨光画卷"]
    },
    date: "2024-01-10",
    completed: true,
    memory: {
      id: "mem-5",
      title: "晨曦画卷",
      description: "你们在晨曦岛共同创作了一幅美丽的画卷，融合了温暖的日出和宁静的海洋，象征着新的开始和希望。",
      timestamp: "2024-01-10",
      keywords: ["希望", "新开始", "宁静"]
    }
  },
  {
    id: 7,
    name: "迷雾森林",
    worldView: "这片森林被永恒的迷雾笼罩，里面住着各种神秘的生物。每一次进入都会遇到不同的奇遇，没有人能两次走同一条路。",
    description: "你们踏入了一片神秘的迷雾森林。树木高耸入云，迷雾中传来隐约的歌声和神秘的光芒。",
    type: "奇幻",
    icon: "🌲",
    rarity: "rare",
    roles: [
      { id: "ranger", name: "森林游侠", description: "熟悉森林的每一条路径", icon: "🏹" },
      { id: "herbalist", name: "草药师", description: "采集森林中的珍贵草药", icon: "🌿" },
      { id: "speaker", name: "精灵语者", description: "能够与森林生物沟通", icon: "🗣️" },
      { id: "cartographer", name: "迷雾制图师", description: "绘制森林的地图", icon: "🗺️" }
    ],
    interaction: {
      type: "random-event",
      title: "森林奇遇",
      description: "在迷雾中探索，遇到随机事件并共同应对。",
      prompt: "你们在迷雾中发现了一个发光的入口，里面似乎有什么在等待...",
      rules: ["系统随机生成奇遇事件", "双方需要共同做出选择", "不同的选择会带来不同的记忆"]
    },
    date: "2024-01-09",
    completed: true,
    memory: {
      id: "mem-6",
      title: "迷雾奇遇",
      description: "在迷雾森林中，你们遇到了一只迷路的小精灵，帮助它找到了回家的路。作为感谢，小精灵送给你们一颗永远发光的露珠。",
      timestamp: "2024-01-09",
      keywords: ["奇遇", "善良", "礼物"]
    },
    collectibles: [{ id: "dewdrop-1", name: "精灵露珠", description: "永远发光的神秘露珠", icon: "💧", rarity: "rare" }]
  },
  {
    id: 8,
    name: "太空港",
    worldView: "这是宇宙中最繁忙的太空港口，来自各个星球的飞船在这里停靠。这里是冒险者的聚集地，充满了机遇和挑战。",
    description: "你们来到了一座巨大的太空港，各种奇特的飞船停泊在码头，外星人在人群中穿梭。",
    type: "科幻",
    icon: "🚀",
    rarity: "legendary",
    roles: [
      { id: "captain", name: "飞船船长", description: "指挥飞船航行", icon: "👨‍✈️" },
      { id: "engineer", name: "机械工程师", description: "维护飞船设备", icon: "🔧" },
      { id: "trader", name: "星际商人", description: "进行跨星球贸易", icon: "💰" },
      { id: "explorer", name: "星际探险家", description: "探索未知星球", icon: "🔭" }
    ],
    interaction: {
      type: "collection",
      title: "收集星尘",
      description: "在太空港收集散落的星尘，每一颗都蕴含着不同的能量。",
      prompt: "在太空港中寻找并收集特殊的星尘：",
      options: [
        { id: "star-dust-1", text: "金色星尘", icon: "✨", effect: "带来好运" },
        { id: "star-dust-2", text: "蓝色星尘", icon: "💫", effect: "增强智慧" },
        { id: "star-dust-3", text: "紫色星尘", icon: "🌟", effect: "激发灵感" },
        { id: "star-dust-4", text: "粉色星尘", icon: "💖", effect: "传递爱意" }
      ],
      rules: ["每人选择一颗星尘", "两颗星尘会融合成一颗独特的星星"]
    },
    date: "2024-01-08",
    completed: true,
    memory: {
      id: "mem-7",
      title: "星尘结晶",
      description: "你们在太空港收集了金色和粉色的星尘，融合成一颗温暖的爱心星星，象征着你们之间的幸运和爱意。",
      timestamp: "2024-01-08",
      keywords: ["幸运", "爱意", "星尘"]
    },
    collectibles: [{ id: "crystal-2", name: "星尘结晶", description: "融合了两种星尘的结晶", icon: "💎", rarity: "legendary" }]
  }
];

// 获取今日宇宙
export const getTodayUniverse = (): Universe => {
  return universeTemplates[0];
};

// 获取已完成的宇宙
export const getCompletedUniverses = (): Universe[] => {
  return universeTemplates.filter(u => u.completed);
};

// 获取所有宇宙
export const getAllUniverses = (): Universe[] => {
  return universeTemplates;
};

// 星图数据
export interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  brightness: number;
  universeName: string;
  date: string;
  rarity: 'common' | 'rare' | 'legendary';
}

export const stars: Star[] = [
  { id: 1, x: 15, y: 20, size: 3, brightness: 0.9, universeName: "云上列车", date: "2024-01-15", rarity: 'common' },
  { id: 2, x: 45, y: 35, size: 4, brightness: 0.8, universeName: "时间花园", date: "2024-01-14", rarity: 'rare' },
  { id: 3, x: 75, y: 15, size: 5, brightness: 0.95, universeName: "龙眠王国", date: "2024-01-13", rarity: 'legendary' },
  { id: 4, x: 25, y: 60, size: 3, brightness: 0.85, universeName: "银河邮局", date: "2024-01-12", rarity: 'common' },
  { id: 5, x: 60, y: 70, size: 4, brightness: 0.9, universeName: "星辰图书馆", date: "2024-01-11", rarity: 'rare' },
  { id: 6, x: 85, y: 45, size: 3, brightness: 0.88, universeName: "晨曦岛", date: "2024-01-10", rarity: 'common' },
  { id: 7, x: 35, y: 85, size: 4, brightness: 0.92, universeName: "迷雾森林", date: "2024-01-09", rarity: 'rare' },
  { id: 8, x: 70, y: 90, size: 5, brightness: 0.94, universeName: "太空港", date: "2024-01-08", rarity: 'legendary' },
  { id: 9, x: 10, y: 50, size: 3, brightness: 0.85, universeName: "极光森林", date: "2024-01-07", rarity: 'common' },
  { id: 10, x: 50, y: 10, size: 5, brightness: 0.95, universeName: "水晶洞穴", date: "2024-01-06", rarity: 'legendary' },
  { id: 11, x: 90, y: 75, size: 3, brightness: 0.88, universeName: "风之谷", date: "2024-01-05", rarity: 'common' },
  { id: 12, x: 40, y: 45, size: 4, brightness: 0.9, universeName: "彩虹桥", date: "2024-01-04", rarity: 'rare' },
  { id: 13, x: 20, y: 30, size: 3, brightness: 0.86, universeName: "月光湖", date: "2024-01-03", rarity: 'common' },
  { id: 14, x: 65, y: 55, size: 4, brightness: 0.92, universeName: "星语塔", date: "2024-01-02", rarity: 'rare' },
  { id: 15, x: 80, y: 25, size: 3, brightness: 0.89, universeName: "暮色城", date: "2024-01-01", rarity: 'common' },
  { id: 16, x: 55, y: 80, size: 5, brightness: 0.94, universeName: "星河渡口", date: "2023-12-31", rarity: 'legendary' },
  { id: 17, x: 30, y: 70, size: 4, brightness: 0.91, universeName: "云端城堡", date: "2023-12-30", rarity: 'rare' }
];

// 最近完成的宇宙
export const recentUniverses = universeTemplates.slice(0, 3);