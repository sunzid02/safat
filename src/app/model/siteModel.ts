export type NavItem = {
  id: string;
  label: string;
  href: string;
};

export type HeroModel = {
  headline: string;
  subline: string;
  pills: string[];
  cta: {
    email: string;
    links: {
      label: string;
      url: string;
      icon: "linkedin" | "github" | "youtube";
    }[];
  };
  note: string;
};

export type AboutModel = {
  title: string;
  paragraphs: string[];
  focusAreas: string[];
};

export type TechFace = {
  title: string;
  badge: string;
  items: string[];
};

export type TechModel = {
  title: string;
  hint: string;
  faces: TechFace[];
};

export type ExperienceItem = {
  title: string;
  when: string;
  bullets: string[];
};

export type ExperienceModel = {
  title: string;
  items: ExperienceItem[];
};

export type ResearchExperienceModel = {
  title: string;
  items: ExperienceItem[];
};

export type ProjectItem = {
  title: string;
  desc: string;
  meta: string;
  url?: string;
  demo?: string;
  rpaper?: string;
};

export type ProjectsModel = {
  title: string;
  intro: string;
  items: ProjectItem[];
};

export type CreatorVideo = {
  id: string;
  title: string;
  desc: string;
  url: string;
};

export type CreatorModel = {
  title: string;
  intro: string;
  hint: string;
  videos: CreatorVideo[];
};


export type ContactModel = {
  email: string;
  links: {
    label: string;
    url: string;
  }[];
};


export type RecommendationItem = {
  name: string;
  role: string;
  company: string;
  photo?: string;
  text: string;
  linkedin?: string;
};

export type RecommendationsModel = {
  title: string;
  intro: string;
  items: RecommendationItem[];
};


export type TravelFlag = {
  emoji: string;
  name: string;
};

export type TravelPhoto = {
  src: string;
  title: string;
  desc: string;
};

export type TravelModel = {
  title: string;
  intro: string;
  flags: TravelFlag[];
  quote: {
    text: string;
    author: string;
  };
  photos: {
    title: string;
    intro: string;
    hint: string;
    items: TravelPhoto[];
  };
};

export type SiteModel = {
  brand: { name: string; href: string };
  nav: NavItem[];

  hero: HeroModel;
  about: AboutModel;
  tech: TechModel;
  experience: ExperienceModel;
  researchExperience: ResearchExperienceModel;
  projects: ProjectsModel;
  creator: CreatorModel;
  travel: TravelModel;
  contact: ContactModel; 
  recommendations: RecommendationsModel;

};

