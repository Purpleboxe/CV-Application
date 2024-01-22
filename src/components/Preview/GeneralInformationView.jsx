function GeneralInformationView(props) {
  const { data } = props;

  return (
    <section className="GeneralInformationView">
      <h1>{data.fullName}</h1>
    </section>
  );
}

export default GeneralInformationView;
