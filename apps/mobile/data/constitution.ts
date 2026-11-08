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
    summary: 'The people are sovereign and government derives authority from them.',
    category: 'Governance',
    article: 'Article 1',
    keyPoints: ['People are sovereign', 'Government draws authority from people', 'Constitution is supreme'],
    source: 'Constitution of Kenya, 2010, Article 1'
  },
  {
    id: 19,
    title: 'Rights and Fundamental Freedoms',
    summary: 'The Constitution protects rights and freedoms for all persons.',
    category: 'Rights',
    article: 'Article 19',
    keyPoints: ['Rights are protected', 'State must respect rights', 'Judicial remedies are available'],
    source: 'Constitution of Kenya, 2010, Article 19'
  },
  {
    id: 22,
    title: 'Enforcement of Rights',
    summary: 'Persons can approach the High Court to protect constitutional rights.',
    category: 'Justice',
    article: 'Article 22',
    keyPoints: ['Enforce rights in court', 'Seek effective remedies', 'Judicial institutions can intervene'],
    source: 'Constitution of Kenya, 2010, Article 22'
  },
  {
    id: 27,
    title: 'Equality and Freedom from Discrimination',
    summary: 'Every person is equal before the law and should not be discriminated against unfairly.',
    category: 'Rights',
    article: 'Article 27',
    keyPoints: ['Equality before the law', 'Anti-discrimination protection', 'Affirmative action'],
    source: 'Constitution of Kenya, 2010, Article 27'
  },
  {
    id: 33,
    title: 'Freedom of Expression',
    summary: 'Every person has the right to freedom of expression and access to information.',
    category: 'Civic',
    article: 'Article 33',
    keyPoints: ['Speak and communicate freely', 'Media and public debate', 'Lawful limitations apply'],
    source: 'Constitution of Kenya, 2010, Article 33'
  },
  {
    id: 35,
    title: 'Access to Information',
    summary: 'Citizens can access information held by public or private bodies when permitted by law.',
    category: 'Civic',
    article: 'Article 35',
    keyPoints: ['Public accountability', 'Freedom to seek information', 'Lawful restrictions'],
    source: 'Constitution of Kenya, 2010, Article 35'
  },
  {
    id: 43,
    title: 'Economic and Social Rights',
    summary: 'Kenyan citizens have rights to education, health, housing and adequate living standards.',
    category: 'Economy',
    article: 'Article 43',
    keyPoints: ['Education', 'Health care', 'Housing and social protection'],
    source: 'Constitution of Kenya, 2010, Article 43'
  },
  {
    id: 50,
    title: 'Fair Hearing',
    summary: 'All persons are entitled to a fair and public hearing before a court or tribunal.',
    category: 'Justice',
    article: 'Article 50',
    keyPoints: ['Right to legal representation', 'Be heard', 'Fair hearing before impartial authority'],
    source: 'Constitution of Kenya, 2010, Article 50'
  },
  {
    id: 53,
    title: 'Children Rights',
    summary: 'Children have rights to protection, basic education and support from the state and family.',
    category: 'Family',
    article: 'Article 53',
    keyPoints: ['Protect children', 'Education rights', 'Best interests of child'],
    source: 'Constitution of Kenya, 2010, Article 53'
  },
  {
    id: 54,
    title: 'Persons with Disabilities',
    summary: 'Persons with disabilities must be protected and supported to participate fully in society.',
    category: 'Rights',
    article: 'Article 54',
    keyPoints: ['Non-discrimination', 'Accessible support', 'Include disability perspective'],
    source: 'Constitution of Kenya, 2010, Article 54'
  }
];
