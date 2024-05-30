import serenade from "@/public/images/serenade.png";
import serenadeLanding from "@/public/images/serenade-landing.png";
import booked from "@/public/images/booked.png";
import pinterest from "@/public/images/pinterest.png";
import blogImg from "@/public/images/blog-img.png";
import imind from "@/public/images/imind.png";
import portfolioImg from "@/public/images/portfolio-img.png";

const jobs = [
  {
    title: "Mobile developer",
    company: "Apple Developer Academy",
    color: "#e8437a",
    companyUrl: "https://www.developeracademy.unina.it/en/",
    date: "October 2023 - Present",
    description: [
      "Participant in Apple's application development program, focused on learning and applying the latest iOS application development technologies and practices.",
      "Collaboration on mobile application development projects using SwiftUI.",
      "Experience building iOS apps focused on user experience and accessibility.",
    ],
  },
  {
    title: "Web developer Internship",
    company: "Pixolab",
    color: "#0569ff6b",
    companyUrl: "https://pixolab.com.mx/",
    date: "May 2023 - July 2023",
    description: [
      "Documented processes on Notion to enhance team efficiency and collaboration by organizing information.",
      "Developed custom web applications for digital interfaces to provide unique solutions.",
      "Contributed to the expansion of an e-commerce WordPress website by adding a diverse range of products.",
      "Improved digital platform user experience (UX), resulting in increased customer satisfaction and engagement.",
    ],
  },
  {
    title: "Web developer Internship",
    company: "Conektica",
    color: "#ff1e296b",
    companyUrl: "https://www.conektica.com/",
    date: "January 2022 - May 2022",
    description: [
      "Contributed to the development of functional web pages, as well as the creation of landing pages and e-commerce pages using WordPress.",
      "Applied CSS modifications to the created pages.",
      "Assisted on crafting a landing page using BootstrapVue.",
      "Incorporated basic JavaScript functionalities into web pages.",
    ],
  },
];

const projects = [
  {
    title: "Serenade",
    description: [
      "A team-developed music social network app that allows users to share their favorite songs and dedicate them to friends. Users can make friends, listen to previews, and open songs with their preferred streaming platform.",
    ],
    note: "Note: I will add the TestFlight link as soon as it is available. Also, the official release on the App Store is coming soon!",
    image: serenade,
    tech: ["SwiftUI", "MusicKit", "Firebase"],
  },
  {
    title: "Serenade Landing Page",
    description: [
      "Design and development of the landing page for the Serenade application, highlighting its different functions through images and offering a direct link to download the app. Implemented Markdown for terms and conditions, privacy policy, etc. Converting them to HTML for optimal presentation.",
    ],
    image: serenadeLanding,
    tech: ["Next.js", "React", "CSS", "Markdown"],
    github: "https://github.com/Alex10liva/serenade-landing",
    url: "https://serenade-landing.vercel.app/",
  },
  {
    title: "Booked",
    description: [
      "An app focused on data structures and algorithms for book recommendations and tracking. Using the Google Books API, users can keep track of their finished books and reading list to receive book recommendations based on their preferences.",
    ],
    note: "",
    image: booked,
    tech: ["SwiftUI", "Swift Data", "Algorithms"],
    github: "https://github.com/Alex10liva/Booked",
  },
  {
    title: "Pinterest Clone",
    description: [
      "This project is a clone of the Pinterest iOS Application, where users can create boards and pin images. It uses Swift Data for managing and persisting user data.",
    ],
    note: "",
    image: pinterest,
    tech: ["SwiftUI", "Swift Data"],
    github: "https://github.com/Alex10liva/Pinterest-clone",
  },
  {
    title: "Blog.",
    description:
      "This project is my blog, focused on tech news, tutorials, and other topics. The blog is active and I'm still working to add content regularly.",
    note: "Note: The webpage may take a while to load.",
    image: blogImg,
    tech: ["JavaScript", "EJS", "CSS", "Markdown"],
    github: "https://github.com/Alex10liva/blog",
    url: "https://blog-02pp.onrender.com/",
  },
  {
    title: "iMind",
    description:
      "This app was created to explore Apple's Human Interface Guidelines and includes features for meditation, breathing exercises, and daily mood check-ins to monitor your emotional well-being",
    note: "",
    image: imind,
    tech: ["SwiftUI", "Swift Data"],
    github: "https://github.com/xDiegoNunezx/MC1-ADA",
  },
  /*{
    title: "SaberEsJugar",
    description:
      "A school project where elementary students take quizzes on various subjects, earn stars based on performance, which they can then use to download drawings, and watch educational YouTube videos.",
    note: "Note: The 'dev' branch contains all the latest changes.",
    image: saberesjugar,
    tech: ["UIKit"],
    github: "https://github.com/Alex10liva/SaberEsJugar",
  },*/
  {
    title: "My portfolio",
    description: [
      "In this project I share information about myself, my work experience and outstanding projects in which I have worked.",
    ],
    note: "",
    image: portfolioImg,
    tech: ["Next.js", "React", "CSS"],
    github: "https://github.com/Alex10liva/portfolio",
  },
];

const brandsBG = {
  JavaScript: "#f0db4f",
  "Next.js": "#000000",
  React: "#61dafb",
  CSS: "#2965f1",
  EJS: "#b4ca65",
  Markdown: "#ffffff",
  UIKit: "#007acc",
  SwiftUI: "#0071e3",
  "Swift Data": "#7e99a7",
  MusicKit: "#ff2f55",
  Firebase: "#ffca28",
  Algorithms: "#FF8C00",
};

