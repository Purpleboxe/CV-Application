import { useState } from "react";
import briefcaseSvg from "../../assets/briefcase.svg";

function WorkExperience(props) {
  const { change, deleteInfo, editInfo, data } = props;

  const [isFormOpen, setFormOpen] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const currentEditItem = (id) => {
    return data.find((i) => i.id === id);
  };

  const company = data.map((i) => (
    <div className="company info" key={i.id}>
      <div className="companyText infoText">{i.company}</div>
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
            deleteInfo(i.id, "WorkExperience");
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
      change(e, "WorkExperience");
    } else if (editItemId !== null) {
      editInfo(e, editItemId, "WorkExperience");
    }
    setFormOpen(false);
    setEditItemId(null);
  };

  const openForm = () => {
    setFormOpen(true);
    setEditItemId(null);
  };

  return (
    <form className="workExperience">
      <div className="formHeader">
        <img src={briefcaseSvg} alt="Work" />
        <h2>Work Experience</h2>
      </div>
      <div className="workInformation experience">
        {isFormOpen ? (
          <div>
            <fieldset className="fieldset">
              <label>
                <span>Company Name</span>
                <input
                  type="text"
                  name="company"
                  className="formInput"
                  placeholder="Enter company name"
                  maxLength={50}
                  defaultValue={currentEditItem(editItemId)?.company}
                  required
                />
              </label>
              <label>
                <span>Position</span>
                <input
                  type="text"
                  name="position"
                  className="formInput"
                  placeholder="Enter position name"
                  maxLength={50}
                  defaultValue={currentEditItem(editItemId)?.position}
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
              <label>
                <span>Description</span>
                <textarea
                  type="text"
                  name="description"
                  className="formInput"
                  placeholder="Enter description"
                  maxLength={150}
                  defaultValue={currentEditItem(editItemId)?.description}
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
            <div className="companies information">{company}</div>
            <button className="btn" onClick={openForm}>
              Add +
            </button>
          </>
        )}
        <div></div>
      </div>
    </form>
  );
}

export default WorkExperience;
