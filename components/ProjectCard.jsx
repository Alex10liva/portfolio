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
      {props.github || props.url || props.download ? (
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

          {props.download ? (
            <div className="website">
              <a href={props.download} target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="21"
                  viewBox="0 0 11 14"
                  fill="none"
                >
                  <path
                    d="M8 3.62305C8.08887 3.62305 8.2264 3.63363 8.4126 3.65479C8.60303 3.67171 8.81885 3.71826 9.06006 3.79443C9.30127 3.87061 9.54671 3.99333 9.79639 4.1626C10.0461 4.33187 10.2767 4.56885 10.4883 4.87354C10.4671 4.88623 10.3867 4.94336 10.2471 5.04492C10.1117 5.14648 9.95719 5.2946 9.78369 5.48926C9.61019 5.67969 9.45785 5.92301 9.32666 6.21924C9.19971 6.51123 9.13623 6.86035 9.13623 7.2666C9.13623 7.7321 9.21663 8.12565 9.37744 8.44727C9.54248 8.76888 9.73291 9.02913 9.94873 9.22803C10.1688 9.42692 10.3634 9.57292 10.5327 9.66602C10.7062 9.75488 10.7993 9.80143 10.812 9.80566C10.8078 9.82259 10.776 9.91781 10.7168 10.0913C10.6576 10.2606 10.5645 10.4806 10.4375 10.7515C10.3148 11.0181 10.154 11.2974 9.95508 11.5894C9.77311 11.8475 9.5848 12.0951 9.39014 12.332C9.19971 12.569 8.99023 12.7616 8.76172 12.9097C8.53743 13.062 8.28353 13.1382 8 13.1382C7.78418 13.1382 7.6001 13.1128 7.44775 13.062C7.29541 13.0112 7.14941 12.952 7.00977 12.8843C6.87435 12.8208 6.72412 12.7637 6.55908 12.7129C6.39404 12.6621 6.1888 12.6367 5.94336 12.6367C5.62174 12.6367 5.35303 12.679 5.13721 12.7637C4.92562 12.8525 4.72461 12.9393 4.53418 13.0239C4.34375 13.1086 4.11947 13.1509 3.86133 13.1509C3.46777 13.1509 3.12077 12.9943 2.82031 12.6812C2.52409 12.368 2.2194 11.9935 1.90625 11.5576C1.66504 11.2106 1.44499 10.8107 1.24609 10.3579C1.0472 9.90511 0.888509 9.4248 0.77002 8.91699C0.65153 8.40918 0.592285 7.90137 0.592285 7.39355C0.592285 6.58105 0.746745 5.89762 1.05566 5.34326C1.36458 4.7889 1.76025 4.36995 2.24268 4.08643C2.7251 3.8029 3.22656 3.66113 3.74707 3.66113C4.02214 3.66113 4.28027 3.70557 4.52148 3.79443C4.76693 3.8833 4.99544 3.97428 5.20703 4.06738C5.41862 4.15625 5.61117 4.20068 5.78467 4.20068C5.94971 4.20068 6.14437 4.15413 6.36865 4.06104C6.59294 3.9637 6.84049 3.86637 7.11133 3.76904C7.38639 3.67171 7.68262 3.62305 8 3.62305ZM7.55566 2.59473C7.34408 2.85286 7.07747 3.06657 6.75586 3.23584C6.43848 3.40511 6.13802 3.48975 5.85449 3.48975C5.79525 3.48975 5.73812 3.4834 5.68311 3.4707C5.67887 3.45378 5.67253 3.42415 5.66406 3.38184C5.65983 3.33952 5.65771 3.29297 5.65771 3.24219C5.65771 2.92057 5.72754 2.60742 5.86719 2.30273C6.00684 1.99805 6.16764 1.74414 6.34961 1.54102C6.57389 1.27441 6.85742 1.05225 7.2002 0.874512C7.5472 0.696777 7.87939 0.601562 8.19678 0.588867C8.20947 0.660807 8.21582 0.743327 8.21582 0.836426C8.21582 1.16227 8.15446 1.47965 8.03174 1.78857C7.90902 2.09326 7.75033 2.36198 7.55566 2.59473Z"
                    fill="#EFEFEF"
                  />
                </svg>
                App Store
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
