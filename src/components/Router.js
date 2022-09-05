import PostsPage from './PostsPage';
import PostPage from './PostPage';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PostsPage />} />
        <Route path='/:id' element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
