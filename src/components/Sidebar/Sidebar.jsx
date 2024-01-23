import "../../styles/Sidebar.css";

import GeneralInformation from "./GeneralInformation.jsx";

function Sidebar(props) {
  const { generalInformationChange } = props;

  return (
    <div className="Sidebar">
      <header className="header">CV Application</header>
      <div className="description">
        Create and customize your resume effortlessly with this CV Application!
      </div>

      <GeneralInformation change={generalInformationChange} />
    </div>
  );
}

export default Sidebar;
