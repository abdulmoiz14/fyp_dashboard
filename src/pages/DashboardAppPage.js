import { Helmet } from 'react-helmet-async';
import { Grid, Container,  Typography } from '@mui/material';

import ProfileCard from '../components/Profile-card/ProfileCard';

export default function DashboardAppPage() {
  return (
    <>
      <Helmet>
        <title> Bidding | Bid2Hire </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome jaydon
        </Typography>
        <Grid container justifyContent="space-evenly" alignItems="center" spacing={{ xs: 2, md: 3 }}  columns={{ xs: 4, sm: 8, md: 12, lg:12}}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item style={{paddingTop:"10px"}} Spacing={5} xs={12} sm={12} md={6} lg={6} key={index}>
            <ProfileCard />
          </Grid>
        ))}
        </Grid>
      </Container>
    </>
  );
}
