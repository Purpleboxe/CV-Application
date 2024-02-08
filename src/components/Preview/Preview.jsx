import "../../styles/Preview.css";

import GeneralInformationView from "./GeneralInformationView";
import EducationalExperienceView from "./EducationalExperienceView";
import WorkExperienceView from "./WorkExperienceView";

function Preview(props) {
  const { data } = props;

  return (
    <div className="Preview">
      <div className="Resume">
        <GeneralInformationView data={data.GeneralInformation} />
        <EducationalExperienceView data={data.EducationalExperience} />
        <WorkExperienceView data={data.WorkExperience} />
      </div>
    </div>
  );
}

export default Preview;
