import './App.css'
import PostForm from './components/PostForm/PostForm'
import HomePage from './pages/HomePage/HomePage'
// import PostList from './components/PostList/PostList'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import PostPage from './pages/PostPage/PostPage'
import Dashboard from './pages/Dashboard/Dashboard'
import PostEditPage from './pages/PostEditPage/PostEditPage'
function App() {

  return (
    <Router>
      <Nav />
      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<PostForm />} path='/add-post' />
        <Route element={<PostPage />} path='/post/:id' />
        <Route element={<PostEditPage />} path='/edit/:id' />
        <Route element={<Dashboard />} path='/dashboard' />
      </Routes>
    </Router>
  )
}

export default App
