"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface QuestionMissionProps {
  universe: Universe;
  onComplete: (answer: string) => void;
}

export function QuestionMission({ universe, onComplete }: QuestionMissionProps) {
  const [answer, setAnswer] = useState("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [showPartnerAnswer, setShowPartnerAnswer] = useState(false);

  const partnerAnswer = "这个问题让我想起了我们第一次相遇的那天，那是一个美好的回忆。";

  const handleSubmit = () => {
    if (answer.trim()) {
      setIsAnswered(true);
      setTimeout(() => setShowPartnerAnswer(true), 1500);
    }
  };

  const handleComplete = () => {
    onComplete(answer);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <MessageCircle className="w-4 h-4 text-cosmic-purple" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!isAnswered ? (
        <>
          <Textarea
            placeholder="写下你的回答..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="min-h-[120px] bg-card/50 border-border/50"
          />

          <Button
            onClick={handleSubmit}
            disabled={!answer.trim()}
            className="w-full"
          >
            <Send className="w-4 h-4 mr-2" />
            发送回答
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          {/* 你的回答 */}
          <div className="p-4 rounded-xl bg-card/30 border border-border/50 animate-fade-in">
            <div className="text-xs font-light text-muted mb-2">你的回答</div>
            <p className="text-sm font-light">{answer}</p>
          </div>

          {/* 对方的回答 */}
          {showPartnerAnswer && (
            <div className="p-4 rounded-xl bg-cosmic-blue/10 border border-cosmic-blue/20 animate-fade-in">
              <div className="text-xs font-light text-cosmic-blue mb-2">旅伴的回答</div>
              <p className="text-sm font-light">{partnerAnswer}</p>
            </div>
          )}

          {!showPartnerAnswer && (
            <div className="p-4 rounded-xl bg-card/30 border border-border/50">
              <div className="text-center text-sm font-light text-muted">
                等待旅伴回答...
              </div>
            </div>
          )}

          {showPartnerAnswer && (
            <Button onClick={handleComplete} className="w-full">
              保存对话
            </Button>
          )}
        </div>
      )}
    </div>
  );
}