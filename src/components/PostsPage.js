import * as React from 'react';
// Components
import Grid from '@mui/material/Grid';
import FeaturedPost from './FeaturedPost';
import MainFeaturedPost from './MainFeaturedPost';
import Loader from './Loader'
// Posts
import {getPosts} from '../functions/getPosts';

function PostsPage() {
  const [posts, setPosts] = React.useState([]);
  const [firstPost, setFirstPost] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      try {
        const res = await getPosts();
        setFirstPost(res[0])
        setPosts(res.slice(1));
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  return (
    <div>
    {
      loading
        ?
          <Loader />
        :
          <main>
            <MainFeaturedPost post={firstPost} />
            <Grid container spacing={5} sx={{ mt: 3 }}>
            {
              posts.map(post => (
                <FeaturedPost key={post.title} post={post} />
              ))
            }
            </Grid>
          </main>
    }
    </div>
  );
}

export default PostsPage;
