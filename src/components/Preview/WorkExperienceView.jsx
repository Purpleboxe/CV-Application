function WorkExperience(props) {
  const { data } = props;

  const company = data.map((i) => (
    <div className="workView view" key={i.id}>
      <div className="workDates dates-preview">
        {i.startDate} - {i.endDate}
        <div className="workLocation location">{i.location}</div>
      </div>
      <div className="workInfo info-preview">
        <div className="workName name">{i.company}</div>
        <div className="workPosition">{i.position}</div>
      </div>
    </div>
  ));

  if (data.length > 0) {
    return (
      <section className="WorkExperienceView">
        <h2 className="preview-header">Work Experience View</h2>
        <div className="workInfo preview-info">{company}</div>
      </section>
    );
  } else {
    return null;
  }
}

export default WorkExperience;
