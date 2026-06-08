"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  travelers, 
  getTodayUniverse, 
  generateRouteMap, 
  souvenirs,
  getUnlockedTitles,
  type RouteMap
} from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { 
  ArrowRight, 
  Star, 
  Trophy, 
  Sparkles, 
  Compass, 
  Briefcase, 
  Crown,
  MapPin,
  Zap
} from "lucide-react";

export default function Home() {
  const todayUniverse = getTodayUniverse();
  const [routeMap, setRouteMap] = useState<RouteMap | null>(null);
  const unlockedTitles = getUnlockedTitles();

  useEffect(() => {
    const map = generateRouteMap();
    setRouteMap(map);
  }, []);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-400";
      case "epic":
        return "text-purple-400";
      case "rare":
        return "text-cosmic-blue";
      default:
        return "text-cosmic-purple";
    }
  };

  const getRarityBg = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "bg-yellow-400/10";
      case "epic":
        return "bg-purple-400/10";
      case "rare":
        return "bg-cosmic-blue/10";
      default:
        return "bg-cosmic-purple/10";
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "传说";
      case "epic":
        return "史诗";
      case "rare":
        return "稀有";
      default:
        return "普通";
    }
  };

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "fantasy":
        return "奇幻";
      case "scifi":
        return "科幻";
      case "healing":
        return "治愈";
      case "romance":
        return "浪漫";
      case "mystery":
        return "神秘";
      default:
        return category;
    }
  };

  return (
    <main className={`min-h-screen pb-20 ${todayUniverse.backgroundClass}`}>
      {/* 动态背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />
        
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-md mx-auto px-6 py-8">
        {/* 顶部标题 */}
        <header className="text-center mb-8 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-4xl">{travelers.me.avatar}</span>
            <span className="text-4xl">❤️</span>
            <span className="text-4xl">{travelers.partner.avatar}</span>
          </div>
          <h1 className="text-2xl font-light tracking-wide mb-2">宇宙旅人</h1>
          <p className="text-muted text-sm font-light">共同完成一场持续数年的宇宙旅行</p>
        </header>

        {/* 今日宇宙卡片 */}
        <section className="mb-6 animate-fade-in-up">
          <Card className={`p-5 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-md border-cosmic-purple/30 hover:border-cosmic-purple/50 transition-all duration-500 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-40 h-40 bg-cosmic-purple/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cosmic-blue/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-3">
                <span className={`text-xs font-light px-2 py-1 rounded-full ${getRarityBg(todayUniverse.rarity)} ${getRarityColor(todayUniverse.rarity)}`}>
                  {getRarityLabel(todayUniverse.rarity)}
                </span>
                <span className="text-xs font-light text-muted">今日宇宙</span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-4xl animate-breathe">{todayUniverse.icon}</span>
                <div>
                  <h2 className="text-xl font-light">{todayUniverse.name}</h2>
                  <p className="text-xs font-light text-muted">{todayUniverse.title}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 mb-4 p-3 rounded-lg bg-cosmic-purple/5 border border-cosmic-purple/10">
                <Sparkles className="w-4 h-4 text-cosmic-purple" />
                <div className="flex-1">
                  <div className="text-sm font-light">{todayUniverse.interactionTitle}</div>
                  <div className="text-xs font-light text-muted">{todayUniverse.interactionDescription}</div>
                </div>
              </div>

              <Link href="/today">
                <Button className="w-full group bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 hover:from-cosmic-purple/30 hover:to-cosmic-blue/30 border-cosmic-purple/40">
                  开始今日冒险
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* 航线进度 */}
        <section className="mb-6 animate-fade-in-up">
          <Card className="p-5 bg-card/30 backdrop-blur-sm border-border/30">
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-4 h-4 text-cosmic-purple" />
              <h3 className="text-sm font-light">航线进度</h3>
            </div>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center p-3 rounded-lg bg-card/50">
                <div className="text-xl font-light text-cosmic-purple">{routeMap?.visitedNodes || 0}</div>
                <div className="text-xs font-light text-muted">已探索</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50">
                <div className="text-xl font-light text-cosmic-blue">{routeMap?.unlockedNodes || 0}</div>
                <div className="text-xs font-light text-muted">已解锁</div>
              </div>
              <div className="text-center p-3 rounded-lg bg-card/50">
                <div className="text-xl font-light text-muted">{routeMap?.totalNodes || 30}</div>
                <div className="text-xs font-light text-muted">总计</div>
              </div>
            </div>

            {/* 进度条 */}
            <div className="relative">
              <div className="h-2 bg-card rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cosmic-purple to-cosmic-blue transition-all duration-500"
                  style={{ width: `${((routeMap?.visitedNodes || 0) / (routeMap?.totalNodes || 30)) * 100}%` }}
                />
              </div>
              <div className="flex justify-between mt-2">
                <span className="text-xs font-light text-muted">开始旅程</span>
                <span className="text-xs font-light text-muted">完成所有宇宙</span>
              </div>
            </div>

            <Link href="/route">
              <Button variant="ghost" className="w-full mt-4 text-cosmic-purple hover:bg-cosmic-purple/10">
                <MapPin className="w-4 h-4 mr-2" />
                查看航线地图
              </Button>
            </Link>
          </Card>
        </section>

        {/* 旅人档案概览 */}
        <section className="mb-6 animate-fade-in-delay-1">
          <Card className="p-5 bg-card/30 backdrop-blur-sm border-border/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-yellow-400" />
                <h3 className="text-sm font-light">旅人档案</h3>
              </div>
              <span className="text-xs font-light text-muted">Lv.{travelers.me.level}</span>
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
                <span className="text-2xl">{travelers.me.avatar}</span>
              </div>
              <div className="flex-1">
                <div className="text-sm font-light">{travelers.me.name}</div>
                <div className="text-xs font-light text-muted">{travelers.me.title}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-light text-cosmic-purple">{travelers.me.exp}</div>
                <div className="text-xs font-light text-muted">/ {travelers.me.nextLevelExp} EXP</div>
              </div>
            </div>

            {/* 经验条 */}
            <div className="h-1.5 bg-card rounded-full overflow-hidden mb-4">
              <div 
                className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-500"
                style={{ width: `${(travelers.me.exp / travelers.me.nextLevelExp) * 100}%` }}
              />
            </div>

            {/* 称号展示 */}
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-3 h-3 text-cosmic-blue" />
              <span className="text-xs font-light text-muted">已解锁称号</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {unlockedTitles.slice(0, 4).map((title) => (
                <span
                  key={title.id}
                  className={`text-xs font-light px-2 py-1 rounded-full ${getRarityBg(title.rarity)} ${getRarityColor(title.rarity)}`}
                >
                  {title.icon} {title.name}
                </span>
              ))}
            </div>
          </Card>
        </section>

        {/* 纪念品展示 */}
        <section className="mb-6 animate-fade-in-delay-2">
          <Card className="p-5 bg-card/30 backdrop-blur-sm border-border/30">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-cosmic-blue" />
                <h3 className="text-sm font-light">宇宙纪念品</h3>
              </div>
              <span className="text-xs font-light text-muted">{souvenirs.length} 件</span>
            </div>

            <div className="flex gap-3 overflow-x-auto pb-2">
              {souvenirs.slice(0, 6).map((souvenir) => (
                <div
                  key={souvenir.id}
                  className="flex-shrink-0 w-16 h-16 rounded-xl bg-card/50 border border-border/30 flex flex-col items-center justify-center hover:border-cosmic-purple/30 transition-colors cursor-pointer"
                  title={souvenir.name}
                >
                  <span className="text-2xl">{souvenir.icon}</span>
                  <span className={`text-xs ${getRarityColor(souvenir.rarity)}`}>
                    {souvenir.name.slice(0, 2)}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* 统计概览 */}
        <section className="animate-fade-in-delay-3">
          <Card className="p-5 bg-card/30 backdrop-blur-sm border-border/30">
            <div className="flex items-center gap-2 mb-4">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <h3 className="text-sm font-light">旅程统计</h3>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <Star className="w-4 h-4 text-cosmic-purple" fill="currentColor" />
                <div>
                  <div className="text-sm font-light">{travelers.me.stats.daysTraveled}</div>
                  <div className="text-xs font-light text-muted">旅行天数</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <Sparkles className="w-4 h-4 text-cosmic-blue" />
                <div>
                  <div className="text-sm font-light">{travelers.me.stats.memoriesRecorded}</div>
                  <div className="text-xs font-light text-muted">共同记忆</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <span className="text-lg">✉️</span>
                <div>
                  <div className="text-sm font-light">{travelers.me.stats.lettersSent}</div>
                  <div className="text-xs font-light text-muted">信件往来</div>
                </div>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-lg bg-card/50">
                <span className="text-lg">🎁</span>
                <div>
                  <div className="text-sm font-light">{travelers.me.stats.giftsExchanged}</div>
                  <div className="text-xs font-light text-muted">礼物交换</div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </div>

      <Navigation />
    </main>
  );
}