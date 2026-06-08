"use client";

import { useState } from "react";
import { BookOpen, PenLine } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface StoryMissionProps {
  universe: Universe;
  onComplete: (story: string) => void;
}

export function StoryMission({ universe, onComplete }: StoryMissionProps) {
  const [myPart, setMyPart] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPartnerPart, setShowPartnerPart] = useState(false);

  const partnerPart = "于是，你们一起踏上了这段神秘的旅程。在星光的指引下，你们发现了隐藏在迷雾中的古老遗迹，揭开了一个被遗忘已久的秘密...";

  const handleSubmit = () => {
    if (myPart.trim()) {
      setIsSubmitted(true);
      setTimeout(() => setShowPartnerPart(true), 1500);
    }
  };

  const handleComplete = () => {
    onComplete(myPart);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <BookOpen className="w-4 h-4 text-cosmic-purple" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!isSubmitted ? (
        <>
          <Textarea
            placeholder="写下故事的开头..."
            value={myPart}
            onChange={(e) => setMyPart(e.target.value)}
            className="min-h-[120px] bg-card/50 border-border/50"
          />

          <div className="text-xs font-light text-muted">
            提示：每人最多写三句话，让故事继续发展
          </div>

          <Button
            onClick={handleSubmit}
            disabled={!myPart.trim()}
            className="w-full"
          >
            <PenLine className="w-4 h-4 mr-2" />
            续写故事
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          {/* 你的故事部分 */}
          <div className="p-4 rounded-xl bg-card/30 border border-border/50 animate-fade-in">
            <div className="text-xs font-light text-muted mb-2">你的故事</div>
            <p className="text-sm font-light whitespace-pre-line leading-relaxed">
              {myPart}
            </p>
          </div>

          {/* 对方的故事部分 */}
          {showPartnerPart && (
            <div className="p-4 rounded-xl bg-cosmic-purple/10 border border-cosmic-purple/20 animate-fade-in">
              <div className="text-xs font-light text-cosmic-purple mb-2">旅伴的续写</div>
              <p className="text-sm font-light whitespace-pre-line leading-relaxed">
                {partnerPart}
              </p>
            </div>
          )}

          {!showPartnerPart && (
            <div className="p-4 rounded-xl bg-card/30 border border-border/50">
              <div className="text-center text-sm font-light text-muted">
                等待旅伴续写故事...
              </div>
            </div>
          )}

          {/* 完整故事 */}
          {showPartnerPart && (
            <div className="p-6 rounded-xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-blue/10 border border-cosmic-purple/20">
              <div className="text-xs font-light text-cosmic-purple mb-3 text-center">完整故事</div>
              <p className="text-sm font-light leading-relaxed">
                {myPart} {partnerPart}
              </p>
            </div>
          )}

          {showPartnerPart && (
            <Button onClick={handleComplete} className="w-full">
              保存故事
            </Button>
          )}
        </div>
      )}
    </div>
  );
}