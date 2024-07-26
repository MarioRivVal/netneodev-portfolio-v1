/* eslint-disable react/prop-types */

const ResumeItem = ({ item }) => {
  const { year, subject, school, img, description } = item;

  return (
    <div className="resume-box">
      <p>{year}</p>
      <img src={`img/resume/${img}.png`} alt={`${school} logo`} />
      <div className="resume-details">
        <p>{subject}</p>
        <p>{school}</p>
      </div>
      <p className="resume-description">{description}</p>
    </div>
  );
};

export default ResumeItem;
