import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Drivers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/drivers');
        const driversWithId = response.data.map((driver, index) => ({
          id: index + 1, // Assigning a unique id to each driver
          ...driver,
        }));
        setDrivers(driversWithId);
      } catch (error) {
        console.error('Error fetching drivers:', error);
      }
    };

    fetchDrivers();
  }, []);

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone No.",
      flex: 1,
    },
    {
      field: "vehicles",
      headerName: "Vehicle ID",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="Drivers"
        subtitle="List of Drivers"
      />
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
          // "& .MuiDataGrid-footerContainer": {
          //   borderTop: "none",
          //   backgroundColor: colors.blueAccent[700],
          // },
          // "& .MuiCheckbox-root": {
          //   color: `${colors.greenAccent[200]} !important`,
          // },
          // "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          //   color: `${colors.grey[100]} !important`,
          // },
        }}
      >
        <DataGrid
          rows={drivers}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Drivers;
