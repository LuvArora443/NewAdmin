// // // import React, { useState, useEffect } from 'react';
// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Box, useTheme, Button, TextField } from "@mui/material";
// // import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// // import { tokens } from "../../theme"; // Assuming this holds theme tokens
// // import Header from "../../components/Header";
// // import { CSVLink } from 'react-csv';
// // import jsPDF from 'jspdf';
// // import 'jspdf-autotable'; // Import the jsPDF-AutoTable plugin

// // const Reports = () => {
// //   const theme = useTheme();
// //   const colors = tokens(theme.palette.mode);
// //   const [reports, setReports] = useState([]);
// //   const [fromDate, setFromDate] = useState('');
// //   const [toDate, setToDate] = useState('');

// //   const fetchReports = async () => {
// //     try {
// //       const response = await axios.get(`https://newbackend-jb1f.onrender.com/api/reports?fromDate=${fromDate}&toDate=${toDate}`);
// //       const filteredReports = response.data.filter(report => {
// //         const reportDate = new Date(report.date);
// //         return reportDate >= new Date(fromDate) && reportDate <= new Date(toDate);
// //       });
// //       const reportsWithId = filteredReports.map((report, index) => ({
// //         id: index + 1, 
// //         ...report,
// //       }));
// //       setReports(reportsWithId);
// //     } catch (error) {
// //       console.error('Error fetching reports:', error);
// //     }
// //   }; 
  

// //   const columns = [
// //     {
// //       field: "License Plate",
// //       headerName: "License Plate",
// //       flex: 1,
// //       cellClassName: "name-column--cell",
// //     },
// //     {
// //       field: "Make",
// //       headerName: "Make",
// //       type: "number",
// //       headerAlign: "left",
// //       align: "left",
// //     },
// //     {
// //       field: "VIN",
// //       headerName: "VIN",
// //       flex: 1,
// //     },
// //     {
// //       field: "Model",
// //       headerName: "Model",
// //       flex: 1,
// //     },
// //     {
// //       field: "Type",
// //       headerName: "Type",
// //       flex: 1,
// //     },
// //     {
// //       field: "Date",
// //       headerName: "Date",
// //       flex: 1,
// //     },
// //     {
// //       field: "Miles Driven",
// //       headerName: "Miles Driven",
// //       flex: 1,
// //     },
// //   ];

// //   const downloadPDF = () => {
// //     const doc = new jsPDF();
// //     const columns = ["License Plate", "Make", "VIN", "Model", "Type", "Date", "Miles Driven"];
// //     const rows = reports.map(report => [
// //       report.licenseType,
// //       report.make,
// //       report.vin,
// //       report.model,
// //       report.type,
// //       report.date,
// //       report.milesDriven
// //     ]);

// //     const tableOptions = {
// //       startY: 10,
// //       margin: {
// //         top: 10,
// //         left: 10,
// //       },
// //       autoWidth: true,
// //     };

// //     doc.autoTable(columns, rows, tableOptions);
// //     doc.save("reports.pdf");
// //   };

// //   return (
// //     <Box m="20px">
// //       <Box display="flex" justifyContent="space-between">
// //         <Header title="Reports" subtitle="Reports" />
// //         <Box display="flex">
// //           <Box mr={2}>
// //             <TextField
// //               type="date"
// //               label="From Date"
// //               value={fromDate}
// //               onChange={(e) => setFromDate(e.target.value)}
// //               InputLabelProps={{ shrink: true }}
// //             />
// //           </Box>
// //           <Box mr={2}>
// //             <TextField
// //               type="date"
// //               label="To Date"
// //               value={toDate}
// //               onChange={(e) => setToDate(e.target.value)}
// //               InputLabelProps={{ shrink: true }}
// //             />
// //           </Box>
// //           <Box>
// //             <Button variant="contained" color="primary" onClick={fetchReports}>Generate Reports</Button>
// //           </Box>
// //           <Box ml={2}>
// //             <CSVLink data={reports} filename={"reports.csv"}>
// //               <Button variant="contained" color="primary">Download CSV</Button>
// //             </CSVLink>
// //           </Box>
// //           <Box ml={2}>
// //             <Button variant="contained" color="primary" onClick={downloadPDF}>Download PDF</Button>
// //           </Box>
// //         </Box>
// //       </Box>
// //       <Box
// //         height="75vh"
// //         sx={{
// //           "& .MuiDataGrid-root": {
// //             border: "none",
// //           },
// //           "& .MuiDataGrid-cell": {
// //             borderBottom: "none",
// //           },
// //           "& .name-column--cell": {
// //             color: colors.greenAccent[300],
// //           },
// //           "& .MuiDataGrid-columnHeaders": {
// //             backgroundColor: colors.blueAccent[700],
// //             borderBottom: "none",
// //           },
// //           "& .MuiDataGrid-virtualScroller": {
// //             backgroundColor: colors.primary[400],
// //           },
// //         }}
// //       >
// //         <DataGrid
// //           rows={reports}
// //           columns={columns}
// //           components={{ Toolbar: GridToolbar }}
// //         />
// //       </Box>
// //     </Box>
// //   );
// // };

