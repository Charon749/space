"use client";

import { useState } from "react";
import { Star, Heart } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface MemoryMissionProps {
  universe: Universe;
  onComplete: (memory: string) => void;
}

export function MemoryMission({ universe, onComplete }: MemoryMissionProps) {
  const [memory, setMemory] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    if (memory.trim()) {
      setIsSaved(true);
      setTimeout(() => onComplete(memory), 1500);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-4 h-4 text-cosmic-purple" fill="currentColor" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!isSaved ? (
        <>
          <Textarea
            placeholder="记录今天最珍贵的回忆..."
            value={memory}
            onChange={(e) => setMemory(e.target.value)}
            className="min-h-[150px] bg-card/50 border-border/50"
          />

          <Button
            onClick={handleSave}
            disabled={!memory.trim()}
            className="w-full"
          >
            <Heart className="w-4 h-4 mr-2" />
            保存记忆
          </Button>
        </>
      ) : (
        <div className="text-center py-8 animate-fade-in">
          <div className="text-cosmic-purple text-4xl mb-4 animate-breathe">✦</div>
          <h3 className="text-sm font-light mb-2">记忆已保存</h3>
          <p className="text-xs font-light text-muted">
            这段珍贵的回忆将永远铭刻在星图之中
          </p>
        </div>
      )}
    </div>
  );
}