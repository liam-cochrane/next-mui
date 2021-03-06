import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ProTip from "../src/components/pro-tip";
import Link from "../src/components/link";
import Layout from "../src/components/layout";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4, height: 1000 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v5 example
        </Typography>
        <Button variant="contained" component={Link} noLinkStyle href="/">
          Go to the main page
        </Button>
        <ProTip />
      </Box>
    </Container>
  );
}

About.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
