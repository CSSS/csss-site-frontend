export interface Affiliate {
  label: string; // The short form of the affiliates name, could be the same as its full name
  imgName: string; // assumes the image is in the `public/images/affiliates` folder and is a `.png`
  websiteUrl?: string; // Website, if they have one, clubs might have a site on SFU Go, use that one as a fallback
  discordUrl?: string; // Invite link to their Discord
  fullName: string; // The full name of the affiliate, capitals and all
  type: 'union' | 'club';
}

/**
 * All of the CSSS's current affiliates.
 * The list is split into different sections: student unions and clubs.
 * Keep each section in alphabetical order.
 */
export const AFFILIATES: Affiliate[] = [
  // Student Unions
  {
    label: 'DSSS',
    imgName: 'dsss',
    discordUrl: 'https://discord.gg/rcUvvYBUSF',
    fullName: 'Data Science Student Society',
    type: 'union'
  },
  {
    label: 'ESSS',
    imgName: 'esss',
    websiteUrl: 'www.sfu.ca/esss/?page=home',
    discordUrl: 'https://discord.gg/7gZGQJ6',
    fullName: 'Engineering Science Student Society',
    type: 'union'
  },
  {
    label: 'MSESS',
    imgName: 'msess',
    websiteUrl: 'msess.ca',
    discordUrl: 'https://discord.gg/zpXtC57',
    fullName: 'Mechatronic Systems Engineering Student Society',
    type: 'union'
  },
  {
    label: 'MSU',
    imgName: 'msu',
    websiteUrl: 'sfumsu.github.io',
    fullName: 'Mathematics Student Union',
    type: 'union'
  },
  {
    label: 'SEESS',
    imgName: 'seess',
    websiteUrl: 'seess.ca',
    fullName: 'Sustainable Energy Engineering Student Society',
    type: 'union'
  },
  {
    label: 'SSSS',
    imgName: 'ssss',
    websiteUrl: 'sfussss.org',
    discordUrl: 'https://discord.gg/hY7WjXt',
    fullName: 'Software Systems Student Society',
    type: 'union'
  },
  {
    label: 'SUS',
    imgName: 'sus',
    websiteUrl: 'sfususwebmaster.wordpress.com',
    discordUrl: 'https://discord.gg/pKPdMjPZTb',
    fullName: 'Science Undergraduate Society',
    type: 'union'
  },
  {
    label: 'WiCS',
    imgName: 'wics',
    websiteUrl: 'www.sfu.ca/computing/wics',
    fullName: 'Women in Computing Science',
    type: 'union'
  },
  {
    label: 'WiE',
    imgName: 'wie',
    websiteUrl: 'www.sfu.ca/clubs/wie.html',
    fullName: 'Women in Engineering',
    type: 'union'
  },
  // Clubs
  {
    label: 'Competitive Programming',
    imgName: 'competitive-programming',
    websiteUrl: 'https://go.sfss.ca/clubs/857/info',
    discordUrl: 'https://discord.gg/2mFZD2F',
    fullName: 'Competitive Programming',
    type: 'club'
  }
];