// // export default Reports;

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
//       flex: 1,
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
//       report["License Plate"],
//       report["Make"],
//       report["VIN"],
//       report["Model"],
//       report["Type"],
//       report["Date"],
//       report["Miles Driven"]
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

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, useTheme, Button, TextField, MenuItem, Menu, Typography } from "@mui/material";
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
  const [anchorEl, setAnchorEl] = useState(null);
  const [reportType, setReportType] = useState('');
  const [reportValue, setReportValue] = useState(null);
  const [frequency, setFrequency] = useState('Daily'); // Default frequency
  const [groupedReports, setGroupedReports] = useState([])
  useEffect(() => {
    const handleGrouping = async () => {
      // Group reports based on frequency
      const groupedData = {};
      reports.forEach(report => {
        const date = new Date(report.date);
        const groupingKey = 
         frequency === 'Monthly'
            ? `${date.getFullYear()}-${date.getMonth() + 1}`
            : `${date.getFullYear()}`;
        groupedData[groupingKey] = groupedData[groupingKey] || {
          milesDriven: 0,
          energyConsumption: 0,
          cost: 0,
        };
        groupedData[groupingKey].milesDriven += report.milesDriven;
        groupedData[groupingKey].energyConsumption += report.milesDriven * 2; // Assuming 2 joules/mile
        groupedData[groupingKey].cost += report.milesDriven * 2 * 2; // Assuming 1 Rs/joule
      });
      setGroupedReports(Object.keys(groupedData).map(key => ({
        id: key, // Required for Data Grid
        key,
        ...groupedData[key],
      })));
    };

    if (reportType && reports.length > 0) {
      handleGrouping();
    }
  }, [reports, frequency, reportType]);

  const handleGenerateReports = async () => {
    fetchReports();
  };

  const fetchReports = async () => {
    try {
      const response = await axios.get(`https://newbackend-jb1f.onrender.com/api/reports?fromDate=${fromDate}&toDate=${toDate}`);
      const filteredReports = response.data.filter(report => {
        const reportDate = new Date(report.date);
        const fromDateObj = new Date(fromDate);
        const toDateObj = new Date(toDate);
        return reportDate >= fromDateObj && reportDate <= toDateObj;
      });
      const reportsWithId = filteredReports.map((report, index) => ({
        id: index + 1,
        ...report,
      }));
      setReports(reportsWithId);
    } catch (error) {
      console.error('Error fetching reports:', error);
    }
  };

  const handleMenuItemClick = async (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleReportType = async (type) => {
    handleClose();
    setReportType(type);
    if (type === 'Total Miles Driven') {
      // Calculate total miles driven
      let totalMiles = 0;
      reports.forEach(report => {
        totalMiles += report.milesDriven;
      });
      setReportValue(totalMiles);
    } else if (type === 'Energy Consumption') {
      // Aggregate energy consumption
      let totalEnergyConsumption = 0;
      reports.forEach(report => {
        // Assuming 5 miles consumes 10 joules of power
        totalEnergyConsumption += report.milesDriven * 2; // 2 joules per mile
      });
      setReportValue(totalEnergyConsumption);
    } else if (type === 'Cost Analysis') {
      // Calculate cost analysis
      let totalCost = 0;
      reports.forEach(report => {
        // Assuming 1 rs per joule
        totalCost += report.milesDriven * 2 *2; // 2 joules per mile
      });
      setReportValue(totalCost);
    }
  };

  const handleFrequencyChange = (event) => {
    setFrequency(event.target.value);
  };

  const columns = [
    {
      field: "licensetype",
      headerName: "License Plate",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "make",
      headerName: "Make",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "vin",
      headerName: "VIN",
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
    {
      field: "milesDriven",
      headerName: "Miles Driven",
      flex: 1,
    },
  ];



  const downloadPDF = () => {
    const doc = new jsPDF();
  
    const columns = [
      "Key",
      "Miles Driven",
      "Energy Consumption",
      "Cost",
    ];
    const rows = groupedReports.map(group => [
      group.key,
      group.milesDriven,
      group.energyConsumption,
      group.cost,
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
    doc.save("report.pdf");
  };
  
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between">
        <Header title="Reports" subtitle="Reports" />
        <Box display="flex" alignItems="center">
          <Box>
            <CSVLink data={reports} filename={"reports.csv"}>
              <Button variant="contained" color="primary">Generate CSV</Button>
            </CSVLink>
          </Box>
          <Box ml={2}>
            <Button variant="contained" color="primary" onClick={downloadPDF}>Generate PDF</Button>
          </Box>

        </Box>
      </Box>
      <Box display="flex" justifyContent="flex-start" marginLeft="2px" alignItems="center" mt={2}>
        <Box>
          <TextField
            type="date"
            label="From Date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <Box>
          <TextField
            type="date"
            label="To Date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
          />
        </Box>
        <Box ml={2}>
          <Button variant="contained" color="primary" onClick={handleGenerateReports}>Generate Reports</Button>
        </Box>
        <Box ml={2}>
            <Button variant="contained" color="primary" onClick={handleMenuItemClick}>
              {reportType ? reportType : 'Reports'}
            </Button>
            <Menu
              id="reports-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={() => handleReportType('Total Miles Driven')}>Total Miles Driven</MenuItem>
              <MenuItem onClick={() => handleReportType('Energy Consumption')}>Energy Consumption</MenuItem>
              <MenuItem onClick={() => handleReportType('Cost Analysis')}>Cost Analysis</MenuItem>
            </Menu>
          </Box>
        <Box ml={2}>
          <TextField
            select
            label="Frequency"
            value={frequency}
            onChange={handleFrequencyChange}
            variant="outlined"
          >
            {['Daily', 'Monthly', 'Yearly'].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Box>
        

      </Box>
      <Box
        height="65vh"
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
      {reportValue !== null && (
        <Typography variant="subtitle1">
          Report Value ({reportType}): {reportValue}
        </Typography>
      )}
    </Box>
  );
};

export default Reports;