"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
        aria-label="Toggle theme"
      />
      <div
        className="absolute top-0.5 left-0.5 transition-transform duration-200 cursor-pointer pointer-events-none"
        style={{
          transform: theme === "dark" ? "translateX(16px)" : "translateX(0)",
        }}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </div>
    </div>
  );
}
