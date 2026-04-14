"use client";

import dynamic from "next/dynamic";

export const ClientThemeProvider = dynamic(() => import("./theme-provider").then((m) => m.ThemeProvider), {ssr: false});
