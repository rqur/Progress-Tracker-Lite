import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createReport, updateReport } from "../store/reports";

const ReportForm = ({ report, formType }) => {
  console.log("this is my reporrrtt", report);
  const history = useHistory();
  const [understanding, setUnderstanding] = useState(report?.understanding);
  const [improvement, setImprovement] = useState(report?.improvement);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    report = { ...report, understanding, improvement };

    if (formType === "Update Report") {
      const updatedReport = await dispatch(updateReport(report));
      report = updatedReport;
    } else if (formType === "Create Report") {
      const newReport = await dispatch(createReport(report));
      report = newReport; //phase 4
    }

    if (report.errors) {
      setErrors(report.errors);
    } else {
      history.push(`/reports/${report.id}`);
    } //phase 4
  };

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <form onSubmit={handleSubmit}>
      <h2>{formType}</h2>
      <div className="errors">{errors.understanding}</div>
      <label>
        Understanding:
        <input
          type="text"
          value={understanding}
          onChange={(e) => setUnderstanding(e.target.value)}
        />
      </label>
      <div className="errors">{errors.improvement}</div>
      <label>
        Improvement:
        <textarea
          value={improvement}
          onChange={(e) => setImprovement(e.target.value)}
        />
      </label>
      <button type="submit">{formType}</button>
    </form>
  );
};

export default ReportForm;
