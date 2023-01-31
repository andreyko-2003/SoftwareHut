import PostsPage from './PostsPage';
import PostPage from './PostPage';
import Page404 from './Page404';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/:url' element={<PostPage />} />
        <Route path='/404' element={<Page404 />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
