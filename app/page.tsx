import Link from "next/link";
import { travelers, getTodayUniverse, stars } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Star, Trophy, Sparkles } from "lucide-react";

export default function Home() {
  const todayUniverse = getTodayUniverse();

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
        {/* 背景渐变光效 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />
        
        {/* 漂浮的星星装饰 */}
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

      <div className="relative max-w-md mx-auto px-6 py-12">
        {/* 顶部标题 */}
        <header className="text-center mb-12 animate-fade-in">
          <div className={`text-3xl mb-4 animate-breathe ${getRarityColor(todayUniverse.rarity)}`}>
            {todayUniverse.icon}
          </div>
          <h1 className="text-2xl font-light tracking-wide mb-2">宇宙旅人</h1>
          <p className="text-muted text-sm font-light">探索无限宇宙，创造共同记忆</p>
        </header>

        {/* 今日宇宙卡片 - 盲盒感设计 */}
        <section className="mb-8 animate-fade-in-up">
          <Card className={`p-6 bg-gradient-to-br from-card/90 to-card/50 backdrop-blur-md border-cosmic-purple/30 hover:border-cosmic-purple/50 transition-all duration-500 relative overflow-hidden`}>
            {/* 背景光效 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-cosmic-purple/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-cosmic-blue/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              {/* 稀有度标签 */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-light px-2 py-1 rounded-full ${getRarityBg(todayUniverse.rarity)} ${getRarityColor(todayUniverse.rarity)}`}>
                  {getRarityLabel(todayUniverse.rarity)}宇宙
                </span>
                <span className="text-xs font-light text-muted">
                  {getCategoryLabel(todayUniverse.category)}
                </span>
              </div>

              {/* 宇宙名称和图标 */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{todayUniverse.icon}</span>
                <div>
                  <h2 className="text-2xl font-light">{todayUniverse.name}</h2>
                  <p className="text-xs font-light text-muted">{todayUniverse.title}</p>
                </div>
              </div>

              {/* 宇宙描述 */}
              <p className="text-muted text-sm font-light leading-relaxed mb-6 line-clamp-3">
                {todayUniverse.description}
              </p>

              {/* 角色身份 */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                  <div className="text-xs font-light text-muted mb-1">你的身份</div>
                  <div className="text-sm font-light">{todayUniverse.yourRole}</div>
                </div>
                <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                  <div className="text-xs font-light text-muted mb-1">旅伴身份</div>
                  <div className="text-sm font-light">{todayUniverse.partnerRole}</div>
                </div>
              </div>

              {/* 玩法预告 */}
              <div className="flex items-center gap-2 mb-6 p-3 rounded-lg bg-cosmic-purple/5 border border-cosmic-purple/10">
                <Sparkles className="w-4 h-4 text-cosmic-purple" />
                <div>
                  <div className="text-sm font-light">{todayUniverse.interactionTitle}</div>
                  <div className="text-xs font-light text-muted">{todayUniverse.interactionDescription}</div>
                </div>
              </div>

              {/* 开始按钮 */}
              <Link href="/today">
                <Button className="w-full group bg-gradient-to-r from-cosmic-purple/20 to-cosmic-blue/20 hover:from-cosmic-purple/30 hover:to-cosmic-blue/30 border-cosmic-purple/40">
                  开始今日冒险
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* 旅程统计 */}
        <section className="mb-8 animate-fade-in-delay-1">
          <Card className="p-6 bg-card/30 backdrop-blur-sm border-border/30">
            <h3 className="text-sm font-light mb-4 text-muted">旅程记录</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-cosmic-purple text-xl font-light mb-1">
                  {travelers.journey.days}
                </div>
                <div className="text-muted text-xs font-light">同行天数</div>
              </div>
              <div className="text-center">
                <div className="text-cosmic-blue text-xl font-light mb-1">
                  {travelers.journey.universesExplored}
                </div>
                <div className="text-muted text-xs font-light">探索宇宙</div>
              </div>
              <div className="text-center">
                <div className="text-cosmic-purple text-xl font-light mb-1">
                  {travelers.journey.memoriesRecorded}
                </div>
                <div className="text-muted text-xs font-light">共同记忆</div>
              </div>
            </div>

            {/* 徽章 */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <div className="flex items-center gap-1 mb-2">
                <Trophy className="w-4 h-4 text-yellow-400" />
                <span className="text-xs font-light text-muted">获得徽章</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {travelers.journey.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-xs font-light px-2 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </section>

        {/* 最近探索的星星 */}
        <section className="animate-fade-in-delay-2">
          <h3 className="text-sm font-light mb-4 text-muted">星图预览</h3>
          <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30">
            <div className="relative h-32">
              {stars.slice(0, 8).map((star, index) => (
                <button
                  key={star.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none"
                  style={{
                    left: `${star.x}%`,
                    top: `${star.y}%`,
                  }}
                >
                  <div
                    className="rounded-full transition-all duration-300 hover:scale-150"
                    style={{
                      width: `${star.size * 2 + 2}px`,
                      height: `${star.size * 2 + 2}px`,
                      backgroundColor: star.rarity === 'legendary' ? '#FACC15' : 
                                       star.rarity === 'epic' ? '#A78BFA' :
                                       star.rarity === 'rare' ? '#38BDF8' : '#A78BFA',
                      opacity: star.brightness,
                      boxShadow: `0 0 ${star.size * 4}px ${star.rarity === 'legendary' ? '#FACC1560' : '#A78BFA60'}`,
                    }}
                  />
                </button>
              ))}
              {/* 装饰小星星 */}
              {Array.from({ length: 15 }).map((_, i) => (
                <div
                  key={`deco-${i}`}
                  className="absolute w-0.5 h-0.5 bg-white/20 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>
            <div className="flex items-center justify-center mt-3">
              <Link href="/starmap" className="flex items-center gap-1 text-xs font-light text-cosmic-purple hover:text-cosmic-purple/80">
                <Star className="w-3 h-3" fill="currentColor" />
                查看完整星图
              </Link>
            </div>
          </Card>
        </section>
      </div>

      <Navigation />
    </main>
  );
}