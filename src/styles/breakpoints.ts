export const VIEW_BREAKPOINTS = {
  large: 968
} as const;

export const BREAKPOINT_STRING_MAP: Record<keyof typeof VIEW_BREAKPOINTS, string> = Object.entries(
  VIEW_BREAKPOINTS
).reduce(
  (acc, [k, v]) => {
    acc[k] = `(min-width: ${v}px)`;
    return acc;
  },
  {} as Record<string, string>
);
