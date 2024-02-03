import { useState } from "react";
import { nanoid } from "nanoid";

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
    EducationalExperience: [],
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

  const submitInformation = (e, type) => {
    e.preventDefault();

    const fieldset = e.target.closest("form");

    const newData = [...fieldset.querySelectorAll("input")]
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((obj, item) => {
        return { ...obj, ...item };
      }, {});

    setData((prev) => ({
      ...prev,
      [type]: [
        ...prev[type],
        {
          ...newData,
          id: nanoid(),
        },
      ],
    }));
  };

  const deleteInformation = (id, type) => {
    setData((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item.id !== id),
    }));
  };

  return (
    <div id="App">
      <Sidebar
        generalInformationChange={generalInformationChange}
        submitInformation={submitInformation}
        deleteInformation={deleteInformation}
        data={data}
      />
      <Preview data={data} />
    </div>
  );
}

export default App;
