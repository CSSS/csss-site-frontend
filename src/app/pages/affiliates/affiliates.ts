export interface Affiliate {
  label: string;
  imgName: string; // assumes the image is in the `public/affiliates` folder and is a `.png`
  websiteUrl?: string;
  discordUrl?: string;
  fullName: string;
  type: 'society' | 'club';
}

/**
 * All of the CSSS's current affiliates.
 * The list is split into different sections: student societies and clubs.
 * Keep each section in alphabetical order.
 */
export const AFFILIATES: Affiliate[] = [
  {
    label: 'DSSS',
    imgName: 'dsss',
    discordUrl: 'discord.com/invite/kdj7F82mgn',
    fullName: 'Data Science Student Society',
    type: 'society'
  },
  {
    label: 'ESSS',
    imgName: 'esss',
    websiteUrl: 'www.sfu.ca/esss/?page=home',
    fullName: 'Engineering Science Student Society',
    type: 'society'
  },
  {
    label: 'MSESS',
    imgName: 'msess',
    websiteUrl: 'msess.ca',
    fullName: 'Mechatronic Systems Engineering Student Society',
    type: 'society'
  },
  {
    label: 'MSU',
    imgName: 'msu',
    websiteUrl: 'sfumsu.github.io',
    fullName: 'Mathematics Student Union',
    type: 'society'
  },
  {
    label: 'SEESS',
    imgName: 'seess',
    websiteUrl: 'seess.ca',
    fullName: 'Sustainable Energy Engineering Student Society',
    type: 'society'
  },
  {
    label: 'SSSS',
    imgName: 'ssss',
    websiteUrl: 'sfussss.org',
    fullName: 'Software Systems Student Society',
    type: 'society'
  },
  {
    label: 'SUS',
    imgName: 'sus',
    websiteUrl: 'sfususwebmaster.wordpress.com',
    fullName: 'Science Undergraduate Society',
    type: 'society'
  },
  {
    label: 'WiCS',
    imgName: 'wics',
    websiteUrl: 'www.sfu.ca/computing/wics',
    fullName: 'Women in Computing Science',
    type: 'society'
  },
  {
    label: 'WiE',
    imgName: 'wie',
    websiteUrl: 'www.sfu.ca/clubs/wie.html',
    fullName: 'Women in Engineering',
    type: 'society'
  },
  {
    label: 'Competitive Programming',
    imgName: 'competitive-programming',
    websiteUrl: '',
    discordUrl: '',
    fullName: '',
    type: 'club'
  }
];
