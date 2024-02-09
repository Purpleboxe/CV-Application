import { useState, useCallback } from "react";
import { nanoid } from "nanoid";
import html2canvas from "html2canvas";

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
    WorkExperience: [],
  });

  const generalInformationChange = useCallback((e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      GeneralInformation: {
        ...prev.GeneralInformation,
        [name]: value,
      },
    }));
  }, []);

  const submitInformation = useCallback((e, type) => {
    e.preventDefault();
    const fieldset = e.target.closest("form");
    const newData = [...fieldset.querySelectorAll("input, textarea")]
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
  }, []);

  const deleteInformation = useCallback((id, type) => {
    setData((prev) => ({
      ...prev,
      [type]: prev[type].filter((item) => item.id !== id),
    }));
  }, []);

  const editInformation = useCallback(
    (e, id, type) => {
      e.preventDefault();
      const fieldset = e.target.closest("form");
      const updatedData = data[type].map((item) => {
        if (item.id === id) {
          return {
            ...item,
            ...[...fieldset.querySelectorAll("input, textarea")].reduce(
              (obj, field) => {
                obj[field.name] = field.value;
                return obj;
              },
              {}
            ),
          };
        }
        return item;
      });
      setData((prev) => ({
        ...prev,
        [type]: updatedData,
      }));
    },
    [data]
  );

  const handleDownload = useCallback(() => {
    const resumeDiv = document.querySelector(".Resume");
    html2canvas(resumeDiv).then((canvas) => {
      const url = canvas.toDataURL("image/png");
      const printWindow = window.open("");
      printWindow.document.write(
        '<img src="' + url + '" style="width:100%;" />'
      );
      printWindow.document.close();
      printWindow.onload = () => {
        printWindow.document.title = "Resume";
        printWindow.print();
      };
    });
  }, []);

  return (
    <div id="App">
      <Sidebar
        generalInformationChange={generalInformationChange}
        submitInformation={submitInformation}
        deleteInformation={deleteInformation}
        editInformation={editInformation}
        data={data}
      />
      <Preview data={data} />
      <div className="btn-container">
        <button className="btn-settings" onClick={handleDownload}>
          <i className="fa-solid fa-download"></i>
        </button>
      </div>
    </div>
  );
}

export default App;
