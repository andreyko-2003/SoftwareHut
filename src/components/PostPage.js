import * as React from 'react';
import Loader from './Loader';
import {useParams} from 'react-router-dom';
import {getPostById} from '../functions/getPosts';
import months from '../functions/months';
import '../styles/postPage.css'

function PostPage() {
  const params = useParams();
  const [post, setPost] = React.useState([]);
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const date = new Date(post.date);

  React.useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const res = await getPostById(params.id);
        setPost(res[0]);
        setImages(res[0].image);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [params.id]);

  return (
    <div className='post'>
      {
        loading
          ? <Loader />
          :
          <main>
            <div className='postHead'><h1>{post.title}</h1><span><i>{date.getFullYear()} {months[date.getMonth()]} {date.getDate()}</i></span></div>
            <div className='article'><pre>{post.description}</pre></div>
            <div className='postImg'>
            {
              images.map(image => (
                <img key={image.url} src={image.url} alt={post.imageLabel} width='200px'/>
              ))
            }
            </div>
          </main>
      }
    </div>
  );
}

export default PostPage;
