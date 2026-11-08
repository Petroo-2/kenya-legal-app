export type ConstitutionArticle = {
  id: number;
  title: string;
  summary: string;
  category: 'Rights' | 'Governance' | 'Justice' | 'Economy' | 'Family' | 'Civic' | 'Security';
  article: string;
  keyPoints: string[];
  source: string;
};

export const constitutionArticles: ConstitutionArticle[] = [
  {
    id: 1,
    title: 'Sovereignty of the People',
    summary: 'The people are sovereign and exercise authority through democratic processes and government institutions.',
    category: 'Governance',
    article: 'Article 1',
    keyPoints: ['People are sovereign', 'Government derives authority from the people', 'Constitution is supreme'],
    source: 'Constitution of Kenya, 2010, Article 1'
  },
  {
    id: 2,
    title: 'Supremacy of the Constitution',
    summary: 'The Constitution is the supreme law of Kenya and binds all persons and state organs.',
    category: 'Governance',
    article: 'Article 2',
    keyPoints: ['Supremacy of Constitution', 'All laws must conform', 'State organs are bound'],
    source: 'Constitution of Kenya, 2010, Article 2'
  },
  {
    id: 19,
    title: 'Rights and Fundamental Freedoms',
    summary: 'The Constitution protects fundamental rights and freedoms, including equality and dignity.',
    category: 'Rights',
    article: 'Article 19',
    keyPoints: ['Rights are central to democracy', 'Protection of human rights', 'State must respect, protect and fulfill'],
    source: 'Constitution of Kenya, 2010, Article 19'
  },
  {
    id: 22,
    title: 'Enforcement of Rights',
    summary: 'A person may approach the High Court to seek enforcement of constitutional rights.',
    category: 'Justice',
    article: 'Article 22',
    keyPoints: ['Right to sue for enforcement', 'High Court jurisdiction', 'Speedy and effective remedies'],
    source: 'Constitution of Kenya, 2010, Article 22'
  },
  {
    id: 23,
    title: 'Jurisdiction of the High Court',
    summary: 'The High Court has jurisdiction to hear constitutional disputes and decide on rights issues.',
    category: 'Justice',
    article: 'Article 23',
    keyPoints: ['Constitutional jurisdiction', 'Interpretation of rights', 'Judicial review'],
    source: 'Constitution of Kenya, 2010, Article 23'
  },
  {
    id: 24,
    title: 'Limitation of Rights',
    summary: 'Rights may be limited only to the extent necessary and in a way consistent with the Constitution.',
    category: 'Rights',
    article: 'Article 24',
    keyPoints: ['Justifiable limitation', 'Public interest', 'Necessity and proportionality'],
    source: 'Constitution of Kenya, 2010, Article 24'
  },
  {
    id: 26,
    title: 'Right to Life',
    summary: 'Every person has the right to life and the state must protect and respect that right.',
    category: 'Rights',
    article: 'Article 26',
    keyPoints: ['Inherent right to life', 'Protection against unlawful deprivation', 'Lawful state action'],
    source: 'Constitution of Kenya, 2010, Article 26'
  },
  {
    id: 27,
    title: 'Equality and Freedom from Discrimination',
    summary: 'All persons are equal before the law and are protected from discrimination on various grounds.',
    category: 'Rights',
    article: 'Article 27',
    keyPoints: ['Equality before the law', 'No discrimination', 'Affirmative action'],
    source: 'Constitution of Kenya, 2010, Article 27'
  },
  {
    id: 28,
    title: 'Human Dignity',
    summary: 'Every person has inherent dignity and the right to have that dignity respected and protected.',
    category: 'Rights',
    article: 'Article 28',
    keyPoints: ['Inherent dignity', 'Protection from degrading treatment', 'Human worth'],
    source: 'Constitution of Kenya, 2010, Article 28'
  },
  {
    id: 29,
    title: 'Freedom and Security of the Person',
    summary: 'No person shall be deprived of freedom arbitrarily, and everyone has a right to security of the person.',
    category: 'Security',
    article: 'Article 29',
    keyPoints: ['Freedom from arbitrary detention', 'Security of person', 'Protection from torture'],
    source: 'Constitution of Kenya, 2010, Article 29'
  },
  {
    id: 31,
    title: 'Privacy',
    summary: 'Every person has the right to privacy, including privacy of their family, home and property.',
    category: 'Rights',
    article: 'Article 31',
    keyPoints: ['Privacy of home and property', 'Protection from unlawful search', 'Confidentiality'],
    source: 'Constitution of Kenya, 2010, Article 31'
  },
  {
    id: 33,
    title: 'Freedom of Expression',
    summary: 'Every person has the right to freedom of expression, including the right to seek, receive and impart information.',
    category: 'Civic',
    article: 'Article 33',
    keyPoints: ['Freedom of expression', 'Media rights', 'Limitations under law'],
    source: 'Constitution of Kenya, 2010, Article 33'
  },
  {
    id: 35,
    title: 'Access to Information',
    summary: 'Every citizen has the right to access information held by the State or another person, subject to lawful limitations.',
    category: 'Civic',
    article: 'Article 35',
    keyPoints: ['Right to information', 'Public accountability', 'Lawful exemptions'],
    source: 'Constitution of Kenya, 2010, Article 35'
  },
  {
    id: 36,
    title: 'Freedom of Association',
    summary: 'Every person has the right to freedom of association, including joining political parties and labour organisations.',
    category: 'Civic',
    article: 'Article 36',
    keyPoints: ['Right to associate', 'Political participation', 'Labour and civic groups'],
    source: 'Constitution of Kenya, 2010, Article 36'
  },
  {
    id: 38,
    title: 'Political Rights',
    summary: 'Citizens have the right to participate in public affairs, vote in elections and stand for public office.',
    category: 'Civic',
    article: 'Article 38',
    keyPoints: ['Vote and be voted for', 'Participate in politics', 'Political rights of citizens'],
    source: 'Constitution of Kenya, 2010, Article 38'
  },
  {
    id: 39,
    title: 'Freedom of Movement and Residence',
    summary: 'Every person has the right to freedom of movement and to reside anywhere in Kenya.',
    category: 'Civic',
    article: 'Article 39',
    keyPoints: ['Right to move freely', 'Right to choose residence', 'Travel and immigration rights'],
    source: 'Constitution of Kenya, 2010, Article 39'
  },
  {
    id: 43,
    title: 'Economic and Social Rights',
    summary: 'Every person has the right to education, health, housing, adequate standard of living, social security and food.',
    category: 'Economy',
    article: 'Article 43',
    keyPoints: ['Education', 'Health care', 'Housing and food'],
    source: 'Constitution of Kenya, 2010, Article 43'
  },
  {
    id: 47,
    title: 'Fair Administrative Action',
    summary: 'Administrative action must be lawful, reasonable and procedurally fair.',
    category: 'Justice',
    article: 'Article 47',
    keyPoints: ['Procedural fairness', 'Written reasons', 'Right to review'],
    source: 'Constitution of Kenya, 2010, Article 47'
  },
  {
    id: 50,
    title: 'Fair Hearing',
    summary: 'Every person has the right to a fair hearing before a court or tribunal.',
    category: 'Justice',
    article: 'Article 50',
    keyPoints: ['Public hearing', 'Legal representation', 'Right to be heard'],
    source: 'Constitution of Kenya, 2010, Article 50'
  },
  {
    id: 53,
    title: 'Children Rights',
    summary: 'Children have special rights to protection, education, access to healthcare and a family environment.',
    category: 'Family',
    article: 'Article 53',
    keyPoints: ['Best interests of the child', 'Free and compulsory basic education', 'Protection from abuse'],
    source: 'Constitution of Kenya, 2010, Article 53'
  },
  {
    id: 54,
    title: 'Persons with Disabilities',
    summary: 'Persons with disabilities are entitled to full and effective participation in society on equal basis.',
    category: 'Rights',
    article: 'Article 54',
    keyPoints: ['Accessible environment', 'Non-discrimination', 'Inclusive participation'],
    source: 'Constitution of Kenya, 2010, Article 54'
  },
  {
    id: 94,
    title: 'Judicial Authority',
    summary: 'Judicial authority is vested in the courts and judges, who must exercise it independently.',
    category: 'Justice',
    article: 'Article 94',
    keyPoints: ['Independence of judiciary', 'Constitutional oversight', 'Rule of law'],
    source: 'Constitution of Kenya, 2010, Article 94'
  }
];

export const popularTopics = ['Rights', 'Justice', 'Governance', 'Civic', 'Economy'];
