import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useNavigate} from 'react-router-dom'

function MainFeaturedPost(props) {
  const { post } = props;
  const url = '/' + post.url;
  const navigate = useNavigate();

  return (
    <Paper onClick={() => navigate(url)}
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageLabel} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }} >
            <Typography component="h2" variant="h4" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {post.description}...
            </Typography>
            <Typography variant="subtitle1">
              Continue reading...
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

MainFeaturedPost.propTypes = {
  post:
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      imageLabel: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired
};

export default MainFeaturedPost;
