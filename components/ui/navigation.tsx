"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Home, Sparkles, Archive, Map } from "lucide-react";

const navItems = [
  { href: "/", label: "首页", icon: Home },
  { href: "/today", label: "今日宇宙", icon: Sparkles },
  { href: "/archive", label: "宇宙档案", icon: Archive },
  { href: "/starmap", label: "记忆星图", icon: Map },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-t border-border/50">
      <div className="max-w-md mx-auto px-4">
        <div className="flex items-center justify-around h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300",
                  isActive
                    ? "text-cosmic-purple"
                    : "text-muted hover:text-foreground"
                )}
              >
                <Icon
                  className={cn(
                    "w-5 h-5 transition-all duration-300",
                    isActive && "scale-110"
                  )}
                />
                <span className="text-xs font-light">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}