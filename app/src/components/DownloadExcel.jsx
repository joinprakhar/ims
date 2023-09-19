import React from "react";
import * as FileSaver from "file-saver";
import XLSX from "sheetjs-style";

function ExportFile({ dataExcel }) {
  const filetype =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset-UTF-8";
  const fileExtension = ".xlsx";
  const ExportToExcel = async () => {
    const ws = XLSX.utils.json_to_sheet(dataExcel); //json data;
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    console.log(wb);
    const data = new Blob([excelBuffer], { type: filetype });
    console.log(data);
    FileSaver.saveAs(data, "excel" + fileExtension);
  };

  return (
    <>
      <button
        className="btn btn-block btn-success btn-sm"
        onClick={ExportToExcel}
        disabled={dataExcel.length == 0}
      >
        Download
      </button>
    </>
  );
}

export default ExportFile;
