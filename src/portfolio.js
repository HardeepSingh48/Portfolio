/* Change this file to get your personal Porfolio */


// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Hardeep's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Hardeep Singh Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Hardeep Singh",
  logo_name: "HardeepSingh",
  // nickname: " ",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1kZFjYi0m9Tor49cgV-rp8pFtL8jFpEVa/view?usp=drive_link",
  portfolio_repository: "",
  githubProfile: "https://github.com/HardeepSingh48",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/HardeepSingh48",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/harrygahir/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  // {
  //   name: "YouTube",
  //   link: "https://youtube.com/c/DevSense19",
  //   fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
  //   backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  // },
  {
    name: "Gmail",
    link: "mailto:hardeep.sing.dev@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  // {
  //   name: "X-Twitter",
  //   link: "https://twitter.com/ashutosh_1919",
  //   fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
  //   backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  // },
  // {
  //   name: "Facebook",
  //   link: "https://www.facebook.com/laymanbrother.19/",
  //   fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
  //   backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  // },
  {
    name: "Instagram",
    link: "https://www.instagram.com/harry_gahir_/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web applications using React, Angular, and Next.js",
        "⚡ Developing scalable backends with Django, Node.js, and Express",
        "⚡ Integrating RESTful APIs and third-party services like Stripe and Clerk",
        "⚡ Developing mobile-ready apps using Ionic and converting React apps to cross-platform versions",
        "⚡ Ensuring application security, performance optimization, and authentication workflows",
      ],
      softwareSkills: [
        { skillName: "ReactJS", fontAwesomeClassname: "simple-icons:react", style: { color: "#61DAFB" } },
        { skillName: "Next.js", fontAwesomeClassname: "simple-icons:nextdotjs", style: { color: "#000000" } },
        { skillName: "Angular", fontAwesomeClassname: "simple-icons:angular", style: { color: "#DD0031" } },
        { skillName: "Node.js", fontAwesomeClassname: "simple-icons:node-dot-js", style: { color: "#339933" } },
        { skillName: "Express", fontAwesomeClassname: "simple-icons:express", style: { color: "#000000" } },
        { skillName: "Django", fontAwesomeClassname: "simple-icons:django", style: { color: "#092E20" } },
        { skillName: "Ionic", fontAwesomeClassname: "simple-icons:ionic", style: { color: "#3880FF" } },
        { skillName: "Stripe", fontAwesomeClassname: "simple-icons:stripe", style: { color: "#635BFF" } },
      ],
    },
    {
      title: "Frontend Design & UI/UX",
      fileName: "DesignImg",
      skills: [
        "⚡ Creating engaging and intuitive user experiences for web and mobile apps",
        "⚡ Designing wireframes and interfaces with user flow in mind",
        "⚡ Building custom component libraries with responsive styling",
      ],
      softwareSkills: [
        { skillName: "Figma", fontAwesomeClassname: "simple-icons:figma", style: { color: "#F24E1E" } },
        { skillName: "Bootstrap", fontAwesomeClassname: "simple-icons:bootstrap", style: { color: "#7952B3" } },
        { skillName: "CSS3", fontAwesomeClassname: "fa-css3", style: { color: "#1572B6" } },
        { skillName: "HTML5", fontAwesomeClassname: "simple-icons:html5", style: { color: "#E34F26" } },
        { skillName: "jQuery", fontAwesomeClassname: "simple-icons:jquery", style: { color: "#0769AD" } },
      ],
    },
    {
      title: "Backend & Database",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Developing robust RESTful APIs and server-side logic using Django, Node.js, and Express",
        "⚡ Designing database schemas and managing data with MongoDB, MySQL, and Firebase",
        "⚡ Handling user authentication, payment integration, and multi-tenancy",
      ],
      softwareSkills: [
        { skillName: "MongoDB", fontAwesomeClassname: "simple-icons:mongodb", style: { color: "#47A248" } },
        { skillName: "MySQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
        { skillName: "Firebase", fontAwesomeClassname: "simple-icons:firebase", style: { color: "#FFCA28" } },
        { skillName: "Clerk", fontAwesomeClassname: "simple-icons:clerk", style: { color: "#000000" } }, // Custom icon may be needed
        { skillName: "Prisma", fontAwesomeClassname: "simple-icons:prisma", style: { color: "#0C344B" } },
      ],
    },
    {
      title: "Programming Languages",
      fileName: "ToolsImg",
      skills: [
        "⚡ Proficient in JavaScript, TypeScript, Python, and C/C++",
        "⚡ Writing clean, maintainable code following best practices",
        "⚡ Strong foundation in data structures and algorithms",
      ],
      softwareSkills: [
        { skillName: "JavaScript", fontAwesomeClassname: "simple-icons:javascript", style: { color: "#F7DF1E" } },
        { skillName: "TypeScript", fontAwesomeClassname: "simple-icons:typescript", style: { color: "#3178C6" } },
        { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
        { skillName: "C++", fontAwesomeClassname: "simple-icons:cplusplus", style: { color: "#00599C" } },
        { skillName: "Java", fontAwesomeClassname: "simple-icons:java", style: { color: "#007396" } },
      ],
    },
    {
      title: "Tools & Platforms",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience with Git for version control and collaboration",
        "⚡ Deploying and hosting with Firebase Hosting and Vercel",
        "⚡ Familiarity with Adobe Photoshop and Visual Studio",
      ],
      softwareSkills: [
        { skillName: "Git", fontAwesomeClassname: "simple-icons:git", style: { color: "#F05032" } },
        { skillName: "Firebase Hosting", fontAwesomeClassname: "simple-icons:firebase", style: { color: "#FFCA28" } },
        { skillName: "Vercel", fontAwesomeClassname: "simple-icons:vercel", style: { color: "#000000" } },
        { skillName: "Visual Studio", fontAwesomeClassname: "simple-icons:visualstudio", style: { color: "#5C2D91" } },
        { skillName: "Adobe Photoshop", fontAwesomeClassname: "simple-icons:adobephotoshop", style: { color: "#31A8FF" } },
      ],
    },
  ],
};


// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/harry_gahir_/",
    },

  ],
};

const degrees = {
  degrees: [
    {
      title: "Guru Nanak Dev Engineering College ",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "gndec.png",
      alt_name: "GNDEC",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core computer science subjects such as Data Structures, Algorithms, DBMS, Operating Systems, and Web Development.",
        "⚡ Practical experience in full-stack development using Django, React, Angular, Next.js, and Node.js.",
        "⚡ Earned certifications in React, Angular, and Python through Infosys Springboard program. I have received award from respected director for consistently best performance in academics.",

      ],
      website_link: "https://gndec.ac.in/",
    },

  ],
};

const certifications = {
  certifications: [
    {
      title: "React Web Developer",
      subtitle: "- Infosys Springboard",
      logo_path: "Infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1tgbd-2Y9EyxdqkSOaWwP1m-mkDGsgU_x/view?usp=drive_link",
      alt_name: "Infosys",
      color_code: "#fffff",
    },
    {
      title: "Angular Web Developer",
      subtitle: "- Infosys Springboard",
      logo_path: "Infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1gmjdxlVobmy30Y0tUOzp23Oq2ZRS6h4T/view?usp=sharing",
      alt_name: "Infosys",
      color_code: "#fffff",
    },
    {
      title: "Python Foundation",
      subtitle: "- Infosys Springboard",
      logo_path: "Infosys.png",
      certificate_link:
        "https://drive.google.com/file/d/1Jj967veghkGuzS1ZsysWDBcdvNNCTQN0/view?usp=drive_link",
      alt_name: "Infosys",
      color_code: "#fffff",
    },

  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with multiple startups and organizations in full-stack web development, collaborating on scalable projects and solving real-world problems. I've also actively participated in community work and technical clubs.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Developer Intern",
          company: "Initiators of Change",
          company_url: "https://www.initiatorsofchange.com/",
          logo_path: "Dbuck.png",// Add logo to assets/images
          duration: "Aug 2024 - Oct 2024",
          location: "Ludhiana, Punjab",
          description:
            "Developed responsive web interfaces using React.js and Redux, integrated third-party APIs, and optimized cross-browser performance. Collaborated with backend teams to improve data fetching and reduce load times by 25%.",
          color: "#f59e0b",
        },

      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Development Intern",
          company: "DBuck Technologies Pvt. Ltd.",
          company_url: "https://www.dbuck.com/",
          logo_path: "Dbuck.png",
          duration: "June 2025 - July 2025",
          location: "Remote",
          description:
            "Worked on full-stack web development tasks including frontend and backend components. Collaborated on scalable web projects under mentorship, with exposure to real-time deployment, remote workflows, and agile development practices.",
          color: "#0071C5",
        },
        {
          title: "Software Developer Intern",
          company: "Initiators of Change",
          company_url: "https://www.initiatorsofchange.com/",
          logo_path: "ioc_logo.png",
          duration: "Aug 2024 - Oct 2024",
          location: "Ludhiana, Punjab",
          description:
            "Built responsive web interfaces using React.js and Redux. Integrated third-party APIs and improved UI performance by 30%. Reduced load times by 25% through optimized data fetching strategies.",
          color: "#f59e0b",
        },
        
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: "Volunteer Leader",
          company: "Initiators of Change",
          company_url: "https://www.initiatorsofchange.com/",
          logo_path: "ioc_logo.png",
          duration: "Aug 2023 - Present",
          location: "Ludhiana, Punjab",
          description:
             "Led digital literacy initiatives and community outreach programs for over 500 individuals. Organized and managed tech-awareness events promoting education and empowerment.",
          color: "#10b981",
        },
        
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I've built and contributed to various full-stack web applications using modern frameworks like React, Next.js, Django, and Node.js. My work includes building UIs, integrating REST APIs, managing databases, and deploying to cloud platforms.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Articles & Contributions",
  description: "Some of the technical insights and certifications I've shared or participated in during my learning journey.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hardeep_singh.png",
    description:
      "Feel free to reach out for collaboration, freelance projects, or just a tech discussion. I specialize in Full Stack Development using React, Next.js, Django, and Node.js. I typically respond within 24 hours.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Chet Singh Nagar, Ludhiana, Punjab, India",
    locality: "Ludhiana",
    country: "India",
    region: "Punjab",
    postalCode: "141003",
    streetAddress: "Chet Singh Nagar",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/8bFwhkdZnKvojWMd6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 7973596992",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
