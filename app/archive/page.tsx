"use client";

import { useState } from "react";
import { getAllUniverses, memories, type Universe } from "@/data/mockData";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/ui/navigation";
import { Search, Star, Sparkles, X, Tag, Calendar } from "lucide-react";

export default function ArchivePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedUniverse, setSelectedUniverse] = useState<Universe | null>(null);

  const universes = getAllUniverses();

  const filteredUniverses = universes.filter(
    (universe) =>
      universe.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      universe.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      universe.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

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

  const getUniverseMemory = (universeId: string) => {
    return memories.find((m) => m.universeId === universeId);
  };

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-cosmic-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-md mx-auto px-6 py-8">
        {/* 标题 */}
        <header className="mb-8 animate-fade-in">
          <h1 className="text-2xl font-light mb-2">宇宙档案</h1>
          <p className="text-muted text-sm font-light">
            探索过的每一个宇宙，都是一段珍贵的记忆
          </p>
        </header>

        {/* 搜索框 */}
        <div className="relative mb-8 animate-fade-in-up">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <Input
            type="text"
            placeholder="搜索宇宙..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* 宇宙列表 */}
        <div className="space-y-4">
          {filteredUniverses.map((universe, index) => {
            const memory = getUniverseMemory(universe.id);
            return (
              <button
                key={universe.id}
                onClick={() => setSelectedUniverse(universe)}
                className="w-full text-left animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-4 bg-card/30 backdrop-blur-sm border-border/30 hover:border-cosmic-purple/30 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{universe.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-light">{universe.name}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded-full ${getRarityBg(universe.rarity)} ${getRarityColor(universe.rarity)}`}>
                          {getRarityLabel(universe.rarity)}
                        </span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-light text-muted">
                        <span>{getCategoryLabel(universe.category)}</span>
                        <span>·</span>
                        <span>{universe.interactionTitle}</span>
                        {memory && (
                          <>
                            <span>·</span>
                            <span className="text-cosmic-purple flex items-center gap-1">
                              <Star className="w-3 h-3" fill="currentColor" />
                              已完成
                            </span>
                          </>
                        )}
                      </div>
                    </div>
                    {memory && (
                      <Star className="w-4 h-4 text-cosmic-purple" fill="currentColor" />
                    )}
                  </div>
                </Card>
              </button>
            );
          })}
        </div>

        {/* 如果没有搜索结果 */}
        {filteredUniverses.length === 0 && (
          <div className="text-center py-12 animate-fade-in">
            <div className="text-muted text-sm font-light">
              没有找到匹配的宇宙
            </div>
          </div>
        )}
      </div>

      {/* 宇宙详情弹窗 */}
      {selectedUniverse && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedUniverse(null)}
        >
          <Card
            className="w-full max-w-sm p-6 bg-card/90 backdrop-blur-md border-cosmic-purple/30 animate-fade-in-up max-h-[80vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 头部 */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{selectedUniverse.icon}</span>
                <div>
                  <span className={`text-xs font-light px-2 py-1 rounded-full ${getRarityBg(selectedUniverse.rarity)} ${getRarityColor(selectedUniverse.rarity)} mb-1 block`}>
                    {getRarityLabel(selectedUniverse.rarity)} · {getCategoryLabel(selectedUniverse.category)}
                  </span>
                  <h3 className="text-xl font-light">{selectedUniverse.name}</h3>
                  <p className="text-xs font-light text-muted">{selectedUniverse.title}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedUniverse(null)}
                className="text-muted hover:text-foreground transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* 世界观 */}
            <div className="mb-6">
              <div className="text-xs font-light text-cosmic-purple mb-2">世界观</div>
              <p className="text-sm font-light text-muted leading-relaxed">
                {selectedUniverse.description}
              </p>
            </div>

            {/* 角色身份 */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                <div className="text-xs font-light text-muted mb-1">你的身份</div>
                <div className="text-sm font-light">{selectedUniverse.yourRole}</div>
                <div className="text-xs font-light text-muted mt-1">
                  {selectedUniverse.yourRoleDescription}
                </div>
              </div>
              <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                <div className="text-xs font-light text-muted mb-1">旅伴身份</div>
                <div className="text-sm font-light">{selectedUniverse.partnerRole}</div>
                <div className="text-xs font-light text-muted mt-1">
                  {selectedUniverse.partnerRoleDescription}
                </div>
              </div>
            </div>

            {/* 互动类型 */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-light text-muted mb-2">
                <Sparkles className="w-4 h-4 text-cosmic-purple" />
                <span>互动方式</span>
              </div>
              <div className="text-sm font-light">{selectedUniverse.interactionTitle}</div>
              <p className="text-xs font-light text-muted mt-1">
                {selectedUniverse.interactionDescription}
              </p>
            </div>

            {/* 关键词 */}
            <div className="flex items-center gap-2 text-xs font-light text-muted mb-6">
              <Tag className="w-3 h-3" />
              <div className="flex flex-wrap gap-1">
                {selectedUniverse.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="px-1.5 py-0.5 rounded-full bg-cosmic-purple/10 text-cosmic-purple"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>

            {/* 记忆 */}
            {getUniverseMemory(selectedUniverse.id) && (
              <div className="mt-6 pt-4 border-t border-border/30">
                <div className="flex items-center gap-2 text-xs font-light text-cosmic-purple mb-2">
                  <Star className="w-3 h-3" fill="currentColor" />
                  <span>共同记忆</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-light text-muted mb-2">
                  <Calendar className="w-3 h-3" />
                  <span>{getUniverseMemory(selectedUniverse.id)?.timestamp}</span>
                </div>
                <h4 className="text-sm font-light mb-2">{getUniverseMemory(selectedUniverse.id)?.title}</h4>
                <p className="text-xs font-light text-muted leading-relaxed">
                  {getUniverseMemory(selectedUniverse.id)?.description}
                </p>
                <div className="flex flex-wrap gap-1 mt-3">
                  {getUniverseMemory(selectedUniverse.id)?.keywords.map((keyword) => (
                    <span
                      key={keyword}
                      className="text-xs font-light px-1.5 py-0.5 rounded-full bg-cosmic-purple/10 text-cosmic-purple"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </div>
      )}

      <Navigation />
    </main>
  );
}