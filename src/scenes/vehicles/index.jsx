import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Vehicles = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await axios.get('https://newbackend-jb1f.onrender.com/api/vehicles');
        const vehiclesWithId = response.data.map((vehicle, index) => ({
          id: index + 1, // Assigning a unique id to each vehicle
          ...vehicle,
        }));
        setVehicles(vehiclesWithId);
      } catch (error) {
        console.error('Error fetching vehicles:', error);
      }
    };

    fetchVehicles();
  }, []);

  const columns = [
    {
      field: "licenseType",
      headerName: "License Type",
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
      headerName: "Vin",
      flex: 1,
    },
    {
      field: "model",
      headerName: "Model",
      flex: 1,
    },
    {
      field: "milesDriven",
      headerName: "Miles Driven",
      flex: 1,
    },
    {
      field: "type",
      headerName: "Type",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="Vehicles" subtitle="Managing the vehicles" />
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
          rows={vehicles}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Vehicles;