const brandsColor = {
  JavaScript: "#312d10",
  "Next.js": "#efefef",
  React: "#20232a",
  CSS: "#efefef",
  EJS: "#a91e50",
  Markdown: "#151515",
  UIKit: "#ffffff",
  SwiftUI: "#ffffff",
  "Swift Data": "#151d23",
  MusicKit: "#ffffff",
  Firebase: "#000000",
  Algorithms: "#ffffff",
};

const brands = {
  JavaScript: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 1052 1052"
    >
      <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
      <path
        d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
        fill="#323330"
      />
    </svg>
  ),
  CSS: (
    <svg
      fill="#ffffff"
      version="1.1"
      width="28"
      height="28"
      viewBox="-122.88 -122.88 757.76 757.76"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0">
        <rect
          x="-122.88"
          y="-122.88"
          width="757.76"
          height="757.76"
          rx="0"
          fill="#1172B8"
          strokewidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <g id="c133de6af664cd4f011a55de6b001b19">
          <path
            display="inline"
            d="M483.111,0.501l-42.59,461.314l-184.524,49.684L71.47,461.815L28.889,0.501H483.111z M397.29,94.302 H255.831H111.866l6.885,55.708h137.08h7.7l-7.7,3.205l-132.07,55.006l4.38,54.453l127.69,0.414l68.438,0.217l-4.381,72.606 l-64.058,18.035v-0.057l-0.525,0.146l-61.864-15.617l-3.754-45.07h-0.205H132.1h-0.202l7.511,87.007l116.423,34.429v-0.062 l0.21,0.062l115.799-33.802l15.021-172.761h-131.03h-0.323l0.323-0.14l135.83-58.071L397.29,94.302z"
          ></path>
        </g>
      </g>
    </svg>
  ),
  EJS: (
    <svg
      width="28"
      height="28"
      viewBox="-4.8 -4.8 41.60 41.60"
      xmlns="http://www.w3.org/2000/svg"
      fill="#000000"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0">
        <rect
          x="-4.8"
          y="-4.8"
          width="41.60"
          height="41.60"
          rx="0"
          fill="#b4ca65"
          strokewidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>file_type_ejs</title>
        <path
          d="M2,17.672V14.328l11.86-6.2V11.2L5.1,15.939l8.762,4.835v3.1Zm27.814-8.88L19.465,23.229H15.912L26.281,8.791ZM26.947,21.5a.794.794,0,0,0,.619-.278,1.061,1.061,0,0,0,.248-.732,1.141,1.141,0,0,0-.248-.753.768.768,0,0,0-1.217,0,1.141,1.141,0,0,0-.248.753,1.09,1.09,0,0,0,.237.732A.763.763,0,0,0,26.947,21.5Zm2.186,1.042a3.237,3.237,0,0,1-4.352-.01,2.864,2.864,0,0,1,0-4.1,3.223,3.223,0,0,1,4.352,0A2.773,2.773,0,0,1,30,20.486,2.74,2.74,0,0,1,29.134,22.538ZM18.821,13.061a.794.794,0,0,0,.619-.278,1.061,1.061,0,0,0,.248-.732,1.141,1.141,0,0,0-.248-.753.769.769,0,0,0-1.217,0,1.141,1.141,0,0,0-.248.753,1.09,1.09,0,0,0,.237.732A.763.763,0,0,0,18.821,13.061ZM21.007,14.1a3.237,3.237,0,0,1-4.352-.01,2.864,2.864,0,0,1,0-4.1,3.223,3.223,0,0,1,4.352,0,2.773,2.773,0,0,1,.866,2.063A2.74,2.74,0,0,1,21.007,14.1Z"
          fill="#a91e50"
        ></path>
      </g>
    </svg>
  ),
  Markdown: (
    <svg
      width="28"
      height="28"
      viewBox="-2.4 -2.4 28.80 28.80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0">
        <rect
          x="-2.4"
          y="-2.4"
          width="28.80"
          height="28.80"
          rx="0"
          fill="#efefef"
          strokewidth="0"
        ></rect>
      </g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 8C0 5.79086 1.79086 4 4 4H20C22.2091 4 24 5.79086 24 8V16C24 18.2091 22.2091 20 20 20H4C1.79086 20 0 18.2091 0 16V8ZM4 6C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H20C21.1046 18 22 17.1046 22 16V8C22 6.89543 21.1046 6 20 6H4ZM5.68377 8.05132C6.09211 7.9152 6.54174 8.05566 6.8 8.4L9 11.3333L11.2 8.4C11.4583 8.05566 11.9079 7.9152 12.3162 8.05132C12.7246 8.18743 13 8.56957 13 9V15C13 15.5523 12.5523 16 12 16C11.4477 16 11 15.5523 11 15V12L9.8 13.6C9.61115 13.8518 9.31476 14 9 14C8.68524 14 8.38885 13.8518 8.2 13.6L7 12V15C7 15.5523 6.55228 16 6 16C5.44772 16 5 15.5523 5 15V9C5 8.56957 5.27543 8.18743 5.68377 8.05132ZM18 9C18 8.44772 17.5523 8 17 8C16.4477 8 16 8.44772 16 9V12.5858L15.7071 12.2929C15.3166 11.9024 14.6834 11.9024 14.2929 12.2929C13.9024 12.6834 13.9024 13.3166 14.2929 13.7071L16.2929 15.7071C16.6834 16.0976 17.3166 16.0976 17.7071 15.7071L19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929C19.3166 11.9024 18.6834 11.9024 18.2929 12.2929L18 12.5858V9Z"
          fill="#000000"
        ></path>
      </g>
    </svg>
  ),
};

export { jobs, projects, brandsBG, brandsColor, brands };
