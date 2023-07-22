import { Helmet } from 'react-helmet-async';
// @mui
import { Container, Typography } from '@mui/material';
export default function ProductsPage() {

  return (
    <>
      <Helmet>
        <title> Map | Bid2Hire </title>
      </Helmet>

      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Map
        </Typography>
      </Container>
    </>
  );
}
