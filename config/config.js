import profile from "./profile.png";
import {
  faWeebly,
  faAppStore,
  faGithub,
  faGooglePlay,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {} from "@fortawesome/free-solid-svg-icons";

export const navigation = {
  name: "Stephen",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Project",
      link: "#project",
    },
    // {
    //   title: "Contact",
    //   link: "#contact",
    // },
    // {
    //   title: "Links",
    //   link: "/links",
    // },
  ],
};
export const intro = {
  title: "Hey, I'm Stephen",
  description: "A Full Stack Software Engineer with an emphasis on usability.",
  image: profile.src,
  icons: [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/stephenh2017/",
    },
    {
      icon: faGithub,
      link: "https://github.com/StephenFunCode",
    },
  ],
  // buttons: [
  //   {
  //     title: "Contact Me",
  //     link: "#contact",
  //     isPrimary: true,
  //   },
  //   // {
  //   //   title: "Resume",
  //   //   link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
  //   //   isPrimary: false,
  //   // },
  // ],
};

export const about = {
  title: "About",
  description: [
    "In my senior year at the University of Utah, I worked with a designer to create a prototype that helped them visualize how well each department was doing. They needed an easy way to see if they were meeting their requirements for accreditation.",
    "A few months into the project, my colleagues and I had become really familiar with the code and how everything worked. But when we presented it to someone with no background on it, there was confusion about what the visualization did or represented.",
    "It was really disappointing to get this feedback so late in the project. We didn’t have much time or budget to deal with it, so we had to find a simple solution. We decided to create an interactive tutorial to help users get comfortable with the software before they started using it.",
    "While we got out of a tough spot at the last minute this time, I could see that building software this way was not efficient. So I decided from that moment on to only work with companies that would avoid this in the future. Companies that let customers work with early prototypes and provide feedback before it gets too late to take action.",
    "My mission is to help companies deliver software to their customers that’s easy to use and solves their problems without confusion.",
  ],
};

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Mobile App Development",
      description: "I create pixel perfect iOS and Andriod apps using Flutter.",
      icons: null,
    },
    {
      title: "Web Development",
      description: "I create responsive static websites using Reactjs.",
      icons: null,
    },
  ],
};

export const projects = {
  title: "Project",
  cards: [
    {
      title: "Assessment Visualizer",
      description:
        "A novel interactive visualization for helping the University of Utah assess how their departments are meeting their expected learning outcomes.",
      icons: [
        {
          icon: faWeebly,
          link: "https://assessmentvisualizer.weebly.com/video-summary.html",
        },
        // {
        //   icon: faGithub,
        //   link: "https://github.com/hashirshoaeb/star_book",
        // },
      ],
    },
    // {
    //   title: "QuranTalk",
    //   description:
    //     "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
    //   icons: [
    //     {
    //       icon: faAppStore,
    //       link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
    //     },
    //     {
    //       icon: faGooglePlay,
    //       link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
    //     },
    //   ],
    // },
    // {
    //   title: "Portfolio",
    //   description:
    //     "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
    //   icons: [
    //     {
    //       icon: faGithub,
    //       link: "https://github.com/hashirshoaeb/portfolio",
    //     },
    //   ],
    // },
  ],
};

export const contact = {
  title: "Get in touch",
  description: "Feel free to add me on LinkedIn.",
  icons: [
    {
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/stephenh2017/",
    },
  ],
  // buttons: [
  //   {
  //     title: "Email Me",
  //     link: "mailto:hashirshoaeb@gmail.com",
  //     isPrimary: true,
  //   },
  //   {
  //     title: "Schedule Meeting",
  //     link: "",
  //     isPrimary: false,
  //   },
  // ],
};

// SEARCH ENGINE
export const SEO = {
  // 50 - 60 char
  title: "Stephen Harman",
  description: "Full Stack Software Engineer with an focus on usability.",
  image: profile.src,
};

export const links = {
  image: profile.src,
  title: "@hashirshoaeb",
  description: "Computer Engineer | Flutter | Reactjs Developer",
  cards: [
    {
      title: "My website",
      link: "https://hashirshoaeb.com/",
    },
    {
      title: "QuranTalk App",
      link: "https://www.qurantalk.app/",
    },
    {
      title: "StarBook App",
      link: "https://starbook.dev/",
    },
    {
      title: "My GitHub",
      link: "https://github.com/hashirshoaeb/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/hashirshoaeb/",
    },
  ],
};
