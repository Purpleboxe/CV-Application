import { useState } from "react";

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import Preview from "./components/Preview/Preview.jsx";

function App() {
  const [data, setData] = useState({
    GeneralInformation: {
      fullName: "",
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
      <Sidebar
        data={data}
        generalInformationChange={generalInformationChange}
      />
      <Preview data={data} />
    </div>
  );
}

export default App;
