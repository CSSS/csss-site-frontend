export const EXTERNAL_LINKS = {
  constitution: 'https://github.com/CSSS/public-docs/blob/master/constitutions/',
  discord: 'https://discord.sfucsss.org'
} as const;

export type ExternalLink = keyof typeof EXTERNAL_LINKS;
