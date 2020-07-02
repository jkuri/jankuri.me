export interface Resume {
  avatar: string;
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  languages: Language[];
  skills: string[];
  skillsAdditional?: string[];
  githubProfile?: string;
  linkedinProfile?: string;
  npmProfile?: string;
  work?: WorkExperience[];
  education?: Education[];
  projects?: Project[];
}

export interface Language {
  title: string;
  proficiency: string;
}

export type EmploymentType =
  | 'Full-Time'
  | 'Part-Time'
  | 'Self-employed'
  | 'Freelance'
  | 'Contract'
  | 'Internship'
  | 'Apprenticeship';

export interface WorkExperience {
  title: string;
  company: string;
  type: EmploymentType;
  start: Date;
  end?: Date;
  description: string;
  location: string;
  tags?: string[];
}

export interface Education {
  title: string;
  school: string;
  start: Date;
  end: Date;
  activities?: string;
  description?: string;
}

export interface Project {
  title: string;
  url?: string;
  description: string;
  tags: string[];
}

export const resume: Resume = {
  avatar: 'https://avatars0.githubusercontent.com/u/1796022?s=400&u=18fb22883024fa7e517f2c643f8235e5144b80a9&v=4',
  name: 'Jan Kuri',
  title: 'Software Developer',
  email: 'jkuri88@gmail.com',
  phone: '+386 31 472 535',
  location: 'Mozirje, Slovenia',
  githubProfile: 'https://github.com/jkuri',
  linkedinProfile: 'https://www.linkedin.com/in/jkuri/',
  npmProfile: 'https://www.npmjs.com/~jkuri',
  summary: [
    'Dynamic, proactive and detail-oriented full stack web developer with a decade',
    'of professional experience in designing, developing, testing and debugging code.',
    'My diverse skillset includes knowledge in scripting and statically typed programming languages.'
  ].join(' '),
  languages: [
    { title: 'Slovenian', proficiency: 'Native proficiency' },
    { title: 'English', proficiency: 'Professional working proficiency' },
    { title: 'Serbo-Croatian', proficiency: 'Full professional proficiency' }
  ],
  skills: ['JavaScript', 'TypeScript', 'RxJS', 'Angular', 'Node.JS', 'MySQL', 'SQLite', 'Git', 'Linux', 'SASS'],
  skillsAdditional: ['Go', 'C', 'C++', 'Perl', 'Python', 'PostgreSQL'],
  work: [
    {
      title: 'Senior Full Stack Developer',
      company: 'Bleenco GmbH',
      type: 'Full-Time',
      start: setDate(2018, 1),
      end: setDate(2020, 3),
      description: [
        'Responsible for all open source project developed by Bleenco GmbH,',
        'knowledge testing of newcomers, developed all internal tools and processes for company during the time.'
      ].join(' '),
      tags: ['TypeScript', 'Angular', 'SASS', 'Node.JS', 'Go', 'C', 'C++', 'Perl', 'MySQL', 'SQLite', 'CI/CD'],
      location: 'Remote / Munich, Germany'
    },
    {
      title: 'Senior Software Developer',
      company: 'Catenate Group',
      type: 'Full-Time',
      start: setDate(2016, 10),
      end: setDate(2018, 1),
      description: [
        'UI/UX development and continuous integration for Allianz Global Digital Factory.',
        'Developing and testing user interfaces for Audi and Porsche dashboards.'
      ].join(' '),
      tags: ['Angular', 'SASS', 'Node.JS', 'TypeScript', 'CI/CD'],
      location: 'Remote / Munich, Germany / Erlangen, Germany'
    },
    {
      title: 'Angular CLI Core Team Member',
      company: 'Angular',
      type: 'Freelance',
      start: setDate(2016, 8),
      end: setDate(2017, 10),
      description: ['Working on initial Angular CLI release, debugging and testing code, adding new commands.'].join(
        ' '
      ),
      tags: ['Angular', 'CLI', 'Node.JS', 'TypeScript', 'Mocha', 'Chai', 'CI'],
      location: 'Remote / Salt Lake City, Utah'
    },
    {
      title: 'Full Stack Software Developer',
      company: 'ITPharma d.o.o.',
      type: 'Full-Time',
      start: setDate(2014, 7),
      end: setDate(2016, 7),
      description: ['Working on various projects for pharmaceutical industry such as Astra Zeneca.'].join(' '),
      tags: ['AngularJS', 'Node.JS', 'socket.io', 'Swift', 'PHP', 'Symphony', 'SASS'],
      location: 'Remote'
    },
    {
      title: 'Mid/Junior Software Developer',
      company: 'Trendnet d.o.o.',
      type: 'Internship',
      start: setDate(2010, 4),
      end: setDate(2012, 2),
      description: [
        'Working on Networks Defender project, working on user interface and backend for Linux server solution.',
        'Parsing and storing various configurations for Linux services such as Apache, user management, postfix, clamav, iptables and so on.'
      ].join(' '),
      tags: ['Linux', 'PHP', 'jQuery', 'MySQL', 'MSSQL', 'CSS'],
      location: 'Remote / Velenje, Slovenia'
    },
    {
      title: 'Junior Software Developer',
      company: 'Globtel d.o.o.',
      type: 'Internship',
      start: setDate(2007, 11),
      end: setDate(2009, 9),
      description: ['Building user interfaces for alarm devices and various micro controllers.'].join(' '),
      tags: ['Linux', 'FreeBSD', 'PHP', 'jQuery', 'PostgreSQL', 'CSS'],
      location: 'Remote / Maribor, Slovenia'
    }
  ],
  education: [
    {
      title: 'Computer Engineer',
      school: 'School of Electrical and Computer Engineering, Velenje',
      start: setDate(2002, 9),
      end: setDate(2006, 6)
    }
  ]
};

function setDate(year: number, month: number): Date {
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1);
  return date;
}