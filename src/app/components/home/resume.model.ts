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
  url: string;
  description: string;
  tags: string[];
}

export const resume: Resume = {
  avatar: 'https://avatars0.githubusercontent.com/u/1796022?s=400&u=18fb22883024fa7e517f2c643f8235e5144b80a9&v=4',
  name: 'Jan Kuri',
  title: 'Software Developer',
  email: 'jkuri88@gmail.com',
  phone: '+386 31 472 535',
  location: 'Slovenj Gradec, Slovenia',
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
      title: 'Senior Front-End Engineer',
      company: 'Bleenco GmbH',
      type: 'Contract',
      start: setDate(2023, 11),
      end: setDate(2024, 2),
      description: ['Working on a PipeLogic.ai project'].join(' '),
      tags: ['TypeScript', 'Angular', 'TailwindCSS'],
      location: 'Remote / Munich, Germany'
    },
    {
      title: 'Head of Development',
      company: 'MELD d.o.o.',
      type: 'Contract',
      start: setDate(2022, 7),
      end: setDate(2023, 11),
      description: ['Building and planning various projects.'].join(' '),
      tags: ['TypeScript', 'Angular', 'SASS', 'Node.JS', 'Go', 'Ember.js', 'Ruby on Rails', 'PostgreSQL'],
      location: 'Slovenj Gradec, Slovenia'
    },
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
      description: [
        'Working on initial Angular CLI release, debugging and testing code, implementing new commands.'
      ].join(' '),
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
  ],
  projects: [
    {
      title: 'Abstruse CI',
      url: 'https://github.com/bleenco/abstruse',
      description: ['Continuous Integration Platform'].join(' '),
      tags: ['TypeScript', 'Angular', 'RxJS', 'Golang', 'Docker']
    },
    {
      title: 'ngx-realtime-chart',
      url: 'https://github.com/jkuri/ngx-realtime-chart',
      description: ['Library designed for live streaming data in Angular applications.'].join(' '),
      tags: ['TypeScript', 'Angular', 'D3']
    },
    {
      title: 'bore',
      url: 'https://github.com/jkuri/bore',
      description: [
        'Reverse HTTP/TCP proxy to help you expose a local server behind',
        'a NAT or firewall to the internet via secure SSH tunnels.'
      ].join(' '),
      tags: ['Golang', 'TypeScript', 'Angular']
    },
    {
      title: 'ngx-uploader',
      url: 'https://github.com/bleenco/ngx-uploader',
      description: ['Angular file uploader'].join(' '),
      tags: ['TypeScript', 'Angular', 'RxJS']
    },
    {
      title: 'ng2-datepicker',
      url: 'https://github.com/bleenco/ng2-datepicker',
      description: ['Angular datepicker component'].join(' '),
      tags: ['TypeScript', 'Angular', 'date-fns']
    },
    {
      title: 'bproxy',
      url: 'https://github.com/bleenco/bproxy',
      description: ['High-performance minimal HTTP reverse proxy'].join(' '),
      tags: ['C', 'libuv']
    },
    {
      title: 'binfs',
      url: 'https://github.com/bleenco/binfs',
      description: ['Library for embedding binary or text files into C++ programs'].join(' '),
      tags: ['C++']
    },
    {
      title: 'morose',
      url: 'https://github.com/bleenco/morose',
      description: ['Private npm registry and proxy server for npmjs.org'].join(' '),
      tags: ['Node.JS', 'TypeScript', 'Angular']
    },
    {
      title: 'ngx-slimscroll',
      url: 'https://github.com/jkuri/ngx-slimscroll',
      description: ['Angular customizable scrollbar directive'].join(' '),
      tags: ['Angular', 'TypeScript', 'RxJS']
    },
    {
      title: 'd3-car-dashboard',
      url: 'https://github.com/jkuri/d3-car-dashboard',
      description: ['Experiment dataviz with D3 and React'].join(' '),
      tags: ['React', 'TypeScript', 'D3', 'RxJS']
    },
    {
      title: 'ngx-graph',
      url: 'https://github.com/jkuri/ngx-graph',
      description: ['Reusable Angular components for visualizating data'].join(' '),
      tags: ['Angular', 'TypeScript', 'D3']
    },
    {
      title: 'OpenCV FFMpeg RTMP Stream',
      url: 'https://github.com/jkuri/opencv-ffmpeg-rtmp-stream',
      description: ['OpenCV FFMpeg Live Video Stream over RTMP protocol'].join(' '),
      tags: ['C++', 'OpenCV', 'FFMpeg']
    },
    {
      title: 'FFMpeg Webcam RTMP Stream',
      url: 'https://github.com/jkuri/ffmpeg-webcam-rtmp-stream',
      description: ['Cross-platform webcam capture streaming via RTMP or saving into video file'].join(' '),
      tags: ['C', 'FFMpeg']
    },
    {
      title: 'Alpine Xfce4',
      url: 'https://github.com/jkuri/alpine-xfce4',
      description: ['Alpine Linux with Xfce4 and VNC Server'].join(' '),
      tags: ['Docker', 'Linux', 'SSH']
    },
    {
      title: 'macstats',
      url: 'https://github.com/jkuri/macstats',
      description: ['Mac OS X Statistics - Battery, Fans, CPU'].join(' '),
      tags: ['macos', 'Node.JS', 'C++', 'TypeScript']
    },
    {
      title: 'Windows 98 Web Application',
      url: 'https://github.com/jkuri/windows98',
      description: ['Windows 98 nostalgic OS from my childhood wrapped into web application'].join(' '),
      tags: ['Angular', 'SASS', 'TypeScript']
    }
  ]
};

function setDate(year: number, month: number): Date {
  const date = new Date(0);
  date.setHours(0, 0, 0, 0);
  date.setFullYear(year, month - 1);
  return date;
}
