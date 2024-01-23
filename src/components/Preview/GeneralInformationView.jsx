import emailSvg from "../../assets/email.svg";
import phoneSvg from "../../assets/phone.svg";
import locationSvg from "../../assets/map-marker.svg";

function GeneralInformationView(props) {
  const { data } = props;

  return (
    <section className="GeneralInformationView">
      <h1>{data.fullName}</h1>
      <div className="contactInformation">
        <div>
          <img src={emailSvg} alt="email" />
          {data.email}
        </div>
        <div>
          <img src={phoneSvg} alt="phone" />
          {data.phoneNumber}
        </div>
        <div>
          <img src={locationSvg} alt="location" />
          {data.location}
        </div>
      </div>
    </section>
  );
}

export default GeneralInformationView;
