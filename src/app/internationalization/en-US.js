export default {
  translation: {
    seo: {
      title: 'João Andrade | Full-stack Software Engineer',
      description:
        'Portfolio of João Andrade, a full-stack software engineer focused ' +
        'on accessible, high-performance web interfaces with React and Vue.',
      socialImageAlt: 'Portrait of João Andrade.',
      jobTitle: 'Full-stack Software Engineer',
      personDescription:
        'Software engineer focused on accessible, high-performance web interfaces.',
    },
    accessibility: {
      skipToContent: 'Skip to main content',
    },
    components: {
      Header: {
        home: 'Home',
        projects: 'Projects',
        experience: 'Experience',
        contact: 'Contact',
        navigation: 'Main navigation',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
      },
      Hero: {
        title: 'Hi, I am João and I work creating',
        software: 'software!',
        technology: 'technology!',
        apps: 'applications!',
        description:
          `I am a full-stack software engineer with over <strong>${new Date().getFullYear() - 2021} years of professional experience</strong>, ` +
          '<strong>specialized in front-end development</strong>. ' +
          'I work on creating accessible, high-performance interfaces focused on ' +
          'user experience using technologies such as <strong>React JS</strong> and ' +
          '<strong>Vue JS</strong>. <br /><br />\n' +
          'Additionally, I have experience in back-end development with ' +
          'Node JS, mobile applications with ' +
          'React Native, and cloud solutions using ' +
          '<strong>AWS services</strong>.',
        getInTouch: 'Get in Touch',
        downloadCV: 'Download CV',
        experienceWith: 'Experience with',
        profileAlt: 'Portrait of João Andrade',
      },
      Experience: {
        title: 'Experience',
        showMore: 'Show more',
      },
      LanguageSwitch: {
        label: 'Change language',
      },
      Footer: {
        title: 'Contact',
        description:
          'If you have any questions, collaboration opportunities, or would like to learn more about my work, feel free to send me a message.',
      },
    },
    constants: {
      companies: {
        allstacks: {
          title: 'Front-end Engineer at ',
          name: 'Allstacks',
          link: 'https://www.allstacks.com/',
          period: 'May 2025 - Present',
          description:
            'I work on a US-based <strong>software engineering analytics platform</strong>. ' +
            'I have led initiatives to migrate Vue 2 to Vue 3, standardizing the module architecture ' +
            'around queries, services, and composables. I also build <strong>AI-driven experiences</strong> ' +
            'with long-running asynchronous workflows, contextual data visualization, and collaborative ' +
            'planning interfaces; develop complex features for Data Explorer; and implemented a cache ' +
            'that reduced redundant API calls and improved application responsiveness.',
        },
        capim: {
          title: 'Front-end Engineer at ',
          name: 'Capim',
          link: 'https://capim.com.br/',
          period: 'Dec 2023 - May 2025',
          description:
            "I refactored the entire front end of the credit request flow, the fintech's core service, " +
            'which impacts <strong>thousands of people</strong> and handles millions of reais every month. ' +
            'I migrated the application from the Vue Options API to the Composition API and designed an ' +
            'accessible, scalable Design System. I also delivered features supporting customer acquisition ' +
            'and retention, increased core-flow reliability through unit and end-to-end tests, mentored ' +
            'junior developers and interns, and led Front-end Guild initiatives.',
        },
        petlove: {
          title: 'Front-end Engineer at ',
          name: 'Petlove Tech',
          link: 'https://www.petlove.com.br/',
          period: 'Sep 2022 - Nov 2023',
          description:
            'I developed and integrated front-end features that improved the usability and performance ' +
            "of a platform supporting one of Brazil's largest pet care ecosystems. I increased code " +
            'reliability with Jest and Vue Test Utils, participated in dependency modernization and ' +
            'framework upgrades, and collaborated with cross-functional teams to deliver ' +
            '<strong>scalable, user-focused solutions</strong>.',
        },
        bhut: {
          title: 'Software Engineer at ',
          name: 'Bhut',
          link: 'https://www.bhut.com.br/',
          period: 'Jan 2022 - Sep 2022',
          description:
            'I developed features for a <strong>digital banking platform</strong>, including Pix-related ' +
            'flows used in daily financial operations. I built interfaces for web, mobile with React Native, ' +
            'and back-office systems, focusing on usability and reliability while maintaining and improving ' +
            'existing application flows.',
        },
        conpec: {
          title: 'Software Engineer at ',
          name: 'Conpec Jr',
          link: 'https://www.conpec.com.br/',
          period: 'Mar 2021 - Apr 2022',
          description:
            'I developed front-end features using HTML, CSS, JavaScript, React, and Firebase. I built an ' +
            '<strong>internal HR management platform</strong>, contributed to an English-learning platform, ' +
            'and worked with Scrum practices and Git-based version control.',
        },
      },
    },
  },
};
