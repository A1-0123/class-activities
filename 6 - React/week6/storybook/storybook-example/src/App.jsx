import './App.css'
import Button from './components/Button/Button'
import NavigationBar from './components/NavigationBar/NavigationBar'
function App() {

  return (
    <>
    <NavigationBar
  isLoggedIn
  theme="dark"
/>
      <Button label={"hello world"} />
    </>
  )
}

export default App
