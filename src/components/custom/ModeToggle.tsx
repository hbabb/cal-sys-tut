"use client";

import { Switch } from "@/components/ui/switch";
import { IconMoon, IconSun } from "@tabler/icons-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  // Avoid hydration error
  if (!theme) return null;

  return (
    <div className="flex items-center space-x-2">
      <span>
        <IconSun className={theme === "dark" ? "text-gray-700" : "text-yellow-600"} />
      </span>
      <Switch
        checked={theme === "dark" || false}
        onCheckedChange={(isDark) => setTheme(isDark ? "dark" : "light")}
        aria-checked={theme === "dark"}
        data-state={theme === "dark" ? "checked" : "unchecked"}
        className="data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-yellow-400"
      />
      <span>
        <IconMoon className={theme === "dark" ? "text-yellow-400" : "text-gray-700"} />
      </span>
    </div>
  );
}
