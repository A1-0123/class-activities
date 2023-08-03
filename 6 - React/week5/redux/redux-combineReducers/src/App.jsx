import './App.css'
import PostForm from './components/PostForm/PostForm'
import HomePage from './pages/HomePage/HomePage'
// import PostList from './components/PostList/PostList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import PostPage from './pages/PostPage/PostPage'
import Dashboard from './pages/Dashboard/Dashboard'
import PostEditPage from './pages/PostEditPage/PostEditPage'
import CommentForm from './components/CommentForm/CommentForm'
import CommentEditPage from './pages/CommentEditPage/CommentEditPage'

function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<PostForm />} path='/add-post' />
        <Route element={<CommentForm />} path='/add-comment' />
        <Route element={<PostPage />} path='/post/:id' />
        <Route element={<PostEditPage />} path='/edit-post/:id' />
        <Route element={<CommentEditPage />} path='/edit-comment/:id' />
        <Route element={<Dashboard />} path='/dashboard' />
      </Routes>
    </Router>
  )
}

export default App
