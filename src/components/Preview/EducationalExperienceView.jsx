function EducationalExperienceView(props) {
  const { data } = props;

  const school = data.map((i) => (
    <div className="schoolView view" key={i.id}>
      <div className="schoolDates dates-preview">
        {i.startDate} - {i.endDate}
        <div className="schoolLocation location">{i.location}</div>
      </div>
      <div className="schoolInfo info-preview">
        <div className="schoolName name">{i.school}</div>
        <div className="schoolDegree">{i.degree}</div>
      </div>
    </div>
  ));

  if (data.length > 0) {
    return (
      <section className="EducationalExperienceView">
        <h2 className="preview-header">Educational Experience</h2>
        <div className="educInfo preview-info">{school}</div>
      </section>
    );
  } else {
    return null;
  }
}

export default EducationalExperienceView;
