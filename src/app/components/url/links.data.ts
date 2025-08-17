/**
 * Links to external sites.
 * Please try and keep the keys in alphabetical order.
 **/
export const EXTERNAL_LINKS = {
  boardgameRoomMap: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=TASC1%209204',
  commonRoomMap: 'https://roomfinder.sfu.ca/apps/sfuroomfinder_web/?q=ASB%209971',
  constitution:
    'https://github.com/CSSS/public-docs/blob/master/constitutions/Constitution_July_2024.pdf',
  discord: 'https://discord.sfucsss.org'
} as const;

export type ExternalLink = keyof typeof EXTERNAL_LINKS;

export const EMAILS = {
  computingScienceOffice: 'cspc1@sfu.ca',
  // CSSS
  csssGeneral: 'csss@sfu.ca',
  csssCurrentExec: 'csss-exec-current@sfu.ca',
  csssPastExec: 'csss-exec@sfu.ca',
  csssPresident: 'csss-president-current@sfu.ca',
  csssVp: 'csss-vp-current@sfu.ca',
  csssTreasurer: 'csss-treasurer-current@sfu.ca',
  csssDoR: 'csss-dor-current@sfu.ca',
  csssDoE: 'csss-doe-current@sfu.ca',
  csssDoEE: 'csss-doee-current@sfu.ca',
  csssADoE: 'csss-adoe-current@sfu.ca',
  csssDoC: 'csss-doc-current@sfu.ca',
  csssDoMM: 'csss-domm-current@sfu.ca',
  csssDoA: 'csss-doa-current@sfu.ca',
  csssCouncilRep: 'csss-councilrep-current@sfu.ca',
  csssSysAdmin: 'csss-sysadmin@sfu.ca',
  csssWebmaster: 'csss-webmaster@sfu.ca',
  csssFroshChair: 'csss-froshchair@sfu.ca',
  csssTechFairChair: 'csss-techfair@sfu.ca'
} as const;

export type EmailLink = keyof typeof EMAILS;

export type CsssLink = EmailLink | ExternalLink;
