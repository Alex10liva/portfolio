function JobCard(props) {
  return (
    <div className={props.className}>
      <div className="subtitle">
        <a
          href={props.companyUrl}
          target="_blank"
          style={{ backgroundColor: `${props.color}` }}
        >
          {props.company}
        </a>
        <span>{props.date}</span>
      </div>
      <h2>{props.title}</h2>
      {props.description.map((item, index) => (
        <p key={index}>— &nbsp; {item}</p>
      ))}
    </div>
  );
}

export default JobCard;
