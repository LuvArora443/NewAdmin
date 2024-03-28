import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Schedules = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('https://newbackend-jb1f.onrender.com/api/schedules');
        const schedulesWithId = response.data.map((schedule, index) => ({
          id: index + 1, // Assigning a unique id to each schedule
          ...schedule,
        }));
        setSchedules(schedulesWithId);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
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
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="Schedules"
        subtitle="Schedules made by Drivers"
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

        }}
      >
        <DataGrid
          rows={schedules}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Schedules;
