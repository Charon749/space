"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { getTodayUniverse, travelers } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Navigation } from "@/components/ui/navigation";
import { ArrowLeft, Star, Sparkles, Check, Users } from "lucide-react";

export default function TodayPage() {
  const universe = getTodayUniverse();
  const [myRole, setMyRole] = useState(universe.roles[0]);
  const [partnerRole, setPartnerRole] = useState(universe.roles[1]);
  const [myInput, setMyInput] = useState("");
  const [partnerInput, setPartnerInput] = useState("");
  const [myChoice, setMyChoice] = useState<string | null>(null);
  const [partnerChoice, setPartnerChoice] = useState<string | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showMemory, setShowMemory] = useState(false);
  const [step, setStep] = useState(1);

  // 随机分配角色
  useEffect(() => {
    const shuffled = [...universe.roles].sort(() => Math.random() - 0.5);
    setMyRole(shuffled[0]);
    setPartnerRole(shuffled[1]);
  }, [universe.roles]);

  const handleSubmit = () => {
    if (universe.interaction.type === "decision") {
      if (myChoice && partnerChoice) {
        setIsCompleted(true);
        setTimeout(() => setShowMemory(true), 1500);
      }
    } else {
      if (myInput.trim()) {
        setIsCompleted(true);
        setTimeout(() => setShowMemory(true), 1500);
      }
    }
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "text-yellow-400 border-yellow-400/30";
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
      case "rare":
        return "bg-cosmic-blue/10";
      default:
        return "bg-cosmic-purple/10";
    }
  };

  const generatedMemory = {
    title: `${universe.name}记忆`,
    description: `在${universe.name}的世界里，你们共同经历了一段独特的冒险。作为${myRole.name}和${partnerRole.name}，你们${universe.interaction.type === 'decision' ? '一起做出了重要的选择' : '携手创造了美好的回忆'}。这段经历将永远铭刻在你们的星图之中。`,
    keywords: [universe.name, myRole.name, partnerRole.name, "冒险"]
  };

  // 渲染不同类型的互动组件
  const renderInteraction = () => {
    switch (universe.interaction.type) {
      case "decision":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <div className="grid grid-cols-1 gap-3">
              {universe.interaction.options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setMyChoice(option.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                    myChoice === option.id
                      ? "border-cosmic-purple bg-cosmic-purple/10"
                      : "border-border/50 bg-card/30 hover:border-cosmic-purple/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{option.icon}</span>
                    <div className="flex-1">
                      <div className="text-sm font-light">{option.text}</div>
                      {option.effect && (
                        <div className="text-xs font-light text-muted mt-1">
                          {option.effect}
                        </div>
                      )}
                    </div>
                    {myChoice === option.id && (
                      <Check className="w-5 h-5 text-cosmic-purple" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* 显示对方选择状态 */}
            <div className="mt-4 p-4 rounded-lg bg-card/30 border border-border/50">
              <div className="flex items-center gap-2 text-muted text-xs font-light">
                <Users className="w-4 h-4" />
                <span>等待旅伴做出选择...</span>
              </div>
            </div>
          </div>
        );

      case "co-create":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <Textarea
              placeholder="写下你的回忆..."
              value={myInput}
              onChange={(e) => setMyInput(e.target.value)}
              className="min-h-[150px]"
            />
            
            {/* 规则提示 */}
            <div className="mt-4 p-3 rounded-lg bg-cosmic-purple/5 border border-cosmic-purple/20">
              <div className="text-cosmic-purple text-xs font-light mb-2">互动规则</div>
              <ul className="text-xs font-light text-muted space-y-1">
                {universe.interaction.rules?.map((rule, index) => (
                  <li key={index}>• {rule}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case "story-chain":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <Textarea
              placeholder="续写你们的故事..."
              value={myInput}
              onChange={(e) => setMyInput(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="text-xs font-light text-muted">
              提示：每人最多写三句话
            </div>
          </div>
        );

      case "emoji":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <div className="grid grid-cols-3 gap-3">
              {universe.interaction.options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setMyChoice(option.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    myChoice === option.id
                      ? "border-cosmic-purple bg-cosmic-purple/10"
                      : "border-border/50 bg-card/30 hover:border-cosmic-purple/30"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-3xl mb-2">{option.icon}</div>
                    <div className="text-xs font-light">{option.text}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case "collection":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <div className="grid grid-cols-2 gap-3">
              {universe.interaction.options?.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setMyChoice(option.id)}
                  className={`p-4 rounded-lg border transition-all duration-300 text-left ${
                    myChoice === option.id
                      ? "border-cosmic-purple bg-cosmic-purple/10"
                      : "border-border/50 bg-card/30 hover:border-cosmic-purple/30"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{option.icon}</span>
                    <div>
                      <div className="text-sm font-light">{option.text}</div>
                      {option.effect && (
                        <div className="text-xs font-light text-muted">{option.effect}</div>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );

      case "time-capsule":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <Textarea
              placeholder="写给一年后的对方..."
              value={myInput}
              onChange={(e) => setMyInput(e.target.value)}
              className="min-h-[150px]"
            />
            <div className="text-xs font-light text-muted">
              提示：信件将在一年后自动开启
            </div>
          </div>
        );

      case "image-upload":
        return (
          <div className="space-y-4">
            <p className="text-muted text-sm font-light mb-4">{universe.interaction.prompt}</p>
            <div className="border-2 border-dashed border-border/50 rounded-lg p-8 text-center hover:border-cosmic-purple/30 transition-colors cursor-pointer">
              <div className="text-cosmic-purple mb-2">📷</div>
              <div className="text-sm font-light">点击上传图片</div>
              <div className="text-xs font-light text-muted mt-1">支持 JPG、PNG 格式</div>
            </div>
          </div>
        );

      case "random-event":
        return (
          <div className="space-y-4">
            <div className="p-6 rounded-lg bg-card/50 border border-cosmic-purple/20">
              <div className="text-cosmic-purple text-lg mb-3 animate-breathe">✨</div>
              <p className="text-sm font-light leading-relaxed">{universe.interaction.prompt}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => setMyChoice("explore")}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  myChoice === "explore"
                    ? "border-cosmic-purple bg-cosmic-purple/10"
                    : "border-border/50 bg-card/30 hover:border-cosmic-purple/30"
                }`}
              >
                <div className="text-xl mb-2">🚪</div>
                <div className="text-sm font-light">进入探索</div>
              </button>
              <button
                onClick={() => setMyChoice("wait")}
                className={`p-4 rounded-lg border transition-all duration-300 ${
                  myChoice === "wait"
                    ? "border-cosmic-purple bg-cosmic-purple/10"
                    : "border-border/50 bg-card/30 hover:border-cosmic-purple/30"
                }`}
              >
                <div className="text-xl mb-2">⏳</div>
                <div className="text-sm font-light">等待观察</div>
              </button>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-muted text-sm font-light">
            该互动类型正在开发中...
          </div>
        );
    }
  };

  return (
    <main className="min-h-screen bg-background pb-20">
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
                  <span className={`text-xs font-light px-2 py-1 rounded-full ${getRarityBg(universe.rarity)} ${getRarityColor(universe.rarity)} mb-2 block`}>
                    #{String(universe.id).padStart(3, "0")} · {universe.type}宇宙
                  </span>
                  <h1 className="text-2xl font-light">{universe.name}</h1>
                </div>
              </div>

              {/* 世界观描述 */}
              <Card className="p-5 bg-card/30 backdrop-blur-sm border-border/30">
                <div className="text-xs font-light text-cosmic-purple mb-2">世界观</div>
                <p className="text-muted text-sm font-light leading-relaxed">
                  {universe.worldView}
                </p>
              </Card>
            </section>

            {/* 双方身份 */}
            <section className="mb-8 animate-fade-in-delay-1">
              <div className="text-xs font-light text-muted mb-4">今日身份</div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30">
                  <div className="text-xs font-light text-muted mb-2">你的身份</div>
                  <div className="text-2xl mb-2">{myRole.icon}</div>
                  <div className="text-sm font-light">{myRole.name}</div>
                  <div className="text-xs font-light text-muted mt-1">
                    {myRole.description}
                  </div>
                </Card>
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30">
                  <div className="text-xs font-light text-muted mb-2">旅伴身份</div>
                  <div className="text-2xl mb-2">{partnerRole.icon}</div>
                  <div className="text-sm font-light">{partnerRole.name}</div>
                  <div className="text-xs font-light text-muted mt-1">
                    {partnerRole.description}
                  </div>
                </Card>
              </div>
            </section>

            {/* 互动区域 */}
            <section className="animate-fade-in-delay-2">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-cosmic-purple/20">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-4 h-4 text-cosmic-purple" />
                  <h3 className="text-sm font-light">{universe.interaction.title}</h3>
                </div>
                <p className="text-muted text-xs font-light mb-6">
                  {universe.interaction.description}
                </p>

                {renderInteraction()}

                <Button
                  onClick={handleSubmit}
                  disabled={
                    (universe.interaction.type === "decision" && !myChoice) ||
                    (["co-create", "story-chain", "time-capsule"].includes(universe.interaction.type) && !myInput.trim()) ||
                    (["emoji", "collection", "random-event"].includes(universe.interaction.type) && !myChoice)
                  }
                  className="w-full mt-6"
                >
                  完成冒险
                </Button>
              </Card>
            </section>
          </>
        ) : (
          /* 完成后的记忆展示 */
          <section className="animate-fade-in">
            {showMemory ? (
              <Card className="p-6 bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border-cosmic-purple/30">
                <div className="text-center mb-6">
                  <div className="text-cosmic-purple text-4xl mb-4 animate-breathe">✦</div>
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

                {/* 获得的收藏品 */}
                {universe.collectibles && (
                  <div className="mt-4 pt-4 border-t border-border/30">
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{universe.collectibles[0].icon}</div>
                      <div>
                        <div className="text-sm font-light">{universe.collectibles[0].name}</div>
                        <div className="text-xs font-light text-muted">
                          {universe.collectibles[0].description}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <Link href="/">
                  <Button className="w-full mt-6">返回首页</Button>
                </Link>
              </Card>
            ) : (
              <div className="text-center py-12">
                <div className="text-cosmic-purple text-4xl mb-4 animate-breathe">✨</div>
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