export const siteModel: SiteModel = {
  brand: { name: "Sarker Safat Mahmud", href: "#top" },

  nav: [
    { id: "about", label: "About", href: "#about" },
    { id: "stack", label: "Tech", href: "#stack" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "creator", label: "Content", href: "#creator" },
    { id: "travel", label: "Travelling", href: "#travel" },
    { id: "recommendations", label: "Recommendations", href: "#recommendations" },
    // { id: "contact", label: "Contact", href: "#contact" },
  ],

  hero: {
    headline: "Backend Engineer | MS in Computer Science @ Montana State University",
    subline: "Microservices, APIs, and applied ML research.",
    pills: [
      "Java • Spring Boot • Go (Gin)",
      "Microservices • Kafka • gRPC • JWT",
      "Python • Flask/Django • ML",
    ],
    cta: {
      email: "sarkersafatmahmud@montana.edu",
      links: [
        {
          label: "LinkedIn",
          url: "https://www.linkedin.com/in/safat99/",
          icon: "linkedin",
        },
        {
          label: "GitHub",
          url: "https://github.com/safat99",
          icon: "github",
        },
        {
          label: "YouTube",
          url: "https://www.youtube.com/@safat99",
          icon: "youtube",
        },
      ],
    },
    note: "Open to backend and research opportunities",
  },


  about: {
    title: "About",
    paragraphs: [
      "I am a backend-focused software engineer and MS in Computer Science student at Montana State University (current CGPA 3.83). I enjoy building reliable services and APIs, and I care a lot about clean design, strong fundamentals, and systems that scale.",
      "In industry, I have worked on payment and settlement systems, OTA third-party integrations, and backend services across Java Spring Boot, Go (Gin), and Python Flask. I have also designed data models and REST APIs from requirements and shipped production services on AWS.",
      "In research, I have worked on the Protein Scaffold Gap Filling problem using probabilistic and machine learning methods, and I am exploring 3D CNN and semi-supervised approaches for classification in hyperspectral spatial data.",
    ],
    focusAreas: [
      "Backend development (Java Spring Boot, Go, Python)",
      "Microservices, Kafka, gRPC, and API integrations",
      "Databases and data modeling (MySQL, PostgreSQL, MongoDB, Redis)",
      "Applied ML research and data pipelines",
    ],
  },


  tech: {
    title: "Tech Stack",
    hint: "Explore my stack as a 3D cube. Drag to rotate, or use the buttons to jump to a side.",
    faces: [
      {
        title: "Backend",
        badge: "APIs • Services • Architecture",
        items: [
          "Java (Spring Boot, Spring Cloud)",
          "Go (Gin)",
          "Python (Flask, Django)",
          "REST APIs",
          "gRPC",
          "Kafka",
          "JWT • Spring Security",
        ],
      },
      {
        title: "Databases",
        badge: "Relational • NoSQL • Cache",
        items: [
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Redis",
          "Google Firebase",
        ],
      },
      {
        title: "ML & Data",
        badge: "Research • Prototypes",
        items: [
          "NumPy • Pandas • Matplotlib",
          "scikit-learn",
          "TensorFlow",
          "OpenCV",
          "MATLAB",
        ],
      },
      {
        title: "DevOps",
        badge: "Build • Deploy",
        items: ["Docker", "AWS EC2", "Linux", "Git"],
      },
      {
        title: "Robotics",
        badge: "Simulation • Systems",
        items: ["ROS", "Gazebo", "Raspberry Pi"],
      },
      {
        title: "Tools",
        badge: "Everyday Workflow",
        items: ["IntelliJ", "VS Code", "Postman", "Google Colab"],
      },
    ],
  },

  experience: {
    title: "Tech Experience",
    items: [
      {
        title: "Junior Software Engineer (Backend) | TechnoNext Ltd (US-Bangla Group), Bangladesh",
        when: "Feb 2023 to Jun 2024",
        bullets: [
          "R&D for payment service operations based on microservice architecture.",
          "Integrated third-party airfare distribution and payment settlement APIs for an OTA project.",
          "Contributed to backend development for an Applicant Tracking System.",
        ],
      },
      // {
      //   title: "Research Assistant | Directorate of Research and Extension, CUET",
      //   when: "Jun 2023 to Jan 2024",
      //   bullets: [
      //     "Conducted literature reviews and analyzed recent algorithms for multi-robot path planning.",
      //     "Designed simulation experiments and case studies for cooperative multi-robot tasks.",
      //   ],
      // },
      {
        title: "Software Engineer Intern (Backend) | Square Health Ltd, Bangladesh",
        when: "Nov 2022 to Jan 2023",
        bullets: [
          "Designed an inventory management system architecture from requirements.",
          "Created the ER diagram and implemented REST APIs using Java Spring Boot.",
        ],
      },
      {
        title: "Software Engineer (Backend) | Tecognize Solutions Limited, Bangladesh",
        when: "Jan 2022 to Jun 2022",
        bullets: [
          "Designed and implemented RESTful APIs with Python Flask and deployed to AWS and multiple VMs.",
          "Built 50+ APIs and third-party integrations (SMS, email) for a React + Flask parcel delivery web app (DurbinX).",
        ],
      },
    ],
  },

  researchExperience: {
    title: "Research Experience",
    items: [
      {
        title: "Graduate Research Assistant | Montana State Universit (USA)",
        when: "Jan 2025 to Aug 2025",
        bullets: [
          "Researched the Protein Scaffold Gap Filling problem using probabilistic and machine learning approaches.",
          "Conducted literature reviews on genome and protein clustering algorithms.",
          "Explored band reduction, 3D CNN models, and semi-supervised learning for classification in hyperspectral spatial data.",
          "Assisted in instruction, lab supervision, and grading for courses including Advanced Software Engineering, Data Structures and Algorithms, and Measurement & Instrument Lab.",
        ],
      },

      {
        title: "Research Assistant | Chittagong University of Engineering and Technology (CUET), Bangladesh",
        when: "Jun 2023 to Jan 2024",
        bullets: [
          "Conducted comprehensive literature reviews on multi-robot path-planning",
          "Analyzed various latest algorithms for multi-robot systems",
          "Designed experiments for multi-robot systems on simulation environments and applying case studies.",
        ],
      },

    ],
  },

  

  projects: {
    title: "Projects",
    intro: "A few projects across robotics, backend systems, and applied ML.",
    items: [

      {
        title: "NodeMCU-based IoT Box",
        desc: "End-to-end IoT system with custom PCB, Firebase backend, web interface, and mobile control app.",
        meta: "IoT • Firebase • Embedded",
        url: "https://github.com/Safat99/IoT-Box",
        demo: "https://www.youtube.com/watch?v=9XfIP5cwh9o",
        rpaper: "https://www.researchgate.net/publication/354860121_157-P-4_Development_and_Optimization_of_a_Real-time_Server-based_IoT_Box_A_Smart_Home_Automation_System_and_its_Subsequent_Fabrication"
      },
      {
        title: "OpenCV-based Self-Driving Car",
        desc: "Raspberry Pi-based autonomous robot using computer vision.",
        meta: "Raspberry Pi • OpenCV • Python",
        url: "https://github.com/Safat99/openCV-based-Autonomous-car-with-Raspberry-Pi",
        demo: "https://www.youtube.com/watch?v=_uvGQ6cCDds"

      },

      {
        title: "Mechanical Vibration Analysis of a Car body with MATLAB",
        desc: "Measured unknown vibrations using ADXL335, a 3-axis accelerometer, and analyzed with MATLAB and Excel.",
        meta: "MATLAB • Mechanical Engineering",
        url: "https://github.com/Safat99/Mechanical_Vibration_Analysis_with_MATLAB_and_Arduino",
        demo: "https://www.linkedin.com/feed/update/urn:li:activity:6836175024676843520/"
      },


      {
        title: "Audio Classification with UrbanSound8k Dataset:",
        desc: "MLP, CNN-based sound classifier, can classify between the 10 classes sounds of UrbanSound8K dataset.",
        meta: "MLP • CNN • TensorFlow",
        url: "https://github.com/Safat99/audio_classifier_of_urbansound8k_dataset"
      },

      {
        title: "Multi-Robot Task Allocation (Undergrad Thesis)",
        desc: "Built a ROS + Gazebo simulation for multi-robot task allocation and compared vacancy chain vs auction-based strategies in dynamic distributed settings.",
        meta: "ROS • Gazebo • Multi-robot systems",
      },

      {
        title: "Sleep Stage Classification (CAP Sleep Database)",
        desc: "Deep CNN-based sleep stage classifier for NFLE patients.",
        meta: "Deep Learning • CNN • TensorFlow",
        url: "https://github.com/Safat99/Sleep_stage_classifciation_of_epilepsy_patient"
      },



      {
        title: "Health AI Receptionist Backend (Ongoing)",
        desc: "Microservice-based backend including face recognition and other supporting services.",
        meta: "Microservices • Backend • ML",
        url: "https://github.com/Safat99/Health_AI_Receptionist"
      },
      {
        title: "Deep CNN-based Pedestrian Detection",
        desc: "VGG16, VGG19, and ResNet50 were used. ",
        meta: "Python • Flask • PostgreSQL • AWS",
        url: "https://github.com/Safat99/pedestrian_detection_with_diff_DL_model"
      },
      {
        title: "Deep CNN-based Emergency Vehicle Detection",
        desc: "YOLO, VGG16, and VGG19 were used.",
        meta: "Python • Flask • PostgreSQL • AWS",
        url: "https://github.com/Safat99/emergency_vehicle_detection"
      },
    ],
  },

  creator: {
    title: "Research & Teaching",
    intro:
      "Alongside industry work, I support teaching and research. I enjoy turning complex topics into clear explanations and building prototypes to validate ideas.",
    hint: "",
    videos: [],
  },

  travel: {
    title: "More",
    intro: "A few extra highlights from my profile.",
    flags: [{ emoji: "🇧🇩", name: "Bangladesh" }, { emoji: "🇺🇸", name: "USA" }],
    quote: {
      text: "Make it work, make it right, make it fast.",
      author: "Kent Beck",
    },
    photos: {
      title: "Highlights",
      intro: "",
      hint: "",
      items: [],
    },
  },

  recommendations: {
    title: "Publications",
    intro: "Selected publications and research outputs.",
    items: [
      {
        name: "Mahmud, S.S.",
        role: "Publication",
        company: "Springer (ICO 2021)",
        text: "A Deep Convolutional Neural Network Based Classification Approach for Sleep Scoring of NFLE Patients (2022).",
      },
      {
        name: "Banik, S. C., & Mahmud, S. S.",
        role: "Publication",
        company: "Engineering Reports (Wiley)",
        text: "Path Planning Approaches in Multi-robot System: A Review (2024).",
      },
      {
        name: "Nuva, T. J., Ahmed, M. I., & Mahmud, S. S.",
        role: "Publication",
        company: "JIAE",
        text: "Design & Fabrication of Automatic Color & Weight-Based Sorting System on Conveyor Belt (2022).",
      },
    ],
  },

  contact: {
    email: "sarkersafatmahmud@montana.edu",
    links: [
      { label: "GitHub", url: "https://github.com/safat99" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/sarker-safat-mahmud" },
      { label: "Google Scholar", url: "https://scholar.google.com/citations?user=sarker-safat" },
      { label: "GrabCAD", url: "https://grabcad.com/sarker-safat" },
    ],
  },


};
