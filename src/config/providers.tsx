"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import type * as React from "react";

export function Providers({ children, ...props }: React.ComponentProps<typeof NextThemeProvider>) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>;
}
