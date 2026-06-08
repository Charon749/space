"use client";

import { useState, useEffect } from "react";
import { 
  getAllUniverses, 
  generateRouteMap, 
  type Universe, 
  type RouteMap,
  type RouteNode,
  travelers
} from "@/data/mockData";
import { Navigation } from "@/components/ui/navigation";
import { Lock, Check, Star, ChevronRight, X, MapPin } from "lucide-react";

export default function RoutePage() {
  const [routeMap, setRouteMap] = useState<RouteMap | null>(null);
  const [selectedUniverse, setSelectedUniverse] = useState<Universe | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  useEffect(() => {
    const map = generateRouteMap();
    setRouteMap(map);
  }, []);

  const universes = getAllUniverses();

  const getUniverseById = (id: string): Universe | undefined => {
    return universes.find(u => u.id === id);
  };

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
        return "bg-yellow-400/20";
      case "epic":
        return "bg-purple-400/20";
      case "rare":
        return "bg-cosmic-blue/20";
      default:
        return "bg-cosmic-purple/20";
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

  // 生成节点位置
  const getNodePosition = (index: number) => {
    const row = Math.floor(index / 6);
    const col = index % 6;
    const x = 10 + col * 16;
    const y = 10 + row * 22;
    return { x, y };
  };

  if (!routeMap) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-muted text-sm">加载中...</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background pb-20">
      {/* 背景装饰 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cosmic-purple/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cosmic-blue/5 rounded-full blur-3xl" />
        
        {/* 漂浮的星星装饰 */}
        {Array.from({ length: 40 }).map((_, i) => (
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
        {/* 标题 */}
        <header className="mb-8 animate-fade-in">
          <h1 className="text-2xl font-light mb-2">宇宙航线</h1>
          <p className="text-muted text-sm font-light">
            探索宇宙之间的连接，规划你的旅程
          </p>
        </header>

        {/* 进度统计 */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="text-center p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30">
            <div className="text-xl font-light text-cosmic-purple">{routeMap.visitedNodes}</div>
            <div className="text-xs font-light text-muted">已探索</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30">
            <div className="text-xl font-light text-cosmic-blue">{routeMap.unlockedNodes}</div>
            <div className="text-xs font-light text-muted">已解锁</div>
          </div>
          <div className="text-center p-3 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30">
            <div className="text-xl font-light text-muted">{routeMap.totalNodes}</div>
            <div className="text-xs font-light text-muted">总计</div>
          </div>
        </div>

        {/* 航线地图 */}
        <div className="relative h-[400px] bg-card/20 backdrop-blur-sm rounded-xl border border-border/30 overflow-hidden mb-6">
          {/* SVG连接线 */}
          <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
            {Object.entries(routeMap.nodes).map(([universeId, node]) => {
              const universe = getUniverseById(universeId);
              if (!universe) return null;
              
              const index = universes.findIndex(u => u.id === universeId);
              const fromPos = getNodePosition(index);
              
              return node.connections.map((targetId) => {
                const targetIndex = universes.findIndex(u => u.id === targetId);
                const toPos = getNodePosition(targetIndex);
                const targetNode = routeMap.nodes[targetId];
                
                return (
                  <line
                    key={`${universeId}-${targetId}`}
                    x1={`${fromPos.x}%`}
                    y1={`${fromPos.y}%`}
                    x2={`${toPos.x}%`}
                    y2={`${toPos.y}%`}
                    stroke={targetNode?.unlocked ? "rgba(167, 139, 250, 0.3)" : "rgba(100, 100, 100, 0.1)"}
                    strokeWidth="2"
                    strokeDasharray={targetNode?.unlocked ? "none" : "4"}
                  />
                );
              });
            })}
          </svg>

          {/* 节点 */}
          {universes.map((universe, index) => {
            const node = routeMap.nodes[universe.id];
            const pos = getNodePosition(index);
            const isHovered = hoveredNode === universe.id;
            
            return (
              <button
                key={universe.id}
                onClick={() => node?.unlocked && setSelectedUniverse(universe)}
                onMouseEnter={() => setHoveredNode(universe.id)}
                onMouseLeave={() => setHoveredNode(null)}
                disabled={!node?.unlocked}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
                  node?.unlocked 
                    ? "hover:scale-125 cursor-pointer" 
                    : "opacity-50 cursor-not-allowed"
                }`}
                style={{ left: `${pos.x}%`, top: `${pos.y}%`, zIndex: isHovered ? 10 : 1 }}
              >
                <div className={`relative w-10 h-10 rounded-full flex items-center justify-center ${getRarityBg(universe.rarity)} border-2 ${
                  node?.visited 
                    ? getRarityColor(universe.rarity) 
                    : node?.unlocked 
                      ? "border-foreground/30" 
                      : "border-border/30"
                }`}>
                  {node?.visited ? (
                    <Star className={`w-5 h-5 ${getRarityColor(universe.rarity)}`} fill="currentColor" />
                  ) : node?.unlocked ? (
                    <MapPin className="w-5 h-5 text-foreground/60" />
                  ) : (
                    <Lock className="w-4 h-4 text-muted" />
                  )}
                  
                  {/* 悬浮提示 */}
                  {isHovered && node?.unlocked && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-card rounded-lg border border-border/30 shadow-lg whitespace-nowrap z-20">
                      <div className="text-sm font-light">{universe.name}</div>
                      <div className="text-xs font-light text-muted">{getRarityLabel(universe.rarity)} · {getCategoryLabel(universe.category)}</div>
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* 图例 */}
        <div className="flex items-center justify-center gap-6 mb-8">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-cosmic-purple/20 border-2 border-cosmic-purple flex items-center justify-center">
              <Star className="w-2 h-2 text-cosmic-purple" fill="currentColor" />
            </div>
            <span className="text-xs font-light text-muted">已探索</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-card/50 border-2 border-foreground/30 flex items-center justify-center">
              <MapPin className="w-2 h-2 text-foreground/60" />
            </div>
            <span className="text-xs font-light text-muted">已解锁</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-card/30 border-2 border-border/30 flex items-center justify-center">
              <Lock className="w-2 h-2 text-muted" />
            </div>
            <span className="text-xs font-light text-muted">未解锁</span>
          </div>
        </div>

        {/* 当前等级提示 */}
        <div className="flex items-center justify-between p-4 bg-card/30 backdrop-blur-sm rounded-xl border border-border/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cosmic-purple/20 flex items-center justify-center">
              <span className="text-lg font-light">{travelers.me.avatar}</span>
            </div>
            <div>
              <div className="text-sm font-light">{travelers.me.name}</div>
              <div className="text-xs font-light text-muted">Lv.{travelers.me.level} {travelers.me.title}</div>
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs font-light text-muted">经验值</div>
            <div className="text-sm font-light text-cosmic-purple">
              {travelers.me.exp} / {travelers.me.nextLevelExp}
            </div>
          </div>
        </div>
      </div>

      {/* 宇宙详情弹窗 */}
      {selectedUniverse && (
        <div
          className="fixed inset-0 z-30 flex items-center justify-center p-6 bg-background/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedUniverse(null)}
        >
          <div
            className="w-full max-w-sm p-6 bg-card/90 backdrop-blur-md border border-border/30 rounded-xl animate-fade-in-up"
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
            <div className="mb-4">
              <p className="text-sm font-light text-muted leading-relaxed">
                {selectedUniverse.description}
              </p>
            </div>

            {/* 角色身份 */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                <div className="text-xs font-light text-muted mb-1">你的身份</div>
                <div className="text-sm font-light">{selectedUniverse.yourRole}</div>
              </div>
              <div className="p-3 rounded-lg bg-card/50 border border-border/30">
                <div className="text-xs font-light text-muted mb-1">旅伴身份</div>
                <div className="text-sm font-light">{selectedUniverse.partnerRole}</div>
              </div>
            </div>

            {/* 互动类型 */}
            <div className="mb-4">
              <div className="text-xs font-light text-muted mb-1">互动方式</div>
              <div className="text-sm font-light">{selectedUniverse.interactionTitle}</div>
            </div>

            {/* 解锁条件 */}
            {routeMap.nodes[selectedUniverse.id]?.requiredLevel && travelers.me.level < routeMap.nodes[selectedUniverse.id]?.requiredLevel! && (
              <div className="mb-4 p-3 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                <div className="text-xs font-light text-yellow-400">
                  需要等级 {routeMap.nodes[selectedUniverse.id]?.requiredLevel} 才能解锁
                </div>
              </div>
            )}

            {/* 访问状态 */}
            <div className="flex items-center gap-2 mb-4">
              {routeMap.nodes[selectedUniverse.id]?.visited ? (
                <>
                  <Check className="w-4 h-4 text-green-400" />
                  <span className="text-xs font-light text-green-400">已探索</span>
                </>
              ) : (
                <>
                  <MapPin className="w-4 h-4 text-cosmic-purple" />
                  <span className="text-xs font-light text-cosmic-purple">尚未探索</span>
                </>
              )}
            </div>

            {/* 开始按钮 */}
            {routeMap.nodes[selectedUniverse.id]?.visited ? (
              <button
                onClick={() => {
                  setSelectedUniverse(null);
                  // 导航到记忆详情
                }}
                className="w-full py-3 bg-cosmic-purple/10 text-cosmic-purple rounded-lg text-sm font-light flex items-center justify-center gap-2"
              >
                <Star className="w-4 h-4" />
                查看回忆
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : routeMap.nodes[selectedUniverse.id]?.unlocked ? (
              <button
                onClick={() => {
                  setSelectedUniverse(null);
                  window.location.href = "/today";
                }}
                className="w-full py-3 bg-cosmic-purple text-white rounded-lg text-sm font-light flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                开始探索
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                disabled
                className="w-full py-3 bg-card text-muted rounded-lg text-sm font-light flex items-center justify-center gap-2 cursor-not-allowed"
              >
                <Lock className="w-4 h-4" />
                未解锁
              </button>
            )}
          </div>
        </div>
      )}

      <Navigation />
    </main>
  );
}