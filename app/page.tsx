import Link from "next/link";
import { travelers, recentUniverses } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/ui/navigation";
import { ArrowRight, Star, Trophy } from "lucide-react";

export default function Home() {
  const todayUniverse = recentUniverses[0];

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-400";
      case "rare":
        return "text-cosmic-blue";
      default:
        return "text-cosmic-purple";
    }
  };

  const getRarityLabel = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "传说";
      case "rare":
        return "稀有";
      default:
        return "普通";
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />
        
        {/* 漂浮的星星装饰 */}
        {Array.from({ length: 20 }).map((_, i) => (
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
          <div className="text-cosmic-purple text-3xl mb-4 animate-breathe">✦</div>
          <h1 className="text-2xl font-light tracking-wide mb-2">宇宙旅人</h1>
          <p className="text-muted text-sm font-light">探索无限宇宙，创造共同记忆</p>
        </header>

        {/* 今日宇宙卡片 - 突出期待感 */}
        <section className="mb-10 animate-fade-in-up">
          <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-cosmic-purple/30 hover:border-cosmic-purple/50 transition-all duration-500 relative overflow-hidden">
            {/* 背景光效 */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cosmic-purple/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              {/* 宇宙图标和稀有度 */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl">{todayUniverse.icon}</span>
                <span className={`text-xs font-light px-2 py-1 rounded-full bg-cosmic-purple/10 ${getRarityColor(todayUniverse.rarity)}`}>
                  {getRarityLabel(todayUniverse.rarity)}宇宙
                </span>
              </div>

              {/* 宇宙名称 */}
              <h2 className="text-2xl font-light mb-2">{todayUniverse.name}</h2>
              
              {/* 宇宙描述 */}
              <p className="text-muted text-sm font-light leading-relaxed mb-6 line-clamp-3">
                {todayUniverse.description}
              </p>

              {/* 互动类型 */}
              <div className="flex items-center gap-2 mb-6">
                <Star className="w-4 h-4 text-cosmic-purple" fill="currentColor" />
                <span className="text-xs font-light text-muted">
                  今日互动：{todayUniverse.interaction.title}
                </span>
              </div>

              {/* 进入按钮 */}
              <Link href="/today">
                <Button className="w-full group bg-cosmic-purple/20 hover:bg-cosmic-purple/30 border-cosmic-purple/40">
                  开始今日冒险
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </section>

        {/* 旅程统计 */}
        <section className="mb-10 animate-fade-in-delay-1">
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

        {/* 最近探索的宇宙 */}
        <section className="animate-fade-in-delay-2">
          <h3 className="text-sm font-light mb-4 text-muted">最近探索</h3>
          <div className="space-y-3">
            {recentUniverses.slice(1, 4).map((universe) => (
              <Link
                key={universe.id}
                href={`/archive/${universe.id}`}
                className="block"
              >
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30 hover:border-cosmic-purple/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{universe.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-light">{universe.name}</span>
                        <span className={`text-xs ${getRarityColor(universe.rarity)}`}>
                          {getRarityLabel(universe.rarity)}
                        </span>
                      </div>
                      <div className="text-muted text-xs font-light">{universe.date}</div>
                    </div>
                    <div className="text-cosmic-purple">
                      <Star className="w-4 h-4" fill="currentColor" />
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <Navigation />
    </main>
  );
}