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
    label: 'SSSS',
    imgName: 'ssss',
    websiteUrl: 'sfussss.org',
    discordUrl: 'discord.gg/hY7WjXt',
    fullName: 'Software Systems Student Society',
    type: 'union'
  },
  {
    label: 'DSSS',
    imgName: 'dsss',
    websiteUrl: 'www.facebook.com/sfudsss',
    discordUrl: 'discord.gg/rcUvvYBUSF',
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
    discordUrl: 'discord.gg/zpXtC57',
    fullName: 'Mechatronic Systems Engineering Student Society',
    type: 'union'
  },
  {
    label: 'SEESS',
    imgName: 'seess',
    websiteUrl: 'seess.ca',
    discordUrl: 'discord.gg/w9vpfvHhVY',
    fullName: 'Sustainable Energy Engineering Student Society',
    type: 'union'
  },
  {
    label: 'MSU',
    imgName: 'msu',
    websiteUrl: 'sfumsu.github.io',
    discordUrl: 'discord.gg/nYXZYNTE4G',
    fullName: 'Mathematics Student Union',
    type: 'union'
  },
  {
    label: 'SUS',
    imgName: 'sus',
    websiteUrl: 'sfususwebmaster.wordpress.com',
    discordUrl: 'discord.gg/pKPdMjPZTb',
    fullName: 'Science Undergraduate Society',
    type: 'union'
  },
  {
    label: 'WiCS',
    imgName: 'wics',
    websiteUrl: 'www.sfu.ca/computing/wics',
    discordUrl: 'discord.gg/gEct3gUKbu',
    fullName: 'Women in Computing Science',
    type: 'union'
  },
  {
    label: 'WiE',
    imgName: 'wie',
    websiteUrl: 'www.sfu.ca/clubs/wie.html',
    discordUrl: 'discord.com/invite/UKf4WupZBC',
    fullName: 'Women in Engineering',
    type: 'union'
  },
  {
    label: 'CSGSA',
    imgName: 'csga',
    websiteUrl: 'www.sfu.ca/csgsa',
    discordUrl: 'discord.gg/DEkf7Bp',
    fullName: 'Computing Science Graduate Student Association',
    type: 'union'
  },
  {
    label: 'CS Alumni Group',
    imgName: 'alumni',
    websiteUrl: 'www.sfu.ca/alumni',
    discordUrl: 'discord.gg/fZ8xVw3PtN',
    fullName: 'Computing Science Alumni Group',
    type: 'union'
  },
  // Clubs
  {
    label: 'Surge',
    imgName: 'surge',
    websiteUrl: 'sfusurge.com/',
    discordUrl: 'discord.com/invite/xu7CqKc',
    fullName: 'Surge',
    type: 'club'
  },
  {
    label: 'Competitive Programming',
    imgName: 'competitive-programming',
    websiteUrl: 'go.sfss.ca/clubs/857/info',
    discordUrl: 'discord.gg/2mFZD2F',
    fullName: 'Competitive Programming',
    type: 'club'
  },
  {
    label: 'Game Dev Club',
    imgName: 'game-dev-club',
    websiteUrl: 'sfugamedev.club',
    discordUrl: 'discord.gg/7JJDDyX',
    fullName: 'Game Developers Club',
    type: 'club'
  },
  {
    label: 'Open Source Dev Club',
    imgName: 'osdev',
    websiteUrl: 'sfuosdev.com',
    discordUrl: 'discord.com/invite/8CSRTyPXJ4',
    fullName: 'Open Source Dev Club',
    type: 'club'
  },
  {
    label: 'DNS',
    imgName: 'dns',
    websiteUrl: 'sfudns.co',
    discordUrl: 'discord.gg/cWV8PktVXR',
    fullName: 'Developers & Systems Club',
    type: 'club'
  }
];
