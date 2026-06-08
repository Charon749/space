"use client";

import { useState } from "react";
import Link from "next/link";
import { getTodayUniverse, travelers } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { ArrowLeft, Sparkles, Star, Share2 } from "lucide-react";
import {
  ChoiceMission,
  LetterMission,
  StoryMission,
  MemoryMission,
  WishMission,
  GiftMission,
  PhotoMission,
  QuestionMission,
} from "@/components/missions";

export default function TodayPage() {
  const universe = getTodayUniverse();
  const [isCompleted, setIsCompleted] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [resultData, setResultData] = useState<string>("");

  const handleMissionComplete = (data: string) => {
    setResultData(data);
    setIsCompleted(true);
    setTimeout(() => setShowMemory(true), 1500);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-400 border-yellow-400/30";
      case "epic":
        return "text-purple-400 border-purple-400/30";
      case "rare":
        return "text-cosmic-blue border-cosmic-blue/30";
      default:
        return "text-cosmic-purple border-cosmic-purple/30";
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

  const generatedMemory = {
    title: `${universe.name}记忆`,
    description: universe.memorySummary,
    keywords: universe.keywords,
  };

  const renderMission = () => {
    switch (universe.interactionType) {
      case "choice":
        return <ChoiceMission universe={universe} onComplete={handleMissionComplete} />;
      case "letter":
        return <LetterMission universe={universe} onComplete={handleMissionComplete} />;
      case "story":
        return <StoryMission universe={universe} onComplete={handleMissionComplete} />;
      case "memory":
        return <MemoryMission universe={universe} onComplete={handleMissionComplete} />;
      case "wish":
        return <WishMission universe={universe} onComplete={handleMissionComplete} />;
      case "gift":
        return <GiftMission universe={universe} onComplete={handleMissionComplete} />;
      case "photo":
        return <PhotoMission universe={universe} onComplete={handleMissionComplete} />;
      case "question":
        return <QuestionMission universe={universe} onComplete={handleMissionComplete} />;
      default:
        return (
          <div className="text-center py-8">
            <div className="text-muted text-sm font-light">
              该互动类型正在开发中...
            </div>
          </div>
        );
    }
  };

  return (
    <main className={`min-h-screen pb-20 ${universe.backgroundClass}`}>
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cosmic-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-md mx-auto px-6 py-8">
        {/* 返回按钮 */}
        <Link
          href="/"
          className="inline-flex items-center text-muted hover:text-foreground transition-colors mb-6 animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          返回
        </Link>

        {/* 宇宙信息 */}
        {!isCompleted ? (
          <>
            {/* 宇宙标题和图标 */}
            <section className="mb-8 animate-fade-in-up">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl">{universe.icon}</span>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-light px-2 py-1 rounded-full ${getRarityBg(universe.rarity)} ${getRarityColor(universe.rarity)}`}>
                      {getRarityLabel(universe.rarity)}
                    </span>
                    <span className="text-xs font-light text-muted">
                      {getCategoryLabel(universe.category)}宇宙
                    </span>
                  </div>
                  <h1 className="text-2xl font-light">{universe.name}</h1>
                  <p className="text-xs font-light text-muted">{universe.title}</p>
                </div>
              </div>

              {/* 世界观描述 */}
              <Card className="p-5 bg-card/30 backdrop-blur-sm border-border/30">
                <div className="text-xs font-light text-cosmic-purple mb-2">世界观</div>
                <p className="text-muted text-sm font-light leading-relaxed">
                  {universe.description}
                </p>
              </Card>
            </section>

            {/* 双方身份 */}
            <section className="mb-8 animate-fade-in-delay-1">
              <div className="text-xs font-light text-muted mb-4">今日身份</div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30">
                  <div className="text-xs font-light text-muted mb-2">你的身份</div>
                  <div className="text-2xl mb-2">👤</div>
                  <div className="text-sm font-light">{universe.yourRole}</div>
                  <div className="text-xs font-light text-muted mt-1">
                    {universe.yourRoleDescription}
                  </div>
                </Card>
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30">
                  <div className="text-xs font-light text-muted mb-2">旅伴身份</div>
                  <div className="text-2xl mb-2">👤</div>
                  <div className="text-sm font-light">{universe.partnerRole}</div>
                  <div className="text-xs font-light text-muted mt-1">
                    {universe.partnerRoleDescription}
                  </div>
                </Card>
              </div>
            </section>

            {/* 互动区域 */}
            <section className="animate-fade-in-delay-2">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-cosmic-purple/20">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-cosmic-purple" />
                  <h3 className="text-sm font-light">{universe.interactionTitle}</h3>
                </div>
                <p className="text-muted text-xs font-light mb-6">
                  {universe.interactionDescription}
                </p>

                {renderMission()}
              </Card>
            </section>
          </>
        ) : (
          /* 完成后的记忆展示 */
          <section className="animate-fade-in">
            {showMemory ? (
              <Card className="p-6 bg-gradient-to-br from-card/90 to-card/60 backdrop-blur-md border-cosmic-purple/30">
                <div className="text-center mb-6">
                  <div className={`text-4xl mb-4 animate-breathe ${getRarityColor(universe.rarity)}`}>
                    {universe.icon}
                  </div>
                  <h2 className="text-xl font-light mb-2">{generatedMemory.title}</h2>
                </div>

                <p className="text-sm font-light leading-relaxed text-center mb-6">
                  {generatedMemory.description}
                </p>

                {/* 关键词标签 */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {generatedMemory.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs font-light px-2 py-1 rounded-full bg-cosmic-purple/10 text-cosmic-purple"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* 获得的星星 */}
                <div className="mt-4 pt-4 border-t border-border/30">
                  <div className="flex items-center justify-center gap-3">
                    <div
                      className={`text-3xl ${
                        universe.rarity === "legendary"
                          ? "text-yellow-400"
                          : universe.rarity === "epic"
                          ? "text-purple-400"
                          : universe.rarity === "rare"
                          ? "text-cosmic-blue"
                          : "text-cosmic-purple"
                      }`}
                    >
                      ⭐
                    </div>
                    <div>
                      <div className="text-sm font-light">获得星星</div>
                      <div className="text-xs font-light text-muted">
                        {getRarityLabel(universe.rarity)}级星星已添加到星图
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <Link href="/">
                    <button className="flex-1 py-3 px-4 rounded-xl bg-card/50 border border-border/30 text-sm font-light hover:bg-card/70 transition-colors">
                      返回首页
                    </button>
                  </Link>
                  <Link href="/starmap">
                    <button className="flex-1 py-3 px-4 rounded-xl bg-cosmic-purple/20 border border-cosmic-purple/30 text-sm font-light text-cosmic-purple hover:bg-cosmic-purple/30 transition-colors">
                      <Star className="w-4 h-4 inline mr-1" />
                      查看星图
                    </button>
                  </Link>
                </div>
              </Card>
            ) : (
              <div className="text-center py-12">
                <div className={`text-4xl mb-4 animate-breathe ${getRarityColor(universe.rarity)}`}>
                  ✨
                </div>
                <p className="text-sm font-light">正在生成共同记忆...</p>
              </div>
            )}
          </section>
        )}
      </div>

      <Navigation />
    </main>
  );
}