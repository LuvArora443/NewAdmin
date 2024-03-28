// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Box, useTheme } from "@mui/material";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import Header from "../../components/Header";

// const Chargers = () => {
//   const theme = useTheme();
//   const colors = tokens(theme.palette.mode);
//   const [chargers, setChargers] = useState([]);

//   useEffect(() => {
//     const fetchChargers = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/chargers');
//         const chargersWithId = response.data.map((charger, index) => ({
//           id: index + 1, // Assigning a unique id to each charger
//           ...charger,
//         }));
//         setChargers(chargersWithId);
//       } catch (error) {
//         console.error('Error fetching chargers:', error);
//       }
//     };

//     fetchChargers();
//   }, []);

//   const columns = [
//     {
//       field: "location",
//       headerName: "Location",
//       flex: 1,
//       cellClassName: "name-column--cell",
//     },
//     {
//       field: "ports",
//       headerName: "Number of Ports",
//       flex: 1,
//     },
//     {
//       field: "capacity",
//       headerName: "Voltage per Port",
//       flex: 1,
//     }
//   ];

//   return (
//     <Box m="20px">
//       <Header
//         title="Charging Points"
//         subtitle="Charging Point Locations and Ports"
//       />
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
//           // "& .MuiDataGrid-footerContainer": {
//           //   borderTop: "none",
//           //   backgroundColor: colors.blueAccent[700],
//           // },
//           // "& .MuiCheckbox-root": {
//           //   color: `${colors.greenAccent[200]} !important`,
//           // },
//           // "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//           //   color: `${colors.grey[100]} !important`,
//           // },
//         }}
//       >
//         <DataGrid
//           rows={chargers}
//           columns={columns}
//           components={{ Toolbar: GridToolbar }}
//         />
//       </Box>
//     </Box>
//   );
// };

// export default Chargers;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Chargers = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [chargers, setChargers] = useState([]);

  useEffect(() => {
    const fetchChargers = async () => {
      try {
        const response = await axios.get('https://newbackend-jb1f.onrender.com/api/chargers'); // Modified endpoint URL
        setChargers(response.data);
      } catch (error) {
        console.error('Error fetching chargers:', error);
      }
    };

    fetchChargers();
  }, []);

  const columns = [
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "ports",
      headerName: "Number of Ports",
      flex: 1,
    },
    {
      field: "capacity",
      headerName: "Voltage per Port",
      flex: 1,
    }
  ];

  return (
    <Box m="20px">
      <Header
        title="Charging Points"
        subtitle="Charging Point Locations and Ports"
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
          rows={chargers}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Chargers;
