"use client";

import { useState } from "react";
import { Sparkles, Gift } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface WishMissionProps {
  universe: Universe;
  onComplete: (wish: string) => void;
}

export function WishMission({ universe, onComplete }: WishMissionProps) {
  const [wish, setWish] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPartnerWish, setShowPartnerWish] = useState(false);

  const partnerWish = "希望我们能一起探索更多美丽的宇宙，创造更多美好的回忆。";

  const handleSubmit = () => {
    if (wish.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setShowPartnerWish(true), 1500);
    }
  };

  const handleComplete = () => {
    onComplete(wish);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-4 h-4 text-cosmic-purple" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!isSubmitted ? (
        <>
          <Textarea
            placeholder="写下今天的愿望..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            className="min-h-[100px] bg-card/50 border-border/50"
          />

          <Button
            onClick={handleSubmit}
            disabled={!wish.trim()}
            className="w-full"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            许下愿望
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          {/* 你的愿望 */}
          <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-yellow-500/5 border border-amber-500/20 animate-fade-in">
            <div className="text-xs font-light text-amber-400 mb-2">你的愿望</div>
            <p className="text-sm font-light">{wish}</p>
          </div>

          {/* 对方的愿望 */}
          {showPartnerWish && (
            <div className="p-4 rounded-xl bg-gradient-to-br from-cosmic-blue/10 to-cosmic-purple/5 border border-cosmic-blue/20 animate-fade-in">
              <div className="text-xs font-light text-cosmic-blue mb-2">旅伴的愿望</div>
              <p className="text-sm font-light">{partnerWish}</p>
            </div>
          )}

          {!showPartnerWish && (
            <div className="p-4 rounded-xl bg-card/30 border border-border/50">
              <div className="text-center text-sm font-light text-muted">
                等待旅伴许下愿望...
              </div>
            </div>
          )}

          {showPartnerWish && (
            <Button onClick={handleComplete} className="w-full">
              <Gift className="w-4 h-4 mr-2" />
              保存愿望
            </Button>
          )}
        </div>
      )}
    </div>
  );
}