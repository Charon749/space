"use client";

import { useState } from "react";
import { Check, Users } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface ChoiceMissionProps {
  universe: Universe;
  onComplete: (choice: string) => void;
}

export function ChoiceMission({ universe, onComplete }: ChoiceMissionProps) {
  const [myChoice, setMyChoice] = useState<string | null>(null);
  const [partnerChoice, setPartnerChoice] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionId: string) => {
    setMyChoice(optionId);
    // 模拟对方选择
    setTimeout(() => {
      const options = universe.options || [];
      const otherOptions = options.filter((o) => o.id !== optionId);
      const randomOption = otherOptions[Math.floor(Math.random() * otherOptions.length)] || options[0];
      setPartnerChoice(randomOption.id);
      setTimeout(() => setShowResult(true), 1000);
    }, 1500);
  };

  const handleComplete = () => {
    if (myChoice) {
      onComplete(myChoice);
    }
  };

  const selectedOption = universe.options?.find((o) => o.id === myChoice);

  return (
    <div className="space-y-6">
      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      <div className="space-y-3">
        {universe.options?.map((option) => (
          <button
            key={option.id}
            onClick={() => !myChoice && handleSelect(option.id)}
            disabled={myChoice !== null}
            className={`w-full p-4 rounded-xl border transition-all duration-300 text-left ${
              myChoice === option.id
                ? "border-cosmic-purple bg-cosmic-purple/10"
                : partnerChoice === option.id
                ? "border-cosmic-blue bg-cosmic-blue/10"
                : "border-border/50 bg-card/30 hover:border-cosmic-purple/30"
            } ${myChoice && myChoice !== option.id ? "opacity-50" : ""}`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{option.icon}</span>
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
              {partnerChoice === option.id && (
                <Check className="w-5 h-5 text-cosmic-blue" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* 等待对方选择状态 */}
      {myChoice && !partnerChoice && (
        <div className="p-4 rounded-xl bg-card/30 border border-border/50 animate-fade-in">
          <div className="flex items-center gap-2 text-muted text-xs font-light">
            <Users className="w-4 h-4" />
            <span>等待旅伴做出选择...</span>
          </div>
        </div>
      )}

      {/* 选择结果展示 */}
      {showResult && selectedOption && (
        <div className="p-6 rounded-xl bg-gradient-to-br from-cosmic-purple/10 to-cosmic-blue/10 border border-cosmic-purple/20 animate-fade-in">
          <div className="text-center">
            <div className="text-3xl mb-3">{selectedOption.icon}</div>
            <h4 className="text-sm font-light mb-2">共同决定：{selectedOption.text}</h4>
            <p className="text-xs font-light text-muted">
              {selectedOption.effect}
            </p>
          </div>
        </div>
      )}

      {showResult && (
        <Button onClick={handleComplete} className="w-full">
          保存共同记忆
        </Button>
      )}
    </div>
  );
}