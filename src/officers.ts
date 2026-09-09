export type ExecutiveRole =
  | 'president'
  | 'vp'
  | 'treasurer'
  | 'secretary'
  | 'doe'
  | 'doee'
  | 'adoe'
  | 'doc'
  | 'dor'
  | 'councilrep'
  | 'eal'
  | 'fyr';

export type NonExecutiveRole = 'sysadmin' | 'webmaster' | 'frosh' | 'techfair';

export type OfficerRole = ExecutiveRole | NonExecutiveRole;

export interface OfficerInfo {
  label: string;
  shortLabel: string;
  email?: string;
}

export const EXEC_INFO: Record<ExecutiveRole, OfficerInfo> = {
  president: {
    email: 'csss-president-current@sfu.ca',
    shortLabel: 'President',
    label: 'President'
  },
  vp: {
    email: 'csss-vp-current@sfu.ca',
    shortLabel: 'VP',
    label: 'Vice-President'
  },
  treasurer: {
    email: 'csss-treasurer-current@sfu.ca',
    shortLabel: 'Treasurer',
    label: 'Treasurer'
  },
  dor: {
    email: 'csss-dor-current@sfu.ca',
    shortLabel: 'DoR',
    label: 'Director of Resources'
  },
  doe: {
    email: 'csss-doe-current@sfu.ca',
    shortLabel: 'DoE',
    label: 'Director of Events'
  },
  doee: {
    email: 'csss-doee-current@sfu.ca',
    shortLabel: 'DoEE',
    label: 'Director of Educational Events'
  },
  adoe: {
    email: 'csss-adoe-current@sfu.ca',
    shortLabel: 'ADoE',
    label: 'Assistant Director of Events'
  },
  doc: {
    email: 'csss-doc-current@sfu.ca',
    shortLabel: 'DoC',
    label: 'Director of Communications'
  },
  secretary: {
    email: 'csss-doa-current@sfu.ca',
    shortLabel: 'Secretary',
    label: 'Secretary'
  },
  councilrep: {
    email: 'csss-councilrep@sfu.ca',
    shortLabel: 'Council Rep',
    label: 'Council Representative'
  },
  eal: {
    email: 'csss-eal-current@sfu.ca',
    shortLabel: 'E@L',
    label: 'Executive at Large'
  },
  fyr: {
    shortLabel: 'FYR',
    label: 'First Year Representative'
  }
};

export const NON_EXEC_INFO: Record<NonExecutiveRole, OfficerInfo> = {
  sysadmin: {
    email: 'csss-sysadmin@sfu.ca',
    shortLabel: 'Sys Admin',
    label: 'System Administrator'
  },
  webmaster: {
    email: 'csss-webmaster@sfu.ca',
    shortLabel: 'Webmaster',
    label: 'Webmaster'
  },
  frosh: {
    email: 'csss-froshchair@sfu.ca',
    shortLabel: 'Frosh',
    label: 'Frosh Chair'
  },
  techfair: {
    email: 'csss-techfair@sfu.ca',
    shortLabel: 'Tech Fair',
    label: 'Tech Fair Chair'
  }
};

export const OFFICER_INFO: Record<OfficerRole, OfficerInfo> = {
  ...EXEC_INFO,
  ...NON_EXEC_INFO
};
