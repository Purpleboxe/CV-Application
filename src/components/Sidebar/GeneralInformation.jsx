import accountSvg from "../../assets/account.svg";

function GeneralInformation(props) {
  const { change } = props;

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
            required
          />
        </label>
      </fieldset>
    </form>
  );
}

export default GeneralInformation;
