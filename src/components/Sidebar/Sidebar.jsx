import "../../styles/Sidebar.css";

import GeneralInformation from "./GeneralInformation.jsx";
import EducationalExperience from "./EducationalExperience.jsx";
import WorkExperience from "./WorkExperience.jsx";

function Sidebar(props) {
  const {
    generalInformationChange,
    submitInformation,
    deleteInformation,
    editInformation,
    data,
  } = props;

  return (
    <div className="Sidebar">
      <header className="header">CV Application</header>
      <div className="description">
        Create and customize your resume effortlessly with this CV Application!
      </div>

      <GeneralInformation change={generalInformationChange} data={data} />
      <EducationalExperience
        change={submitInformation}
        deleteInfo={deleteInformation}
        editInfo={editInformation}
        data={data.EducationalExperience}
      />
      <WorkExperience
        change={submitInformation}
        deleteInfo={deleteInformation}
        editInfo={editInformation}
        data={data.WorkExperience}
      />
    </div>
  );
}

export default Sidebar;
