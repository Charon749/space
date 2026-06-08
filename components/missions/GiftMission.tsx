"use client";

import { useState } from "react";
import { Gift, Package } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface GiftMissionProps {
  universe: Universe;
  onComplete: (gift: string) => void;
}

export function GiftMission({ universe, onComplete }: GiftMissionProps) {
  const [selectedGift, setSelectedGift] = useState<string | null>(null);
  const [isOpened, setIsOpened] = useState(false);
  const [showPartnerGift, setShowPartnerGift] = useState(false);

  const partnerGift = { id: "partner-gift", text: "星光守护", icon: "⭐", effect: "愿星光永远照耀你的旅程" };

  const handleSelect = (optionId: string) => {
    setSelectedGift(optionId);
    setTimeout(() => setIsOpened(true), 500);
    setTimeout(() => setShowPartnerGift(true), 2000);
  };

  const handleComplete = () => {
    if (selectedGift) {
      onComplete(selectedGift);
    }
  };

  const selectedOption = universe.options?.find((o) => o.id === selectedGift);

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Gift className="w-4 h-4 text-cosmic-purple" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!selectedGift ? (
        <div className="grid grid-cols-2 gap-3">
          {universe.options?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleSelect(option.id)}
              className="p-4 rounded-xl border border-border/50 bg-card/30 hover:border-cosmic-purple/30 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-3xl mb-2">{option.icon}</div>
                <div className="text-sm font-light">{option.text}</div>
                <div className="text-xs font-light text-muted mt-1">
                  {option.effect}
                </div>
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {/* 礼物动画展示 */}
          <div className="text-center py-8 animate-fade-in">
            <div className={`text-6xl mb-4 ${isOpened ? "animate-bounce" : ""}`}>
              {isOpened ? (selectedOption?.icon || "🎁") : "🎁"}
            </div>
            <h3 className="text-sm font-light mb-2">
              {isOpened ? `你送出了${selectedOption?.text}` : "包装礼物中..."}
            </h3>
            {isOpened && (
              <p className="text-xs font-light text-muted">
                {selectedOption?.effect}
              </p>
            )}
          </div>

          {/* 对方的礼物 */}
          {showPartnerGift && (
            <div className="p-4 rounded-xl bg-gradient-to-br from-pink-500/10 to-cosmic-purple/5 border border-pink-500/20 animate-fade-in">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{partnerGift.icon}</span>
                <div>
                  <div className="text-xs font-light text-pink-400 mb-1">旅伴的礼物</div>
                  <div className="text-sm font-light">{partnerGift.text}</div>
                  <div className="text-xs font-light text-muted">
                    {partnerGift.effect}
                  </div>
                </div>
              </div>
            </div>
          )}

          {!showPartnerGift && isOpened && (
            <div className="p-4 rounded-xl bg-card/30 border border-border/50">
              <div className="flex items-center justify-center gap-2 text-sm font-light text-muted">
                <Package className="w-4 h-4" />
                <span>等待旅伴回赠礼物...</span>
              </div>
            </div>
          )}

          {showPartnerGift && (
            <Button onClick={handleComplete} className="w-full">
              <Gift className="w-4 h-4 mr-2" />
              保存礼物
            </Button>
          )}
        </div>
      )}
    </div>
  );
}