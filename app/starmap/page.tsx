"use client";

import { useState } from "react";
import { stars, getAllUniverses } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/ui/navigation";
import { X, Star } from "lucide-react";

export default function StarmapPage() {
  const [selectedStar, setSelectedStar] = useState<(typeof stars)[0] | null>(
    null
  );

  const universes = getAllUniverses();

  const getStarColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "#FACC15";
      case "rare":
        return "#38BDF8";
      default:
        return "#A78BFA";
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

  const getUniverseInfo = (name: string) => {
    return universes.find((u) => u.name === name);
  };

  return (
    <main className="min-h-screen bg-background pb-20 relative overflow-hidden">
      {/* 标题 */}
      <div className="absolute top-8 left-0 right-0 z-20 text-center px-6 animate-fade-in">
        <h1 className="text-2xl font-light mb-2">记忆星图</h1>
        <p className="text-muted text-sm font-light">
          每一颗星，都是一个共同的宇宙
        </p>
      </div>

      {/* 星图容器 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full max-w-md mx-auto">
          {/* 背景装饰 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cosmic-purple/5 to-transparent" />

          {/* 星星 */}
          {stars.map((star, index) => {
            const universe = getUniverseInfo(star.universeName);
            return (
              <button
                key={star.id}
                onClick={() => setSelectedStar(star)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 focus:outline-none group"
                style={{
                  left: `${star.x}%`,
                  top: `${star.y}%`,
                }}
              >
                {/* 星星光晕 */}
                <div
                  className="absolute inset-0 rounded-full blur-md animate-breathe"
                  style={{
                    width: `${star.size * 10}px`,
                    height: `${star.size * 10}px`,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    animationDelay: `${index * 0.3}s`,
                    backgroundColor: `${getStarColor(star.rarity)}20`,
                  }}
                />
                {/* 星星本体 */}
                <div
                  className="relative rounded-full transition-all duration-300 group-hover:scale-150"
                  style={{
                    width: `${star.size * 2 + 2}px`,
                    height: `${star.size * 2 + 2}px`,
                    backgroundColor: getStarColor(star.rarity),
                    opacity: star.brightness,
                    boxShadow: `0 0 ${star.size * 4}px ${getStarColor(star.rarity)}60`,
                  }}
                />
                {/* 星星名称（悬停显示） */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
                  <div className="text-xs font-light text-foreground bg-card/90 backdrop-blur-sm px-2 py-1 rounded border border-border/30">
                    {star.universeName}
                  </div>
                </div>
              </button>
            );
          })}

          {/* 装饰性小星星 */}
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={`deco-${i}`}
              className="absolute w-0.5 h-0.5 bg-white/20 rounded-full animate-twinkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 星星详情弹窗 */}
      {selectedStar && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedStar(null)}
        >
          <Card
            className="w-full max-w-sm p-6 bg-card/90 backdrop-blur-md border-cosmic-purple/30 animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: getStarColor(selectedStar.rarity) }}
                  />
                  <span className="text-xs font-light text-muted">
                    {getRarityLabel(selectedStar.rarity)}
                  </span>
                </div>
                <h3 className="text-xl font-light">{selectedStar.universeName}</h3>
              </div>
              <button
                onClick={() => setSelectedStar(null)}
                className="text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="text-muted text-xs font-light mb-4">
              {selectedStar.date}
            </div>

            {/* 宇宙信息 */}
            {getUniverseInfo(selectedStar.universeName) && (
              <>
                <div className="flex items-center gap-2 text-muted text-xs font-light mb-4">
                  <Star className="w-4 h-4 text-cosmic-purple" />
                  <span>{getUniverseInfo(selectedStar.universeName)?.type}宇宙</span>
                </div>

                <div className="mt-4 pt-4 border-t border-border/30">
                  <p className="text-sm font-light text-foreground/80 leading-relaxed">
                    在这个宇宙里，你们共同创造了一段独特的记忆。每一次探索，都让你们的星图更加璀璨。
                  </p>
                </div>
              </>
            )}
          </Card>
        </div>
      )}

      <Navigation />
    </main>
  );
}