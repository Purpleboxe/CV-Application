function EducationalExperienceView(props) {
  const { data } = props;

  const school = data.map((i) => (
    <div className="schoolView" key={i.id}>
      <div className="schoolInfo">
        <div className="schoolName">{i.school}</div>
      </div>
    </div>
  ));

  return (
    <section className="EducationalExperienceView">
      <h2 className="preview-header">Educational Experience</h2>
      <div className="educInfo">{data.length ? school : null}</div>
    </section>
  );
}

export default EducationalExperienceView;
