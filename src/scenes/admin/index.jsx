import Header from "../../components/Header";
import { Box} from "@mui/material";

const Admin = () => {
    return (
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="ADMIN PANEL" subtitle="Welcome to the admin panel"/>
        </Box>
      </Box>
    );
};

export default Admin;
