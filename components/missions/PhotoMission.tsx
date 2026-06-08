"use client";

import { useState } from "react";
import { Camera, Image } from "lucide-react";
import type { Universe } from "@/data/mockData";
import { Button } from "@/components/ui/button";

interface PhotoMissionProps {
  universe: Universe;
  onComplete: (photo: string) => void;
}

export function PhotoMission({ universe, onComplete }: PhotoMissionProps) {
  const [hasPhoto, setHasPhoto] = useState(false);
  const [partnerPhoto, setPartnerPhoto] = useState(false);

  const mockPhotoUrl = "https://neeko-copilot.bytedance.net/api/text2image?prompt=beautiful%20sunset%20over%20ocean%20with%20soft%20golden%20light%20peaceful%20atmosphere&image_size=landscape_4_3";
  const partnerPhotoUrl = "https://neeko-copilot.bytedance.net/api/text2image?prompt=starry%20night%20sky%20with%20milky%20way%20galaxy%20cosmic%20beautiful&image_size=landscape_4_3";

  const handleUpload = () => {
    setHasPhoto(true);
    setTimeout(() => setPartnerPhoto(true), 1500);
  };

  const handleComplete = () => {
    onComplete(mockPhotoUrl);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Camera className="w-4 h-4 text-cosmic-purple" />
        <span className="text-sm font-light">{universe.interactionTitle}</span>
      </div>

      <p className="text-sm font-light text-muted leading-relaxed">
        {universe.interactionPrompt}
      </p>

      {!hasPhoto ? (
        <button
          onClick={handleUpload}
          className="w-full border-2 border-dashed border-border/50 rounded-xl p-8 text-center hover:border-cosmic-purple/30 transition-colors"
        >
          <div className="text-cosmic-purple text-4xl mb-3">📷</div>
          <div className="text-sm font-light">点击上传图片</div>
          <div className="text-xs font-light text-muted mt-1">支持 JPG、PNG 格式</div>
        </button>
      ) : (
        <div className="space-y-4">
          {/* 你的照片 */}
          <div className="rounded-xl overflow-hidden animate-fade-in">
            <img
              src={mockPhotoUrl}
              alt="你的照片"
              className="w-full h-48 object-cover"
            />
            <div className="p-3 bg-card/80">
              <div className="text-xs font-light text-muted">你分享的照片</div>
            </div>
          </div>

          {/* 对方的照片 */}
          {partnerPhoto && (
            <div className="rounded-xl overflow-hidden animate-fade-in">
              <img
                src={partnerPhotoUrl}
                alt="旅伴的照片"
                className="w-full h-48 object-cover"
              />
              <div className="p-3 bg-cosmic-blue/20">
                <div className="text-xs font-light text-cosmic-blue">旅伴分享的照片</div>
              </div>
            </div>
          )}

          {!partnerPhoto && (
            <div className="p-8 rounded-xl bg-card/30 border border-border/50">
              <div className="flex items-center justify-center gap-2 text-sm font-light text-muted">
                <Image className="w-4 h-4" />
                <span>等待旅伴分享照片...</span>
              </div>
            </div>
          )}

          {partnerPhoto && (
            <Button onClick={handleComplete} className="w-full">
              <Image className="w-4 h-4 mr-2" />
              保存到相册
            </Button>
          )}
        </div>
      )}
    </div>
  );
}