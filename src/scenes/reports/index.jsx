// // import React, { useState, useEffect } from 'react';
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Box, useTheme, Button, TextField } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme"; // Assuming this holds theme tokens
// import Header from "../../components/Header";
// import { CSVLink } from 'react-csv';
// import jsPDF from 'jspdf';
// import 'jspdf-autotable'; // Import the jsPDF-AutoTable plugin

// const Reports = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [reports, setReports] = useState([]);
//   const [fromDate, setFromDate] = useState('');
//   const [toDate, setToDate] = useState('');

//   const fetchReports = async () => {
//     try {
//       const response = await axios.get(`https://newbackend-jb1f.onrender.com/api/reports?fromDate=${fromDate}&toDate=${toDate}`);
//       const filteredReports = response.data.filter(report => {
//         const reportDate = new Date(report.date);
//         return reportDate >= new Date(fromDate) && reportDate <= new Date(toDate);
//       });
//       const reportsWithId = filteredReports.map((report, index) => ({
//         id: index + 1, 
//         ...report,
//       }));
//       setReports(reportsWithId);
//     } catch (error) {
//       console.error('Error fetching reports:', error);
//     }
//   }; 
  

//   const columns = [
//     {
//       field: "License Plate",
//       headerName: "License Plate",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "Make",
//       headerName: "Make",
//       type: "number",
//       headerAlign: "left",
//       align: "left",
//     },
//     {
//       field: "VIN",
//       headerName: "VIN",
//       flex: 1,
//     },
//     {
//       field: "Model",
//       headerName: "Model",
//       flex: 1,
//     },
//     {
//       field: "Type",
//       headerName: "Type",
//       flex: 1,
//     },
//     {
//       field: "Date",
//       headerName: "Date",
//       flex: 1,
//     },
//     {
//       field: "Miles Driven",
//       headerName: "Miles Driven",
//       flex: 1,
//     },
//   ];

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     const columns = ["License Plate", "Make", "VIN", "Model", "Type", "Date", "Miles Driven"];
//     const rows = reports.map(report => [
//       report.licenseType,
//       report.make,
//       report.vin,
//       report.model,
//       report.type,
//       report.date,
//       report.milesDriven
//     ]);

//     const tableOptions = {
//       startY: 10,
//       margin: {
//         top: 10,
//         left: 10,
//       },
//       autoWidth: true,
//     };

//     doc.autoTable(columns, rows, tableOptions);
//     doc.save("reports.pdf");
//   };

//   return (
//     <Box m="20px">
//       <Box display="flex" justifyContent="space-between">
//         <Header title="Reports" subtitle="Reports" />
//         <Box display="flex">
//           <Box mr={2}>
//             <TextField
//               type="date"
//               label="From Date"
//               value={fromDate}
//               onChange={(e) => setFromDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Box>
//           <Box mr={2}>
//             <TextField
//               type="date"
//               label="To Date"
//               value={toDate}
//               onChange={(e) => setToDate(e.target.value)}
//               InputLabelProps={{ shrink: true }}
//             />
//           </Box>
//           <Box>
//             <Button variant="contained" color="primary" onClick={fetchReports}>Generate Reports</Button>
//           </Box>
//           <Box ml={2}>
//             <CSVLink data={reports} filename={"reports.csv"}>
//               <Button variant="contained" color="primary">Download CSV</Button>
//             </CSVLink>
//           </Box>
//           <Box ml={2}>
//             <Button variant="contained" color="primary" onClick={downloadPDF}>Download PDF</Button>
//           </Box>
//         </Box>
//       </Box>
//       <Box
//         height="75vh"
//         sx={{
//           "& .MuiDataGrid-root": {
//             border: "none",
//           },
//           "& .MuiDataGrid-cell": {
//             borderBottom: "none",
//           },
//           "& .name-column--cell": {
//             color: colors.greenAccent[300],
//           },
//           "& .MuiDataGrid-columnHeaders": {
//             backgroundColor: colors.blueAccent[700],
//             borderBottom: "none",
//           },
//           "& .MuiDataGrid-virtualScroller": {
//             backgroundColor: colors.primary[400],
//           },
//         }}
//       >
//         <DataGrid
//           rows={reports}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Reports;

import React, { useState } from 'react';
import axios from 'axios';
import { Box, useTheme, Button, TextField } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme"; // Assuming this holds theme tokens
import Header from "../../components/Header";
import { CSVLink } from 'react-csv';
import jsPDF from 'jspdf';
import 'jspdf-autotable'; // Import the jsPDF-AutoTable plugin

const Reports = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [reports, setReports] = useState([]);
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const fetchReports = async () => {
    try {
      const response = await axios.get(`https://newbackend-jb1f.onrender.com/api/reports?fromDate=${fromDate}&toDate=${toDate}`);
      setReports(response.data); // Assuming the response data matches the expected structure
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  }; 

  const columns = [
    {
      field: "License Plate",
      headerName: "License Plate",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Make",
      headerName: "Make",
      flex: 1,
    },
    {
      field: "VIN",
      headerName: "VIN",
      flex: 1,
    },
    {
      field: "Model",
      headerName: "Model",
      flex: 1,
    },
    {
      field: "Type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "Date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "Miles Driven",
      headerName: "Miles Driven",
      flex: 1,
    },
  ];

  const downloadPDF = () => {
    const doc = new jsPDF();
    const columns = ["License Plate", "Make", "VIN", "Model", "Type", "Date", "Miles Driven"];
    const rows = reports.map(report => [
      report["License Plate"],
      report["Make"],
      report["VIN"],
      report["Model"],
      report["Type"],
      report["Date"],
      report["Miles Driven"]
    ]);

    const tableOptions = {
      startY: 10,
      margin: {
        top: 10,
        left: 10,
      },
      autoWidth: true,
    };

    doc.autoTable(columns, rows, tableOptions);
    doc.save("reports.pdf");
  };

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Reports" subtitle="Reports" />
        <Box display="flex">
          <Box mr={2}>
            <TextField
              type="date"
              label="From Date"
              value={fromDate}
              onChange={(e) => setFromDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box mr={2}>
            <TextField
              type="date"
              label="To Date"
              value={toDate}
              onChange={(e) => setToDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />
          </Box>
          <Box>
            <Button variant="contained" color="primary" onClick={fetchReports}>Generate Reports</Button>
          </Box>
          <Box ml={2}>
            <CSVLink data={reports} filename={"reports.csv"}>
              <Button variant="contained" color="primary">Download CSV</Button>
            </CSVLink>
          </Box>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={downloadPDF}>Download PDF</Button>
          </Box>
        </Box>
      </Box>
      <Box
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
        }}
      >
        <DataGrid
          rows={reports}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Reports;
