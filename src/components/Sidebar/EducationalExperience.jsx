import { useState } from "react";
import schoolSvg from "../../assets/school.svg";

function EducationalExperience(props) {
  const { change, deleteInfo, editInfo, data } = props;

  const [isFormOpen, setFormOpen] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const currentEditItem = (id) => {
    return data.find((i) => i.id === id);
  };

  const school = data.map((i) => (
    <div className="school" key={i.id}>
      <div className="schoolText">{i.school}</div>
      <div className="btns">
        <button
          className="btn-icon"
          onClick={(e) => {
            e.preventDefault();
            setFormOpen(true);
            setEditItemId(i.id);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="btn-icon"
          onClick={(e) => {
            e.preventDefault();
            deleteInfo(i.id, "EducationalExperience");
          }}
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  ));

  const submit = (e) => {
    e.preventDefault();
    if (editItemId === null) {
      change(e, "EducationalExperience");
    } else if (editItemId !== null) {
      editInfo(e, editItemId, "EducationalExperience");
    }
    setFormOpen(false);
    setEditItemId(null);
  };

  const openForm = () => {
    setFormOpen(true);
    setEditItemId(null);
  };

  return (
    <form className="educationalExperience">
      <div className="formHeader">
        <img src={schoolSvg} alt="Education" />
        <h1>Educational Experience</h1>
      </div>
      <div className="educationalInformation">
        {isFormOpen ? (
          <div>
            <fieldset className="fieldset">
              <label>
                <span>School</span>
                <input
                  type="text"
                  name="school"
                  className="formInput"
                  placeholder="Enter school"
                  maxLength={50}
                  defaultValue={currentEditItem(editItemId)?.school}
                  required
                />
              </label>
            </fieldset>
            <div className="btns">
              <button className="btn" onClick={submit}>
                Submit
              </button>
              <button className="btn" onClick={() => setFormOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <>
            <div className="schools">{school}</div>
            <button className="btn" onClick={openForm}>
              Add +
            </button>
          </>
        )}
      </div>
    </form>
  );
}

export default EducationalExperience;
