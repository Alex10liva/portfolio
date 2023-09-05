import JobCard from "../JobCard";
import "./about.css";

const jobs = [
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

function About() {
  return (
    <section className="about" id="sobre-mi">
      <div className="content-wrapper">
        <div className="left">
          <h2>Sobre mí</h2>
          <p>Estudié en la Universidad de las Américas Puebla</p>
        </div>
        <div className="right">
          {jobs.map((job) => (
            <JobCard
              className="job-card"
              key={job.title}
              title={job.title}
              company={job.company}
              color={job.color}
              companyUrl={job.companyUrl}
              date={job.date}
              description={job.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
