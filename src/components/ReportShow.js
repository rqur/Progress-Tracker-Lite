import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import { getReport } from "../store/reports";

const ReportShow = () => {
  const dispatch = useDispatch();
  const { reportId } = useParams();
  const report = useSelector((state) =>
    state.reports ? state.reports[reportId] : null
  ); // populate from Redux store

  useEffect(() => {
    dispatch(getReport(reportId));
  }, [dispatch, reportId]);

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    <section>
      <table id="report-table">
        <thead>
          <tr>
            <th colSpan="2">Report #{reportId}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="attribute">Understanding:</td>
            <td className="value">{report?.understanding}</td>
          </tr>
          <tr>
            <td className="attribute">Improvement:</td>
            <td className="value">{report?.improvement}</td>
          </tr>
        </tbody>
      </table>
      <Link className="back-button" to="/">
        Back to Report Index
      </Link>
    </section>
  );
};

export default ReportShow;
