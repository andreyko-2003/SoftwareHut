import * as React from 'react';
// Components
import Router from './Router'
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
// MUI Elements
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
// MUI Icons
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

import { getSidebar } from '../functions/sidebar';


function App() {
  const [sidebar, setSidebar] = React.useState([]);

  React.useEffect(() => {
    async function fetchPost() {
      try {
        const bar = await getSidebar();
        setSidebar(bar[0]);
      } catch (err) {
        console.log(err);
      } 
    }
    fetchPost();
  }, []);

  const social = [
    { name: 'GitHub', icon: GitHubIcon, link: sidebar.github },
    { name: 'Facebook', icon: FacebookIcon, link: sidebar.facebook },
    { name: 'Instagram', icon: InstagramIcon, link: sidebar.instagram },
  ]

  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog" />
        <Router />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          social={social}
        />
      </Container>
      <Footer title="НПП Прмэкс" description=""/>
    </ThemeProvider>
  );
}
export default App;
