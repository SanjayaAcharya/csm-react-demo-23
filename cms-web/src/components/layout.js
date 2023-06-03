import { Outlet } from "react-router-dom";
import SideMenu from "./sideMenu";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { Container, Grid } from "@mui/material";

const Layout = () => {

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));
  return (
    <Container>
        <Grid container spacing={2}>
            <Grid item xs={4}>
                <Item>   
                    <SideMenu />
                </Item>
            </Grid>
            <Grid item xs={8}>
                <Outlet />
            </Grid>
        </Grid>
    </Container>
  );
};

export default Layout;
