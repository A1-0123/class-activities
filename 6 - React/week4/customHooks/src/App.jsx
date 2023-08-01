import './App.css'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm';
import DisplayData from './components/DisplayData';
import DisplayCharacters from './components/DisplayCharacters';
import CustomButton from './components/CustomButton';
import Counter from './components/Counter';

function App() {

  return (
    <>
      {/* <LoginForm /> */}
      {/* <RegisterForm /> */}
      {/* <DisplayData /> */}
      {/* <DisplayCharacters /> */}
      <CustomButton />
      <Counter name="Maiko" />
    </>
  )
}

export default App
