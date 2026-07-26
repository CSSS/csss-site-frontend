export const ACCENT_COLOUR_ORDER = ['red', 'blue', 'pink', 'teal'] as const;

export type AccentColour = (typeof ACCENT_COLOUR_ORDER)[number];
