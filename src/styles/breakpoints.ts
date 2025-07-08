export const VIEW_BREAKPOINTS = {
  small: 968
} as const;

export const BREAKPOINT_STRING_MAP: Record<string, string> = Object.entries(
  VIEW_BREAKPOINTS
).reduce(
  (acc, [k, v]) => {
    acc[k] = `(min-width: ${v}px)`;
    return acc;
  },
  {} as Record<string, string>
);
