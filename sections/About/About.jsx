import JobCard from "../../components/JobCard";
import { jobs } from "@/utils";
import "./about.css";

function About() {
  return (
    <section className="about" id="about-me">
      <div className="content-wrapper">
        <div className="left">
          <h2>About me</h2>
          <p>
            I have a bachelor&apos;s degree in Computer Systems Engineering from
            the Universidad de las Américas Puebla, and I am passionate about
            technology and design. I have experience developing different types
            of applications, and I like to create solutions that captivate
            users.
          </p>
          <p>
            Currently, I am in the Apple Developer Academy program where I work
            with different teams to develop applications for the Apple
            ecosystem. We focus on learning and applying the latest iOS
            development technologies with SwiftUI, focusing on user experience
            and accessibility.
          </p>
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
