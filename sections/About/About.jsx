import JobCard from "../../components/JobCard";
import { jobs } from "@/utils";
import "./about.css";

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
