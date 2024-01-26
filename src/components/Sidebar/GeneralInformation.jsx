import accountSvg from "../../assets/account.svg";

function GeneralInformation(props) {
  const { change, data } = props;

  return (
    <form className="generalInformation">
      <div className="formHeader">
        <img src={accountSvg} alt="General" />
        <h1>General Information</h1>
      </div>

      <fieldset className="fieldset">
        <label>
          <span>Full Name</span>
          <input
            type="text"
            name="fullName"
            className="formInput"
            placeholder="Enter full name"
            onChange={change}
            maxLength={25}
            value={data.GeneralInformation.fullName}
            required
          />
        </label>
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            className="formInput"
            placeholder="Enter email"
            onChange={change}
            maxLength={80}
            value={data.GeneralInformation.email}
            required
          />
        </label>
        <label>
          <span>Phone Number</span>
          <input
            type="tel"
            name="phoneNumber"
            className="formInput"
            placeholder="Enter phone number"
            onChange={change}
            maxLength={15}
            value={data.GeneralInformation.phoneNumber}
            required
          />
        </label>
        <label>
          <span>Location</span>
          <input
            type="text"
            name="location"
            className="formInput"
            placeholder="Enter location"
            onChange={change}
            maxLength={30}
            value={data.GeneralInformation.location}
            required
          />
        </label>
      </fieldset>
    </form>
  );
}

export default GeneralInformation;
