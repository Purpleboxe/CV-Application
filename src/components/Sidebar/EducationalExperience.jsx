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
    <div className="school info" key={i.id}>
      <div className="schoolText infoText">{i.school}</div>
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
        <h2>Educational Experience</h2>
      </div>
      <div className="educationalInformation experience">
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
              <label>
                <span>Degree</span>
                <input
                  type="text"
                  name="degree"
                  className="formInput"
                  placeholder="Enter degree"
                  maxLength={50}
                  defaultValue={currentEditItem(editItemId)?.degree}
                  required
                />
              </label>
              <div className="dates">
                <label>
                  <span>Start Date</span>
                  <input
                    type="text"
                    name="startDate"
                    className="formInput"
                    placeholder="Enter start date"
                    maxLength={20}
                    defaultValue={currentEditItem(editItemId)?.startDate}
                    required
                  />
                </label>
                <label>
                  <span>End Date</span>
                  <input
                    type="text"
                    name="endDate"
                    className="formInput"
                    placeholder="Enter end date"
                    maxLength={20}
                    defaultValue={currentEditItem(editItemId)?.endDate}
                    required
                  />
                </label>
              </div>
              <label>
                <span>Location</span>
                <input
                  type="text"
                  name="location"
                  className="formInput"
                  placeholder="Enter location"
                  maxLength={30}
                  defaultValue={currentEditItem(editItemId)?.location}
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
            <div className="schools information">{school}</div>
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
