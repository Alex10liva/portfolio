import Image from "next/image";
import { brandsBG, brandsColor, brands } from "@/utils";

function ProjectCard(props) {
  return (
    <article className="project-card">
      <Image
        alt={props.title}
        src={props.image}
        width={200}
        height={220}
        unoptimized={true}
        style={{ width: "100%", height: "auto" }}
      />
      <div className="content">
        <div className="tech">
          {props.tech.map((tech) => (
            <span
              key={tech}
              style={{
                backgroundColor: `${brandsBG[tech]}`,
                color: `${brandsColor[tech]}`,
              }}
            >
              {/* {brands[tech]} */}
              {tech}
            </span>
          ))}
        </div>

        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <p className="note">{props.note}</p>
      </div>
      {props.github || props.url ? (
        <footer className="project-footer">
          {props.github ? (
            <div className="github">
              <a href={props.github} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <g>
                    <path
                      d="M17.5 0C7.83708 0 0 7.83563 0 17.5C0 25.2321 5.01375 31.7917 11.9685 34.106C12.8421 34.2679 13.125 33.7254 13.125 33.2646V30.0067C8.25708 31.0654 7.24354 27.9417 7.24354 27.9417C6.44729 25.919 5.29958 25.3808 5.29958 25.3808C3.71146 24.2944 5.42063 24.3177 5.42063 24.3177C7.17792 24.4402 8.1025 26.1217 8.1025 26.1217C9.66292 28.7963 12.196 28.0233 13.195 27.5756C13.351 26.4454 13.8046 25.6725 14.3063 25.2365C10.4198 24.7917 6.33354 23.291 6.33354 16.5871C6.33354 14.6752 7.0175 13.1148 8.13604 11.8898C7.95521 11.4479 7.35583 9.66729 8.30667 7.25813C8.30667 7.25813 9.77667 6.78854 13.1206 9.05187C14.5163 8.66396 16.0125 8.47 17.5 8.46271C18.9875 8.47 20.4852 8.66396 21.8837 9.05187C25.2248 6.78854 26.6919 7.25813 26.6919 7.25813C27.6442 9.66875 27.0448 11.4494 26.864 11.8898C27.9869 13.1148 28.665 14.6767 28.665 16.5871C28.665 23.3085 24.5715 24.7888 20.6748 25.2219C21.3019 25.7644 21.875 26.829 21.875 28.4623V33.2646C21.875 33.7298 22.155 34.2767 23.0431 34.1046C29.9921 31.7873 35 25.2292 35 17.5C35 7.83563 27.1644 0 17.5 0Z"
                      fill="#efefef"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_24_107">
                      <rect width="35" height="35" fill="#151515" />
                    </clipPath>
                  </defs>
                </svg>
                Code
              </a>
            </div>
          ) : (
            <></>
          )}

          {props.url ? (
            <div className="website">
              <a href={props.url} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M14.9129 25C15.8205 25 16.4547 24.2593 16.8917 23.1233L24.6821 2.75843C24.8883 2.23216 25 1.75856 25 1.36339C25 0.523431 24.4745 0 23.6346 0C23.2374 0 22.7638 0.111727 22.2397 0.31581L1.78936 8.14774C0.769737 8.53417 0 9.16837 0 10.0858C0 11.2127 0.841538 11.6299 2.00075 11.983L8.12488 13.8519C8.9487 14.1094 9.43122 14.0922 10.0071 13.5645L23.149 1.37803C23.3132 1.22781 23.5095 1.2493 23.6339 1.36622C23.7563 1.49071 23.7723 1.68699 23.62 1.85115L11.4754 15.0202C10.9681 15.5618 10.9263 16.0633 11.1698 16.8971L12.9943 22.9077C13.3571 24.1153 13.7763 25 14.9129 25Z"
                    fill="#efefef"
                  />
                </svg>
                Website
              </a>
            </div>
          ) : (
            <></>
          )}
        </footer>
      ) : (
        <></>
      )}
    </article>
  );
}

export default ProjectCard;
