"use client";

import { useState } from "react";
import { Send, Mail } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface LetterMissionProps {
  universe: Universe;
  onComplete: (letter: string) => void;
}

export function LetterMission({ universe, onComplete }: LetterMissionProps) {
  const [letter, setLetter] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [showPartnerLetter, setShowPartnerLetter] = useState(false);

  const partnerLetter = "亲爱的旅人，\n\n今天在这个宇宙中与你相遇，是我最美好的时光。感谢你陪伴我走过这段旅程，每一刻都值得珍藏。\n\n期待明天的冒险，\n你的旅伴";

  const handleSend = () => {
    if (letter.trim()) {
      setIsSent(true);
      setTimeout(() => setShowPartnerLetter(true), 1500);
    }
  };

  const handleComplete = () => {
    onComplete(letter);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Mail className="w-4 h-4 text-cosmic-purple" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!isSent ? (
        <>
          <Textarea
            placeholder="写下你的信..."
            value={letter}
            onChange={(e) => setLetter(e.target.value)}
            className="min-h-[180px] bg-card/50 border-border/50"
          />

          <Button
            onClick={handleSend}
            disabled={!letter.trim()}
            className="w-full"
          >
            <Send className="w-4 h-4 mr-2" />
            寄出信件
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          {/* 你的信件 */}
          <div className="p-4 rounded-xl bg-card/30 border border-border/50 animate-fade-in">
            <div className="text-xs font-light text-muted mb-2">你寄出的信</div>
            <p className="text-sm font-light whitespace-pre-line leading-relaxed">
              {letter}
            </p>
          </div>

          {/* 对方的回信 */}
          {showPartnerLetter && (
            <div className="p-4 rounded-xl bg-cosmic-blue/10 border border-cosmic-blue/20 animate-fade-in">
              <div className="text-xs font-light text-cosmic-blue mb-2">旅伴的回信</div>
              <p className="text-sm font-light whitespace-pre-line leading-relaxed">
                {partnerLetter}
              </p>
            </div>
          )}

          {!showPartnerLetter && (
            <div className="p-4 rounded-xl bg-card/30 border border-border/50">
              <div className="text-center text-sm font-light text-muted">
                等待旅伴回信中...
              </div>
            </div>
          )}

          {showPartnerLetter && (
            <Button onClick={handleComplete} className="w-full">
              保存信件
            </Button>
          )}
        </div>
      )}
    </div>
  );
}