// 导入数据文件
import worlds from './worlds.json';
import species from './species.json';
import relationships from './relationships.json';
import styles from './styles.json';

// 类型定义
export interface World {
  id: string;
  name: string;
  category: string;
  rarity: string;
  description: string;
  background: string;
  backgroundClass: string;
  icon: string;
}

export interface Species {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: string;
}

export interface Relationship {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: string;
}

export interface Style {
  id: string;
  name: string;
  icon: string;
  description: string;
  rarity: string;
  backgroundClass: string;
  colorPalette: string[];
}

export interface GeneratedUniverse {
  world: World;
  travelerASpecies: Species;
  travelerBSpecies: Species;
  relationship: Relationship;
  style: Style;
  storyBackground: string;
  generatedAt: string;
}

// 确定性随机数生成器（基于种子）
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  nextInt(min: number, max: number): number {
    return Math.floor(this.next() * (max - min + 1)) + min;
  }

  nextArray<T>(array: T[]): T {
    return array[this.nextInt(0, array.length - 1)];
  }

  shuffle<T>(array: T[]): T[] {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = this.nextInt(0, i);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

// 根据日期生成种子
function generateSeed(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  // 使用简单的哈希算法生成种子
  let seed = year * 10000 + month * 100 + day;
  seed = (seed * 9301 + 49297) % 233280;
  
  return seed;
}

// 根据稀有度筛选数组
function filterByRarity<T extends { rarity: string }>(array: T[], rarity: string): T[] {
  return array.filter(item => item.rarity === rarity);
}

// 生成故事背景
function generateStoryBackground(
  world: World,
  travelerASpecies: Species,
  travelerBSpecies: Species,
  relationship: Relationship
): string {
  const templates = [
    `在${world.name}中，${travelerASpecies.name}与${travelerBSpecies.name}作为${relationship.name}相遇了。${world.description}`,
    `${travelerASpecies.name}和${travelerBSpecies.name}是一对${relationship.name}，他们在${world.name}中展开了一段奇妙的旅程。${world.description}`,
    `在${world.name}的${relationship.name}关系中，${travelerASpecies.name}与${travelerBSpecies.name}共同面对挑战。${world.description}`,
    `${world.name}见证了${travelerASpecies.name}和${travelerBSpecies.name}这对${relationship.name}的故事。${world.description}`,
    `作为${relationship.name}，${travelerASpecies.name}与${travelerBSpecies.name}在${world.name}中创造了属于他们的回忆。${world.description}`
  ];

  const random = new SeededRandom(generateSeed(new Date()));
  return random.nextArray(templates);
}

// 生成宇宙
export function generateUniverse(date: Date = new Date()): GeneratedUniverse {
  const seed = generateSeed(date);
  const random = new SeededRandom(seed);

  // 随机选择世界（根据稀有度权重）
  const rarityWeights = {
    common: 60,
    rare: 25,
    epic: 12,
    legendary: 3
  };

  const rarityRoll = random.nextInt(1, 100);
  let selectedRarity = 'common';
  let cumulative = 0;

  for (const [rarity, weight] of Object.entries(rarityWeights)) {
    cumulative += weight;
    if (rarityRoll <= cumulative) {
      selectedRarity = rarity;
      break;
    }
  }

  const availableWorlds = filterByRarity(worlds as World[], selectedRarity);
  const world = random.nextArray(availableWorlds);

  // 随机选择旅人形态（确保不重复）
  const shuffledSpecies = random.shuffle(species as Species[]);
  const travelerASpecies = shuffledSpecies[0];
  const travelerBSpecies = shuffledSpecies[1];

  // 随机选择关系
  const relationship = random.nextArray(relationships as Relationship[]);

  // 随机选择画风
  const style = random.nextArray(styles as Style[]);

  // 生成故事背景
  const storyBackground = generateStoryBackground(
    world,
    travelerASpecies,
    travelerBSpecies,
    relationship
  );

  return {
    world,
    travelerASpecies,
    travelerBSpecies,
    relationship,
    style,
    storyBackground,
    generatedAt: date.toISOString()
  };
}

// 获取今日宇宙
export function getTodayUniverse(): GeneratedUniverse {
  return generateUniverse(new Date());
}

// 获取指定日期的宇宙
export function getUniverseByDate(date: Date): GeneratedUniverse {
  return generateUniverse(date);
}

// 获取未来7天的宇宙
export function getNext7DaysUniverse(): GeneratedUniverse[] {
  const universes: GeneratedUniverse[] = [];
  const today = new Date();

  for (let i = 1; i <= 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    universes.push(generateUniverse(date));
  }

  return universes;
}

// 导出数据
export { worlds, species, relationships, styles };