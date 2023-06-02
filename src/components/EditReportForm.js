import { useParams } from "react-router-dom";
import { getReport } from "../store/reports";
import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";

import ReportForm from "./ReportForm";

const EditReportForm = () => {
  const { reportId } = useParams();
  const report = useSelector((state) =>
    state.reports ? state.reports[reportId] : null
  ); // populate from Redux store

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReport(reportId));
  }, [dispatch, reportId]);

  if (!report) return <></>;

  /* **DO NOT CHANGE THE RETURN VALUE** */
  return (
    Object.keys(report).length > 1 && (
      <>
        <ReportForm report={report} formType="Update Report" />
      </>
    )
  );
};

export default EditReportForm;
