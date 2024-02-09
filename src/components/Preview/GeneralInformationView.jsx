function GeneralInformationView(props) {
  const { data } = props;

  return (
    <section className="GeneralInformationView">
      <h1>{data.fullName}</h1>
      <div className="contactInformation">
        <div>
          {data.email === "" ? (
            ""
          ) : (
            <>
              <i className="fa-regular fa-envelope"></i>
              {data.email}
            </>
          )}
        </div>
        <div>
          {data.phoneNumber === "" ? (
            ""
          ) : (
            <>
              <i className="fa-solid fa-phone"></i>
              {data.phoneNumber}
            </>
          )}
        </div>
        <div>
          {data.location === "" ? (
            ""
          ) : (
            <>
              <i className="fa-solid fa-location-dot"></i>
              {data.location}
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default GeneralInformationView;
