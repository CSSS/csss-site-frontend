export const EXTERNAL_LINKS = {
  constitution: 'https://github.com/CSSS/public-docs/blob/master/constitutions/',
  discord: 'https://discord.sfucsss.org',
  commonRoomMap: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971'
} as const;

export type ExternalLink = keyof typeof EXTERNAL_LINKS;
