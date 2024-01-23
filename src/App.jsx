import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Preview from "./components/Preview/Preview.jsx";

function App() {
  const [data, setData] = useState({
    GeneralInformation: {
      fullName: "",
      email: "",
      phoneNumber: "",
      location: "",
    },
  });

  const generalInformationChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      GeneralInformation: {
        ...prev.GeneralInformation,
        [name]: value,
      },
    }));
  };

  return (
    <div id="App">
      <Sidebar generalInformationChange={generalInformationChange} />
      <Preview data={data} />
    </div>
  );
}

export default App;
