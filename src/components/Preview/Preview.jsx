import "../../styles/Preview.css";

import GeneralInformationView from "./GeneralInformationView";

function Preview(props) {
  const { data } = props;

  return (
    <div className="Preview">
      <div className="Resume">
        <GeneralInformationView data={data.GeneralInformation} />
      </div>
    </div>
  );
}

export default Preview;
